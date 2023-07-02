import React from "react";
import ListPublications from "../components/ListPublications";
import { Container } from "react-bootstrap";
import { news } from "../data/news";

export default function News() {
    
  return (
    <Container className="news p-0">
      <ListPublications
        title='Новини'
        big={true}
        list={true}
        content={news}
        articlesQty={news.length}
        segment="news"
      />
    </Container>
  );
}
