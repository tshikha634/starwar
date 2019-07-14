import userProfileReducer from './userProfileReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userProfile: userProfileReducer,
})

export default rootReducer;