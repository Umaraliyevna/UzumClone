import React from "react";
import "./Products.css";
import { FaAngleRight } from "react-icons/fa6";
import Product from "./product/Product";
import Mok from "./product/mok";
import getImagUlr from "../products/product/images";

function Products({ title, count }) {
  const productList = Mok();
  return (
    <div className="container">
      <h2 className="productTitle">
        {title}
        <span>
          <FaAngleRight />
        </span>
      </h2>
      <div className="productsCards">
        {productList.map((product) => {
          return (
            <Product
              image={getImagUlr()}
              title={product.title}
              reyting={product.reyting}
              perMonthSum={product.perMonthSum}
              changedSum={product.changedSum}
              realSum={product.realSum}
              id={product.id}
            />
          );
        })}
      </div>
      <div className="showAgainBtn">
        <button>Yana ko'rsatish 10</button>
      </div>
    </div>
  );
}

export default Products;
