import userProfileReducer from './userProfileReducer'
import searchPlanetReducer from './searchPlanetReducer'
import setPlanetDataReducer from './setPlanetDataReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  searchPlanet: searchPlanetReducer,
  setData : setPlanetDataReducer
})

export default rootReducer;