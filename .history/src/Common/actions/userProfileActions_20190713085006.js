// export const ADD_USER_PROFILE = 'ADD_USER_PROFILE';

// export const addUserProfile = (userData) => {
//   debugger
//   console.log(userData);
//     return {
//         type: ADD_USER_PROFILE,
//         userData
//     }
// }

export const USER_PROFILE = 'USER_PROFILE';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE';


export const getUserProfileAction = (Data) => {
    return {
        type: USER_PROFILE,
        Data
    }
}

export const getUserProfileActionSuccess = (Data) => {
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
