import React from "react";

import "./style.css";
import Button from 'react-bootstrap/Button'
const mobile = require("./mob.jpeg");
const logo = require("./logo.png")
const android = require("./android.png")

function Aahang() {
  return (
    <div className="aahang">
      <div className="imgDiv">
        <img className="img" src={mobile}></img>
      </div>
      
      <div className="android">
      <img className="and"  src={android}></img> 
      <p>* App is not released yet,it will be available soon</p>
      

      </div>
      
<div className="tools">
 <div className="logo">
 <img className="img1" src={logo}></img> 

</div> 
<div className="letter">
<p className="ah1">Aahang</p>
<h5 className="ah2">You wish,its done!</h5>
</div>

</div>
    </div>
  );
}

export default Aahang;
