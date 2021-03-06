
import * as types from '../constants/calidadConstants'
const initialState = {

    data_image_count: [],
  visible: false,
   estado: 'calidad',
   numero: null,
   semana: null,
   sala: null,
   cliente: null,
   id_sku: null,
   data_b_detalle: [],
   data_cliente: [],
   data_semana: [],
   data_acciones:[],
   item:[],
   exh: null,
   data_exh: [],
   promo: null,
   data_promo: [],
   frentes:null,
   precio:null,
   exh_old: null,
   promo_old: null,
   respuesta: null,
   activation: false,
   validacion: null,
   desc_sku: null,
   nombre_cliente : null,
   tipo_modificacion:"-",
   predominante:null,
   nro_exhibidor:null,
   nro_exhibidor_old:null,
   predominante_old:null,
   planillaSku:null,
   dataPlanilla:[],
   categoria: "",
   data_cliente_app:[],
   cliente_app:[],
   dataCategoria:[
    {
        "desc_categoria": "NARA"
    }],
}


  
const calidadReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CALIDAD_GUARDA_DATA_CLIENTE_APP:
            return {...state,
                estado: action.estado,
                data_cliente_app: action.data_cliente_app,
            };
        break;
        case types.CALIDAD_GUARDA_CLIENTE_APP:
            return {...state,
                estado: action.estado,
                cliente_app: action.cliente_app,
            };
        break;
        case types.CALIDAD_GUARDA_ACCIONES:
            return {...state,
                estado: action.estado,
                data_acciones: action.data_acciones,
            };
        break;

        case types.CALIDAD_IMAGE_COUNT:
            return {...state,
                estado: action.estado,
                data_image_count: action.data_image_count,
            };
        break;
        case types.CALIDAD_ECOM_DATA_CATEGORIA:
            return {...state,
                estado: action.estado,
                dataCategoria: action.dataCategoria,
            };
        break;
        case types.CALIDAD_ECOM_CATEGORIA:
            return {...state,
                estado: action.estado,
                categoria: action.categoria,
    
            };
        break;
        case types.CALIDAD_STOP_ACTION:
        return {...state,
            visible: action.visible,
            estado: action.estado,
            
        };
        break;
        case types.CALIDAD_ENVIA: 
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
        case types.CALIDAD_GUARDA_VALOR_IMAGEN: 
        state.dataPlanilla.map(todo => {
            if (todo.id_sku_sap === action.id_sku_sap) {
            todo.imagen=action.imagen
            }
        })
        return {
            ...state,
            estado: action.estado,  
            
            }
        break;

        case types.CALIDAD_GET_PLANILLA_OK:
            console.log('data:' +action.dataPlanilla)
            return {...state,

                dataPlanilla: action.dataPlanilla,
                estado: action.estado,
            };
    
    
            break;

        case types.CALIDAD_SOLICITAR_PLANILLA_SKU:
        return {...state,
            planillaSku: action.planillaSku,
            estado: action.estado,
            
        };


        break;
        case types.CALIDAD_START_ACTION:
        return {...state,
            visible: action.visible,
            estado: action.estado,
            
        };


        break;
        case types.CALIDAD_GUARDA_ESTADO:
        return {...state,
            estado: action.estado,
            
        };
        break;
        case types.CALIDAD_GUARDA_SEMANA:
        return {...state,
            estado: action.estado,
            semana: action.semana,
            
        };
        break;
        case types.CALIDAD_GUARDA_SALA:
        return {...state,
            estado: action.estado,
            sala: action.sala,
            
        };
        break;
        case types.CALIDAD_GUARDA_DESC_SKU:
        return {...state,
            desc_sku: action.desc_sku,
            
        };
        break;
        case types.CALIDAD_GUARDA_DATA_SEMANA:
        return {...state,
            estado: action.estado,
            data_semana: action.data_semana,
            
        };
        break;
        case types.CALIDAD_GUARDA_CLIENTE:
        return {...state,
            estado: action.estado,
            cliente: action.cliente,
            
        };
        break;
        case types.CALIDAD_GUARDA_SKU:
        return {...state,
            estado: action.estado,
            id_sku: action.id_sku,
            
        };
        break;
        case types.CALIDAD_GUARDA_DATA_CLIENTE:
        return {...state,
            estado: action.estado,
            data_cliente: action.data_cliente,
            
        };
        break;
        case types.CALIDAD_GUARDA_B_DETALLE:
        return {...state,
            estado: action.estado,
            data_b_detalle: action.data_b_detalle,

        };
        break;
        case types.CALIDAD_GUARDA_ITEM:
        return {...state,
            estado: action.estado,
            item: action.item,

        };
        break;
        case types.CALIDAD_GUARDA_EXH:
        return {...state,
            estado: action.estado,
            exh: action.exh,

        };
        break;
        case types.CALIDAD_GUARDA_DATA_EXH:
        return {...state,
            estado: action.estado,
            data_exh: action.data_exh,

        };
        break;
        case types.CALIDAD_GUARDA_PROMO:
        return {...state,
            estado: action.estado,
            promo: action.promo,

        };
        break;
        case types.CALIDAD_GUARDA_DATA_PROMO:
        return {...state,
            estado: action.estado,
            data_promo: action.data_promo,

        };
        break;
        case types.CALIDAD_GUARDA_FRENTES:
        return {...state,
            estado: action.estado,
            frentes: action.frentes,

        };
        break;
        case types.CALIDAD_GUARDA_PRECIO:
        return {...state,
            estado: action.estado,
            precio: action.precio,

        };
        break;
        case types.CALIDAD_GUARDA_EXH_OLD:
        return {...state,
            estado: action.estado,
            exh_old: action.exh_old,

        };
        break;
        case types.CALIDAD_GUARDA_PROMO_OLD:
        return {...state,
            estado: action.estado,
            promo_old: action.promo_old,

        };
        break;
        case types.CALIDAD_GUARDA_RESPUESTA_MOD:
        return {...state,
            estado: action.estado,
            respuesta: action.respuesta,

        };
        break;
        case types.CALIDAD_ACTIVATION_OFF:
        return {...state,
            estado: action.estado,
            activation: action.activation,

        };
        break;
        case types.CALIDAD_ACTIVATION_ON:
        return {...state,
            estado: action.estado,
            activation: action.activation,

        };
        break;
        case types.CALIDAD_VALIDAR_SKU:
        return {...state,
            estado: action.estado,
            validacion: action.validacion,
            
        };
        break;
        case types.CALIDAD_NOMBRE_CLIENTE:
        return {...state,
            estado: action.estado,
            nombre_cliente: action.nombre_cliente,
            
        };
        break;
        case types.CALIDAD_TIPO_MODIFICACION:
            console.log('cambiando tipo modificacion:' + action.tipo_modificacion)
        return {...state,
            estado: action.estado,
            tipo_modificacion: action.tipo_modificacion,
            
        };
        break;
        case types.CALIDAD_GUARDA_PREDOMINANTE:
        return {...state,
            estado: action.estado,
            predominante: action.predominante,
            
        };
        break;
        case types.CALIDAD_GUARDA_NRO_EXHIBIDOR:
        return {...state,
            estado: action.estado,
            nro_exhibidor: action.nro_exhibidor,
            
        };
        break;
        case types.CALIDAD_GUARDA_NRO_EXHIBIDOR_OLD:
        return {...state,
            estado: action.estado,
            nro_exhibidor_old: action.nro_exhibidor_old,
            
        };
        break;        
        case types.CALIDAD_GUARDA_PREDOMINANTE_OLD:
        return {...state,
            estado: action.estado,
            predominante_old: action.predominante_old,
            
        };
        break;

    default:
    return state
    }
    }
    export default calidadReducer;