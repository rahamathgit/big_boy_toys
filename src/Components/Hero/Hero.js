import React from "react";
import "./Hero.css";
import cars from "../Assets/cars.png";

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>NEW YEAR<hr/></h2>
                <h1>SALE<hr/></h1>
                <h3>SAVE UP TO 5% OFF</h3>
            </div>
            <div className="hero-right">
                <img src={cars} alt="carname"/>
            </div>
        </div>
    )
}

export default Hero;