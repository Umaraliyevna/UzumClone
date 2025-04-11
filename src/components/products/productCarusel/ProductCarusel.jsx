import React from "react";
import "./ProductCarusel.css";
import { FaAngleRight } from "react-icons/fa6";
import Product from "../product/Product";
import mok from "./mok";

function ProductCarusel({ title }) {
  const productList = mok();
  return (
    <div className="container carusel">
      <h2 className="productTitle">
        {title}
        <span>
          <FaAngleRight />
        </span>
      </h2>
      <div className="productsCaruselCards caruselCards">
        {productList.map((product) => {
          return (
            <Product
              key={product.id}
              className="caruselCard"
              image={product.img}
              title={product.title}
              reyting={product.reyting}
              perMonthSum={product.perMonthSum}
              changedSum={product.changedSum}
              realSum={product.realSum}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductCarusel;
