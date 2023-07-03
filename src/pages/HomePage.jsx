import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "../components/Slider";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
import BlockVideo from "../components/BlockVideo";
import ListPublications from "../components/ListPublications";
import Photoview from "../components/Photoview";
import { articles } from "../data/articles";

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
        <ListPublications
          big={false}
          list={true}
          articlesQty={2}
          content={articles}
          segment="articles"
        />
        <Photoview />
      </Container>
    </div>
  );
}
