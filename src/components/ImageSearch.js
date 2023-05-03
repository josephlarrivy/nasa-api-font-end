import React, { useState, useEffect } from "react";
import Nav from "../common/Nav";

import '../styles/Home.css'
import Footer from "../common/Footer";
import NASA_DATA_REQUEST from "../api/api";

const ImageSearch = () => {


  useEffect(() => {
    const getData = async () => {
      const data = await NASA_DATA_REQUEST.queryImages('apollo')
      console.log(data)
    }
    getData()
  }, [])

  return (
    <div id="home-container">
      <Nav />


      <Footer />
    </div>
  )
}

export default ImageSearch;