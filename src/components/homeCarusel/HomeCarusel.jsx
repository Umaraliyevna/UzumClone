import React from "react";
import "./HomeCarusel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../home/carusel/img1.jpg";
import Img2 from "../home/carusel/img2.jpg";
import Img3 from "../home/carusel/img3.jpg";
import Img4 from "../home/carusel/img4.jpg";
import Img5 from "../home/carusel/img5.jpg";
import Img6 from "../home/carusel/img6.jpg";
import Img7 from "../home/carusel/img7.jpg";
import Img8 from "../home/carusel/img8.jpg";
import Img9 from "../home/carusel/img9.jpg";
import Img10 from "../home/carusel/img10.jpg";
import Img11 from "../home/carusel/img11.jpg";
import Img12 from "../home/carusel/img12.jpg";
import Img13 from "../home/carusel/img13.jpg";
import Img14 from "../home/carusel/img14.jpg";
import Img15 from "../home/carusel/img15.jpg";
import Img16 from "../home/carusel/img16.jpg";
import Img17 from "../home/carusel/img17.jpg";
import { Div } from "../styled/example.style";

function HomeCarusel() {
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="homeCarusle container">
      <Slider {...settings} autoplay>
        {images.map((img) => {
          return (
            <div>
              <img id="caruselImg" src={img} />
            </div>
          );
        })}
      </Slider>
      <Div>
        <button>Ramazon</button>
        <button>Foyda</button>
        <button>Zamonaviy Bozor</button>
        <button>Hafta tovarlari</button>
      </Div>
    </div>
  );
}

export default HomeCarusel;
