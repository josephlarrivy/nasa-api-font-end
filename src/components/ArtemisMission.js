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
          // console.log(item.links[0].href);
          // console.log(item.data[0].title);
          // console.log(item.data[0].description);

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

  const videoId = 'wKwoBudYIiI';
  const opts = {
    height: '504',
    width: '896'
  };

  return (
    <div id="artemis-main-container">
      <Nav />
      <div id="artemis-video-container">
        <YouTube videoId={videoId} opts={opts} />
        <div id="artemis-mission-text-header">
          <h1>Artemis</h1>
          <p>The Artemis program is a NASA-led initiative to return humans to the Moon and establish a sustainable presence there, with the goal of eventually sending astronauts to Mars. The program includes several phases, including the development of new technologies and systems, the launch of robotic missions to the Moon to prepare for human exploration, and the landing of the first woman and next man on the lunar surface by 2024. Artemis aims to advance scientific understanding, demonstrate new technologies, and inspire the next generation of space explorers while also supporting international partnerships and commercial opportunities.</p>

        </div>
      </div>
      <div className="artemis-photo-container">
        <div className="artemis-image-conatiner">
          <img src={images[0].link} alt={images[0].description} />
        </div>
        <div className="artemis-image-caption-conatiner">
          <p><strong>Title</strong></p>
          <p>{images[0].title}</p>
          <p><strong>Description</strong></p>
          <p>{images[0].description}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ArtemisMission;