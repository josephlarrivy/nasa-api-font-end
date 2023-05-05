import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import NASA_DATA_REQUEST from "../api/api";

import Nav from "../common/Nav";
import Footer from "../common/Footer";

import '../styles/SpaceWeatherNotifications.css'
import DatePickerComponent from "../helpers/DatePickerComponent";

const SpaceWeatherNotifications = () => {

  const { service } = useParams()
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [invalidSatesWarning, setInvalidDatesWarning] = useState(null)
  const [data, setData] = useState()
  const [loading, setLoading] = useState()

  function validateDateOrder(date1, date2) {
    const [year1, month1, day1] = date1.split('-').map(Number);
    const [year2, month2, day2] = date2.split('-').map(Number);
    const date1Obj = new Date(year1, month1 - 1, day1);
    const date2Obj = new Date(year2, month2 - 1, day2);
    return date1Obj < date2Obj;
  }

  const typeFullName = {
    'CME': 'Coronal Mass Ejections',
    'GST': 'Geomagnetic Storms',
    'IPS': 'Interplanetary Shocks',
    'FLR': 'Solar Flares',
    'SEP': 'Solar Energetic Particles',
    'MPC': 'Magnetopause Crossings',
    'RBE': 'Radiation Belt Enhancements',
    'WSAEnlilSimulations': 'WSA+EnlilSimulations',
    'notifications': ' Other Notifications'
  }

  const typeDescriptions = {
    'CME': 'A Coronal Mass Ejection (CME) is a massive burst of plasma and magnetic field released from the Sun\'s corona. CMEs can cause disturbances in Earth\'s magnetosphere and can lead to geomagnetic storms. The study of CMEs is important for understanding space weather and its potential impacts on human technology and infrastructure.',
    'GST': "A geomagnetic storm is a disturbance in the Earth's magnetic field caused by a solar wind shock wave. When the shock wave reaches Earth, it causes a disturbance in the magnetosphere, which can lead to spectacular aurora borealis (northern lights) displays, as well as disruptions to satellite and radio communications. The intensity of a geomagnetic storm is measured on a scale of 1 to 5, with 5 being the most severe.",
    'IPS': 'An interplanetary shock is a disturbance in the solar wind that can cause changes in the magnetic field and other space weather effects. These shocks are typically caused by coronal mass ejections or other energetic solar events. When they impact the Earth\'s magnetic field, they can cause geomagnetic storms and auroras.',
    'FLR': 'A solar flare is an intense burst of radiation emitted from the sun\'s surface. They are caused by a sudden release of magnetic energy and are classified into three categories based on their strength - C, M, and X, with X being the strongest. Solar flares can cause significant disruptions to power grids, communication systems, and satellite operations.',
    'SEP': 'Solar Energetic Particles (SEPs) are highly energetic charged particles that originate from solar flares and coronal mass ejections (CMEs) in the Sun\'s atmosphere. These particles can travel at near- light speeds and can pose a threat to spacecraft, astronauts, and electronics in space.SEPs are also responsible for the beautiful auroras seen near the Earth\'s poles.',
    'MPC': 'Magnetopause crossing refers to the point where the Earth\'s magnetic field meets and interacts with the solar wind. It occurs at a distance of about 10 Earth radii on the side facing the Sun and is the boundary between the magnetosphere and the solar wind. Magnetopause crossings can result in magnetic reconnection, which can lead to the release of energy in the form of auroras and other space weather events.',
    'RBE': "Radiation Belt Enhancement is a temporary increase in the density of energetic particles within the Earth's radiation belts. It occurs due to various space weather events like solar flares, coronal mass ejections, and geomagnetic storms. The enhancement can pose a threat to satellites, astronauts, and other space assets in low Earth orbit.",
    'WSAEnlilSimulations': 'NASA\'s WSA+ EnlilSimulation is a computer model that predicts the speed and direction of the solar wind in the heliosphere, which helps to forecast space weather events. The model uses data from the Solar Dynamics Observatory and the Solar and Heliospheric Observatory to simulate the behavior of the solar wind. It is used to predict the impact of coronal mass ejections and other space weather events on Earth and other planets.'
  }


  useEffect(() => {
    console.log(service)

    if (selectedStartDate && selectedEndDate) {
      if (validateDateOrder(selectedStartDate, selectedEndDate)) {
        console.log('Date order is valid');
        setInvalidDatesWarning(null)
        setLoading(true)
      } else {
        console.log('Invalid date order');
        setInvalidDatesWarning('End date must be after start date')
      }

      const getData = async () => {
        const resp = await NASA_DATA_REQUEST.getDokiData(service)
        console.log(resp)
        setLoading(false)
        setData(resp)
      }
      getData()

    }
    

    

  }, [selectedStartDate, selectedEndDate])




  return (
    <div id="space-weather-container">
      <Nav navColor='white' textColor='black' />
      <div id="space-weather-inner-container">

        <h1>{typeFullName[service]}</h1>
        <p>{typeDescriptions[service]}</p>
        <br></br>
        <p>Pick a start and end date to see notifications.</p>
        <div id="date-pickers-container">
          <div>
            <p>Start Date</p>
            <DatePickerComponent selectedDate={selectedStartDate} setSelectedDate={setSelectedStartDate} />
          </div>
          <div>
            <p>End Date</p>
            <DatePickerComponent selectedDate={selectedEndDate} setSelectedDate={setSelectedEndDate} />
          </div>
        </div>
        <p>{invalidSatesWarning ? invalidSatesWarning : <br></br>}</p>

        <p>{loading ? 'loading' : <></>}</p>

      </div>
      <Footer navColor='white' textColor='black' />
    </div>
  )
}

export default SpaceWeatherNotifications;