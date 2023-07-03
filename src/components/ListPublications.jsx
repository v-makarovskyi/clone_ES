import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Publication from "./Publication";

export default function ListPublications({
  articlesQty,
  big,
  list,
  content,
  segment,
  title,
}) {
  return (
    <div className="publications">
      <p className="publications-heading">{title}</p>
      <Row>
        {content.slice(0, articlesQty).map((c) => (
          <Publication
            key={c.id}
            item={c}
            big={big}
            list={list}
            segment={segment}
          />
        ))}
      </Row>
    </div>
  );
}
