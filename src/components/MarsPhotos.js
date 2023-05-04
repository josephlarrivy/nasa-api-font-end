import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import NASA_DATA_REQUEST from "../api/api";
import NASA_API from "../api/api";
import Footer from "../common/Footer";
import Nav from "../common/Nav";


import '../styles/MarsPhotos.css'


const MarsPhotos = () => {

  const [photos, setPhotos] = useState(null)
  const [sol, setSol] = useState(1000);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    const getData = async () => {
      const data = await NASA_DATA_REQUEST.getCuriosityPhotos(sol)
      console.log(data)
      setPhotos(data.photos.slice(10,49))
    }
    getData()
  }, [])

  const handleChange = (event) => {
    const value = event.target.value;
    setSol(value)
  };

  const findPhotos = async () => {
    const data = await NASA_DATA_REQUEST.getCuriosityPhotos(sol)
    console.log(data)
    setPhotos(data.photos)
  }



  return (
    <div id="home-container">
      <Nav navColor='black' textColor='white' />
        <div id="sol-select-container">
          <h1>Mars Sols</h1>
          <p>Since Mars is farther away from the sun than Earth, it takes longer to complete one orbit around the sun. As a result, a Martian year is longer than an Earth year, lasting about 687 Earth days.</p>
          <p>A Mars sol is a solar day on Mars, which is the time it takes for the planet to rotate once on its axis and return to the same position relative to the sun. One sol on Mars is approximately 24 hours and 39 minutes long, which is slightly longer than a day on Earth.</p>
          <p>Pick a sol between 1 and 300 to see images from the Coriosity Rover on that sol.</p>
          <div id="sol-picker">
            <input
              type="number"
              value={sol}
              onChange={handleChange}
              min={1}
              max={3000}
            />
            <button onClick={findPhotos}>Go</button>
          </div>
        </div>
        <div className="mars-photos-container">
          {photos && photos.map(photo => {
            return (
              <div className="photo-container">
                <img
                  src={photo.img_src}
                  alt={`Mars Rover photo taken on ${photo.earth_date}`}
                  onClick={() =>
                    setSelectedImage(photo.img_src)}
                />
                <p><strong>Rover:</strong> {photo.rover.name}</p>
                <p><strong>Camera:</strong> {photo.camera.full_name}</p>
                <p><strong>Earth Date:</strong> {photo.earth_date}</p>
              </div>
            )
          })}
        </div>
      {selectedImage && (
        <div className="image-overlay">
          <img src={selectedImage} />
          <button onClick={() => setSelectedImage(null)} id='close-overlay-button'>Close Image</button>
        </div>
      )}
      <Footer navColor='white' textColor='black' />
    </div>
  )
}

export default MarsPhotos;