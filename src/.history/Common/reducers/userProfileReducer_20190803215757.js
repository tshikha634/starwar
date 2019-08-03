import { USER_PROFILE_SUCCESS} from '../actions/userProfileActions'

const INITIAL_STATE = {
  data: [],
};

const userProfileReducer = (state = INITIAL_STATE, action) => {
switch (action) {
  case USER_PROFILE_SUCCESS: {
    return {
      data : action.Data.data,
    }
  }
}
}

export default userProfileReducer