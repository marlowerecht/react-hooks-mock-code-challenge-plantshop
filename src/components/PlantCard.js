import React, { useState } from "react";

function PlantCard({ image, name, price }) {
  
  const [ inStock, setInStock ] = useState(true)

  function makeOutOfStock() {
    setInStock(false)
  }

  function makeInStock() {
    setInStock(true)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button onClick={makeOutOfStock}className="primary">In Stock</button>
      ) : (
        <button onClick={makeInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
