import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import icon_remove from "../Assets/remove_icon.png";

const CartItems = () => {

    const {totalCartAmount,all_vehicle,cartItems,removeFromCart} = useContext(ShopContext);

    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Vehicle</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_vehicle.map((e)=>{
                if(cartItems[e.id]>0){
                    return(
                        <div>
                <div className="cartitems-format cartitems-format-main">
                    <img className="carticon-producticon" style={{width:"100%"}} src={e.image} alt=""/>
                    <p>{e.name}</p>
                    <p>₹ {e.new_price}</p>
                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                    <p>₹ {e.new_price*cartItems[e.id]}</p>
                    <img className="cartitems-removeicon" src={icon_remove} style={{width:"15px", cursor:"pointer"}} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr/>
            </div>
                    )
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-totalitems">
                            <p>Subtotal</p>
                            <p>₹ {totalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-totalitems">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-totalitems">
                            <h3>Total</h3>
                            <h3>₹ {totalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo Code"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;