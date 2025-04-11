import React, { useContext } from "react";
import "../home/Hero.css";
import logo from "../home/image.png";
import { RiArchiveStackLine } from "react-icons/ri";
import { MdOutlineSearch } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import star from "../home/Topsales.png";
import check from "../home/_vyg.png";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";

function Hero() {
  const { savedProductCount } = useContext(AppContext);
  return (
    <div className="homeSection container">
      <ul>
        <li>
          <img id="homeLogo" src={logo} alt="" />
        </li>
        <li className="homeTitle">uzum market</li>
        <li>
          <button className="homeBtn flex">
            <RiArchiveStackLine className="catalogIcon" />
            <span>Katalog</span>
          </button>
        </li>
        <li className="flex homeSearching">
          <input type="text" placeholder="Mahsulotlar va turkumlar izlash" />
          <span>
            <MdOutlineSearch />
          </span>
        </li>
        <li className="flex homeActions">
          <span>
            <IoPersonOutline />
          </span>
          <p>Kirish</p>
        </li>
        <li className="flex homeActions">
          <span>
            <CiHeart />
          </span>
          <p>Saralangan</p>
        </li>
        <Link to={`/basket`}>
          <button className="basket">
            <li className="flex homeActions">
              <span>
                <MdOutlineShoppingBag />
              </span>
              <p>Savat</p>
            </li>
            <li>
              <button className="takedItems">{savedProductCount}</button>
            </li>
          </button>
        </Link>
      </ul>
      <ul id="homeItems">
        <li id="homeProducts" className="flex homeProducts">
          <img src={star} alt="topsales" />
          <p>Hafta tovarlari</p>
        </li>
        <li id="homeProducts" className="flex homeProducts">
          <img src={check} alt="checkList" />
          <p>Har kuni foyda</p>
        </li>
        <li>Elektronika</li>
        <li>Maishiy texnika</li>
        <li>Kiyim</li>
        <li>Poyabzallar</li>
        <li>Aksessuarlar</li>
        <li>Go'zallik va parvarish</li>
        <li>Salomatlik</li>
        <li>
          Yana <FaAngleDown />
        </li>
      </ul>
    </div>
  );
}

export default Hero;
