import React, { useContext } from "react";
import "./ProductInfo.css";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import ProductBrend from "./brand.png";
import ProductCarusel from "../../components/products/productCarusel/ProductCarusel";
import { useState } from "react";
import { AppContext } from "../../context";

function ProductInfo() {
  const {
    handle_product,
    countSaved,
    savedProductCount,
    setAmountProduct,
    amountProduct,
  } = useContext(AppContext);
  const { id } = useParams();
  const images_product = [
    "https://images.uzum.uz/cfdjthqvtie1t76733k0/original.jpg",
    "https://images.uzum.uz/cfdjthqvtie1t76733kg/original.jpg",
    "https://images.uzum.uz/cfdjthqvtie1t76733jg/original.jpg",
  ];
  const images_from_custom = [
    "https://images.uzum.uz/cv3itltpb7f9qcnfntgg/feedback_40.jpg",
    "https://images.uzum.uz/cv04apui4n36ls3s33og/feedback_40.jpg",
    "https://images.uzum.uz/cv1cnlbvgbkm5ehhhj80/feedback_40.jpg",
    "https://images.uzum.uz/cv1js8lpb7f9qcnf74s0/feedback_40.jpg",
    "https://images.uzum.uz/cv1js95pb7f9qcnf74sg/feedback_40.jpg",
    "https://images.uzum.uz/cv1js9ui4n36ls3sgts0/feedback_40.jpg",
    "https://images.uzum.uz/cv1jsaui4n36ls3sgtt0/feedback_40.jpg",
  ];
  const description_images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nivea_logo.svg/1024px-Nivea_logo.svg.png",
    "https://www.letu.ru/common/img/products/NIV080101_4.jpg",
  ];
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <div className="container prodcutInformation">
      <ul>
        <li>Bosh sahifa /</li>
        <li>Barcha toifalar /</li>
        <li>Maishiy texnika /</li>
        <li>Katta maishiy texnika /</li>
        <li>Sovutgichlar va muzlatgichlar /</li>
        <li>Sovutgichlar</li>
      </ul>
      <div className="imagesInfoContainer">
        <div className="imagesInfo">
          <h2>Sovutgich "Artel HD 345 RND Eco"</h2>
          <div className="productReyting">
            <div className="flex">
              <FaStar className="productIcon" />
              <FaStar className="productIcon" />
              <FaStar className="productIcon" />
              <FaStar className="productIcon" />
              <FaRegStarHalfStroke className="productIcon" />
            </div>
            <p className="comment">4.9 (414 sharh)</p>
            <p>41 fotosurat</p>
            <p> 800+ buyurtma</p>
            <div></div>
          </div>
          <div className="productImages">
            <div className="productImagesVertical">
              {images_product.map((image) => {
                return <img src={image} alt="productImg" />;
              })}
            </div>
            <div className="productImagesGorizontal">
              {images_product.map((image) => {
                return <img src={image} alt="productImg" />;
              })}
            </div>
          </div>
          <div className="productReyting">
            <p className="reytingNumber">4.9</p>
            <FaStar className="productIcon" />
            <FaStar className="productIcon" />
            <FaStar className="productIcon" />
            <FaStar className="productIcon" />
            <FaRegStarHalfStroke className="productIcon" />
            <u className="reytingComment">591 sharh</u>
          </div>
          <div className="customSendImages">
            {images_from_custom.map((image) => {
              return <img src={image} />;
            })}
          </div>
          <div className="commentary">
            <div className="commentaryCard">
              <div className="commentOwner">
                <p>
                  Dinara <span>4-mart</span>
                </p>
                <div>
                  <FaStar className="productIcon" />
                  <FaStar className="productIcon" />
                  <FaStar className="productIcon" />
                  <FaStar className="productIcon" />
                  <FaStar className="productIcon" />
                </div>
              </div>
              <p className="thoughts">
                Afzalliklari: <span>krem juda zo'r</span>{" "}
              </p>
              <p className="thoughts">
                Kamchiliklari: <span>yo</span>{" "}
              </p>
              <p className="thoughts">
                Izoh: <span>Manga yoqdi</span>{" "}
              </p>
            </div>
            <div className="commentaryCard">
              <div className="commentOwner">
                <p>
                  Mirzayeva <span>4-mart</span>
                </p>
                <div>
                  <FaStar className="productIcon" />
                  <FaStar className="productIcon" />
                  <FaStar className="productIcon" />
                  <FaStar className="productIcon" />
                  <FaStar className="productIcon" />
                </div>
              </div>
              <p className="thoughts">
                Afzalliklari: <span> oldin ishlatganma zur krem</span>{" "}
              </p>
              <p className="thoughts">
                Kamchiliklari: <span>yuq, lekin biroz kichikroq ekan</span>{" "}
              </p>
              <p className="thoughts">
                Izoh: <span>olishilani tavsiya qilaman</span>{" "}
              </p>
            </div>
          </div>
          <button className="showAllComment">Hamma sharhlarni ko'rish</button>
          <div className="productDescription">
            <button>Mahsulot tavsifi</button>
            <p>
              NIVEA Creme ko'p qirrali namlovchi vositadir. <br />
              Evserit, pantenol va glitserin bilan noyob formulasi tufayli krem
              tananing terisini, ayniqsa uning quruq joylarini mukammal
              namlaydi, oziqlantiradi va ehtiyotkorlik bilan parvarish qiladi.
              Nivea Creme tarkibida konservantlar mavjud emas va shuning uchun
              hatto nozik chaqaloq terisiga ham mos keladi.
            </p>
            <div>
              {description_images.map((image) => {
                return <img src={image} />;
              })}
            </div>
          </div>
        </div>
        <div className="productCostInfo">
          <div className="productCostCard">
            <div className="flex">
              <h2 className="price">51 000 so'm</h2>
              <p className="oldPrice">59 990 so'm</p>
            </div>
            <div className="installmentOptions">
              <button className="selected">24 oy</button>
              <button>12 oy</button>
              <button>6 oy</button>
              <button>3 oy</button>
            </div>
            <div className="monthlyPayment">3 612 so'm × 24 oy</div>
            <div className="purchasePptions">
              <button className="quickBuy">1 klikda xarid qilish</button>
              <span className="heart">
                <CiHeart />
              </span>
            </div>
            {!addedToCart ? (
              <button
                onClick={() => {
                  handle_product(id);
                  countSaved();
                  setAddedToCart(true);
                }}
                className="addToCart"
              >
                Savatga qo‘shish
              </button>
            ) : (
              <div className="quantityContainer">
                <div className="quantityControl">
                  <button
                    onClick={() => {
                      setAmountProduct(amountProduct - 1);
                    }}
                  >
                    −
                  </button>
                  <span>{amountProduct}</span>
                  <button
                    onClick={() => {
                      setAmountProduct(amountProduct + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <button className="cartButton">Savatcha o'tish</button>
              </div>
            )}
            <div className="stockInfo">
              <p>
                <FaCheck className="stockCheck" /> 46 dona xarid qilish mumkin
              </p>
              <p>
                <IoBagCheckOutline className="stockBag" /> Bu haftada 23 kishi
                sotib oldi
              </p>
            </div>
          </div>
          <div className="deliveryInfo">
            <div className="section">
              <div className="flex">
                <h3>Yetkazib berish 1 kundan boshlab</h3>
                <span className="badge">Uzum Market ombori</span>
              </div>
              <p>Uzum buyurtmalarni topshirish punktida yoki kuryer orqali</p>
            </div>
            <hr />
            <div className="section">
              <h3>Quay usulda xavfsiz to‘lov</h3>
              <p>Karta orqali, naqd pulda yoki bo‘lib to‘lang</p>
              <div className="paymentIcons">
                <span className="icon bank">
                  <CiBank />
                </span>
                <span className="icon nasiya">
                  <CiCreditCard1 />
                </span>
                <span className="icon humo">
                  <TbMoneybag />
                </span>
                <span className="icon cash">
                  <FaMoneyBills />
                </span>
              </div>
            </div>
            <hr />
            <div className="section">
              <h3>Qaytarish oson va tez</h3>
              <p>
                Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini
                qaytaramiz. <a href="#">Batafsil</a>
              </p>
            </div>
          </div>
          <div className="storeInfo">
            <div className="flex">
              <img src={ProductBrend} alt="NIVEA" className="storeLogo" />
              <div>
                <h4>"NIVEA"</h4>
                <p className="rating">
                  <FaStar className="ratingIcon" /> 4.9 (35481 baho)
                </p>
              </div>
            </div>
            <button className="storeButton">Do'konga o‘tish</button>
          </div>
        </div>
      </div>
      <ProductCarusel title="O'xshash mahsulotlar" />
      <ProductCarusel title="Birga sotib olishadi" />
      <ProductCarusel title="Koʻrilgan mahsulotlar" />
    </div>
  );
}

export default ProductInfo;
