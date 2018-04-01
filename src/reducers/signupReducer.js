const INITIAL_STATE = {
    loader: false,
    data: '',
    errorMessage: '',
    showError: false,
    registered: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGNUP_REQUEST':
            return { ...INITIAL_STATE, loader: true }
        case 'SIGNUP_FAILED':
            return {
                loader: false,
                errorMessage: 'Number Already Registered',
                showError: true
            }
        case 'SIGNUP_COMPLETE':
            return {
                ...INITIAL_STATE,
                registered: true,
                data: action.payload
            }
        default: return state;
    }
}
