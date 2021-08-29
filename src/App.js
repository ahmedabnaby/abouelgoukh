import React from 'react';
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import {bicycles} from "./actions/Bicycles"
import {helmets} from "./actions/Helmets"
import {bikes} from "./actions/Bikes"
import {treadmills} from "./actions/Treadmills"
import {ellipticals} from "./actions/Ellipticals"
import {NH,NC,TH,TH_PT,TH_PT_FREE,SM_CT} from "./actions/SanfeiFitness"
import Bicycles from "./components/Bicycles"
import Bikes from "./components/Bikes"
import Treadmills from "./components/Treadmills"
import Ellipticals from "./components/Ellipticals"
import SanfeiFitness from "./components/SanfeiFitness"
import SingleBicycle from "./components/SingleBicycle"
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
          <Route path="/bikes">
            <Bikes bikes={bikes}/>
          </Route>
          <Route path="/treadmills">
            <Treadmills treadmills={treadmills}/>
          </Route>
          <Route path="/ellipticals">
            <Ellipticals ellipticals={ellipticals}/>
          </Route>
          <Route path="/sanfei-fitness">
            <SanfeiFitness NH={NH} NC={NC} TH={TH} TH_PT={TH_PT} TH_PT_FREE={TH_PT_FREE} SM_CT={SM_CT}/>
          </Route>
          <Route path="/">
            <Homepage bicycles={bicycles} helmets={helmets} bikes={bikes}/>
          </Route>
        </Switch>

        <Footer/>

      </div>
    </Router>

    </div>
  );
}

export default App;






