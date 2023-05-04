import React, { useState, useEffect } from "react";
import Nav from "../common/Nav";

import '../styles/Home.css'
import Footer from "../common/Footer";

const Home = () => {

  return (
    <div id="home-container">
      <Nav navColor='white' textColor='black' />
     

      <Footer navColor='white' textColor='black' />
    </div>
  )
}

export default Home;