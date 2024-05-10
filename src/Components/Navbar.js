import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "./Assets/logo.png";
import cart from "./Assets/cart.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {

    const [menu, setMenu] = useState("collection");
    const {totalCartItems} = useContext(ShopContext)

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} style={{width:"8%"}} alt="brand_logo"/>
                <h1><span style={{color:"orange"}}>B</span>IG <span style={{color:"orange"}}>B</span>OY <span style={{color:"orange"}}>T</span>OYS</h1>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("collection")}}><Link style={{textDecoration:'none', color:'white'}} to='/'>Collections</Link>{menu==="collection" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("bikes")}}><Link style={{textDecoration:'none', color:'white'}} to='/bikes'>Bikes</Link>{menu==="bikes" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("cars")}}><Link style={{textDecoration:'none', color:'white'}} to='/cars'>Cars</Link>{menu==="cars" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("kidstoys")}}><Link style={{textDecoration:'none', color:'white'}} to='/kidstoys'>KidsToys</Link>{menu==="kidstoys" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} style={{width:"8%"}} alt="trolly"/></Link>
                <div className="nav-cart-count">{totalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;