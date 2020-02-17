
import * as types from '../constants/gdsConstants'
const initialState = {
  visible: false,
   estado: 'gds',
   numero: null,
   semana: null,
   data_semana: [],
   data_cliente:[],
   cliente:null,
   sala: null,
   data_html: [],
   estadoAlarma: null,
   b_detalle: [],
   b_detalle_exh: [],
   respuesta: null,
   cliente2:[],
   clienteLog:null,
   clienteHTML:null,
   clienteEsquema:null,
   data_log:[],
}


  
const gdsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GDS_STOP_ACTION:
        return {...state,
            visible: action.visible,
            estado: action.estado,
            
        };
        break;
        case types.GDS_GUARDA_CLIENTE_HTML_DELETE:
        return {...state,
            clienteHTML: action.clienteHTML,
            estado: action.estado,
            
        };
        break;
        case types.GDS_START_ACTION:
        return {...state,
            visible: action.visible,
            estado: action.estado,
            
        };
        break;
        case types.GDS_GUARDA_CLIENTE_LOG:
        return {...state,
            clienteLog: action.clienteLog,
            estado: action.estado,
           
        };
        break;
        case types.GDS_GUARDA_ESTADO:
        return {...state,
            estado: action.estado,
            
        };
        break;
        case types.GDS_GUARDA_SEMANA:
        return {...state,
            estado: action.estado,
            semana: action.semana,
            
        };
        break;
        case types.GDS_GUARDA_DATA_SEMANA:
        return {...state,
            estado: action.estado,
            data_semana: action.data_semana,
            
        };
        break;
        case types.GDS_GUARDA_CLIENTE_ESQUEMA:
        return {...state,
            estado: action.estado,
            clienteEsquema: action.clienteEsquema,
            
        };
        break;
        case types.GDS_GUARDA_DATA_CLIENTE_HTML:
        return {...state,
            estado: action.estado,
            data_cliente: action.data_cliente,
            
        };
        break;
        case types.GDS_GUARDA_CLIENTE_HTML:
        return {...state,
            estado: action.estado,
            cliente: action.cliente,
            
        };
        break;
        case types.GDS_GUARDA_B_DETALLE_AGRUPADA:
        return {...state,
            estado: action.estado,
            b_detalle: action.b_detalle,
            
        };
        break;
        case types.GDS_GUARDA_SALA_HTML:
        return {...state,
            estado: action.estado,
            sala: action.sala,
            
        };
        break;
        case types.GDS_GUARDA_DATA_HTML:
        return {...state,
            estado: action.estado,
            data_html: action.data_html,
            
        };
        break;
        case types.GDS_GUARDA_ESTADO_ALARMA:
        return {...state,
            estado: action.estado,
            estadoAlarma: action.estadoAlarma,
            
        };
        break;
        case types.GDS_GUARDA_RESPUESTA_DELETE:
        return {...state,
            estado: action.estado,
            respuesta: action.respuesta,
            
        };
        break;
        case types.GDS_GUARDA_B_DETALLE_EXH:
        return {...state,
            estado: action.estado,
            b_detalle_exh: action.b_detalle_exh,
            
        };
        break;
        case types.GDS_GUARDA_CLIENTE_DELETE:
        return {...state,
            estado: action.estado,
            cliente2: action.cliente2,
            
        };
        break;
        case types.GDS_GUARDA_DATA_LOG:
        return {...state,
            estado: action.estado,
            data_log: action.data_log,
            
        };
        break;
        
    default:
    return state
    }
    }
    export default gdsReducer;

    