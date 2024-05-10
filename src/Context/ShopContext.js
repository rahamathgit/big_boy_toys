import React, { createContext, useState } from "react";
import all_vehicle from "../Components/Assets/all_vehicle";

export const ShopContext = createContext(null);

const getCart = () => {
    let cart = {};
    for (let index = 0; index < all_vehicle.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const totalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
                if(cartItems[item]>0){
                    let itemInfo = all_vehicle.find((product) => product.id === Number(item));
                    totalAmount += itemInfo.new_price * cartItems[item]
                }
                return totalAmount;
            }
    }

    const totalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }

    const contextValue = {totalCartItems,totalCartAmount,all_vehicle, cartItems,addToCart,removeFromCart};
        return(
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        )
}

export default ShopContextProvider;