import axios from "axios";
import { baseURI } from '../../services/config'
export const loginApi = async(action) => {
    console.log('action-api',action)
    const body = {
        numberphone: action.payload.numberphone
    }
    return axios.post(baseURI + 'users/register-phone', body)
}