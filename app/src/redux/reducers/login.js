import actionLogin from '../actions/Login';
const initState = {
    success: true,
    loading: false,
    user: null
}
const loginReducer = (state = initState,action) => {
    switch (action.type) {
        case actionLogin.FETCH,actionLogin.LOGOUT:
            return {
                ...state,
                loading: true
            }
        case actionLogin.SUCCESS: 
            return {
                ...state,
                loading: false,
                success:true,
                user: action.user
            }
        case actionLogin.FAILURE: 
            return {
                ...state,
                loading: false,
                success: false,
                user: {}
            }
        default:
            return state
    }
}

export default loginReducer;