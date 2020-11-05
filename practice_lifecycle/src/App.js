import React, {useState} from "react";
import axios from "axios";
import Loader from "./Loader"
import * as ReactBootStrap from "react-bootstrap"


const App = ()=> {

  return (
    <div className="App">
<Loader></Loader>
<ReactBootStrap.Spinner animation="order" />
    </div>
  );
}

export default App;
