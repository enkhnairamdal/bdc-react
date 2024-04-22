
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
			
			fullScreen: false,
			fpsLimit: 60,
			
			interactivity: {
				
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "grab",
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 4,
					},
					grab: {
						distance: 100,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#33D4FF",
				},
				links: {
					color: "#33D4FF",
					distance: 120,
					enable: true,
					opacity: 1,
					width: 0.5	,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 600,
					},
					value: 100,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 2, max: 2 },
				},
			},
			detectRetina: true,
		}}
	/>
    )
}