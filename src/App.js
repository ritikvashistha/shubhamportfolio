import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path="/shubhamportfolio/" component={Home} />
        {/* <Route exact path="/hotels/rooms/" component={Rooms} />
        <Route exact path="/hotels/rooms/:slug" component={SingleRoom} />
        <Route component={Error} /> */}
      </Switch>
    </div>
  );
}

export default App;
