import React, { useState, useEffect } from "react";
import Nav from "../common/Nav";

import '../styles/ImageSearch.css'
import Footer from "../common/Footer";
import NASA_DATA_REQUEST from "../api/api";
import { useParams } from "react-router-dom";

const ImageSearch = () => {

  const {term} = useParams()
  const [imagesOuterArr, setImagesOuterArr] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState(null)


  useEffect(() => {
    console.log(term)
    const getData = async () => {
      const data = await NASA_DATA_REQUEST.queryImages(term)

      let imagesArr = []
      let imagesSubset = []

      for (let item of data) {
        if (item.links && item.links[0] && item.links[0].href) {
          imagesSubset.push({
            'title': item.data[0].title,
            'description': item.data[0].description,
            'link': item.links[0].href
          })
          if (imagesSubset.length === 5) {
            imagesArr.push(imagesSubset)
            imagesSubset = []
          }
        }
      }
      setImagesOuterArr(imagesArr)
    }
    getData()
  }, [])

  const setSelectedImageData = (imageUrl, text) => {
    setSelectedImage(imageUrl)
    setSelectedCaption(text)
  }


  return (
    <div id="images-page-container">
      <Nav navColor='black' textColor='white' />
      <h1>{term.toUpperCase()} IMAGES</h1>
      <div className="search-photos-container">
        {imagesOuterArr && imagesOuterArr.map(innerArr => {
          return (
            <div className="search-photos-group-container">
              <div className="image-one">
                <img src={innerArr[0].link}
                  onClick={() => 
                    setSelectedImageData(innerArr[0].link, innerArr[0].description)}
                />
              </div>
              <div className="search-photos-group-inner-right-container">
                <div className="images-right-top">
                  <div className="image-two">
                    <img src={innerArr[1].link}
                      onClick={() => 
                        setSelectedImageData(innerArr[1].link, innerArr[2].description)}
                    />
                  </div>
                  <div className="image-three">
                    <img src={innerArr[2].link}
                      onClick={() => 
                        setSelectedImageData(innerArr[2].link, innerArr[2].description)}
                    />
                  </div>
                </div>
                <div className="images-right-bottom">
                  <div className="image-four">
                    <img src={innerArr[3].link}
                      onClick={() => 
                        setSelectedImageData(innerArr[3].link, innerArr[3].description)}
                    />
                  </div>
                  <div className="image-five">
                    <img src={innerArr[4].link}
                      onClick={() => 
                        setSelectedImageData(innerArr[4].link, innerArr[4].description)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {selectedImage && (
        <div className="image-overlay">
          <div className="image-overlay-inner-container">
            <img src={selectedImage} />
            <br></br>
            <p><b>Description:</b></p>
            <p>{selectedCaption}</p>
          </div>
          <button onClick={() => setSelectedImage(null)} id='close-overlay-button'>Close Image</button>
        </div>
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer navColor='black' textColor='white' />
    </div>
  )
}

export default ImageSearch;