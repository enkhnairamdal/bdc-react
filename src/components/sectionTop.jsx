import ParticlesBg from "./particle-bg";


export function SectionTop (){ 
	
	return(
		<div>
			
		<section className="home-banner-2 flex-align" id="tsparticles" style={{position:"relative"}} >
		<div style={{position:"absolute" ,width: "100%",  height: "100%" , top: "0px", top: "0px", zIndex: 1 , opacity: 0.5}}><ParticlesBg id="tsparticles" /></div>
			<div className="container"   >
				
			<div className="ts-background" data-bg-color="#141a3a" data-bg-parallax="scroll" data-bg-parallax-speed="3">
                <div className="ts-background-image ts-svg ts-z-index__1 ts-background-position-left d-none d-md-block" data-bg-image="assets/svg/shape-mask.svg" data-animate="ts-fadeInLeft"></div>
                <div className="ts-background-image ts-parallax-element" data-bg-image="assets/img/hero-img-2.jpg" data-animate="ts-zoomOutIn"></div>
            </div>
				<div className="row position-r z-index-2">
			
					<div className="col-md-6 flex-align wow fadeInLeft">
						<div className="banner-tow-content">
							<h1 className="banner-heading-tow">Биткойн олборлолт хийх боломж <br/><span>BDC Токен</span></h1>
							<p className="banner-des"> 
								<a href="https://bitfury.com" style={{color: 'darkorange' ,fontWeight: 900}} target="_blank">"Bitfury"</a> болон <span> </span>
								<a href="https://mdki.mn" style={{color: '#07689F', fontWeight: 550}} target="_blank">"Эм Ди Кэй Ай"</a> <span> </span>
								компани нь  бага цахилгаан зарцуулан, өндөр хүчин чадал бүхий төхөөрөмжөөр “Биткойн” олборлох боломжийг <span> </span>
								<a style={{color: "#07689F" ,fontWeight: 900}}>BDC</a>
								<span> </span>токеноор дамжуулан хүргэж байна.   </p>
								<div className="btn-2" style={{marginTop:"30px", display:"flex", justifyContent:"center"}}>
								<a  
								style={{color:"white"}}	
								href="https://www.f2pool.com/mining-user/875c91232dbb6298ffe94df4a63ca321?user_name=ca1ilk"
								target="_blank">Биткойн олборлолтын үйл явцтай танилцах</a>
								</div>
					
				
						</div>
					</div>
					
					<div className="col-md-6 wow fadeInRight">
					
						<div className="coin-counter">
							<h2 className="coin-head">Litepaper-мон хурангуй</h2>
							<ul className="coins-counter-loop">
								<li>
									<span id="days">0</span>
									<label className="coin-day">Days</label>
								</li>
								<li>
									<span id="hours">00</span>
									<label className="coin-day">hours</label>
								</li>
								<li>
									<span id="minutes">00</span>
									<label className="coin-day">minutes</label>
								</li>
								<li>
									<span id="seconds">00</span>
									<label className="coin-day">seconds</label>
								</li>
							</ul>
							<div className="coins-button-area" style={{width:'100%' ,display: 'flex', justifyContent: 'center'}}>
								
								<a href="files/BDC_Litepaper_mon_ver02.pdf" target="_blank" className="btn-2">Litepaper</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</section>
		</div>
    )
}