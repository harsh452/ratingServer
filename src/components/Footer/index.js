import React, { useState } from "react";
import { Nav, Button, Modal, Row, Col } from "react-bootstrap";
import "./style.css";
const call = require("./call.png");
const email = require("./email.png");
const location = require("./location.png");
const zaid = require("./zaid.png");
const harsh = require("./harsh.png");

function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="footer">
      <Modal
        className="model"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            ABOUT US
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Who we are</h4>
          <p>
            We are a service based company<br></br> we provide an open platform
            for anyone who has some skills <br></br> to provide optimum service
            to customers{" "}
          </p>
          <br></br>
          <h4>How we work</h4>
          <p>
            <p className="service">Service Provider</p> Service Providers will
            have to fill a form to register themselves <br></br> we will verify
            there information <br></br> and if it doesn't violate are term and
            conditions ,then they are eligible to provide services on aur
            platform{" "}
          </p>
          <br></br>
          <p>
            <p className="service">Customer</p> Customer can see all the
            services and list of service providers, <br></br> according to there
            need and budget they can choose between different service providers
            (on the basis of service charge ,ratings) .To hire a service
            providers customer needs to signup
          </p>
          <h4>OUR Team</h4>
          <div>
            <Row>
              <Col>
                <img className="zaid" src={zaid}></img>
                <h4>MD.Zaid Anwar</h4>
                <p>
                  CO-Founder<br></br>
                  Developer
                </p>
              </Col>
              <Col>
                <img className="zaid" src={harsh}></img>
                <h4>Harsh Kumar</h4>
                <p>
                  CO-Founder<br></br>
                  Developer
                </p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      
      </Modal>
      <div>
        <Row>
          <Col>
            {" "}
            <div className="company">
              <i className="it">Aahang</i>
              <h3 className="it">You Wish,its done!</h3>
            </div>
          </Col>
          <Col md="auto">
            {" "}
            <div className="phone">
              <img src={email}></img> <h5>hkumar15985gmail.com</h5>
            </div>
          </Col>
          <Col xs lg="2">
            <div className="phone">
              <img src={call}></img> <h5>+91 7728095679</h5>
            </div>
          </Col>
        </Row>
        <Nav.Link className="aboutus" onClick={handleShow}>
          ABOUT US
        </Nav.Link>
      </div>
    </div>
  );
}

export default Footer;
