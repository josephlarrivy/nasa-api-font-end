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
            { 'text': 'Satellite Tracking', 'url': '/earthorbitingobjects' },
            { 'text': 'Mars Sols', 'url': '/photos/mars/sols' },
            { 'text': 'Near Earth Objects', 'url': '/neo/main' },
          ]} />
        <NavDropdownElement
          navColor={navColor}
          textColor={textColor}
          text='Spacecraft Photos'
          links={[
            { 'text': 'Space Shuttle', 'url': '/photos/space shuttle' },
            { 'text': 'International Space Station', 'url': '/photos/international space station' },
            { 'text': 'James Webb Space Telescope', 'url': '/photos/james webb space telescope' },
            { 'text': 'Juno Jupiter Prode', 'url': '/photos/juno' },
            { 'text': 'New Horizons Probe', 'url': '/photos/new horizons probe' },
            { 'text': 'Voyager 1 Probe', 'url': '/photos/voyager 1' },
          ]}
        />
      </div>
      
    </div>
  )
}
export default Nav;