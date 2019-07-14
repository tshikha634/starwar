export const USER_PROFILE = 'USER_PROFILE';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE';
export const RESET_USER_PROFILE ='RESET_USER_PROFILE'

export const getUserProfileAction = (Data) => {
    return {
        type: USER_PROFILE,
        Data
    }
}

export const getUserProfileActionSuccess = (Data) => {
    console.log(Data)
    
    return {
        type: USER_PROFILE_SUCCESS,
        Data
    }
}

export const getUserProfileActionFailure = (Data) => {
    return {
        type: USER_PROFILE_FAILURE,
        Data
    }
}
export const resetUserProfile = (userData) => {
    return {
        type: RESET_USER_PROFILE,
        userData
    }
}