import React from "react";
import { SlLocationPin } from "react-icons/sl";
import flag from "./image.png";
import "./Header.css";
import { Ul } from "../styled/example.style";

function Header() {
  return (
    <header>
      <div className="container headerLists">
        <Ul>
          <li id="location">
            <SlLocationPin />
          </li>
          <li>Toshkent</li>
          <li>Topshirish punktlari</li>
        </Ul>
        <Ul>
          <li>Sotuvchi bo'lish</li>
          <li>|</li>
          <li>Topshirish punktini ochish</li>
          <li>Savol javob</li>
          <li>Buyurtmalarim</li>
          <li>
            <img className="headerFlag" src={flag} alt="uzb flag" />
          </li>
          <li>o'zbekcha</li>
        </Ul>
      </div>
    </header>
  );
}

export default Header;
