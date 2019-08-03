import {SEARCH_PLANET_LIST, SEARCH_PLANET_LIST_SUCCESS, SEARCH_PLANET_LIST_FAILURE} from '../actions/searchPlanetsActions'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  flag: false
};

const searchPlanetReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
  case SEARCH_PLANET_LIST:{
    return  {
      ...state,
      data: [],
      loading: true,
      error: false,
      flag: false
    }
  }
  case SEARCH_PLANET_LIST_SUCCESS: {
    return {
      ...state,
      data : action.Data.data,
      loading : false,
      error : false,
      flag : true
    }
  }
  case SEARCH_PLANET_LIST_FAILURE: {
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

export default searchPlanetReducer