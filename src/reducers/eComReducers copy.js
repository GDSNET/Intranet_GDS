
import * as types from '../constants/eComConstants'
const initialState = {
   id_profile: false,
   estado: 'E-COMMERCE',
   data_sala:[],
   data_plataforma:[],
   dataSala: [],
   dataPlataforma:[], 
   dataPlanilla: [],

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

        case types.ECOM_GET_SALA_REQUEST: 
            return {
                ...state,
                dataSala: action.dataSala,
                estado: action.estado
            }
            break;
            
            case types.ECOM_GET_SALA_ERROR: 
            return {
                ...state,
                dataSala: null,
                estado: action.estado
            }
            break;
            
            case types.ECOM_GET_SALA_OK: 
            return {
                ...state,
                dataSala: action.dataSala,
                estado: action.estado
            }
            break;
            
            case types.ECOM_GET_PLATAFORMA_OK: 
                return {
                    ...state,
                    dataPlataforma: action.dataPlataforma,
                    estado: action.estado
                }
                break;
                
            case types.ECOM_GET_PLANILLA_OK: 
                    action.dataPlanilla.map((valor, i) => {
                        valor.presencia = false
                        valor.descripcion = false
                        valor.stock = false
                        valor.imagen = false
                        valor.precio_unitario = false
                        valor.precio_descuento = false
                        valor.mecanica = false
                        valor.alerta = false
                    })
                    return {
                    ...state,
                    dataPlanilla: action.dataPlanilla,
                    estado: action.estado
                    }
             break;
case types.ECOM_GUARDA_PLATAFORMA: 
return {
      ...state,
      data_plataforma: action.data_plataforma,
      estado: action.estado
  }
  
  break;
  
case types.ECOM_GUARDA_PRESENCIA: 
   state.dataPlanilla.map(todo => {
    if (todo.id_sku_sap === action.id_sku_sap) {
      todo.presencia=action.presencia
    }
  })
  return {
    ...state,
    estado: action.estado,  
    data_plataforma: state.dataPlanilla,  
    }

    case types.ECOM_GUARDA_DESCRIPCION_SKU: 
   state.dataPlanilla.map(todo => {
    if (todo.id_sku_sap === action.id_sku_sap) {
      todo.descripcion=action.descripcion
    }
  })

  return {
    ...state,
    estado: action.estado,  
    data_plataforma: state.dataPlanilla,
    }
    break;
case types.ECOM_GUARDA_DESCRIPCION_SKU: {
    state.dataPlanilla.map(todo => {
     if (todo.id_sku_sap === action.id_sku_sap) {
       todo.descripcion=action.descripcion
     }            
     return {
       ...state,
     }
   })
 }
 break;
case types.ECOM_GUARDA_STOCK: {
  state.dataPlanilla.map(todo => {
   if (todo.id_sku_sap === action.id_sku_sap) {
     todo.stock=action.stock
   }          
   return {
     ...state,
   }
 })
}
break;
case types.ECOM_GUARDA_VALOR_IMAGEN: {
    state.dataPlanilla.map(todo => {
     if (todo.id_sku_sap === action.id_sku_sap) {
       todo.imagen=action.imagen
     }
                   
     return {
       ...state,
     }
   })
  }
  break;
  case types.ECOM_GUARDA_PRECIO_UNITARIO: {
    state.dataPlanilla.map(todo => {
     if (todo.id_sku_sap === action.id_sku_sap) {
       todo.precio_unitario=action.precio_unitario
     }       
     return {
       ...state,
     }
   })
  }
  break;
  case types.ECOM_GUARDA_PRECIO_DESCUENTO: {
    state.dataPlanilla.map(todo => {
     if (todo.id_sku_sap === action.id_sku_sap) {
       todo.precio_descuento=action.precio_descuento
     }            
     return {
       ...state,
     }
   })
  }
  break;
  case types.ECOM_GUARDA_MECANICA: {
    state.dataPlanilla.map(todo => {
     if (todo.id_sku_sap === action.id_sku_sap) {
       todo.mecanica=action.mecanica
     }
                   
     return {
       ...state,
     }
   })
  }
  break;
  case types.ECOM_GUARDA_ALERTA_QUIEBRE: {
    state.dataPlanilla.map(todo => {
     if (todo.id_sku_sap === action.id_sku_sap) {
       todo.alerta=action.alerta
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