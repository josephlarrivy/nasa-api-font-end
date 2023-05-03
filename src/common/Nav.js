import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/Nav.css";
import Test1 from "../components/Test1";
import Test2 from "../components/Test2";

const Nav = () => {
  const location = useLocation();
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    setAnimateContent(true);
    // Reset the animateContent state after 1 second
    const timeoutId = setTimeout(() => setAnimateContent(false), 1000);
    return () => clearTimeout(timeoutId);
  }, [location]);

  let pageContent;
  switch (location.pathname) {
    case "/test1":
      pageContent = <Test1 />;
      break;
    case "/test2":
      pageContent = <Test2 />;
      break;
    default:
      pageContent = <Test1 />;
  }

  return (
    <>
    <div id="navbar-container">
      <p><Link to="/test1">Test1</Link></p>
      <p><Link to="/test2">Test2</Link></p>
    </div>

    <div id="page-content" className={animateContent ? "animate" : ""}>
      {pageContent}
    </div>
    </>
  );
};

export default Nav;