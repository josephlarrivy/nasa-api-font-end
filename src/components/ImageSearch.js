import React, { useState, useEffect } from "react";
import Nav from "../common/Nav";

import '../styles/Home.css'
import '../styles/ImageSearch.css'
import Footer from "../common/Footer";
import NASA_DATA_REQUEST from "../api/api";
import { useParams } from "react-router-dom";

const ImageSearch = () => {

  const {term} = useParams()
  const [images, setImages] = useState(null)

  useEffect(() => {
    console.log(term)
    const getData = async () => {
      const data = await NASA_DATA_REQUEST.queryImages(term)
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

  return (
    <div id="home-container">
      <Nav navColor='white' textColor='black' />
      <h1>{term.toUpperCase()} IMAGES</h1>
      <div className="search-photos-container">
        {images && images.map(image => {
          return (
            <div className="search-photo-container">
                <img src={image.link} alt={image.description} />
                <p><strong>Title</strong></p>
                <p>{image.title}</p>
                <p><strong>Description</strong></p>
                <p>{image.description}</p>
            </div>
          )
        })}
      </div>
      <Footer navColor='white' textColor='black' />
    </div>
  )
}

export default ImageSearch;