import { FAILURE,FETCH,SUCCESS,LOGOUT } from '../actions/Login';
let initState =  {
    loading: false,
    success: false,
    data: null
}
//state không thay đổi, chỉ trả về giá trị cuối cùng
const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                loading: true,
            };
        case FAILURE:
            return {
                ...state,
                data: null,
                loading: false,
                success: false
            }

        case SUCCESS:
            if(action.sResult.code === 0) {
                localStorage.setItem('user', JSON.stringify(action.sResult));
            } 
            return {
                ...state,
                loading: false,
                success: true,
                ...action.sResult
            }
        default:
            return state;
    }
}

export default loginReducer;