
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
export function Navbar(){
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return(
        <> 
        <header className="transition">
		<div className="container">
			<div className="row flex-align">
				<div className="col-lg-2 col-md-3 col-8">
					<div className="logo">
            <a href="/"><img src="images/logo-bdc-2.png" alt="BDC"/></a>
					</div>
				</div>
				<div className="col-lg-10 col-md-9 col-4 text-right">
					<div className="menu-toggle" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
					</div>
					<div className="menu">
						<ul className="d-inline-block open_close">
							<li className="nav-link ts-scroll"><a href="#section-about-move "  >About</a></li>
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
							<li className="nav-link ts-scroll" ><a href='/login' > Login </a></li>
							<li className="nav-link ts-scroll"><a href="/signup">Sign Up</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
        {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal> */}
	</header>
    <div id="fb-root"></div>

  
<div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
    )
}