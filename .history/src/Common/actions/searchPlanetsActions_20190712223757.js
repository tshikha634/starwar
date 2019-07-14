export const SEARCH_PLANET_LIST = 'SEARCH_PLANET_LIST';
export const SEARCH_PLANET_SUCCESS = 'SEARCH_PLANET_SUCCESS';
export const SEARCH_PLANET_FAILURE = 'SEARCH_PLANET_FAILURE';


export const getTransactionListAction = (Data) => {
    return {
        type: SEARCH_PLANET_LIST,
        Data
    }
}

export const getTransactionListActionSuccess = (Data) => {
    return {
        type: SEARCH_PLANET_SUCCESS,
        Data
    }
}

export const getTransactionListActionFailure = (Data) => {
    return {
        type: SEARCH_PLANET_FAILURE,
        Data
    }
}