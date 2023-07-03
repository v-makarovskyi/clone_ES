import React from "react";
import { Row, Col } from "react-bootstrap";
import announcement1 from "../assets/images/announcement/announcement1.jpeg";
import announcement2 from "../assets/images/announcement/announcement2.jpg";
import announcement3 from "../assets/images/announcement/announcement3.jpg";
import announcement4 from "../assets/images/announcement/announcement4.jpg";
import announcement5 from "../assets/images/announcement/announcement5.jpg";

export default function Announcement() {
  return (
    <Row className="announcement">
      <p className="blockVideo-heading">АНОНСИ ПОДІЙ</p>
      <hr />
      <Row className="announcement-wrapper">
        <Col className="p-3">
          <div
            className="announcement-img__wrapper"
            title="Порошенко у Брюсселі говоритиме про прискорення вступу України в ЄС та посилення санкцій проти росії"
          >
            <img src={announcement1} alt="img" />
          </div>
        </Col>
        <Col className="p-3">
          <div
            className="announcement-img__wrapper"
            title="Петро Порошенко візьме участь у сесії Парламентської асамблеї НАТО"
          >
            <img src={announcement2} alt="img" />
          </div>
        </Col>
        <Col className="p-3">
          <div
            className="announcement-img__wrapper"
            title="Відновлення експорту, фінансова підтримка та відбудова України: Порошенко візьме участь в Європейському Економічному Конгресі"
          >
            <img src={announcement3} alt="img" />
          </div>
        </Col>
        <Col className="p-3">
          <div
            className="announcement-img__wrapper"
            title="Інформація щодо З’їзду Політичної партії «Європейська Солідарність»"
          >
            <img src={announcement4} alt="img" />
          </div>
        </Col>
        <Col className="p-3">
          <div
            className="announcement-img__wrapper"
            title="Петро Порошенко їде на Мюнхенську конференцію з безпеки, щоб говорити про зброю для України і членство в НАТО"
          >
            <img src={announcement5} alt="img" />
          </div>
        </Col>
      </Row>
    </Row>
  );
}
