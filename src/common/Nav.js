import React from "react";
import { Link } from "react-router-dom";

import '../styles/Nav.css'
import NavDropdownElement from "./NavDropdownElement";

const Nav = () => {
  return (
    <div id="navbar-container">

      <div id="navbar-links-container">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/test2">
          <p>test2test2</p>
        </Link>
      </div>

      <div id="navbar-dropdowns-container">
        <NavDropdownElement 
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
          text='dropdown2'
          links={[
            { 'text': 'Mars Sols', 'url': '/photos/mars/sols' },
            { 'text': 'test2', 'url': '/test2' },
            { 'text': 'test2', 'url': '/test2' },
          ]} />
        <NavDropdownElement text='Missions' links={[
          { 'text': 'Apollo', 'url': '/missions/apollo' },
          { 'text': 'Artemis', 'url': '/missions/artemis' },
        ]} />
        <NavDropdownElement text='dropdown4' links={[
          { 'text': 'test2', 'url': '/test2' },
          { 'text': 'test2', 'url': '/test2' },
          { 'text': 'test2', 'url': '/test2' },
        ]} />
      </div>
      
    </div>
  )
}
export default Nav;