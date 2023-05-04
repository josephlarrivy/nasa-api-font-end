import React from "react";
import { Routes, Route } from 'react-router-dom'
import ApolloMission from "../components/ApolloMission";
import ArtemisMission from "../components/ArtemisMission";
import Home from "../components/Home";
import ImageSearch from "../components/ImageSearch";
import IssMission from "../components/IssMission";
import MarsMission from "../components/MarsMission";
import MarsPhotos from "../components/MarsPhotos";
import NEOMain from "../components/NEOMain";
import Test1 from "../helpers/Test1";
import Test2 from "../helpers/Test2";

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
      <Route exact path="/photos/:term"
        element={<ImageSearch />}
      />
      <Route exact path="/photos/mars/sols"
        element={<MarsPhotos />}
      />
      <Route exact path="/missions/artemis"
        element={<ArtemisMission />}
      />
      <Route exact path="/missions/apollo"
        element={<ApolloMission />}
      />
      <Route exact path="/missions/iss"
        element={<IssMission />}
      />
      <Route exact path="/missions/mars"
        element={<MarsMission />}
      />
      <Route exact path="/photos/:term"
        element={<ImageSearch />}
      />
      <Route exact path="/neo/main"
        element={<NEOMain />}
      />
    </Routes>
  )
}

export default AppRoutes;