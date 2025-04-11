import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Product({
  id,
  image,
  title,
  reyting,
  perMonthSum,
  changedSum,
  realSum,
}) {
  return (
    <Link className="productLink" to={`/product-info/${id}`}>
      <div className="productCard">
        <div>
          <img src={image} />
          <CiHeart className="productHeart" />
          <p className="productText">Super narx</p>
        </div>
        <div className="productInfo">
          <p className="productInfoDescription">{title}</p>
          <div className="flex productRate">
            <FaStar id="productStar" />
            <p>{reyting} (10 sharhlar)</p>
          </div>
          <p className="permonthSumma">{perMonthSum} so'm oyiga</p>
          <div className="productCost flex">
            <div>
              <p className="changedSumma">{changedSum}</p>
              <p className="realSumma">{realSum}</p>
            </div>
            <div className="productBag">
              <IoBagAddOutline className="bag" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
