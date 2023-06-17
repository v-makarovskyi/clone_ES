import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import map_ua from "../assets/map/map_ua.png";

import { areaCoords } from "../data/map_assets_data";


import { regions } from "../data/regions";
 
export default function Map() {
  
  return (
    <div className="map">
      <div className="map-wrapper">
        <p className="map-wrapper__heading">ТЕРРИТОРИАЛЬНЫЕ ОРГАНИЗАЦИИ</p>
        <hr />
        <div className="map-ukraine__wrapper">
          <div className="map-ua_1">
            <div className="map-ukraine__wrapper" id="map-ua_1">
              <img className="map-ukraine" src={map_ua} alt="карта Украины" useMap="#regions_map" />
            </div>
            <map name="regions_map" id="regions_map">
              {
                areaCoords.map((a) => (
                  <area 
                    key={a.id}
                    shape={a.shape}
                    coords={a.coords}
                    alt={a.alt}
                    title={a.title}
                    href={a.href}
                    image_id={a.image_id}
                  />
                ))
              }
            </map>
          </div>
        </div>
      </div>
      <div className="regions">
        <Form.Select
          size="sm"
          aria-label="regions selected"
          onChange={(e) => (window.location.href = e.target.value)}
        >
          <option>Виберіть область</option>
          {regions.map((region) => (
            <option key={region.id} value={region.value}>
              {region.title}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
}

