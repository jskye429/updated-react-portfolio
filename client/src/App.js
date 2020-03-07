import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Nav from './components/images/Nav';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Route exact path="/" component={Homepage}/>
      </BrowserRouter>


     
      
      
      
    </div>
  );
}

export default App;
