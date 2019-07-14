// import { ADD_USER_PROFILE } from '../actions/userProfileActions'

// const INITIAL_STATE = {
//     userData: ""
// }

// export default function userProfileReducer(state = INITIAL_STATE, action) {
//   debugger
//     if (action.type === ADD_USER_PROFILE) {
//         return {
//             ...state,
//             userData: action.userData
//         }
//     }
// }

import {USER_PROFILE, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE} from '../actions/userProfileActions'

const INITIAL_STATE = {
  data: [],
}

const invoiceListReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
  case USER_PROFILE:{
    return  {
      ...state,
      data: [],
      loading: true,
      error: false,
      flag: false
    }
  }
  case USER_PROFILE_SUCCESS: {
    return {
      ...state,
      data : action.Data.data,
      loading : false,
      error : false,
      flag : true
    }
  }
  case USER_PROFILE_FAILURE: {
    return {
      ...state,
      data : [],
      loading : false,
      error : true,
      flag : false
    }
  }
  default:
  return state
}
}

export default invoiceListReducer