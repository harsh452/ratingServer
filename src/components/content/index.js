import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Media from "react-bootstrap/Media";
import { Card } from "react-bootstrap";

const visa = require("./options.png");
const money = require("./money.png");
const ui = require("./ui.png");
const head = require("./head.png");
const mobile = require("./mob2.jpeg");

function Content() {
  return (
    <div>
      <div className="services">
          <img className="mobile" src={mobile} />
            </div>
<hr></hr>
      <div className="otherCards">
        <Row xs={1} md={2} lg={4}>
          <Col>
          <div className="img-1">
          <img 
                src={money}
                class="card-img-top"
                alt="..."
              />
          </div>
            <div class="card">
              
              <div class="card-body">
                <h5 class="card-title">Varient Price Range</h5>
                <p class="card-text">
                Customer has options to choose from lower than market price to as high as they can afford.
                </p>
               
              </div>
            </div>
          </Col>
          <Col>
          <div className="img-1">
          <img 
                src={ui}
                class="card-img-top"
                alt="..."
              />
          </div>
            <div class="card">
              
              <div class="card-body">
                <h5 class="card-title">Easy UI</h5>
                <p class="card-text">
                 We have sorted list of  service Providers based on rating,price etc.
                </p>
               
              </div>
            </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row xs={1} md={2} lg={4}>
          <Col>
          <div className="img-1">
          <img 
                src={visa}
                class="card-img-top"
                alt="..."
              />
          </div>
            <div class="card">
            
              <div class="card-body">
                <h5 class="card-title">Vast Options</h5>
                <p class="card-text">
                 We have vast options for services as well as service providers.
                </p>
               
              </div>
            </div>
          </Col>
          <Col>
          <div className="img-1">
          <img 
                src={head}
                class="card-img-top"
                alt="..."
              />
          </div>
         
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">Customer Support</h5>

                <p class="card-text">
                 We provide 24/7 customer support.
                </p>
               
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Content;
