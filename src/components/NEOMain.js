import React, { useEffect, useState } from "react";
import NASA_DATA_REQUEST from "../api/api";
import Footer from "../common/Footer";
import Nav from "../common/Nav";
import DatePickerComponent from "../helpers/DatePickerComponent";

import '../styles/NEOMain.css'

const NEOMain = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [objects, setObjects] = useState(null)

  const mean = 38394215.26
  const min = 1987972.67
  const max = '66,097,539.34'
  const comScreenMax = '1200px'

  useEffect(() => {
    const getData = async () => {
      const resp = await NASA_DATA_REQUEST.getNeoObjectData(selectedDate, selectedDate)
      console.log(resp)
      setObjects(resp)
    }
    getData()
  }, [selectedDate])


  function getRandomNumber() {
    return Math.floor(Math.random() * (-50 - (-350) + 1) + (-350));
  }


  return (
    <div id="neo-main-main-container">
      <Nav navColor='black' textColor='white' />
      <div id='header'>
        <h1>Near Earth Objects</h1>
        <p>NASA's Near-Earth Object (NEO) tracking program is an effort to track and protect earth from potential impacts. NASA uses ground-based radar and telescopes to monitor asteriod, comets, and other small bodies. Object sizes on this diagram are not to scale. If they were to scale with their distance from earth, they would be too small to see.</p>
      </div>

      <p>Select a date to see recorded near earth objects and their distance from earth.</p>
      <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>

      <div id="visualizer-container">
        <div id="earth">
          <h4>Earth</h4>
        </div>
        {objects && objects.map(object => {
          const marginLeft = object.distance / 55000
          // const marginLeft = 300
          return(
            <div
              id="object"
              style={{marginLeft: marginLeft, marginTop: getRandomNumber()}}
            >
              <p>{object.name}</p>
              <p>{parseInt(object.distance)} km</p>
            </div>
          )
        })}

      </div>



      <Footer navColor='black' textColor='white' />
    </div>
  )
}

export default NEOMain;