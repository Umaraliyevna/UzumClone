import { Box, Button } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { QuantityContainerStyle } from "./ProductTotal.style";
import {
  decrementQuantity,
  incrementQuantity,
} from "src/redux/sliceRedux/basket";

function ProductTotal({ id, children }) {
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
      <Box className="quantityControl">
        <Button onClick={decrementAmount}>−</Button>
        <span>{quantity}</span>
        <Button onClick={incrementAmount}>+</Button>
      </Box>
      <Link to={`/basket`}>
        <button className="cartButton">Savatga o'tish</button>
      </Link>
    </QuantityContainerStyle>
  );
}

export default ProductTotal;
