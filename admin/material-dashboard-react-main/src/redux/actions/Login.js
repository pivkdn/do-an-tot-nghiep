export const FETCH = 'login@fetch'
export const SUCCESS = 'login@success'
export const FAILURE = 'login@failure'

export const LOGOUT = 'login@logout'

export const actionLogin = (action) => {
    return {
        type: FETCH,
        payload: {
            ...action
        }
    }
}

export const actionLogout = () => {
    return {
        type: LOGOUT
    }
}