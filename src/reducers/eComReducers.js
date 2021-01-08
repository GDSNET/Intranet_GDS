
import * as types from '../constants/eComConstants'
const initialState = {
    id_profile: false,
   estado: 'E-COMMERCE',
   data_sala:[],
   data_plataforma:[],
   dataSala: [],
   dataPlataforma:[], 
   dataPlanilla: []
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

        case types.ECOM_GET_SALA_REQUEST: { 
            return {
                ...state,
                dataSala: action.dataSala,
                estado: action.estado
            }
            }
            case types.ECOM_GET_SALA_ERROR: { 
            return {
                ...state,
                dataSala: null,
                estado: action.estado
            }
            }
            case types.ECOM_GET_SALA_OK: { 
            return {
                ...state,
                dataSala: action.dataSala,
                estado: action.estado
            }
            }
            case types.ECOM_GET_PLATAFORMA_OK: { 
                return {
                    ...state,
                    dataPlataforma: action.dataPlataforma,
                    estado: action.estado
                }
                }
                case types.ECOM_GET_PLANILLA_OK: { 
                    return {
                        ...state,
                        dataPlanilla: action.dataPlanilla,
                        estado: action.estado
                    }
                    }
                    case types.ECOM_GUARDA_PLATAFORMA: { 
                        return {
                            ...state,
                            data_plataforma: action.data_plataforma,
                            estado: action.estado
                        }
                        }
  
                    case types.ECOM_GUARDA_PRESENCIA: {
                         state.dataPlanilla.map(todo => {
                          if (todo.id_sku_sap === action.id_sku_sap) {
                            todo.presencia=action.presencia
                          }
                  
                          return {
                            ...state,
                          }
                        })
                      }



  
        
    default:
    return state
    }
    }
    export default eComReducers;