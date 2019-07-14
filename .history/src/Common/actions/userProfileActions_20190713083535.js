export const ADD_USER_PROFILE = 'ADD_USER_PROFILE';

export const addUserProfile = (userData) => {
  debugger
  console.log(userData);
    return {
        type: ADD_USER_PROFILE,
        userData
    }
}

