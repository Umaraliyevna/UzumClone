import React, { useContext } from "react";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import "./basket_product.css";
import { AppContext } from "../../../context";
function Basket_product({ id, image, description, color, price, oldPrice }) {
  const { amountProduct } = useContext(AppContext);
  const [quantity, setQuantity] = useState(amountProduct);
  return (
    <div className="container basketCard">
      <div className="cart-item">
        <input type="checkbox" checked className="checkbox" />
        <img src={image} alt="Nivea universal krem" className="product-image" />
        <div className="product-details">
          <h3 className="delivery-date">19-martdan boshlab yetkazamiz</h3>
          <p className="product-name">{description}</p>
          <p className="vendor">Sotuvchi: "NIVEA"</p>
        </div>
        <div className="quantity-control">
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <div className="price-details">
          <p className="current-price">{price} so'm</p>
          <p className="old-price">{oldPrice} so'm</p>
        </div>
        <FiTrash2 className="delete-icon" />
      </div>
    </div>
  );
}

export default Basket_product;
