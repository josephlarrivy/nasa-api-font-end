import React, { useState, useEffect } from "react";
import Nav from "../common/Nav";

import '../styles/Home.css'
import Footer from "../common/Footer";
import BallMoveDiv from "../helpers/BallMoveDiv";
import NASA_DATA_REQUEST from "../api/api";

const Home = () => {

  return (
    <div id="homepage-container">
      <Nav navColor='white' textColor='black' />
      <div id="homepage-inner-container">

      <div id="homepage-text-container">
        <h1>Welcome</h1>
        <h4>Welcome! This website provides a collection of stunning images of planets, spacecraft, and satellites, all retrieved from the NASA API.</h4>
        <h4>In addition, you can track the location of satellites in real-time using the satellite tracking data. Explore the fascinating history of space exploration with dedicated pages on the Artemis, Mars, Apollo, and ISS missions. Enjoy the captivating imagery and learn more about the mysteries of our solar system.</h4>
        <p id="homepage-link">written and maintained by <a href="https://josephlarrivy.herokuapp.com/" target='_blank'>www.josephlarrivy.com</a></p>
      </div>
      

      </div>
      <Footer navColor='white' textColor='black' />
    </div>
  )
}

export default Home;