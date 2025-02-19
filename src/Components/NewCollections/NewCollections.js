import React from "react";
import "./NewCollections.css"
import Item from "../Item/Item";
import new_collections from "../Assets/new_collections";

const NewCollections = () => {
    return(
        <div className="new-collections">
            <h1>Upcoming Cars</h1>
            <hr/>
            <div className="collections">
                {new_collections.map((item,i)=>{
                    return(
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
                    )
                })}
            </div>
        </div>
    )
}

export default NewCollections;