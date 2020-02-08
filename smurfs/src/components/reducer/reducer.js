import { GET_SMURF, POST_SMURF } from "../actions/actions";

export const initialState = {
  smurf: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF:
      return {
        ...state,
        smurf: action.payload
      };
    case POST_SMURF:
      return {
        ...state,
        smurf: action.payload
      };
    default:
      return state;
  }
};
