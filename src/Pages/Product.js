import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Spliter from "../Components/Spliter/Spliter";
import DisplayProduct from "../Components/DisplayProduct/DisplayProduct";
import Description from "../Components/Description/Description";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {

const {all_vehicle} = useContext(ShopContext);
const {productId} = useParams();
const product = all_vehicle.find((e)=>e.id === Number(productId));

    return(
        <div>
            <Spliter product={product}/>
            <DisplayProduct product={product}/>
            <Description/>
            <RelatedProducts/>
        </div>
    )
}

export default Product;