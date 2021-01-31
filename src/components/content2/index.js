import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Media from "react-bootstrap/Media";
import { Card,Button } from "react-bootstrap";

const visa = require("./options.png");
const money = require("./money.png");
const ui = require("./ui.png");
const head = require("./head.png");
const mobile = require("./mob.jpeg");
const cash = require("./cash-payment.png");
const free = require("./freedom.png");


function Content2() {
  return (
    <div>
      
      <div className="services2">
          <img className="mobile" src={mobile} />
            </div>
      
      <hr className="line"></hr>
      <div className="otherCards2">
        <Row className="row" xs={1} md={2} lg={4}>
          <Col>
            <div className="img-2">
              <img src={free} class="card-img-top" alt="..." />
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">independence</h5>
                <p class="card-text">
                  Service providers have full control on how they want to manage there work schedule as well as there service charges.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="img-2">
              <img src={cash} class="card-img-top" alt="..." />
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Easy Payout</h5>
                <p class="card-text">
                 we provide flexible payout system, Service providers can redeem their payements at the time interval of 15 days.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row xs={1} md={2} lg={4}>
          <Col>
            <div className="img-2">
              <img src={ui} class="card-img-top" alt="..." />
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> UI</h5>
                <p class="card-text">
                  We provide an easy user interface. Which helps service provide to easily navigate through app and to manage there accounts.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="img-2">
              <img src={head} class="card-img-top" alt="..." />
            </div>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Customer Support</h5>

                <p class="card-text">
                 Whenever Service providers need any help regarding any issue we are always ready to help.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Content2;
