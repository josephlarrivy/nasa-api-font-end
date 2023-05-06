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
  const [satelliteCoordinateData, setSatelliteCoordinateData] = useState(null)
  const [noradNumsArray, setNoradNumsArray] = useState([])
  const [currentlyDisplayedSatNames, setCurrentlyDisplayedSatNames] = useState([])
  const mapRef = useRef(null);


  useEffect(() => {
    console.log(category);

    const getData = async () => {
      const tempLatLonArray = [];
      const tempNameData = [];
      for (let id of noradNumsArray) {
        const response = await NASA_DATA_REQUEST.getTleData(id);
        console.log(response);

        const satData = {
          'name': response.name,
          'latitude': response.latitude,
          'longitude': response.longitude
        }

        tempLatLonArray.push(satData)
        tempNameData.push(response.name)
      }
      
      setSatelliteCoordinateData([...tempLatLonArray])
      setCurrentlyDisplayedSatNames([...tempNameData])
    };
    getData();
  }, [noradNumsArray]);


  function handleSetShowSatellite(idNum, array) {
    const index = array.indexOf(idNum);
    if (index === -1) {
      array.push(idNum);
    } else {
      array.splice(index, 1);
    }
    return setNoradNumsArray([...array]);
  }

  useEffect(() => {
    console.log(currentlyDisplayedSatNames)
  }, [currentlyDisplayedSatNames])


  const satellitesArray = [
    { id: 25544, name: "International Space Station" },
    { id: 43700, name: "Chinese space station Tiangong-2" },
    { id: 43711, name: "Northrop Grumman's NG-12 Cygnus" },
    { id: 43215, name: "OneWeb Satellite" },
    { id: 28485, name: "NASA's Chandra X-ray Observatory" },
    { id: 25994, name: "NASA's Terra Earth-observing Satellite" }
  ];

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
          <p>Click on a satellite name below to show its current orbital location.</p>
          <p>Once it appears, click the icon to show its name and coordinates.</p>
          <div id="toggle-buttons-container">
            {satellitesArray.map(item => {
              if (noradNumsArray.includes(item.id)) {
                return (
                  <button
                    className="active"
                    onClick={() => handleSetShowSatellite(item.id, noradNumsArray)}>
                    <b>{item.name}</b>
                  </button>
                )
              } else {
                return (
                  <button
                    className="inactive"
                    onClick={() => handleSetShowSatellite(item.id, noradNumsArray)}>
                    {item.name}
                  </button>
                )
              }
            })}
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
            {satelliteCoordinateData &&
              satelliteCoordinateData.map((satellite) => (
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
