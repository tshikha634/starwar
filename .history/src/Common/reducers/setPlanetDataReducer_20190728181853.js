import {
  SET_PLANET_DATA,
} from "../actions/setPlanetDataActions";

const INITIAL_STATE = 0

const setPlanetDataReducer = (state = INITIAL_STATE, action) => {
  console.log(INITIAL_STATE)
  switch (action.type) {
    case SET_PLANET_DATA: {
      return  action.id
    }
    default:
      return state;
  }
};

export default setPlanetDataReducer;
