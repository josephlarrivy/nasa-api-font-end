import React, { useEffect, useState } from "react";

import '../styles/NavDropdownElement.css'

const NavDropdownElement = ({ text, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div id="nav-dropdown-element-container">
      <h4 onClick={toggleDropdown}>{text} &#9662;</h4>
      {isOpen && (
        <div id="nav-dropdown-links-container">
          {links.map((link, index) => (
            <a key={index} href={link.url}>{link.text}</a>
          ))}
        </div>
      )}
    </div>
  );

}

export default NavDropdownElement;
