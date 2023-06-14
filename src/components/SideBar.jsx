import React from "react";
import news1 from "../assets/images/news/news1.jpeg";
import { CiClock2 } from "react-icons/ci";
import { news } from "../data/news";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <p className="sidebar-heading">НОВИНИ</p>
        <hr />
        {news.map((item) => (
          <div key={item.id} className="sidebar-item">
            <div className="sidebar-item__content">
              <img src={item.images[0]} alt="news1" className="img-fluid sidebar-img" />
              <p>{item.title}</p>
            </div>
            <div className="sidebar-item__time">
              <CiClock2 style={{ fontSize: "12px", marginRight: "7px" }} />
              <span style={{ fontSize: "12px" }}>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
