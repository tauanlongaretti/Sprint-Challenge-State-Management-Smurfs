import React from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import Smurf from "./Smurf";

const App = props => {
  return (
    <div className="App">
      <SmurfForm />
      <Smurf />
    </div>
  );
}

export default App;
