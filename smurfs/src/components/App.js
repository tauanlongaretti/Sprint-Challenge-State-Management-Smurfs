import React from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import Smurf from "./Smurf";

const App = () => {
  return (
    <div className="App">
      <h2>Add a new smurf to the village</h2>
      <SmurfForm />
      <Smurf />
    </div>
  );
}

export default App;
