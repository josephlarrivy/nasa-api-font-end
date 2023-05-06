import React from "react";
import { Link } from "react-router-dom";

import '../styles/Nav.css'
import NavDropdownElement from "./NavDropdownElement";

const Nav = ({navColor, textColor}) => {
  return (
    <div id="navbar-container"
      style={{ backgroundColor: navColor }}
    >
      <style>
        {`#navbar-container * {color: ${textColor}}`}
      </style>




      {/* <div id="navbar-links-container">
        <Link to="/">
          <p>Home</p>
        </Link>
      </div> */}

      <div id="navbar-dropdowns-container">
        <NavDropdownElement
          navColor={navColor}
          textColor={textColor}
          text='Home'
          links={[
            { 'text': 'Home', 'url': '/' },
            { 'text': 'test2', 'url': '/test2' },
            { 'text': 'test2', 'url': '/test2' },
          ]} />
        
        <NavDropdownElement
          navColor={navColor}
          textColor={textColor}
          text='Planet Photos' 
          links={[
            { 'text': 'Mercury', 'url': '/photos/mercury' },
            { 'text': 'Venus', 'url': '/photos/venus' },
            { 'text': 'Earth', 'url': '/photos/earth' },
            { 'text': 'Mars', 'url': '/photos/mars' },
            { 'text': 'Jupiter', 'url': '/photos/jupiter' },
            { 'text': 'Saturn', 'url': '/photos/saturn' },
            { 'text': 'Uranus', 'url': '/photos/uranus' },
            { 'text': 'Neptune', 'url': '/photos/neptune' },
            { 'text': 'Earth\'s Moon', 'url': '/photos/moon' },
          ]}
        />
        <NavDropdownElement
          navColor={navColor}
          textColor={textColor}
          text='Missions'
          links={[
            { 'text': 'Artemis', 'url': '/missions/artemis' },
            { 'text': 'International Space Station', 'url': '/missions/iss' },
            { 'text': 'Mars Rovers', 'url': '/missions/mars' },
            { 'text': 'Apollo', 'url': '/missions/apollo' },
          ]} />
        <NavDropdownElement
          navColor={navColor}
          textColor={textColor}
          text='Interactive'
          links={[
            { 'text': 'Mars Sols', 'url': '/photos/mars/sols' },
            { 'text': 'Near Earth Objects', 'url': '/neo/main' },
            { 'text': 'Satellite Tracking', 'url': '/earthorbitingobjects' },
          ]} />
        <NavDropdownElement
          navColor={navColor}
          textColor={textColor}
          text='Placeholder'
          links={[
            { 'text': 'test2', 'url': '/test2' },
            { 'text': 'test2', 'url': '/test2' },
            { 'text': 'test2', 'url': '/test2' },
            { 'text': 'test2', 'url': '/test2' },
        ]} />
        {/* <NavDropdownElement
          navColor={navColor}
          textColor={textColor}
          text='Space Weather'
          links={[
            { 'text': 'Coronal Mass Ejections', 'url': '/donki/CME' },
            { 'text': 'Geomagnetic Storms', 'url': '/donki/GST' },
            { 'text': 'Interplanetary Shocks', 'url': '/donki/IPS' },
            { 'text': 'Solar Flares', 'url': '/donki/FLR' },
            { 'text': 'Solar Energetic Particles', 'url': '/donki/SEP' },
            { 'text': 'Magnetopause Crossings', 'url': '/donki/MPC' },
            { 'text': 'Radiation Belt Enhancements', 'url': '/donki/RBE' },
            { 'text': 'WSA+EnlilSimulation', 'url': '/donki/WSAEnlilSimulations' }
        ]} /> */}
        
      </div>
      
    </div>
  )
}
export default Nav;