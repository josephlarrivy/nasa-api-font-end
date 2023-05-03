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
          text='Photos' 
          links={[
            { 'text' : 'Mars', 'url' : '/photos/mars'},
            { 'text': 'test1', 'url': '/test1' },
            { 'text': 'test1', 'url': '/test1' },
          ]}
        />
        <NavDropdownElement
          text='dropdown2'
          links={[
            { 'text': 'test2', 'url': '/test2' },
            { 'text': 'test2', 'url': '/test2' },
            { 'text': 'test2', 'url': '/test2' },
          ]} />
        <NavDropdownElement text='dropdown3' links={[
          { 'text': 'test2', 'url': '/test2' },
          { 'text': 'test2', 'url': '/test2' },
          { 'text': 'test2', 'url': '/test2' },
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