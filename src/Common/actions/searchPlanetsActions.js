export const SEARCH_PLANET_LIST = 'SEARCH_PLANET_LIST';
export const SEARCH_PLANET_LIST_SUCCESS = 'SEARCH_PLANET_LIST_SUCCESS';
export const SEARCH_PLANET_LIST_FAILURE = 'SEARCH_PLANET_LIST_FAILURE';


export const getPlanetsListAction = (Data) => {
    return {
        type: SEARCH_PLANET_LIST,
        Data
    }
}

export const getPlanetsListActionSuccess = (Data) => {
    return {
        type: SEARCH_PLANET_LIST_SUCCESS,
        Data
    }
}

export const getPlanetsListActionFailure = (Data) => {
    return {
        type: SEARCH_PLANET_LIST_FAILURE,
        Data
    }
}