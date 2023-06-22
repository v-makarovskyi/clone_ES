import React, { useState } from "react";
import { articles } from "../data/articles";
import { Card, Row, Col } from "react-bootstrap";

function ArticleCard({ article }) {
  return (
    <Col md={6} className="p-4">
      <Card style={{height:'100%', border:'none', textAlign:'left', fontSize:'0.9rem'}}>
        <Card.Img
          variant="top"
          src={article.image}
          style={{minWidth:'230px', minHeight:'160px', cursor:'pointer'}}
        />
        <Card.Body>
          <Card.Title style={{fontWeight:'900', cursor:'pointer'}}>{article.title}</Card.Title>
          <Card.Text>{article.date}</Card.Text>
          <div className="card-text">
            {
              article.text?.slice(0,2).map((t, index) => (
                <p key={t.id}>{index === 1 ? t.paragraph.substring(0, 40) + ' [...]': t.paragraph}</p>
              ))
            }
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function Articles() {
  const [lengthArticles, setLengthArticles] = useState(2)

  return (
    <div className="articles">
      <p className='blockVideo-heading'>ПРЯМА МОВА</p>
      <hr />
      <Row>
         {articles.slice(0, lengthArticles).map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      </Row>
     
    </div>
  );
}
