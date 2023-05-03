import React from "react";
import { Link } from "react-router-dom";

import '../styles/Nav.css'
import NavDropdownElement from "./NavDropdownElement";

const Nav = () => {
  return (
    <div id="navbar-container">

      <div id="navbar-links-container">
        <Link to="/test1">
          <p>test1</p>
        </Link>
        <Link to="/test2">
          <p>test2</p>
        </Link>
        <Link to="/test2">
          <p>test2</p>
        </Link>
        <Link to="/test2">
          <p>test2</p>
        </Link>
        <p>|</p>
      </div>

      <div id="navbar-dropdowns-container">
        <NavDropdownElement 
          text='dropdown1' 
          links={[
            {'text' : 'test1', 'url' : '/test1'},
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
        <NavDropdownElement text='dropdown3' />
        <NavDropdownElement text='dropdown4' />
      </div>
      
    </div>
  )
}
export default Nav;