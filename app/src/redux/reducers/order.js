import actionOrder from '../actions/Order';
const initState = {
    success: true,
    loading: false,
    order: []
}
const orderReducer = (state = initState,action) => {
    
    switch (action.type) {
        case actionOrder.ADD,actionOrder.REMOVE:
            return {
                ...state,
                loading: true
            }
        case actionOrder.BAG: 
            let arrCurrent = state.order;
            if(action.body.role === 'reset') {
                return {
                    ...state,
                    loading: false,
                    success:true,
                    order: []
                }
            }
            if(action.body.role === 'add') {
                let newOrder =  arrCurrent.filter(item => item.id !== action.body.item.id)
                newOrder.push(action.body.item)
                    return {
                        ...state,
                        loading: false,
                        success:true,
                        order: newOrder
                    }
                
            }
            
            if(action.body.role === 'remove') {
                let newOrder =  arrCurrent.filter(item => item.id !== action.body.item.id)
                
                return {
                    ...state,
                    loading: false,
                    success:true,
                    order: newOrder
                }
            }
            
            
            return {
                ...state,
                loading: false,
                success:true
            }
        
        default:
            return state
    }
}

export default orderReducer;