import React, {useEffect, useState} from "react";
import YouTube from 'react-youtube';
import NASA_DATA_REQUEST from "../api/api";
import Footer from "../common/Footer";
import Nav from "../common/Nav";

import '../styles/ArtemisMission.css'

const ArtemisMission = () => {

  const [images, setImages] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await NASA_DATA_REQUEST.queryImages('artemis')
      console.log(data)

      let imagesArr = []

      for (let item of data) {
        if (item.links && item.links[0] && item.links[0].href) {
          imagesArr.push(
            {
              'title': item.data[0].title,
              'description': item.data[0].description,
              'link': item.links[0].href
            }
          )
        }
      }
      setImages(imagesArr)
    }
    getData()
  }, [])

  const videoIdVideoOne = 'wKwoBudYIiI';
  const optsVideoOne = {
    height: '504',
    width: '896'
  };

  const videoIdVideoTwo = 'jrDv0OdMt5s';
  const optsVideoTwo = {
    height: '504',
    width: '896'
  };

  return (
    <div id="artemis-main-container">
      <Nav navColor='white' textColor='black'/>
      <img src={'https://www.nasa.gov/sites/default/files/thumbnails/image/artemis_logo_0.png'} />
      <div id="artemis-video-container">
        <YouTube videoId={videoIdVideoOne} opts={optsVideoOne} />
      </div>
      <br></br><br></br>
      <br></br><br></br>
      <div id="artemis-mission-text-one">
        <h1>The Artemis Program</h1>
        <p>The Artemis program is a NASA-led initiative to return humans to the Moon and establish a sustainable presence there, with the goal of eventually sending astronauts to Mars. The program includes several phases, including the development of new technologies and systems, the launch of robotic missions to the Moon to prepare for human exploration, and humans on the lunar surface by 2024.</p>
        <br></br><br></br>
        {/* <p>Artemis aims to advance scientific understanding, demonstrate new technologies, and inspire the next generation of space explorers while also supporting international partnerships and commercial opportunities.</p> */}
      </div>
      <br></br><br></br>

      <div>
        {images && images.slice(10, 14).map((image, index) => {
          const isEven = index % 2 === 0; // check if the index is even
          const containerClassName = isEven ? 'artemis-image-container-even' : 'artemis-image-container-odd';
          return (
            <div className={containerClassName}>
              <div className="artemis-photo-container">
                <img src={image.link} alt={image.description} />
              </div>
              <div className="artemis-image-caption-container">
                <p><strong>Description</strong></p>
                <p>{image.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      
      <div id="artemis-video-container">
        <YouTube videoId={videoIdVideoTwo} opts={optsVideoTwo} />
      </div>

      <br></br><br></br>
      <br></br><br></br>
      <div id="artemis-mission-text-one">
        <p>Artemis aims to advance scientific understanding, demonstrate new technologies, and inspire the next generation of space explorers while also supporting international partnerships and commercial opportunities.</p>
      </div>

      <br></br><br></br>

      <div>
        {images && images.slice(16, 20).map((image, index) => {
          const isEven = index % 2 === 0; // check if the index is even
          const containerClassName = isEven ? 'artemis-image-container-even' : 'artemis-image-container-odd';
          return (
            <div className={containerClassName}>
              <div className="artemis-photo-container">
                <img src={image.link} alt={image.description} />
              </div>
              <div className="artemis-image-caption-container">
                <p><strong>Description</strong></p>
                <p>{image.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>

      <Footer navColor='black' textColor='white' />
    </div>
  )
}

export default ArtemisMission;