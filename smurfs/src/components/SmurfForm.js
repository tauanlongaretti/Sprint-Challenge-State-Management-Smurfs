import React, { useState } from "react";
import { postSmurf } from "./actions/actions";
import { connect } from "react-redux";

const SmurfForm = props => {   
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChange = e => {
        e.preventDefault();
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
    }

    const handleAdd = e => {
        e.preventDefault();
        props.postSmurf(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height: ""
        })
    };

  return (
      <form>
        <p>Add a new smurf</p>  
        <label>Name: 
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={newSmurf.name}
              onChange={handleChange}
            />
        </label>
        <label>Age: 
            <input
              type="text"
              placeholder="Age"
              name="age"
              value={newSmurf.age}
              onChange={handleChange}
            />
        </label>
        <label>Height: 
            <input
              type="text"
              placeholder="Height"
              name="height"
              value={newSmurf.height}
              onChange={handleChange}
            />
        </label>
        <button onClick={handleAdd}>Add</button>
      </form>  
  );
};

const mapStateToProps = state => {
    return {
      state
    };
  };
  
  export default connect(mapStateToProps, { postSmurf })(SmurfForm);
  