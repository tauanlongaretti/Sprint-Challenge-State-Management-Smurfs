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
          <p>Name: {smurf.name}</p>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
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
