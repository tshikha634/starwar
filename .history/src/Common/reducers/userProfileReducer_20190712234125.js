import { ADD_USER_PROFILE } from '../actions/userProfileActions'

const INITIAL_STATE = {
    userData: ""
}

export default function userProfileReducer(state = INITIAL_STATE, action) {
    if (action.type === ADD_USER_PROFILE) {
        return {
            ...state,
            userData: action.userData
        }
    }
}

