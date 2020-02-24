
import * as types from '../constants/comercialConstants'
const initialState = {
  cliente:[],
  indicador:[],
  sel_indicador:null,
  sel_cliente:null,
}


  
const comercialReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CARGA_CLIENTE_PARAMETRO:
        return {...state,
            cliente: action.cliente,
            
        };
        break;
        case types.GUARDA_CLIENTE_PARAMETRO:
        return {...state,
            sel_cliente: action.sel_cliente,
            
        };
        break;
        case types.CARGA_INDICADOR_PARAMETRO:
        return {...state,
            indicador: action.indicador,
            
        };
        break;
        case types.GUARDA_INDICADOR_PARAMETRO:
        return {...state,
            sel_indicador: action.sel_indicador,
            
        };
        break;
        

    default:
    return state
    }
    }
    export default comercialReducer;