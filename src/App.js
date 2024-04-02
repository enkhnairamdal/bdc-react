import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <body>
	<header className="transition">
		<div className="container">
			<div className="row flex-align">
				<div className="col-lg-2 col-md-3 col-8">
					<div className="logo">
            <a href="index.html"><img src="images/logo-bdc-2.png" alt="BDC"/></a>
					</div>
				</div>
				<div className="col-lg-10 col-md-9 col-4 text-right">
					<div className="menu-toggle" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
					</div>
					<div className="menu">
						<ul className="d-inline-block open_close">
							<li className="nav-link ts-scroll"><a href="#section-about-move">About</a></li>
							<li className="nav-link ts-scroll"><a href="#section-IEO-move">IEO</a></li>
							<li className="nav-link ts-scroll"><a href="#section-Global-move">Global Partners</a></li>
							<li className="nav-link ts-scroll"><a href="#section-Road-move">Roadmap</a></li>
							<li className="nav-link ts-scroll"><a href="#section-News-move">News</a></li>
							<li className="mega-menu">
								<span className="opener plus"></span>
								<a href="#">Whitepaper</a>
								<ul className="transition">
									
									<li><a href="files/BDC_WhitePaper.pdf" target="_blank" className="nav-link"><img src="images/file-pdf.svg" style={{width: '15px', height: '15px'}} alt="pdf"/>Whitepaper</a></li>
								</ul>
							</li>
							<li className="nav-link ts-scroll"><a href="#section-News-move">Log In</a></li>
							<li className="nav-link ts-scroll"><a href="#section-News-move">Sign Up</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>
    {/* ********** */}

	
    <div id="fb-root"></div>

  
    <div id="fb-customer-chat" className="fb-customerchat"></div>
	
    {/* ************* */}
      
		<section className="home-banner-2 flex-align" id="particle-canvas">
			<div className="container">
				<div className="row position-r z-index-2">
					<div className="col-md-6 flex-align wow fadeInLeft">
						<div className="banner-tow-content">
							<h1 className="banner-heading-tow">Биткойн олборлолт хийх боломж <br/><span>BDC Токен</span></h1>
							<p className="banner-des"> 
								<a href="https://bitfury.com" style={{color: 'darkorange' ,fontWeight: 900}} target="_blank">Bitfury</a> болон
								<a href="https://mdki.mn" style={{color: '#07689F', fontWeight: 900}} target="_blank">MDKI</a>
								компани нь  бага цахилгаан зарцуулан, өндөр хүчин чадал бүхий төхөөрөмжөөр “Биткойн” олборлох боломжийг  
								<a style={{color: "#07689F" ,fontWeight: 900}}>BDC</a>
								токеноор дамжуулан хүргэж байна.   </p>
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
      {/* ********** */}
        <section className="about-main lightskyblue ptb-hero-top" id="section-about-move">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 flex-align mb-r-30 wow fadeInLeft">
						<div className="work-box">
							<h3 className="work-process-title pb-25 about-items-p">Койн гаргагч MDKI компанийн тухай </h3>
							<p className="work-des grey">MDKI компани нь анх 2008 онд үл хөдлөх хөрөнгө, барилгын чиглэлээр үйл ажиллагаа явуулж эхэлсэн. Улмаар 2016 онд DASystem ХХК-тай Fintech, санхүүгийн чиглэлээр  хамтран ажиллаж эхэлсэнээр биткойн олборлолт, хөрөнгө оруулалт, блокчайн салбаруудад ОУ-ын түвшинд төсөл хөтөлбөрүүд амжилттай хэрэгжүүлэн ажиллаж  байна. <br/> Алсын хараа: ОУ-ын хамтрагч түншүүдтэйгээ хамтран, хэрэглэгч, харилцагчдадаа аюулгүй, ил тод хөрөнгө оруулалтын платформд дэлхийн хаанаас ч оролцох   боломжийг олгож, mineral санхүүгийн шинэ эрин үеийг бий болгох юм.  </p>
							<a href="https://www.mdki.mn" target="_blank" className="link-of-company">Дэлгэрэнгүй</a>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 text-center flex-align justify-center wow fadeInRight">
						<div className="work-box">
							<img src="images/about-mdki-1.jpg" alt="Work Process"/>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section className="about-main lightskyblue ptb-hero-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 text-center flex-align justify-center order-r-2 wow fadeInLeft">
						<div className="work-box">
							<img src="images/about-bitfury-2.jpg" alt="Work Process"/>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 flex-align mb-r-30 order-r-1 wow fadeInRight">
						<div className="work-box">
							<h3 className="work-process-title pb-25">Биткойн олборлогч Bitfury компанийн тухай</h3>
							<p className="work-des grey about-items-p">Уг компани анх 2011 онд үүсгэн байгуулагдсан бөгөөд бага цахилгаан зарцуулан, өндөр хүчин чадлаар биткойн олборлогч Block Box үйлдвэрлэн гаргадаг. Энэ чиглэлийн ижил төстэй үйлдвэрлэгчдээсээ чанар, технологи, найдвартай байдлаараа тэргүүлэгч компани юм. 
								<ul>
									<li>Онцлог талууд:</li>
									<li>• Нэгж Block Box Ac-ны хүчин чадал: 40 PH/S</li>
									<li>• Цахилгаан эрчим хүчний хэрэглээ: 1.135MW</li>
									<li>• Хэмжээ: 40 тоннын контайнер</li>
									<li>• Эд анги нэг бүрийг 24цагаар хянаж эвдрэл гарахад шууд засварлана</li>
									<li>• Эд анги болон Chip-ийг солих замаар шинэчлэх боломжтой</li>
								</ul>
								</p>
							<a href="https://www.bitfury.com" target="_blank" className="link-of-company">Дэлгэрэнгүй</a>
						</div>
					</div>
				</div>
			</div>
		</section>
      
        <section className="feature-part-2 pt-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 mb-30 wow fadeInUp">
						<div className="feature-box-2">
							<div className="frontend">
								<div className="feature-icon-2">
									<img src="images/Check2.jpg" className="icon-img" alt="Safe & Secure"/>
								</div>
								<div className="feature-content">
									<h3 className="feature-title-2">Найдвартай, туршлагатай баг</h3>
								</div>
								<div className="clear"></div>
							</div>
							<div className="backend">
								<p>Найдвартай, туршлагатай баг</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mb-30 wow fadeInUp">
						<div className="feature-box-2">
							<div className="frontend">
								<div className="feature-icon-2">
									<img src="images/Chart2.jpg" className="icon-img" alt="Early Bonus"/>
								</div>
								<div className="feature-content">
									<h3 className="feature-title-2">Дэлхийн шилдэг BTC олборлогч BlockBox AC</h3>
								</div>
								<div className="clear"></div>
							</div>
							<div className="backend">
								<p>Дэлхийн шилдэг BTC олборлогч BlockBox AC</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mb-30 wow fadeInUp">
						<div className="feature-box-2">
							<div className="frontend">
								<div className="feature-icon-2">
									<img src="images/BTC2.jpg" className="icon-img" alt="Univarsal Access"/>
								</div>
								<div className="feature-content">
									<h3 className="feature-title-2">Урт болон богино хугацааны өгөөж</h3>
								</div>
								<div className="clear"></div>
							</div>
							<div className="backend">
								<p>Урт болон богино хугацааны өгөөж</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
     {/* ********* */}
        <section className="token-sele ptb-ieo-one" id="section-IEO-move">
			<div className="container">
				
				<div className="row">
					<div className="col-lg-6 col-md-6 flex-align order-r-1 wow fadeInLeft">
						<div className="information-token w-100 mb-30">
							<h2 className="information-token-head">Токены тухай</h2>
							<ul>
								<li><label>Токены нэр:</label> <span>Blockchain Data Center - BDC</span></li>
								<li><label>2догч зах зээлд(Listing)тавигдах үнэ:</label> <span>100 MNT</span></li>
								<li><label>Нийт IEO хийх токены тоо ширхэг:</label> <span>200.000.000</span></li>
								<li><label>Токены стандарт:</label> <span>KLAYTN</span></li>
							</ul>
							<div className="clear"></div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 order-r-2 wow fadeInRight">
					
						<div className="coin-counter">
							<h2 className="coin-head">Whitepaper-тэй танилцах</h2>
							<ul className="coins-counter-loop-two">
								<li>
									<span id="days2">0</span>
									<label className="coin-day">Days</label>
								</li>
								<li>
									<span id="hours2">00</span>
									<label className="coin-day">hours</label>
								</li>
								<li>
									<span id="minutes2">00</span>
									<label className="coin-day">minutes</label>
								</li>
								<li>
									<span id="seconds2">00</span>
									<label className="coin-day">seconds</label>
								</li>
							</ul>
							<div className="coins-button-area" style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
								<a href="files/BDC_Whitepaper_Eng_ver01.pdf" target="_blank" className="btn-2">Whitepaper</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        
        <section className="work-part lightskyblue ptb-ieo-two">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 text-center flex-align justify-center wow fadeInLeft">
						<div className="work-box">
							<div className="work-box-bg"></div>
							<img src="images/bdc-ico-prgoress-4.png" className="rotation-img" alt="Work Process"/>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 flex-align wow fadeInRight">
						<div className="work-box">
							<h3 className="work-process-title pb-25">BDC токений өгөөж:</h3>
							<p className="work-des pb-20"> 
								BDC койн нь сар тутамд олборлолтын 30%-ийг эзэмшигчдэд (BDC HOLDER) биткойноор хувиарлан өгч, 30%-иар Блокчейн дата төвийн өргөжүүлэлт, 20%-иар нь өөрсдийн токеныг биржээс худалдан авч устгалд оруулна. Харин  20% нь “Block box  AC” төхөөрөмжийн засвар, Chip-upgrade, сайжруулалтанд зарцуулагдаж, компанийн ашиг болох юм.</p>
							<ul className="check-list">
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>Сар бүр 1 BDC тутамд 1 сатоши тараана.  Харин дата төв баригдаж, ажиллагаанд орсноос эхлэн биткойн олборлолтын 30%-ийг хувиарлана</p></li>
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>MBDC - 1$/доллартай тэнцэх бөгөөд зөвхөн цаашид хэрэгжих төслүүдэд хөрөнгө оруулалт хийх байдлаар ашиглана</p></li>
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>Ногдол ашиг- Цаашид хэрэгжих төслүүд, хамтрагч компаниудын тодорхой ашгаас сар бүр токеноо staking хийсэн хэрэглэгчдэдээ тараана</p></li>
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>BDC token market fee 10%</p></li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
      {/* *********** */}
		<section className="blog-part ptd-blog" id="section-News-move">
			<div className="container">
				<div className="blog-slider owl-carousel">
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="https://www.facebook.com/BDCtoken/" target="_blank"><img src="images/car-9.jpg" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
						</div>
					</div>
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="https://www.facebook.com/BDCtoken/" target="_blank"><img src="images/car-10.jpg" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
						</div>
					</div>
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="https://www.facebook.com/BDCtoken/" target="_blank"><img src="images/car-11.jpg" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
						</div>
					</div>
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="https://www.facebook.com/BDCtoken/" target="_blank"><img src="images/car-12.jpg" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
						</div>
					</div>
				</div>
			</div>
		</section>
	
        <section className="token-sele ptb-ieo-three">
			<div className="container">
                <div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<h2 className="heading-title">Токен экономи болон хэш зарцуулалт</h2>
							<p className="heading-des">Тогтвортой өсөх токены эзэмшигч болж, сар бүр биткойн ногдол ашиг хүртэх бөгөөд энэ нь урт болон богино хугацаанд өгөөж хүртэх давуу талтай.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 wow fadeInRight mb-50">
						<div className="token-distribut text-center">
							<img src="images/chart-7.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInRight mb-50">
						<div className="token-distribut text-center">
							<img src="images/chart-8.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInRight mb-50">
						<div className="token-distribut text-center">
							<img src="images/chart-9.jpg" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
      {/* ********* */}
    <section className="team-part lightskyblue bg-pattern pt-65 pb-65" id="section-Global-move">
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-55">
							<h2 className="heading-title">Глобал түншүүд</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 pb-25 wow fadeInUp">
						<div className="team-box advisors text-center">
							<div className="team-img">
								<a href="https://bitfury.com/" target="_blank"><img  src="images/glo-1.png" alt="team member"/></a>
							</div>
							<div className="team-des">
								<p className="member-des">Дэлхийн шилдэг крипто олборлолт болон блокчейн техник программ хангамж</p>
							</div>
						</div>
					</div>
                    <div className="col-md-3 pb-25 wow fadeInUp">
						<div className="team-box advisors text-center">
							<div id="team-img" className="team-img">
								<a href="https://hexlant.com/" target="_blank"><img src="images/glo-5.png" alt="team member"/></a>
							</div>
							<div className="team-des">
								<p className="member-des">Программ хангамж болон custody үйлчилгээний шийдэл with Shinhan болон Nonghyup банк</p>
							</div>
						</div>
					</div>
                    <div className="col-md-3 pb-25 wow fadeInUp">
						<div className="team-box advisors text-center">
							<div className="team-img">
								<a href="https://delio.io/" target="_blank"><img src="images/glo-6.png" alt="team member"/></a>
							</div>
							<div className="team-des">
								<p className="member-des">Солонгос дахь криптовалют дээр суурилсан хамгийн том зээл болон хадгаламжийн үйлчилгээ</p>
							</div>
						</div>
					</div>
					<div className="col-md-3 pb-25 wow fadeInUp">
						<div className="team-box advisors text-center">
							<div className="team-img">
								<a className="partners-img" href="https://capex.mn/" target="_blank"><img src="images/glo-capex.png" alt="team member"/></a>
							</div>
							<div className="team-des">
								<p className="member-des">Дэлхий зах зээлд нэвтрэх төвлөрсөн, дижитал хөрөнгийн бирж</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
       {/* ********** */}
		<section className="roadmap-main ptb-road" id="section-Road-move">
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pt-15 pb-65">
							<h2 className="heading-title">Бидний замнал</h2>
						</div>
					</div>
					<div className="col-md-12">
						<div className="roadmap-main-graph">
							<div className="roadmap-center-line"></div>
							<div className="roadmap-chart">
								<div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInLeft">
											<h2 className="roadmap-date">2008 он</h2>
											<p className="roadmap-box-detail">“MDKI LLC” байгуулагдсан &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
								<div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInRight">
											<h2 className="roadmap-date">2020 он</h2>
											<p className="roadmap-box-detail">“Bitfury x MDKI” хамтын ажиллагааны гэрээ байгуулагдсан</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
								<div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInLeft">
											<h2 className="roadmap-date">2020 он</h2>
											<p className="roadmap-box-detail">UHP токен Listing-хийж Казакстан улсад “Блокчайн олборлох дата төв”байгуулалтын үйл ажиллагаа эхэлсэн</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
								<div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInRight">
											<h2 className="roadmap-date">2020 он</h2>
											<p className="roadmap-box-detail">Казакстан улс дах “Блокчайн олборлох дата төв” байгуулж 109 PH/S хүчин чадлаар биткойн олборлож эхлэв</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
								<div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInLeft">
											<h2 className="roadmap-date">2021 он</h2>
											<p className="roadmap-box-detail">Канад улсад 160 PH/S хүчин чадал “Блокчайн олборлох дата төв” байгуулах зорилгоор IEOхийж BDC токеныг олон нийтээд санал болгов</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
                                <div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInRight">
											<h2 className="roadmap-date">2021.12.27 - 2022.01.10</h2>
											<p className="roadmap-box-detail">Presale 1 Нийт токены 30%-ийг 70₮-д</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
                                <div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInLeft">
											<h2 className="roadmap-date">2022 он 1 сар 14</h2>
											<p className="roadmap-box-detail">2догч зах зээлд (Listing) тавигдана &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
								<div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInRight">
											<h2 className="roadmap-date">2022 он 11 сар </h2>
											<p className="roadmap-box-detail">Канад улсад 80 PH/S хүчин чадал “Блокчайн олборлох дата төв” байгуулалтын үйл ажиллагаа эхлэв</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
								<div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInLeft">
											<h2 className="roadmap-date">2022 он 2 сар</h2>
											<p className="roadmap-box-detail">Staking порцесоор дамжуулан сар бүр 1 BDC = 1 Satoshi олгох</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
								<div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInRight">
											<h2 className="roadmap-date">2022 он 11 сар</h2>
											<p className="roadmap-box-detail">Канад улс дах “Блокчайн олборлох дата төв” байгуулж 80 PH/S хүчин чадлаар биткойн олборлож эхлэв</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
								<div className="roadmap-content-box">
									<div className="roadmap-main-content">
										<div className="roadmap-small-round"></div>
										<div className="roadmap-animated wow fadeInLeft">
											<h2 className="roadmap-date">2023 он 11 сар</h2>
											<p className="roadmap-box-detail" style={{width: "340px"}}>Блокчейн дата төвийн өргөлт</p>
										</div>
									</div>
									<div className="clear"></div>
								</div>
							</div>
						</div>

						<div className="main-roadmap">
							<div className="row">
								<div className="col-md-12">
									<div className="h-border wow fadeInLeft"></div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="roadmap-slider owl-carousel">
										<div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2008 он</div>
													<p className="roadmap-des text-center">“MDKI LLC” байгуулагдсан</p>
												</div>
											</div>
										</div>
										<div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2020 он </div>
													<p className="roadmap-des text-center">“Bitfury x MDKI” хамтын ажиллагааны гэрээ байгуулагдсан</p>
												</div>
											</div>
										</div>
										<div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2020 он</div>
													<p className="roadmap-des text-center">UHP токен Listing-хийж Казакстан улсад “Блокчайн олборлох дата төв”байгуулалтын үйл ажиллагаа эхэлсэн</p>
												</div>
											</div>
										</div>
										<div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2021 он</div>
													<p className="roadmap-des text-center">Канад улсад 160 PH/S хүчин чадал “Блокчайн олборлох дата төв” байгуулах зорилгоор IEOхийж BDC токеныг олон нийтээд санал болгов</p>
												</div>
											</div>
										</div>
                                        <div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2021.12.27 - 2022.01.10</div>
													<p className="roadmap-des text-center">Presale 1 Нийт токены 30%-ийг 70₮-д</p>
												</div>
											</div>
										</div>
                                        <div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2022 он 1 сар 14</div>
													<p className="roadmap-des text-center">2догч зах зээлд (Listing) тавигдана</p>
												</div>
											</div>
										</div>
                                        <div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2022 он 11 сар </div>
													<p className="roadmap-des text-center">Канад улсад 80 PH/S хүчин чадал “Блокчайн олборлох дата төв” байгуулалтын үйл ажиллагаа эхлэв</p>
												</div>
											</div>
										</div>
										<div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2022 он 2 сар</div>
													<p className="roadmap-des text-center">Staking порцесоор дамжуулан сар бүр 1 BDC = 1 Satoshi олгох</p>
												</div>
											</div>
										</div>
										<div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2022 он 10 сар</div>
													<p className="roadmap-des text-center">Канад улс дах “Блокчайн олборлох дата төв” байгуулж 80 PH/S хүчин чадлаар биткойн олборлож эхлэв</p>
												</div>
											</div>
										</div>
										<div className="roadmap wow fadeInLeft">
											<div className="roadmap-box text-center">
												<div className="map-graphic">
													<div className="small-round"><span></span></div>
													<div className="v-row"></div>
												</div>
												<div className="roadmap-detail-box">
													<div className="date-title">2023 он 10 сар</div>
													<p className="roadmap-des text-center">Блокчейн дата төвийн өргөлт</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> 
       {/* ********* */}
    <section className="blog-part ptd-blog" id="section-News-move">
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<h2 className="heading-title">Мэдээ</h2>
						</div>
					</div>
				</div>
				<div className="blog-slider owl-carousel">
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="https://ikon.mn/n/2ev9/" target="_blank"><img src="images/icon.mn.png" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
							<a href="https://ikon.mn/n/2ev9/" target="_blank" className="blog-title">Bitfury групп  MDKI .. </a>
							<ul className="blog-date">
								<li>December 20,2021</li>
								<li>by ikon.mn</li>
							</ul>
							<p className="blog-des">“Эм Ди Кэй Ай” компани нь хөрөнгө оруулалт, биотехнологи, үл хөдлөх хөрөнгө, финтекийн салбарт 2008 оноос хойш... </p>
							<a href="https://ikon.mn/n/2ev9/" target="_blank" className="read-more">Дэлгэрэнгүй</a>
						</div>
					</div>
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="https://www.facebook.com/Bdctoken/videos/626408911937036" target="_blank"><img src="images/news-eagle.jpg" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
							<a href="https://www.facebook.com/Bdctoken/videos/626408911937036" target="_blank" className="blog-title">БОДИТ БАЙДАЛ</a>
							<ul className="blog-date">
								<li>December 22,2021</li>
								<li>by Eagle TV</li>
							</ul>
							<p className="blog-des">Монгол улсын Криптовалютын зах зээлийн одоогийн байдалийн талаах...</p>
							<a href="https://ikon.mn/n/2ev9/" target="_blank" className="read-more">Дэлгэрэнгүй</a>
						</div>
					</div>
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="https://www.facebook.com/BDCblockbox/videos/4630097020401268" target="_blank"><img src="images/news-info.png" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
							<a href="https://www.facebook.com/BDCblockbox/videos/4630097020401268" target="_blank" className="blog-title">BDC token</a>
							<ul className="blog-date">
								<li>December 27,2021</li>
								<li>by MDKI</li>
							</ul>
							<p className="blog-des">MDKI компанийн гаргаж буй BDC токен танд ямар ашигтай вэ?</p>
							<a href="https://www.facebook.com/BDCblockbox/videos/4630097020401268" target="_blank" className="read-more">Дэлгэрэнгүй</a>
						</div>
					</div>
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="https://news.xopom.com/390877/" target="_blank"><img src="images/news-horom.jpg" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
							<a href="https://news.xopom.com/390877/" target="_blank" className="blog-title">BDC token</a>
							<ul className="blog-date">
								<li>January 2,2022</li>
								<li>by Хором</li>
							</ul>
							<p className="blog-des">MDKI компанийн гаргаж буй BDC токен танд ямар ашигтай вэ?</p>
							<a href="https://news.xopom.com/390877/" target="_blank" className="read-more">Дэлгэрэнгүй</a>
						</div>
					</div>
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="blog-detail.html" target="_blank"><img src="images/news-one.jpg" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
							<a href="blog-detail.html" target="_blank" className="blog-title">Биткойн олборлолт гэж вэ? </a>
							<ul className="blog-date">
								<li>December 14,2021</li>
								<li>by MDKI</li>
							</ul>
							<p className="blog-des">Биткойныг олборлоход маш их хүчин чадалтай компьютер болон... </p>
							<a href="blog-detail.html" target="_blank" className="read-more">Дэлгэрэнгүй</a>
						</div>
					</div>
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="blog-detail-two.html" target="_blank"><img src="images/news-2.jpg" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
							<a href="blog-detail-two.html" target="_blank" className="blog-title">Криптогийн талаар мэдэх хэрэгтэй зүйлс</a>
							<ul className="blog-date">
								<li>December 14,2021</li>
								<li>by MDKI</li>
							</ul>
							<p>Блокчайн технологи дээр тулгуурлан бүтээгдсэн, цахим орчинд тоон...  </p>
							<a href="blog-detail-two.html" target="_blank" className="read-more">Дэлгэрэнгүй</a>
						</div>
					</div>
					<div className="blog-box wow fadeInUp">
						<div className="blog-img mb-15">
							<a href="blog-detail-three.html" target="_blank"><img src="images/news-3-min.jpg" alt="blog"/></a>
						</div>
						<div className="blog-des-box">
							<a href="blog-detail-three.html" target="_blank" className="blog-title">Биткойн гэж юу вэ?</a>
							<ul className="blog-date">
								<li>December 14,2021</li>
								<li>by MDKI</li>
							</ul>
							<p>Энэ бүхэн анх 2008 оны арван нэгдүгээр сарын нэгэнд өөрийгөө Satoshi Naka... </p>
							<a href="blog-detail-three.html" target="_blank" className="read-more">Дэлгэрэнгүй</a>
						</div>
					</div>
				</div>
			</div>
		</section>
      {/* ******* */}
    <section className="faq-part-2 ptb-100" id="section-FAQ-move">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-heading text-center pb-65" >
							<h2 className="heading-title-2 pb-20"><span>Түгээмэл</span>&nbsp; асуулт хариулт</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<ul className="nav nav-tabs Frequently-tabs pb-55" id="myTab" role="tablist">
							<li>
							    <a className="active" data-toggle="tab" href="#general" role="tab">Бүгд</a>
							</li>
							<li>
							    <a data-toggle="tab" href="#ico" role="tab" >IEO</a>
							</li>
							<li>
							    <a data-toggle="tab" href="#Tokens" role="tab">Bitcoin & Satoshi</a>
							</li>
							<li>
							    <a data-toggle="tab" href="#client" role="tab">Mining & NFT</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="tab-content" id="myTabContent">
						  	<div className="tab-pane fade show active" id="general" role="tabpanel">
						  		<div className="row">
						  			<div className="col-lg-6 col-md-12">
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">Крипто валют гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p>Блокчайн технологи дээр тулгуурлан бүтээгдсэн, цахим орчинд тоон хэлбэрээр байршиж байдаг цахим вальют юм.  Мөн ямар нэг дундын зуучлагч хувь хүн, институт гэх зэрэг 3дагч гишүүнгүй байдгаараа онцлогтой. Криптог тодорхой хэмжээний лимиттэйгээр компьютер, тусгай зориулалтын төхөөрөмж ашиглан программ хангамжийн тусламжтайгаар олборлон эзэмшдэг.  Одоогоор 1200 орчим  криптовалют бүртгэгдэн ОУ-ын улсын арилжааны платформууд дээр арилжаалагдаж байна. Нийт зах зээлийн багтаамж 150 тэрбум орчим ам доллараар хэмжигдэж байгаа ба биткойн нийт зах зээлийн 48% орчмыг дангаар эзэлдэг.</p>
												</div>
						  				</div>
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">Биткойн гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p>Энэ бүхэн анх 2008 оны арван нэгдүгээр сарын нэгэнд өөрийгөө Satoshi Nakamoto гэж нэрлэсэн нэгэн программист нөхрөөс үүдэлтэй юм. Тэрээр анх биткойны санааг гаргаж, загварыг боловсруулж, эх кодыг бичжээ. Түүний анхны санаа нь аливаа засгийн газраас хараат бус хүн болгоны хэрэглэж болох аливаа шилжүүлэг хийхэд дундын банк эсвэл гуравдагч этгээдийг ашиглах шаардлагагүй, шимтгэл төлөхгүй (маш бага) тийм мөнгөн тэмдэгтийг бүтээхийг хүссэн гэж тайлбарлаж байгаа юм. Nakamoto-г хэн ч хараагүй, хэн ч түүнтэй ярилцаж байгаагүй, түүнийг бодит хүн гэдэгт итгэх хүн бараг байхгүй. Анх 2010 онд 10000 биткойноор пицца худалдан авч байсан бөгөөд өнөөдрийн ханшаар  650 сая доллар юм. . Нийт 21'000'000 биткойн зах зээлд гаргасан байгаа бөгөөд  2140 онд  олборлож дуусна гэж үздэг байна.  Бага хэмжээний Биткойныг хэрэглээнд millibitcoin (mBTC), microbitcoin (µBTC) мөн Satoshi гэх нэгжээр хэмжинэ.</p>
												</div>
						  				</div>
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">Bitcoin mining буюу олборлолт гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p><span style={{textDecoration: "italic"}}>Төхөөрөмжөөр олборлох:</span>  Төхөөрөмжөөр олборлох гэдэг нь тооцоолон бодох чадвартай бүхий л төхөөрөмжүүдийг хэлж буй хэлбэр. Танай гэрийн компьютер, лаптоп тэр бүү хэл таны утас ч биткойныг олборлох боломжтой. Гагцхүү маш удаан хурдаар олборлоно. Анх биткойныг ердийн суурин компьютероор олборлодог байсан бол одоо үед зөвхөн биткойн олборлоход зориулсан төхөөрөмж хүртэл бий болсон. Уг төхөөрөмж нь ердийн компьютероос хэдэн арав зуу сая дахин хурдан олборлодог. <br/> <span>Үүлэн олборлолт хийх (Cloud Mining):</span>  Үүлэн олборлолт гэдэг нь төхөөрөмж авахгүйгээр биткойн олборлохыг хэлдэг. Энэ нь үүлэн олборлолтын үйлчилгээ үзүүлдэг баталгаатай вэбсайтуудаас биткойн олборлох хурд түрээсэлж авдаг ба уг хурдаараа биткойн олборлодог юм. Уг вэб сайтуудын ард маш том дата центер маягийн биткойн олборлодог төхөөрөмжүүд байгаа бөгөөд үүнийхээ тодорхой хэсгийг танд түрээслүүлж буй хэлбэр юм.</p>
												</div>
						  				</div>
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">Биткойн эзэмшилт гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p>Биткойныг эзэмшинэ гэдэг нь хэрэглэгч биткойнуудаа тодорхой хаягтайгаар холбогдох эрх юм. Тэгэхээр төлөгч нь заавал хувийн түлхүүрийн харгалзаатайгаар дижитал гарын үсгийг шилжүүлэгдээ хэрэглэх ёстой гэсэн үг. Хувийн түлхүүрийн ямар ч мэдлэггүй бол шилжүүлгийн гарын үсэг зурагдахгүй тул үрэгдэх боломжгүй юм. Сүлжээ нь нийтийн түлхүүрийг хэрэглэсэн гарын үсгээр баталгаажуулдаг.
														<br/> Хэрвээ хувийн түлхүүрээ гээсэн тохиолдолд биткойны сүлжээнд ямар ч эзэмшигчийн нотолгоогүй болох бөгөөд ямар ч зохицуулах аргагүй болно, ингэснээр тухайн зооснууд нь хэрэглэх боломжгүйгээр алдагдах юм. Жишээлбэл 2013 онд нэгэн хэрэглэгч 7,500 биткойноо алдсан бөгөөд энэ тухайн үедээ 7,5 сая ам доллар гэсэн үг. Тэр залуу хувийн түлхүүрийг хадгалдаг хатуу дискээ алдсан юм.
													</p>
												</div>
						  				</div>
						  			</div>
						  			<div className="col-lg-6 col-md-12">
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">ICO болон IEO гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p> <span>ICO (Initial Coin Offering):</span>  ICO гэдэг нь шинээр криптовалют, цахим мөнгө гаргах, хөгжүүлэх зорилгоор олон нийтээс хөрөнгө оруулалт татах ажиллагааг хэлэх бөгөөд компанийн гаргаж буй койныг хүн бүр нээлттэй худалдан авах, солилцох боломжтой гэсэн үг. <br/> 
														<span>IEO (Initial Exchange Offering):</span> IEO гэдэг нь зөвхөн крипто биржээр л дамжуулан оролцох боломжтой, хөрөнгө босгох арга хэрэгсэл. Эзэмшигчид  мөн бирж дээрээ солилцох, арилжих боломжтойгоороо давуу талтай.
													</p>
												</div>
						  				</div>
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">NFT гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p>Энэ нь англиар Non-Fungible-Token гэсэн үг. Fungible гэдэг нь монгол хэлнээ буулгавал орлуулшгүй гэсэн үг бол token гэдэг нь ямарваа нэгэн бараа материалыг илэрхийлэхдээ ашигладаг үг юм. Тэгэхээр Non-fungible-token гэдэг нь энгийнээр орлуулшгүй, цор ганц зүйл гэсэн утга болж байна.</p>
												</div>
						  				</div>
										  <div className="accordion-faq-box mb-20">
											<a href="javascript:void(0)" className="accordion-faq-title">Сатоши гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p>Бага хэмжээний Биткойныг хэрэглээнд millibitcoin (mBTC), microbitcoin (µBTC) мөн Satoshi гэх нэгжээр хэмжинэ. Биткойны бүтээгчийг хүндэтгэн Биткойны хамгийн бага хэмжээг satoshi гэдэг ба энэ нь 0,00000001 биткойныг илэрхийлдэг</p>
												</div>
										</div>
						  			</div>
						  		</div>
						  	</div>
						  	<div className="tab-pane fade" id="ico" role="tabpanel">
						  		<div className="row">
						  			<div className="col-lg-6 col-md-12">
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">ICO болон IEO гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p> <span>ICO (Initial Coin Offering):</span>  ICO гэдэг нь шинээр криптовалют, цахим мөнгө гаргах, хөгжүүлэх зорилгоор олон нийтээс хөрөнгө оруулалт татах ажиллагааг хэлэх бөгөөд компанийн гаргаж буй койныг хүн бүр нээлттэй худалдан авах, солилцох боломжтой гэсэн үг. <br/> 
														<span>IEO (Initial Exchange Offering):</span> IEO гэдэг нь зөвхөн крипто биржээр л дамжуулан оролцох боломжтой, хөрөнгө босгох арга хэрэгсэл. Эзэмшигчид  мөн бирж дээрээ солилцох, арилжих боломжтойгоороо давуу талтай.
													</p>
												</div>
						  				</div>
										<div className="accordion-faq-box mb-20">
											<a href="javascript:void(0)" className="accordion-faq-title">Сатоши гэж юу вэ?</a>
											<div className="accordion-faq-content">
												<p>Бага хэмжээний Биткойныг хэрэглээнд millibitcoin (mBTC), microbitcoin (µBTC) мөн Satoshi гэх нэгжээр хэмжинэ. Биткойны бүтээгчийг хүндэтгэн Биткойны хамгийн бага хэмжээг satoshi гэдэг ба энэ нь 0,00000001 биткойныг илэрхийлдэг</p>
											</div>
										</div>
						  			</div>
						  			<div className="col-lg-6 col-md-12">
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">Bitcoin mining буюу олборлолт гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p> <span>Төхөөрөмжөөр олборлох:</span>  Төхөөрөмжөөр олборлох гэдэг нь тооцоолон бодох чадвартай бүхий л төхөөрөмжүүдийг хэлж буй хэлбэр. Танай гэрийн компьютер, лаптоп тэр бүү хэл таны утас ч биткойныг олборлох боломжтой. Гагцхүү маш удаан хурдаар олборлоно. Анх биткойныг ердийн суурин компьютероор олборлодог байсан бол одоо үед зөвхөн биткойн олборлоход зориулсан төхөөрөмж хүртэл бий болсон. Уг төхөөрөмж нь ердийн компьютероос хэдэн арав зуу сая дахин хурдан олборлодог.
														<br/> <span>Үүлэн олборлолт хийх (Cloud Mining):</span>  Үүлэн олборлолт гэдэг нь төхөөрөмж авахгүйгээр биткойн олборлохыг хэлдэг. Энэ нь үүлэн олборлолтын үйлчилгээ үзүүлдэг баталгаатай вэбсайтуудаас биткойн олборлох хурд түрээсэлж авдаг ба уг хурдаараа биткойн олборлодог юм. Уг вэб сайтуудын ард маш том дата центер маягийн биткойн олборлодог төхөөрөмжүүд байгаа бөгөөд үүнийхээ тодорхой хэсгийг танд түрээслүүлж буй хэлбэр юм.
													</p>
												</div>
						  				</div>
						  			</div>
						  		</div>
						  	</div>
						  	<div className="tab-pane fade" id="Tokens" role="tabpanel">
						  		<div className="row">
						  			<div className="col-lg-6 col-md-12">
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">Биткойн гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p>Энэ бүхэн анх 2008 оны арван нэгдүгээр сарын нэгэнд өөрийгөө Satoshi Nakamoto гэж нэрлэсэн нэгэн программист нөхрөөс үүдэлтэй юм. Тэрээр анх биткойны санааг гаргаж, загварыг боловсруулж, эх кодыг бичжээ. Түүний анхны санаа нь аливаа засгийн газраас хараат бус хүн болгоны хэрэглэж болох аливаа шилжүүлэг хийхэд дундын банк эсвэл гуравдагч этгээдийг ашиглах шаардлагагүй, шимтгэл төлөхгүй (маш бага) тийм мөнгөн тэмдэгтийг бүтээхийг хүссэн гэж тайлбарлаж байгаа юм. Nakamoto-г хэн ч хараагүй, хэн ч түүнтэй ярилцаж байгаагүй, түүнийг бодит хүн гэдэгт итгэх хүн бараг байхгүй. Анх 2010 онд 10000 биткойноор пицца худалдан авч байсан бөгөөд өнөөдрийн ханшаар  650 сая доллар юм. . Нийт 21'000'000 биткойн зах зээлд гаргасан байгаа бөгөөд  2140 онд  олборлож дуусна гэж үздэг байна.  Бага хэмжээний Биткойныг хэрэглээнд millibitcoin (mBTC), microbitcoin (µBTC) мөн Satoshi гэх нэгжээр хэмжинэ.</p>
												</div>
						  				</div>
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">Сатоши гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p>Бага хэмжээний Биткойныг хэрэглээнд millibitcoin (mBTC), microbitcoin (µBTC) мөн Satoshi гэх нэгжээр хэмжинэ. Биткойны бүтээгчийг хүндэтгэн Биткойны хамгийн бага хэмжээг satoshi гэдэг ба энэ нь 0,00000001 биткойныг илэрхийлдэг.</p>
												</div>
						  				</div>
										<div className="accordion-faq-box mb-20">
											<a href="javascript:void(0)" className="accordion-faq-title">Bitcoin mining буюу олборлолт гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p><span>Төхөөрөмжөөр олборлох:</span>Төхөөрөмжөөр олборлох гэдэг нь тооцоолон бодох чадвартай бүхий л төхөөрөмжүүдийг хэлж буй хэлбэр. Танай гэрийн компьютер, лаптоп тэр бүү хэл таны утас ч биткойныг олборлох боломжтой. Гагцхүү маш удаан хурдаар олборлоно. Анх биткойныг ердийн суурин компьютероор олборлодог байсан бол одоо үед зөвхөн биткойн олборлоход зориулсан төхөөрөмж хүртэл бий болсон. Уг төхөөрөмж нь ердийн компьютероос хэдэн арав зуу сая дахин хурдан олборлодог.
													<br/> <span>Үүлэн олборлолт хийх (Cloud Mining):</span>  Үүлэн олборлолт гэдэг нь төхөөрөмж авахгүйгээр биткойн олборлохыг хэлдэг. Энэ нь үүлэн олборлолтын үйлчилгээ үзүүлдэг баталгаатай вэбсайтуудаас биткойн олборлох хурд түрээсэлж авдаг ба уг хурдаараа биткойн олборлодог юм. Уг вэб сайтуудын ард маш том дата центер маягийн биткойн олборлодог төхөөрөмжүүд байгаа бөгөөд үүнийхээ тодорхой хэсгийг танд түрээслүүлж буй хэлбэр юм.
												</p>
												</div>
										</div>
						  			</div>
						  			<div className="col-lg-6 col-md-12">
										<div className="accordion-faq-box mb-20">
											<a href="javascript:void(0)" className="accordion-faq-title">Крипто валют гэж юу вэ?</a>
											<div className="accordion-faq-content">
												<p>Блокчайн технологи дээр тулгуурлан бүтээгдсэн, цахим орчинд тоон хэлбэрээр байршиж байдаг цахим вальют юм.  Мөн ямар нэг дундын зуучлагч хувь хүн, институт гэх зэрэг 3дагч гишүүнгүй байдгаараа онцлогтой. Криптог тодорхой хэмжээний лимиттэйгээр компьютер, тусгай зориулалтын төхөөрөмж ашиглан программ хангамжийн тусламжтайгаар олборлон эзэмшдэг.  Одоогоор 1200 орчим  криптовалют бүртгэгдэн ОУ-ын улсын арилжааны платформууд дээр арилжаалагдаж байна. Нийт зах зээлийн багтаамж 150 тэрбум орчим ам доллараар хэмжигдэж байгаа ба биткойн нийт зах зээлийн 48% орчмыг дангаар эзэлдэг.</p>
											</div>
										</div>
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">Биткойн эзэмшилт гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p>Биткойныг эзэмшинэ гэдэг нь хэрэглэгч биткойнуудаа тодорхой хаягтайгаар холбогдох эрх юм. Тэгэхээр төлөгч нь заавал хувийн түлхүүрийн харгалзаатайгаар дижитал гарын үсгийг шилжүүлэгдээ хэрэглэх ёстой гэсэн үг. Хувийн түлхүүрийн ямар ч мэдлэггүй бол шилжүүлгийн гарын үсэг зурагдахгүй тул үрэгдэх боломжгүй юм. Сүлжээ нь нийтийн түлхүүрийг хэрэглэсэн гарын үсгээр баталгаажуулдаг.
														<br/> Хэрвээ хувийн түлхүүрээ гээсэн тохиолдолд биткойны сүлжээнд ямар ч эзэмшигчийн нотолгоогүй болох бөгөөд ямар ч зохицуулах аргагүй болно, ингэснээр тухайн зооснууд нь хэрэглэх боломжгүйгээр алдагдах юм. Жишээлбэл 2013 онд нэгэн хэрэглэгч 7,500 биткойноо алдсан бөгөөд энэ тухайн үедээ 7,5 сая ам доллар гэсэн үг. Тэр залуу хувийн түлхүүрийг хадгалдаг хатуу дискээ алдсан юм.
													</p>
												</div>
						  				</div>
						  			</div>
						  		</div>
						  	</div>
						  	<div className="tab-pane fade" id="client" role="tabpanel">
						  		<div className="row">
						  			<div className="col-lg-6 col-md-12">
						  				<div className="accordion-faq-box mb-20">
						  					<a href="javascript:void(0)" className="accordion-faq-title">Bitcoin mining буюу олборлолт гэж юу вэ?</a>
												<div className="accordion-faq-content">
													<p><span>Төхөөрөмжөөр олборлох:</span>Төхөөрөмжөөр олборлох гэдэг нь тооцоолон бодох чадвартай бүхий л төхөөрөмжүүдийг хэлж буй хэлбэр. Танай гэрийн компьютер, лаптоп тэр бүү хэл таны утас ч биткойныг олборлох боломжтой. Гагцхүү маш удаан хурдаар олборлоно. Анх биткойныг ердийн суурин компьютероор олборлодог байсан бол одоо үед зөвхөн биткойн олборлоход зориулсан төхөөрөмж хүртэл бий болсон. Уг төхөөрөмж нь ердийн компьютероос хэдэн арав зуу сая дахин хурдан олборлодог.
														<br/> <span>Үүлэн олборлолт хийх (Cloud Mining):</span>  Үүлэн олборлолт гэдэг нь төхөөрөмж авахгүйгээр биткойн олборлохыг хэлдэг. Энэ нь үүлэн олборлолтын үйлчилгээ үзүүлдэг баталгаатай вэбсайтуудаас биткойн олборлох хурд түрээсэлж авдаг ба уг хурдаараа биткойн олборлодог юм. Уг вэб сайтуудын ард маш том дата центер маягийн биткойн олборлодог төхөөрөмжүүд байгаа бөгөөд үүнийхээ тодорхой хэсгийг танд түрээслүүлж буй хэлбэр юм.
													</p>
												</div>
						  				</div>
						  			</div>
									  <div className="col-lg-6 col-md-12">
										<div className="accordion-faq-box mb-20">
											<a href="javascript:void(0)" className="accordion-faq-title">NFT гэж юу вэ?</a>
											<div className="accordion-faq-content">
												<p>Энэ нь англиар Non-Fungible-Token гэсэн үг. Fungible гэдэг нь монгол хэлнээ буулгавал орлуулшгүй гэсэн үг бол token гэдэг нь ямарваа нэгэн бараа материалыг илэрхийлэхдээ ашигладаг үг юм. Тэгэхээр Non-fungible-token гэдэг нь энгийнээр орлуулшгүй, цор ганц зүйл гэсэн утга болж байна.</p>
											</div>
										</div>
									</div>
						  		</div>
						  	</div>
						</div>
					</div>
				</div>
			</div>
	 </section>
       
        <footer className="bg-pattern lightskyblue ptb-100" id="section-foot-move">
			<div className="container">
				<div className="footer">
					<div className="row text-center align-items-center">
						<div className="col-lg-6 col-md-6">
							<div className="footer-logo pb-25">
							<a href="index.html"><img src="images/logo-bdc-2.png" alt="BDC"/></a>
							</div>
							<div className="footer-icon">
								<ul>
									<li><a href="https://www.facebook.com/BDCblockbox" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="https://bit.ly/3p2wQTy" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li><a href="https://www.instagram.com/bdc_token/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
									<li><a href="https://t.me/bdctoken_official" target="_blank"><i className="fa fa-hand-stop-o" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="footer-link"> 
								<ul>
									<li><a href="#section-IEO-move">What is BDC</a></li>
									<li><a href="#section-IEO-move">IEO</a></li>
									<li><a href="https://bit.ly/3yS9O5e" target="_blank">Join Us</a></li>
									<li><a href="#section-IEO-move">Tokens</a></li>
									<li><a href="files/BDC_Litepaper_mon_ver02.pdf" target="_blank">Lightpaper</a></li>
									<li><a href="#section-Global-move">Global Partners</a></li>
									<li><a href="#section-Road-move">Roadmap</a></li>
									<li><a href="files/BDC_Whitepaper_Eng_ver01.pdf" target="_blank">Whitepaper</a></li>
									<li><a href="#section-FAQ-move">Faq</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div className="row">
						<div className="col-lg-12 col-md-12 copyright-text">
							<p>©2021 MDKI LLC | All Rights Reserved</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
   


		
</body>
  );
}

export default App;
