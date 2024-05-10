import React from "react";
import "./Offers.css";
import ev_cars from "../Assets/ev.jpg";

const Offers = () => {
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>offers on</h1>
                <p>Electric Cars</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={ev_cars} style={{width:"60%", cursor:"pointer"}} alt=""/>
            </div>
        </div>
    )
}

export default Offers;