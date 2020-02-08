import React, { useEffect } from "react";
import { getSmurf } from "./actions/actions";
import { connect } from "react-redux";

const Smurf = props => {
  useEffect(() => {
    props.getSmurf();
  }, [getSmurf]);

  return (
    <div>
      {props.smurf.map(smurf => (
        <div key={smurf.id}>
          <p>Name: {props.smurf.name}</p>
          <p>Age: {props.smurf.age}</p>
          <p>Height: {props.smurf.age}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurf: state.smurf
  };
};

export default connect(mapStateToProps, { getSmurf })(Smurf);
