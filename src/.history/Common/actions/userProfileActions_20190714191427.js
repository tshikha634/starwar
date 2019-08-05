export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';


export const getUserProfileActionSuccess = (Data) => {
    return {
        type: USER_PROFILE_SUCCESS,
        Data
    }
}
