import React, { useEffect, useState } from "react";
import NASA_DATA_REQUEST from "../api/api";
import Footer from "../common/Footer";
import Nav from "../common/Nav";
import DatePickerComponent from "../helpers/DatePickerComponent";

import '../styles/NEOMain.css'

const NEOMain = () => {

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resp = await NASA_DATA_REQUEST.getNeoObjectData()
      console.log(resp)
    }
    getData()
  }, [])

  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate])


  return (
    <div id="neo-main-main-container">
      <Nav navColor='black' textColor='white' />
      <h1>Near Earth Objects</h1>

      <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>





      <Footer navColor='black' textColor='white' />
    </div>
  )
}

export default NEOMain;