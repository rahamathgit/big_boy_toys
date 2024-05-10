import React, { useContext } from "react";
import "./DisplayProduct.css";
import icon_star from "../Assets/star_icon.png";
import icon_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const DisplayProduct = (props) => {

const {product} = props;

const {addToCart} = useContext(ShopContext);

    return(
        <div className="display-product">
            <div className="displayproduct-left">
                <div className="displayproduct-imagelist">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="displayproduct-img">
                    <img className="displayproduct-main-img" src={product.image} alt=""/>
                </div>
            </div>
            <div className="displayproduct-right">
                <h1>{product.name}</h1>
                <div className="displayproduct-right-star">
                    <img src={icon_star} style={{width:"20px"}} alt=""/>
                    <img src={icon_star} style={{width:"20px"}} alt=""/>
                    <img src={icon_star} style={{width:"20px"}} alt=""/>
                    <img src={icon_star} style={{width:"20px"}} alt=""/>
                    <img src={icon_dull} style={{width:"17px"}} alt=""/>
                    <p>(122)</p>
                </div>
                <div className="displayproduct-right-prices">
                    <div className="displayproduct-right-price-old">
                        ₹{product.old_price}
                    </div>
                    <div className="displayproduct-right-price-new">
                        ₹{product.new_price}
                    </div>
                </div>
                <div className="displayproduct-right-description">
                One of India’s longest-running automotive content title, airs the most exhaustive compilation of news, reviews, comparisons and entertaining stories by experts.
                </div>
                <div className="displayproduct-right-size">
                    <h1>Select Color</h1>
                    <div className="displayproduct-right-sizes">
                        <div>Black</div>
                        <div>White</div>
                        <div>Red</div>
                        <div>Blue</div>
                        <div>Silver</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="displayproduct-right-category"><span>Category : </span>Naked, Chain Drive</p>
                <p className="displayproduct-right-category"><span>Tags : </span>BS-VI</p>
            </div>
        </div>
    )
}

export default DisplayProduct;