import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ContactPage() {
  return (
    <Container className="contacts-page p-0">
      <Row className="contacts-page__wrapper ps-4 m-0">
        <Col md={4}>
        <div className="contacts-page__content">
              <p className="contacts-page__title">КОНТАКТИ</p>
              <hr className="contacts-page__hr" />
              <p className="contacts-page__address">
                01015&nbsp; м. Київ, вул. Лаврська, 16
              </p>
              <p className="contacts-page__phone">(044) 351 00 10</p>
              <p>&nbsp;</p>
              <div className="contacts-page__email">
                <a className="contacts-email" href="mailto:info@solydarnist.org">
                  {" "}
                  info@solydarnist.org
                </a>
                <a className="contacts-info" href="mailto: press@solydarnist.org">
                  press@solydarnist.org
                </a>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}
