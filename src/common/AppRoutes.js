import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "../components/Home";
import MarsPhotos from "../components/MarsPhotos";
import Test1 from "../components/Test1";
import Test2 from "../components/Test2";

const AppRoutes = () => {

  return (
    <Routes>
      <Route exact path="/"
        element={<Home />}
      />
      <Route exact path="/test1"
        element={<Test1 />}
      />
      <Route exact path="/test2"
        element={<Test2 />}
      />
      <Route exact path="/photos/mars"
        element={<MarsPhotos />}
      />
    </Routes>
  )
}

export default AppRoutes;