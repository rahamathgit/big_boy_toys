import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/footer_logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import facebook_icon from "../Assets/facebook_icon.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} style={{width:"10%"}} alt="logo"/>
                <p><span style={{color:"orange"}}>B</span>ig <span style={{color:"orange"}}>B</span>oy <span style={{color:"orange"}}>T</span>oys</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <a href="https://www.instagram.com/?hl=en"><img src={instagram_icon} style={{width:"20px"}} alt="insta"/></a>
                <a href="https://www.facebook.com/"><img src={facebook_icon} style={{width:"25px"}} alt="facebook"/></a>
                <a href="https://www.whatsapp.com/"><img src={whatsapp_icon} style={{width:"25px"}} alt="whatsapp"/></a>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer;