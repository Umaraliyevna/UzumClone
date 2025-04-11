import React from "react";
import "../footer/footer.css";
import { FaApple } from "react-icons/fa";
import { RiGooglePlayLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="container footer">
      <div className="footerInfo">
        <div>
          <h3>Biz haqimizda</h3>
          <p>Topshirish punktlari</p>
          <p>Vakansiyalar</p>
        </div>
        <div className="left">
          <h3>Foydalanuvchilarga</h3>
          <p>Biz bilan bog'lanish</p>
          <p>Savol-javob</p>
        </div>
        <div className="left">
          <h3>Tadbirkorlarga</h3>
          <p>Uzumda soting</p>
          <p>Sotuvchi kabinetiga kirish</p>
          <p>Topshirish punktini ochish</p>
        </div>
      </div>
      <div className="footerSocialMedia left">
        <h3>Ilovani yuklab olish</h3>
        <div className="flex">
          <div className="flex footerIcons">
            <FaApple className="footerIcon" />
            <p>AppStore</p>
          </div>
          <div className="flex footerIcons">
            <RiGooglePlayLine className="footerIcon" />
            <p>Google Play</p>
          </div>
        </div>
        <p className="footerIconTitle">Uzum ijtimoiy tarmoqlarda</p>
        <div>
          <FaInstagramSquare className="footerIcon instagramm" />
          <RiTelegram2Fill className="footerIcon telegramm" />
          <FaFacebookF className="footerIcon facebook" />
          <FaYoutube className="footerIcon youtube" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
