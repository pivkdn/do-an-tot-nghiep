import axios from "./rootApi";

export const loginApi = (action) => {
    const {username,password} = action.payload
    const param = {
        username,
        password
    }   
    return axios.post('users/login',param)
}