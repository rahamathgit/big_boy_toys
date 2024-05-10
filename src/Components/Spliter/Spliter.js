import React from "react";
import "./Spliter.css";
import arrow_icon from "../Assets/spliter_arrow.png";

const Spliter = (props) => {

const {product} = props;

    return(
        <div className="spliter">
            HOME <img src={arrow_icon} style={{width:"20px"}} alt="split"/> Collections <img src={arrow_icon} style={{width:"20px"}} alt="shop"/> {product.category} <img src={arrow_icon} style={{width:"20px"}} alt="category"/> {product.name}
        </div>
    )
}

export default Spliter;