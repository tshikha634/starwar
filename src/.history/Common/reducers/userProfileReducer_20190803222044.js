import {USER_PROFILE, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE} from '../actions/userProfileActions'

const INITIAL_STATE = {
  data: [],
};

const userProfileReducer = (state = INITIAL_STATE, action) => {
switch (action) {
  case USER_PROFILE_SUCCESS: {
    return {
      ...state,
      data: action.Data.data,
    };
  }
 
  default:
  return state
}
}

export default userProfileReducer