import axios from "axios";
export const GET_SMURF = "GET_SMURF";
export const POST_SMURF = "POST_SMURF";

export const getSmurf = () => dispatch => {
    setTimeout(() => {
        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                dispatch({ type: GET_SMURF, payload: res.data })
            })
            .catch(err => {
                console.err(err);
            });
    });
};


export const postSmurf = addSmurf => dispatch => {
    setTimeout(() => {
        axios
        .post("http://localhost:3333/smurfs", addSmurf)
        .then(res => {
            console.log(res);
            dispatch({ type: POST_SMURF, payload: addSmurf });
        })
        .catch(err => {
            console.log(err);
        });
    });
};