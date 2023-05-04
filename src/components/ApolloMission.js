import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import NASA_DATA_REQUEST from "../api/api";
import Footer from "../common/Footer";
import Nav from "../common/Nav";

import '../styles/ApolloMission.css'

const ApolloMission = () => {

  const [images, setImages] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await NASA_DATA_REQUEST.queryImages('apollo')
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

  const videoIdVideoOne = 'XTBHkR_tmKo';
  const optsVideoOne = {
    height: '504',
    width: '896'
  };

  const videoIdVideoTwo = 'BafW1LEAocg';
  const optsVideoTwo = {
    height: '504',
    width: '896'
  };

  return (
    <div id="apollo-main-container">
      <Nav navColor='white' textColor='black' />
      <img src={'https://cms-assets.theasc.com/Apollo-11-as11-40-5902orig-Featured.jpg'}/>
      <div id="apollo-video-container">
        <YouTube videoId={videoIdVideoOne} opts={optsVideoOne} />
      </div>
      <br></br><br></br>
      <br></br><br></br>
      <div id="apollo-mission-text-one">
        <h1>The Apollo Program</h1>
        <p>The Apollo program was a series of human spaceflight missions conducted by NASA between 1961 and 1975, with the goal of landing astronauts on the Moon and returning them safely to Earth. The program included a total of 17 missions, including 6 lunar landings and several manned and unmanned missions in Earth orbit.</p>
      </div>
      <br></br><br></br>

      <div>
        {images && images.slice(10, 14).map((image, index) => {
          const isEven = index % 2 === 0; // check if the index is even
          const containerClassName = isEven ? 'apollo-image-container-even' : 'apollo-image-container-odd';
          return (
            <div className={containerClassName}>
              <div className="apollo-photo-container">
                <img src={image.link} alt={image.description} />
              </div>
              <div className="apollo-image-caption-container">
                <p><strong>Description</strong></p>
                <p>{image.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div id="apollo-video-container">
        <YouTube videoId={videoIdVideoTwo} opts={optsVideoTwo} />
      </div>

      <br></br><br></br>
      <br></br><br></br>
      <div id="apollo-mission-text-one">
        <p>The Apollo program was a major achievement in human space exploration, with the first manned mission (Apollo 7) launching in 1968 and the first Moon landing (Apollo 11) taking place in 1969. The program involved a massive effort of scientific research, engineering development, and astronaut training, and led to significant advancements in aerospace technology and materials science. However, the program was also associated with several tragic incidents, including the Apollo 1 fire in 1967 which claimed the lives of three astronauts, and was ultimately discontinued due to budgetary constraints and shifting priorities. The legacy of the Apollo program continues to inspire future space exploration initiatives and scientific research.</p>
      </div>

      <br></br><br></br>

      <div>
        {images && images.slice(16, 20).map((image, index) => {
          const isEven = index % 2 === 0; // check if the index is even
          const containerClassName = isEven ? 'apollo-image-container-even' : 'apollo-image-container-odd';
          return (
            <div className={containerClassName}>
              <div className="apollo-photo-container">
                <img src={image.link} alt={image.description} />
              </div>
              <div className="apollo-image-caption-container">
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

export default ApolloMission;