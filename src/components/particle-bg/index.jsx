import styles from "./particle-style.css"
import Particles from "react-tsparticles"
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"

export default function ParticlesBg (){
    const particlesInit = useCallback(async engine => {
        console.log(engine);
       
        await loadSlim(engine);
    }, []);
	const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    return(
        <Particles
		id="tsparticles"
		init={particlesInit}
		loaded={particlesLoaded}
		options={{
			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#33DDFF",
				},
				links: {
					color: "#33DDFF",
					distance: 120,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 3,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 550,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}}
	/>
    )
}