import React from 'react';
import {Outlet, Router,ReactLocation} from "@tanstack/react-location"
import './App.css';
import paths from "./constants/paths"

const location =  new ReactLocation()

const App = () => (
  <div className="App">
  <Router routes={paths} location={location}>
    <Outlet/>
  </Router>
</div>
);

export default App;
