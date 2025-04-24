import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { FiTrash2 } from "react-icons/fi";
import { IconButton, Stack } from "@mui/material";

import { ProductTotal } from "src/components";
import { removeFromBasket } from "src/redux/sliceRedux/basket";

import { BasketCardStyle } from "./BasketProduct.style";

function BasketProduct({ id, image, price, description, oldPrice }) {
  const dispatch = useDispatch();

  const handleDeleteProduct = useCallback(() => {
    dispatch(removeFromBasket(id));
  }, [dispatch, id]);

  return (
    <BasketCardStyle>
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
            <Stack direction="row" justifyContent="space-between">
              <p className="vendor">Sotuvchi: "NIVEA"</p>
              <ProductTotal
                id={id}
                style={"hiddenButton"}
                boxWidth={150}
                boxHeight={30}
              />
            </Stack>
          </div>

          <div className="price-details">
            <p className="current-price">{price} so'm</p>
            <p className="old-price">{oldPrice} so'm</p>
            <IconButton onClick={handleDeleteProduct}>
              <FiTrash2 className="delete-icon" />
            </IconButton>
          </div>
        </Stack>
      </div>
    </BasketCardStyle>
  );
}

export default BasketProduct;
