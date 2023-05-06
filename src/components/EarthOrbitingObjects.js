import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import satellite from "satellite.js";
import L from 'leaflet';

import Nav from "../common/Nav";
import Footer from "../common/Footer";
import { useParams } from "react-router-dom";

import "../styles/EarthOrbitingObjects.css";
import NASA_DATA_REQUEST from "../api/api";

const EarthOrbitingObjects = () => {

  const { category } = useParams();
  const [satelliteData, setSatelliteData] = useState(null)
  const mapRef = useRef(null);


  useEffect(() => {
    console.log(category);

    const getData = async () => {
      const response = await NASA_DATA_REQUEST.getTleData(25544);
      console.log(response);

      const testSatData = {
        'name': 'International Space Station',
        'latitude': response.latitude,
        'longitude': response.longitude
      }

      setSatelliteData([testSatData])

    };
    getData();
  }, []);


  function handleSetShowSatellite(text) {
    console.log(text);
  }







  const customIcon = L.icon({
    iconUrl: 'https://img.icons8.com/?size=512&id=111524&format=png',
    iconSize: [50, 50],
  });


  return (
    <div id="earth-orbiting-objects-data-main-container">
      <div id="nav-earth-orbiting-objects-container">
        <Nav navColor="black" textColor="white" />
      </div>
      <div id="earth-orbiting-objects-data-inner-container">
        <div id="satellites-toggle-selectors-container">
          <p>Click on a satellite name to show its current orbital location.</p>
          <div id="toggle-buttons-container">
            <button className="active" onClick={() => handleSetShowSatellite('test1')}>test1</button>
            <button className="inactive" onClick={() => handleSetShowSatellite('test2')}>test2</button>
          </div>
        </div>
        <div id="satellites-map-container">
          <MapContainer
            center={[0, 0]}
            zoom={2}
            style={{
              height: "85vh",
              width: "100vw",
              marginTop: "5vh",
              zIndex: 0,
              position: 'relative'
            }}
            scrollWheelZoom={false}
            whenCreated={(mapInstance) => {
              mapRef.current = mapInstance;
            }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {satelliteData &&
              satelliteData.map((satellite) => (
                <Marker
                  position={[satellite.latitude, satellite.longitude]}
                  key={satellite.name}
                  icon={customIcon}
                >
                  <Popup>
                    <b>{satellite.name}</b>
                    <br />
                    Lat: {satellite.latitude.toFixed(2)}
                    <br />
                    Lng: {satellite.longitude.toFixed(2)}
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>
      <Footer navColor="black" textColor="white" />
    </div>
  );
};

export default EarthOrbitingObjects;
