import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import NASA_DATA_REQUEST from "../api/api";
import Footer from "../common/Footer";
import Nav from "../common/Nav";

import '../styles/MarsMission.css'

const MarsMission = () => {

  const [images, setImages] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await NASA_DATA_REQUEST.queryImages('mars planet')
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

  const videoIdVideoOne = '6qA9iaAUo8k';
  const optsVideoOne = {
    height: '504',
    width: '896'
  };

  const videoIdVideoTwo = '4czjS9h4Fpg';
  const optsVideoTwo = {
    height: '504',
    width: '896'
  };

  return (
    <div id="mars-main-container">
      <Nav navColor='white' textColor='black' />
      <img src={'https://www.worldatlas.com/upload/bb/c3/32/shutterstock-1041249343.jpg'} />
      <div id="mars-mission-tile">
        <h1>The Mars Exploration Program</h1>
      </div>
      <div id="mars-video-container">
        <YouTube videoId={videoIdVideoOne} opts={optsVideoOne} />
      </div>
      <br></br><br></br>
      <br></br><br></br>
      <div id="mars-mission-history-header">
        <h1>Mars Rover History</h1>
      </div>
      <div className="mars-history-banner" id="mars-mission-text-two">
        <h4>Sojourner</h4>
        <p>Launched in 1996 as part of the Mars Pathfinder mission, Sojourner was the first rover to operate on Mars. It was a small rover that traveled a total of 100 meters during its 83-day mission.</p>
      </div>
      <div className="mars-history-banner" id="mars-mission-text-three">
        <h4>Spirit and Opportunity</h4>
        <p>Launched in 2003 as part of the Mars Exploration Rover mission, Spirit and Opportunity were two rovers designed to explore Mars' surface and geology. Both rovers far outlived their original mission timeline, with Spirit operating until 2010 and Opportunity until 2018.</p>
      </div>
      <div className="mars-history-banner" id="mars-mission-text-four">
        <h4>Curiosity</h4>
        <p>Launched in 2011 as part of the Mars Science Laboratory mission, Curiosity is a larger and more sophisticated rover than its predecessors. It is equipped with a variety of scientific instruments to study Mars' geology, atmosphere, and potential habitability. Curiosity is still operational on Mars and has been exploring the planet's Gale Crater since 2012.</p>
      </div>
      <div className="mars-history-banner" id="mars-mission-text-five">
        <h4>Perseverance</h4>
        <p>Launched in 2020 as part of the Mars 2020 mission, Perseverance is the most recent rover to be sent to Mars. It is similar in size and design to Curiosity but is equipped with more advanced scientific instruments and technology, including a sample caching system that will collect and store samples of Martian rocks and soil for future return to Earth.</p>
      </div>
      <br></br><br></br>

      <div>
        {images && images.slice(10, 14).map((image, index) => {
          const isEven = index % 2 === 0; // check if the index is even
          const containerClassName = isEven ? 'mars-image-container-even' : 'mars-image-container-odd';
          return (
            <div className={containerClassName}>
              <div className="mars-photo-container">
                <img src={image.link} alt={image.description} />
              </div>
              <div className="mars-image-caption-container">
                <p><strong>Description</strong></p>
                <p>{image.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div id="mars-video-container">
        <YouTube videoId={videoIdVideoTwo} opts={optsVideoTwo} />
      </div>

      <br></br><br></br>
      <br></br><br></br>
      <div id="mars-mission-text-one">
        <p>NASA has been involved in the ISS project since its inception in 1998, and has contributed significant resources and expertise to its construction, operation, and maintenance. NASA's ISS missions include the transportation of astronauts and scientific experiments to and from the space station, as well as the coordination and support of ongoing research efforts. These missions have enabled important scientific discoveries in fields such as medicine, materials science, and astrophysics, and have also provided opportunities for international collaboration and cooperation in space exploration. NASA's ISS missions have helped to advance our understanding of the effects of long-duration spaceflight on human health and performance, and have paved the way for future manned missions to destinations such as Mars.</p>
      </div>

      <br></br><br></br>

      <div>
        {images && images.slice(16, 20).map((image, index) => {
          const isEven = index % 2 === 0; // check if the index is even
          const containerClassName = isEven ? 'mars-image-container-even' : 'mars-image-container-odd';
          return (
            <div className={containerClassName}>
              <div className="mars-photo-container">
                <img src={image.link} alt={image.description} />
              </div>
              <div className="mars-image-caption-container">
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

export default MarsMission;