import React from 'react'
import {Carousel,Container} from 'react-bootstrap'
import "./style.css"

const craft = require("./craft.jpg");


function Mid() {
    return (
        <div>
        <hr className="line"></hr>
 <div  className="carousel">
      <h3 className="helper">Register yourself as a Helper</h3>
<h5> Be your own boss.</h5>

<img className="imgs" src={craft}></img>

 </div>
        </div>
     
    )
}

export default Mid
