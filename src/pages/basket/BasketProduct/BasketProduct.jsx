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
      <h3 className="deliveryDate">19-martdan boshlab yetkazamiz</h3>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={2}
        alignItems="center"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="deliveredProductImage"
        >
          <input type="checkbox" checked className="checkbox" />
          <img
            src={image}
            alt="Nivea universal krem"
            className="productImage"
          />
        </Stack>
        <Stack direction="column" justifyContent="space-between">
          <Stack
            direction="row"
            gap={{ sm: 1, md: 3 }}
            justifyContent="space-between"
          >
            <p className="productName">{description}</p>
            <div>
              <p className="currentPrice">{price.toLocaleString()} so'm</p>
              <p className="oldPrice">{oldPrice.toLocaleString()} so'm</p>
            </div>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={{ sm: 5, md: 7 }}
            >
              <p className="vendor">Sotuvchi: "NIVEA"</p>
              <ProductTotal
                id={id}
                style={"hiddenButton"}
                boxWidth={{ xs: 80, sm: 150, md: 120 }}
                boxHeight={{ xs: 20, sm: 30, md: 30 }}
              />
            </Stack>
            <IconButton onClick={handleDeleteProduct}>
              <FiTrash2 className="deleteIcon" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </BasketCardStyle>
  );
}

export default BasketProduct;
