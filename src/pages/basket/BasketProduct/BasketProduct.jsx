import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Stack } from "@mui/material";

function BasketProduct({ id, image, description, color, price, oldPrice }) {
  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <div className="cart-item">
        <h3 className="delivery-date">19-martdan boshlab yetkazamiz</h3>
        <Stack direction="row" alignItems="center" gap={2}>
          <input type="checkbox" checked className="checkbox" />
          <img
            src={image}
            alt="Nivea universal krem"
            className="product-image"
          />
          <div>
            <div className="product-details">
              <p className="product-name">{description}</p>
            </div>
            <Stack direction="row" gap={20}>
              <p className="vendor">Sotuvchi: "NIVEA"</p>
              <div className="quantity-control">
                <button onClick={() => setQuantity(quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </Stack>
          </div>

          <div className="price-details">
            <p className="current-price">{price} so'm</p>
            <p className="old-price">{oldPrice} so'm</p>
            <FiTrash2 className="delete-icon" />
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default BasketProduct;
