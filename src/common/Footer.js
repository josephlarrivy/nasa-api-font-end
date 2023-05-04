import React from "react";

import '../styles/Footer.css'

const Footer = ({navColor, textColor}) => {



  return (
    <div id="footer-container"
      style={{ backgroundColor: navColor }}
    >
      <style>
        {`#footer-container * {color: ${textColor}}`}
      </style>
      <a href="https://josephlarrivy.herokuapp.com/" target='_blank'><p id="my-link">www.josephlarrivy.com</p></a>
      <a href="https://code.nasa.gov/" target='_blank'><p>code.nasa.gov</p></a>
      <a href="https://data.nasa.gov/" target='_blank'><p>data.nasa.gov</p></a>
      <a href="https://api.nasa.gov/" target='_blank'><p>api.nasa.gov</p></a>
    </div>
  )
}

export default Footer;