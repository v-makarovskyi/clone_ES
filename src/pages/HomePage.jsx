import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "../components/Slider";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
import BlockVideo from "../components/BlockVideo";
import Articles from "../components/Articles";

export default function HomePage() {
  return (
    <div className="home">
      <Container className="home-container">
        <Row>
          <Col md={8}>
            <div className="slider-wrapper">
              <Slider />
            </div>
            <Map /> 
            <BlockVideo />
          </Col>
          <Col md={4}>
            <SideBar />
          </Col>
        </Row>
          <Articles />
      </Container>
    </div>
  );
}
