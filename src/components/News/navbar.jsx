export default function Navbar (){
    return(
        <header className="transition">
		<div className="container">
			<div className="row flex-align">
				<div className="col-lg-2 col-md-3 col-8">
					<div className="logo">
                        <a href="/"><img src="images/logo-bdc.svg" alt="BDC" /></a>
					</div>
				</div>
				<div className="col-lg-10 col-md-9 col-4 text-right">
					<div className="menu-toggle" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
					</div>
					<div className="menu">
						<ul className="d-inline-block open_close">
							<li className="nav-link"><a href="index.html">About</a></li>
							<li className="nav-link"><a href="index.html">IEO</a></li>
							<li className="nav-link"><a href="index.html">Global Partners</a></li>
							<li className="nav-link"><a href="index.html">Roadmap</a></li>
							<li className="nav-link"><a href="index.html">News</a></li>
							<li className="mega-menu">
								<span className="opener plus"></span>
								<a href="#">Whitepaper</a>
								<ul className="transition">
									<li><a href="files/BDC_Litepaper_mon_ver01.pdf" target="_blank" className="nav-link"><img src="images/file-pdf.svg" style={{width: "15px", height: "15px"}} alt="pdf"/>Litepaper</a></li>
									<li><a href="files/BDC_Whitepaper_Eng_ver01.pdf" target="_blank" className="nav-link"><img src="images/file-pdf.svg" style={{width: "15px", height: "15px"}} alt="pdf"/>Whitepaper</a></li>
								</ul>
							</li>
						</ul>
						<div className="signin d-inline-block">
							<a href="https://capex.mn/launchpad" target="_blank" className="btn nav-link">Join IEO</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    )
}