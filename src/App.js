import React from 'react';
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import {bicycles} from "./actions/Bicycles"
import Bicycles from "./components/Bicycles"
import SingleBicycle from "./components/SingleBicycle"
import {helmets} from "./actions/Helmets"
import Navbar from "./components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div>
   <Router>
      <div>
      <Navbar/>

        <Switch>
          <Route path="/bicycles">
            <Bicycles bicycles={bicycles} helmets={helmets}/>
          </Route>
          <Route path="/">
          <Homepage bicycles={bicycles} helmets={helmets}/>
          </Route>
        </Switch>

        <Footer/>

      </div>
    </Router>

    </div>
  );
}

export default App;
