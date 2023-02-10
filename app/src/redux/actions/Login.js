const FETCH = 'login@fetch'
const SUCCESS = 'login@success'
const FAILURE = 'login@failure'
const LOGOUT = 'login@logout'


const login = (data) => {
    console.log(data);
    return {
        type: FETCH,
        payload: data
    }
}
const logout = () => {
    return {
        type: LOGOUT
    }
}

export default {
    FETCH,
    SUCCESS,
    FAILURE,
    LOGOUT,
    login,
    logout
}