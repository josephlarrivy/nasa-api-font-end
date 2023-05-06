import React, { useState, useEffect } from "react";
import Nav from "../common/Nav";

import '../styles/Home.css'
import Footer from "../common/Footer";
import BallMoveDiv from "../helpers/BallMoveDiv";
import NASA_DATA_REQUEST from "../api/api";

const Home = () => {


  useEffect(() => {
    
  }, [])

  return (
    <div id="home-container">
      <Nav navColor='white' textColor='black' />
      <div id="home-inner-container">


      </div>
      <Footer navColor='white' textColor='black' />
    </div>
  )
}

export default Home;