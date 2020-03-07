import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Nav from './components/images/Nav';
import Homepage from './pages/Homepage';
import Plane from './components/images/Plane';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Plane>
      <BrowserRouter>
      <Nav/>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
      </BrowserRouter>
      </Plane>


    </div>
  );
}

export default App;
