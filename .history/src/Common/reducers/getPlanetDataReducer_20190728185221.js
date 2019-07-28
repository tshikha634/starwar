import { GET_PLANET_DATA } from "../actions/setPlanetDataActions";

const INITIAL_STATE = [];

const getPlanetDataReducer = (state = INITIAL_STATE, action) => {
  console.log(INITIAL_STATE);
  switch (action.type) {
    case GET_PLANET_DATA: {
      return action.data;
    }
    default:
      return state;
  }
};

export default setPlanetDataReducer;
