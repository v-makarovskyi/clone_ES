import React, { useState } from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpeg";
/* import slide3 from "../assets/images/slide3.jpg"; */
import slide4 from "../assets/images/slide4.jpg";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  
  return (
    <Carousel fade>
      <Carousel.Item interval={60000}>
        <img src={slide1} alt="slide-1" />
        <Carousel.Caption>
          <h5>
            Порошенко для УП: ЄС, НАТО, Україна – тепер це як «Армія. Мова. Віра»
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
        <img src={slide2} alt="slide-2"/>
        <Carousel.Caption>
          <h5>
          Понад дві тисячі партійців «Європейської Солідарності» пішли на фронт після 24 лютого
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={60000}>
        <img src={slide4} alt="slide-4" />
        <Carousel.Caption>
          <h5>
          Петро Порошенко для The Globe and Mail: путін випустив монстра війни - тепер він має пожерти путінський режим
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
