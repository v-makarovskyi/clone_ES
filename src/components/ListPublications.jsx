import React, { useState } from "react";
import { articles } from "../data/articles";
import {Row} from "react-bootstrap";
import Publication from "./Publication";



export default function ListPublications() {
  let lengthArticles = 2

  return (
    <div className="articles">
      <p className='blockVideo-heading'>ПРЯМА МОВА</p>
      <hr />
      <Row>
         {articles.slice(0, lengthArticles).map((article) => (
        <Publication key={article.id} article={article} />
      ))}
      </Row>
     
    </div>
  );
}
