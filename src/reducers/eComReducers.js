
import * as types from '../constants/eComConstants'
const initialState = {
    id_profile: false,
   estado: 'E-COMMERCE',
   data_sala:[],
}


  
const eComReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.ECOM_GUARDA_ID_PROFILE:
        return {...state,
            id_profile: action.id_profile,
            estado: action.estado,
            
        };
        break;
        case types.ECOM_GUARDA_SALA:
            return {...state,
                data_sala: action.data_sala,
                estado: action.estado,
                
            };
            break;
  
        
    default:
    return state
    }
    }
    export default eComReducers;