export const TRANSACTION_LIST = 'TRANSACTION_LIST';
export const TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS';
export const TRANSACTION_FAILURE = 'TRANSACTION_FAILURE';


export const getTransactionListAction = (Data) => {
    return {
        type: TRANSACTION_LIST,
        Data
    }
}

export const getTransactionListActionSuccess = (Data) => {
    return {
        type: TRANSACTION_SUCCESS,
        Data
    }
}

export const getTransactionListActionFailure = (Data) => {
    return {
        type: TRANSACTION_FAILURE,
        Data
    }
}