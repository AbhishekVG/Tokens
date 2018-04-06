const INITIAL_STATE = {
    usersList: [],
    loader: false,
}

export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS_LIST':
            return {
                ...INITIAL_STATE,
                loader: true,
            }
        case 'RECIEVE_USERS_LIST':
            return {
                ...INITIAL_STATE,
                usersList: action.data
            }
        default: return state;
    }
}