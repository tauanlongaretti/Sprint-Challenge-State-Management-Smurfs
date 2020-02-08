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
        <div key={smurf.id} className="smurf">
          <p><span>Name:</span> {smurf.name}</p>
          <p><span>Age:</span> {smurf.age}</p>
          <p><span>Height:</span> {smurf.height}</p>
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
