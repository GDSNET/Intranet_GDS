
import * as types from '../constants/comercialConstants'
const initialState = {
  cliente:[],
  data_excel:[],
  data_array:[],
  query_array:'',
  data_json_body:[],
  indicador:[],
  sel_indicador:null,
  sel_cliente:null,
  esquema:null,
  res_fetch:[],
  base_datos:null,
  servidor:null,
}


  
const comercialReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GUARDA_BASE_DATOS_CLIENTE:
            return {...state,
                base_datos: action.base_datos,
            };
            break;
            case types.GUARDA_SERVIDOR_CLIENTE:
            return {...state,
                servidor: action.servidor,
            };
            break;
        case types.GUARDA_RESPUESTA_FETCH:
            return {...state,
                res_fetch: action.res_fetch,
            };
            break;
        case types.CARGA_CLIENTE_PARAMETRO:
        return {...state,
            cliente: action.cliente,
        };
        break;
    case types.GUARDA_DATA_EXCEL_JSON:
    return {...state,
    data_excel: action.data_excel,
    };
    break;
    case types.GUARDA_JSON_BODY:
        return {...state,
            data_json_body: action.data_json_body,
        };
        break;
        case types.GUARDA_ESQUEMA_CLIENTE:
            return {...state,
                esquema: action.esquema,
        
            };
            break;
    case types.GUARDA_DATA_ARRAY_EXCEL:
    return {...state,
        data_array: action.data_array,
    };
    break;
    case types.GUARDA_QUERY:
    return {...state,
        query_array: action.query_array,
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