
import * as types from '../constants/controlConstants'
const initialState = {
  visible: true,
   estado: 'iniciando...',
   numero: null,
   nombre: 'Felipe',
   data_semana: [],
   profile: null,
   data_nivel1: [],
   data_nivel2: [],
   data_nivel3: [],
   punto: null,
   fecha_inicio: null,
   fecha_fin: null,
   tarea: null,
   tarea_det: null,
   estado_fetch: 0
}

  
const counterReducer = (state = initialState, action,) => {
switch (action.type) {
    case types.STOP_ACTION:
return {...state,
    visible: action.visible,
    estado: action.estado,
    
};
break;
    case types.START_ACTION:
    return {...state,
        visible: action.visible,
        estado: action.estado,
        
    };
    break;
case types.CONTROL_CAMBIA_NUMERO:
return {...state,
    numero: action.numero,
    estado: action.estado,
        
    };
    break;
case types.CONTROL_CAMBIA_NOMBRE:
return {...state,
        nombre: action.nombre,
        estado: action.estado,
        
    };
    break;
    case types.CONTROL_API_SEMANA:
    return {...state,
            estado: action.estado,
            data_semana: action.data_semana,
            
        };
        break;
        case types.CONTROL_GUARDA_NIVEL1:
        return {...state,
        estado: action.estado,
        data_nivel1: action.data_nivel1,
        estado_fetch: action.estado_fetch,
        };
        break;
case types.CONTROL_GUARDA_NIVEL2:
return {...state,
estado: action.estado,
data_nivel2: action.data_nivel2,
};
break;
case types.CONTROL_GUARDA_NIVEL3:
return {...state,
estado: action.estado,
data_nivel3: action.data_nivel3,
};
break;
case types.CONTROL_GUARDO_PROFILE:
return {...state,
profile: action.profile,
estado: action.estado,                
};
break;
case types.CONTROL_GUARDA_DIA:
return {...state,
fecha_inicio: action.fecha_inicio,
fecha_fin: action.fecha_fin,
estado: action.estado,                
};
break;
 case types.CONTROL_CAMBIA_ESTADO:
return {...state,
estado: action.estado,
                    
};
break;
case types.CONTROL_GUARDA_PUNTO:
return {...state,
        estado: action.estado,
        punto: action.punto,
        
    };
    break;
    case types.CONTROL_GUARDA_TAREA:
    return {...state,
            estado: action.estado,
            tarea: action.tarea,
            tarea_det: action.tarea_det,
        };
        break;
        case types.CONTROL_BORRA_NIVEL3:
        return {...state,
                estado: action.estado,
                data_nivel3: action.data_nivel3
            };
            break;
 case types.CONTROL_BORRA_NIVEL2:
 return {...state,
 estado: action.estado,
 data_nivel2: action.data_nivel2
 };
 break;
 case types.CONTROL_BORRA_NIVEL1:
 return {...state,
 estado: action.estado,
 data_nivel1: action.data_nivel1
 };
 break;
 case types.CONTROL_BORRA_FETCH:
 return {...state,
 estado: action.estado,
 estado_fetch: action.estado_fetch
 };
 break;

default:
return state
}
}
export default counterReducer;


