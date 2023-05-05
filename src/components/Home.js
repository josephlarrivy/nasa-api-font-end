import React, { useState, useEffect } from "react";
import Nav from "../common/Nav";

import '../styles/Home.css'
import Footer from "../common/Footer";
import BallMoveDiv from "../helpers/BallMoveDiv";
import NASA_DATA_REQUEST from "../api/api";

const Home = () => {


  useEffect(() => {
    // const getData = async () => {
    //   const data = await NASA_DATA_REQUEST.getCoronalMassEjectionData()
    //   console.log(data)
    // }
    // getData()
    // const getData = async () => {
    //   const data = await NASA_DATA_REQUEST.getCoronalMassEjectionAnalysisData()
    //   console.log(data)
    // }
    // getData()
    // const getData = async () => {
    //   const data = await NASA_DATA_REQUEST.getGeomagneticStormData()
    //   console.log(data)
    // }
    // getData()
    // const getData = async () => {
    //   const data = await NASA_DATA_REQUEST.getInterplanetaryShockData()
    //   console.log(data)
    // }
    // getData()
    // const getData = async () => {
    //   const data = await NASA_DATA_REQUEST.getSolarFlareData()
    //   console.log(data)
    // }
    // getData()
    // const getData = async () => {
    //   const data = await NASA_DATA_REQUEST.getMagnetopauseCrossingData()
    //   console.log(data)
    // }
    // getData()
    // const getData = async () => {
    //   const data = await NASA_DATA_REQUEST.getRadiationBeltEnhancementData()
    //   console.log(data)
    // }
    // getData()
    // const getData = async () => {
    //   const data = await NASA_DATA_REQUEST.getWSAEnlilSimulationData()
    //   console.log(data)
    // }
    // getData()
    const getData = async () => {
      const data = await NASA_DATA_REQUEST.getDokiNotificationsData()
      console.log(data)
    }
    getData()
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