import React from "react"
import "./ProductCard.css"

function ProductCard({name, price, image}){
    return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3 className="card-title">{name}</h3>
      <p className="card-price">Price: ${price}</p>
    </div>
  );
}
export default ProductCard