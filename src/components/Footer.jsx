import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Footer() {
  return (
    <>
      <div id="fb-root"></div>
      <Container className="footer">
        <Row className="footer-content">
          <Col sx={4}>
            <div className="contacts">
              <p className="title">КОНТАКТИ</p>
              <hr className="contacts-hr" />
              <p className="contacts-address">
                01015&nbsp; м. Київ, вул. Лаврська, 16
              </p>
              <p className="contacts-phone">(044) 351 00 10</p>
              <p>&nbsp;</p>
              <div className="contacts-email">
                <a className="email" href="mailto:info@solydarnist.org">
                  {" "}
                  info@solydarnist.org
                </a>
                <a className="info" href="mailto: press@solydarnist.org">
                  press@solydarnist.org
                </a>
              </div>
            </div>
          </Col>
          <Col sx={4}>
            <div className="facebook">
              <p className="title">FACEBOOK</p>
              <hr className="facebook-hr" />
              <div id="fb-root"></div>
              <div
                class="fb-page"
                data-href="https://www.facebook.com/EuropeanSolidarity.official"
                data-tabs="timeline"
                data-width="326"
                data-height="600"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/EuropeanSolidarity.official"
                  class="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/EuropeanSolidarity.official">
                    Європейська Солідарність
                  </a>
                </blockquote>
              </div>
            </div>
          </Col>
          <Col sx={4}>
            <div className="twitter">
              <p className="title">TWITTER</p>
              <hr className="contacts-hr" />
              <a
                class="twitter-timeline"
                data-lang="uk"
                data-width="326"
                data-height="600"
                data-theme="light"
                href="https://twitter.com/Euro_Solidarity?ref_src=twsrc%5Etfw"
              >
                Tweets by Euro_Solidarity
              </a>
            </div>
          </Col>
        </Row>
        <Row className="footer-bottom">
            <hr className="hr-bottom"/>
            <p>©2023 - Всі права захищено</p>
        </Row>
      </Container>
    </>
  );
}
