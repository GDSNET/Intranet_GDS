
import * as types from '../constants/toConstants'
const initialState = {
  visible: false,
   estado: 'To',
   numero: null,
   titulo: 'TO ACTION',
   menu: false,
   desplegable: '',
   menu_class: 'clicked',
   loading: true,
   dataUser: [],
   desPerfil: null
}


  
const toReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TO_STOP_ACTION:
        return {...state,
            visible: action.visible,
            estado: action.estado,
            
        };
        break;
        case types.TO_START_ACTION:
        return {...state,
            visible: action.visible,
            estado: action.estado,
            
        };
        break;
        case types.TO_MENU:
        return {...state,
            menu: action.menu,
            menu_class: action.menu_class,
            estado: action.estado,
            
        };
        break;
        case types.TO_DESPLEGABLE:
        return {...state,
            desplegable: action.desplegable,
            estado: action.estado,
            
        };
        break;
        case types.TO_LOGIN:
            return {...state,
                dataUser: action.dataUser,
                desPerfil: action.desPerfil,
                estado: action.estado,
                
            };
            break;
         case types.TO_LOGIN_OFF:
             console.log("TO_LOGIN_OFF")
                return {...state,
                    dataUser: action.dataUser,
                    desPerfil: action.desPerfil,
                    estado: action.estado,
                    
                };
                break;    
        case types.TO_LOADING:
        return {...state,
            loading: action.loading,
            estado: action.estado,
            
        };
        
    default:
    return state
    }
    }
    export default toReducer;