export function IEOMove(){
    return(
        <>
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
        </>
    )
}