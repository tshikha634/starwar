import userProfileReducer from './userProfileReducer'
import searchPlanetReducer from './searchPlanetReducer'
import setPlanetDataReducer from './setPlanetDataReducer'
import { combineReducers } from 'redux';
import getPlanetDataReducer from "./getPlanetDataReducer";

const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  searchPlanet: searchPlanetReducer,
  setData : setPlanetDataReducer,
  getData : getPlanetDataReducer
})

export default rootReducer;