import React from "react";
import { Routes, Route } from 'react-router-dom'
import Test1 from "../components/Test1";
import Test2 from "../components/Test2";

const AppRoutes = () => {

  return (
    <Routes>
      <Route exact path="/test1"
        element={<Test1 />}
      />
      <Route exact path="/test2"
        element={<Test2 />}
      />
    </Routes>
  )
}

export default AppRoutes;