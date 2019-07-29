import userProfileReducer from './userProfileReducer'
import searchPlanetReducer from './searchPlanetReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  searchPlanet: searchPlanetReducer,
})

export default rootReducer;