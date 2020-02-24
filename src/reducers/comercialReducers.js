
import * as types from '../constants/comercialConstants'
const initialState = {
  cliente:[],
}


  
const comercialReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CARGA_CLIENTE_PARAMETRO:
        return {...state,
            cliente: action.cliente,
            
        };
        break;
        

    default:
    return state
    }
    }
    export default comercialReducer;