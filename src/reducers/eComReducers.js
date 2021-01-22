
import * as types from '../constants/eComConstants'
import * as fechas from '../components/publica/Fechas'
const initialState = {
   id_profile: false,
   estado: 'Inicio Estado = E-COMMERCE',
   data_sala:[],
   data_plataforma:[],
   dataSala: [],
   dataPlataforma:[], 
   dataPlanilla: [],
   planilla: false,
   exhibiciones: []
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
            case types.ECOM_GET_PLANILLA_ERROR: 
                return {
                    ...state,
                    dataPlanilla: action.dataPlanilla,
                    planilla: false,
                    estado: action.estado
                }
            break;
                
            case types.ECOM_GET_PLANILLA_OK: {
                    action.dataPlanilla.map((valor, i) => {
                        valor.presencia = true
                        valor.descripcion = false
                        valor.stock = true
                        valor.imagen = false
                        valor.precio_unitario = ""
                        valor.precio_descuento = ""
                        valor.mecanica = 0
                        valor.alerta = false
                        valor.envio_estado = 0
                        valor.envio_comentario = "lista para enviar"
                        valor.periodo = fechas.fechaSQL2()
                    })
                    return {
                    ...state,
                    dataPlanilla: action.dataPlanilla,
                    estado: action.estado
                    }
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
      todo.periodo = fechas.fechaSQL2()
    }
  })
  return {
    ...state,
    estado: action.estado,  
     
    }
break;
case types.ECOM_ENVIA: 
   state.dataPlanilla.map(todo => {
    if (todo.id_sku_sap === action.id_sku_sap) {
      todo.envio_estado=action.envio_estado
      todo.envio_comentario=action.envio_comentario
    }
  })
  return {
    ...state,
    estado: action.estado,  
     
    }
break;

case types.ECOM_GUARDA_DESCRIPCION_SKU: 
state.dataPlanilla.map(todo => {
 if (todo.id_sku_sap === action.id_sku_sap) {
   todo.descripcion=action.descripcion
   todo.periodo = fechas.fechaSQL2()
 }
})
return {
 ...state,
 estado: action.estado,  
 
 }
break;
case types.ECOM_GUARDA_STOCK: 
   state.dataPlanilla.map(todo => {
    if (todo.id_sku_sap === action.id_sku_sap) {
      todo.stock=action.stock
      todo.periodo = fechas.fechaSQL2()
    }
  })
  return {
    ...state,
    estado: action.estado,  
    
    }
break;

case types.ECOM_GUARDA_VALOR_IMAGEN: 
   state.dataPlanilla.map(todo => {
    if (todo.id_sku_sap === action.id_sku_sap) {
      todo.imagen=action.imagen
      todo.periodo = fechas.fechaSQL2()
    }
  })
  return {
    ...state,
    estado: action.estado,  
    
    }
break;

case types.ECOM_GUARDA_PRECIO_UNITARIO: 
   state.dataPlanilla.map(todo => {
    if (todo.id_sku_sap === action.id_sku_sap) {
      todo.precio_unitario=action.precio_unitario
      todo.periodo = fechas.fechaSQL2()
    }
  })
  return {
    ...state,
    estado: action.estado,  
     
    }
break;

case types.ECOM_GUARDA_PRECIO_DESCUENTO: 
   state.dataPlanilla.map(todo => {
    if (todo.id_sku_sap === action.id_sku_sap) {
      todo.precio_descuento=action.precio_descuento
      todo.periodo = fechas.fechaSQL2()
    }
  })
  return {
    ...state,
    estado: action.estado,  
     
    }
break;

case types.ECOM_GUARDA_MECANICA: 
   state.dataPlanilla.map(todo => {
    if (todo.id_sku_sap === action.id_sku_sap) {
      todo.mecanica=action.mecanica
      todo.periodo = fechas.fechaSQL2()
    }
  })
  return {
    ...state,
    estado: action.estado,  
    
    }
break;

case types.ECOM_GUARDA_ALERTA_QUIEBRE: 
   state.dataPlanilla.map(todo => {
    if (todo.id_sku_sap === action.id_sku_sap) {
      todo.alerta=action.alerta
      todo.periodo = fechas.fechaSQL2()
    }
  })
  return {
    ...state,
    estado: action.estado,  
    }
break;

case types.ECOM_SOLICITAR_PLANILLA: 
  return {
    ...state,
    planilla: action.planilla,
    estado: action.estado,  
    }
break;
case types.ECOM_EXHIBICIONES: 
  return {
    ...state,
    exhibiciones: action.exhibiciones,
    estado: action.estado,  
    }
break;
  

    default:
    return state
    }
    }
    export default eComReducers;