import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import { CiClock2 } from "react-icons/ci";


export default function Publication({ item, big, list, segment }) {
  return (
    <Col md={big ? 12 : 6}>
      <Card
        key={item.id}
        style={{
          height: "100%",
          border: "none",
          textAlign: "left",
          fontSize: "0.9rem",
        }}
      >
        <Card.Body>
          {list ? (
            <>
              <Link to={`/eurosolidarity/category/${segment}/${item.id}`}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{
                    minWidth: "230px",
                    minHeight: "160px",
                    cursor: "pointer",
                  }}
                />

                <Card.Title
                  className="publication-title"
                  style={{ fontWeight: "900", cursor: "pointer" }}
                >
                  {item.title}
                </Card.Title>
              </Link>

              <Card.Text className="publication-date">{item.date}</Card.Text>
            </>
          ) : (
            <>
              <Card.Title
                className={!list && big && "publication-title__big "}
                style={{ fontWeight: "900", cursor: "pointer" }}
              >
                {item.title}
              </Card.Title>
              <Card.Text className="publication-date">{item.date}</Card.Text>
              <Card.Img
                variant="top"
                src={item.image}
                style={{
                  minWidth: "230px",
                  minHeight: "160px",
                  cursor: "pointer",
                }}
              />
            </>
          )}
          <div className="card-description">
            {!list && big
              ? item.text?.map((t, index) => (
                  <p className="card-description__text" key={t.id}>
                    {t.paragraph}
                  </p>
                ))
              : item.text?.slice(0, 2).map((t, index) =>
                  index === 1 ? (
                    <p key={t.id} className="card-description__text">
                      {t.paragraph.substring(0, 40)} [...]
                    </p>
                  ) : (
                    <p className="card-description__text">{t.paragraph}</p>
                  )
                )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
