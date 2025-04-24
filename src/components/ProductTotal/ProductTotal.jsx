import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button } from "@mui/material";

import {
  decrementQuantity,
  incrementQuantity,
} from "src/redux/sliceRedux/basket";

import { QuantityContainerStyle } from "./ProductTotal.style";

function ProductTotal({ id, children, style, boxWidth, boxHeight }) {
  const dispatch = useDispatch();

  const basket = useSelector((store) => store.basket);

  const quantity =
    basket.find(({ product }) => product.id === id)?.quantity || 0;
  console.log(id);

  const incrementAmount = useCallback(() => {
    dispatch(incrementQuantity(id));
  }, [dispatch, id]);

  const decrementAmount = useCallback(() => {
    dispatch(decrementQuantity(id));
  }, [dispatch, id]);

  if (!quantity) {
    return children;
  }

  return (
    <QuantityContainerStyle>
      <Box
        className="quantityControl"
        width={boxWidth || "220px"}
        height={boxHeight || "50px"}
      >
        <Button onClick={decrementAmount}>−</Button>
        <span>{quantity}</span>
        <Button onClick={incrementAmount}>+</Button>
      </Box>
      <Link to={`/basket`} className={style}>
        <button className="cartButton">Savatga o'tish</button>
      </Link>
    </QuantityContainerStyle>
  );
}

export default ProductTotal;
