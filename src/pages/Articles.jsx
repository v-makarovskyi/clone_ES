import React, { useState } from "react";
import ListPublications from "../components/ListPublications";
import { articles } from "../data/articles";
import { Container } from "react-bootstrap";

export default function Articles() {
  

  return (
    <Container className="articles p-0">
      <ListPublications
        title='Статтi'
        big={true}
        list={true}
        content={articles}
        articlesQty={articles.length}
        segment="articles"
      />
    </Container>
  );
}
