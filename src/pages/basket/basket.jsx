import React from "react";
import "../basket/basket.css";
import Basket_product from "./basket_product/basket_product";
import mok from "../../components/products/productCarusel/mok";
import { useContext } from "react";
import { AppContext } from "../../context";
import BradCrumb from "../../components/styled/BradCrumb";
function Basket() {
  const { basket_product, handle_product } = useContext(AppContext);
  return (
    <div>
      <BradCrumb />
      {basket_product.map((productId) => {
        const product = mok().find((p) => p.id === productId);
        return (
          <Basket_product
            image="https://images.uzum.uz/cfdjthqvtie1t76733k0/original.jpg"
            name="jhdfkns"
            description={456}
            color="black"
            oldPrice={1478}
            price={789}
            addBasket={handle_product}
          />
        );
      })}
    </div>
  );
}

export default Basket;
