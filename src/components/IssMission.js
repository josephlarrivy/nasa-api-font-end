import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import NASA_DATA_REQUEST from "../api/api";
import Footer from "../common/Footer";
import Nav from "../common/Nav";

import '../styles/IssMission.css'

const IssMission = () => {

  const [images, setImages] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await NASA_DATA_REQUEST.queryImages('iss')
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

  const videoIdVideoOne = 'oLrOnEmy_GA';
  const optsVideoOne = {
    height: '504',
    width: '896'
  };

  const videoIdVideoTwo = 'a-flzdifn54';
  const optsVideoTwo = {
    height: '504',
    width: '896'
  };

  return (
    <div id="iss-main-container">
      <Nav navColor='white' textColor='black' />
      <img src={'https://images.squarespace-cdn.com/content/v1/5f9c4976896349619c5b3d7b/96712156-a98b-4a24-83b7-3b3e266d230f/AdobeStock_356861674.jpeg'} />
      <div id="iss-mission-tile">
        <h1>The International Space Station</h1>
      </div>
      <div id="apollo-video-container">
        <YouTube videoId={videoIdVideoOne} opts={optsVideoOne} />
      </div>
      <br></br><br></br>
      <br></br><br></br>
      <div id="iss-mission-text-one">
        <h1>The International Space Station</h1>
        <p>NASA's International Space Station (ISS) missions are part of a long-term effort to conduct scientific research and develop new technologies in a microgravity environment. The ISS is a habitable artificial satellite that orbits the Earth at an altitude of about 400 kilometers, and is jointly operated by NASA, Roscosmos (the Russian space agency), the European Space Agency (ESA), the Japan Aerospace Exploration Agency (JAXA), and the Canadian Space Agency (CSA).</p>
      </div>
      <br></br><br></br>

      <div>
        {images && images.slice(10, 14).map((image, index) => {
          const isEven = index % 2 === 0; // check if the index is even
          const containerClassName = isEven ? 'iss-image-container-even' : 'iss-image-container-odd';
          return (
            <div className={containerClassName}>
              <div className="iss-photo-container">
                <img src={image.link} alt={image.description} />
              </div>
              <div className="iss-image-caption-container">
                <p><strong>Description</strong></p>
                <p>{image.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div id="iss-video-container">
        <YouTube videoId={videoIdVideoTwo} opts={optsVideoTwo} />
      </div>

      <br></br><br></br>
      <br></br><br></br>
      <div id="iss-mission-text-one">
        <p>NASA has been involved in the ISS project since its inception in 1998, and has contributed significant resources and expertise to its construction, operation, and maintenance. NASA's ISS missions include the transportation of astronauts and scientific experiments to and from the space station, as well as the coordination and support of ongoing research efforts. These missions have enabled important scientific discoveries in fields such as medicine, materials science, and astrophysics, and have also provided opportunities for international collaboration and cooperation in space exploration. NASA's ISS missions have helped to advance our understanding of the effects of long-duration spaceflight on human health and performance, and have paved the way for future manned missions to destinations such as Mars.</p>
      </div>

      <br></br><br></br>

      <div>
        {images && images.slice(16, 20).map((image, index) => {
          const isEven = index % 2 === 0; // check if the index is even
          const containerClassName = isEven ? 'iss-image-container-even' : 'iss-image-container-odd';
          return (
            <div className={containerClassName}>
              <div className="iss-photo-container">
                <img src={image.link} alt={image.description} />
              </div>
              <div className="iss-image-caption-container">
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

export default IssMission;