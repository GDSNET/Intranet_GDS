import * as types from '../constants/gdsConstants'

  export function startActionGDS()  {
    return {
        type: types.GDS_START_ACTION,
        visible: true,
        estado: 'paso Star GDS'
     }
  };

  export function stopActionGDS()  {
    return {
        type: types.GDS_STOP_ACTION,
        visible: false,
        estado: 'paso Stop GDS'
     }
  };
  
  export function GdsagregarNumero(numero)  {
    return {
        type: types.GDS_AGREGAR_NUMERO,
        estado: 'cambiando Numero...',
        numero: numero
     }
  };


 export function funGdsCambiaEstado(estado)  {
   return {
       type: types.GDS_GUARDA_ESTADO,
       estado: estado
    }
 };
 export function funGdsGuardaSemana(api)  {
   return {
       type: types.GDS_GUARDA_SEMANA,
       estado: 'Guarda semana',
       semana:api
    }
 };
 export function funGdsGuardaBDetalle(api)  {
   return {
       type: types.GDS_GUARDA_B_DETALLE_AGRUPADA,
       estado: 'Guardando B detalle',
       b_detalle:api
    }
 };
 export function funGdsGuardaDataSemana(api)  {
   return {
       type: types.GDS_GUARDA_DATA_SEMANA,
       estado: 'Guardando data semana',
       data_semana:api
    }
 };
 export function funGdsGuardaDataClienteHtml(data_cliente)  {
   return {
       type: types.GDS_GUARDA_DATA_CLIENTE_HTML,
       estado: 'Guardando cilente',
       data_cliente:data_cliente
    }
 };
 export function funGdsGuardaClienteHtml(cliente)  {
   return {
       type: types.GDS_GUARDA_CLIENTE_HTML,
       estado: 'Guarda cliente',
       cliente:cliente
    }
 };
 export function funGdsGuardaSalaHtml(sala)  {
   return {
       type: types.GDS_GUARDA_SALA_HTML,
       estado: 'Guarda sala',
       sala:sala
    }
 };
 export function funGdsGuardaDataHtml(data)  {
   return {
       type: types.GDS_GUARDA_DATA_HTML,
       estado: 'Guarda data de alarma',
       data_html:data
    }
 };
 export function funGdsBorraDataHtml()  {
   return {
       type: types.GDS_BORRA_DATA_HTML,
       data_html:[]
    }
 };
 export function funGdsGuardaEstado(estadoAlarma)  {
   return {
       type: types.GDS_GUARDA_ESTADO_ALARMA,
       estado: 'Guardando estado de alarma',
       estadoAlarma:estadoAlarma
    }
 };
 export function funGdsGuardaRespuesta(dato)  {
   return {
       type: types.GDS_GUARDA_RESPUESTA_DELETE,
       estado: '...Guardando Respuesta',
       respuesta:dato
    }
 };
 export function funGdsGuardaBDetalleExh(api)  {
   return {
       type: types.GDS_GUARDA_B_DETALLE_EXH,
       estado: 'Guardando B detalle Exh',
       b_detalle_exh:api
    }
 };
 export function funGdsGuardaEsquema(api)  {
   return {
       type: types.GDS_GUARDA_CLIENTE_DELETE,
       estado: 'Guardando Esquema B Detalle',
       cliente2:api
    }
 };
 export function funGdsGuardaClienteLog(dato)  {
   return {
       type: types.GDS_GUARDA_CLIENTE_LOG,
       estado: 'Guardando Cliente Log',
       clienteLog:dato
    }
 };
 export function funGdsGuardaEsquema2(dato)  {
   return {
       type: types.GDS_GUARDA_CLIENTE_ESQUEMA,
       estado: 'Guardando Cliente Esquema',
       clienteEsquema:dato
    }
 };

 export function funGdsGuardaClienteHTML(dato)  {
   return {
       type: types.GDS_GUARDA_CLIENTE_HTML_DELETE,
       estado: 'Guardando Cliente Html',
       clienteHTML:dato
    }
 };
 export function funGdsBorraSemana()  {
   return {
       type: types.GDS_BORRA_SEMANA,
       estado: 'Actualiza Semana',
       semana:''
    }
 };
 export function funGdsSelectLog(api)  {
   return {
       type: types.GDS_GUARDA_DATA_LOG,
       estado: 'Cargando data log ...',
       data_log:api
    }
 };
 export function funGdsGuardaDataSemLog(api)  {
   return {
       type: types.GDS_GUARDA_DATA_SEM_LOG,
       estado: 'Guardando data semana',
       data_semana_log:api
          }
 };
 export function funGdsGuardaSemLog(semana)  {
    console.log('guardando' +  semana)
   return {
       type: types.GDS_GUARDA_SEM_LOG,
       estado: 'Guardando semana',
       semana_log:semana
    }
 };
 export function funGdsGuardaDataServLog(api)  {
   return {
       type: types.GDS_GUARDA_DATA_SERV_LOG,
       estado: 'Guardando data servicio',
       data_serv_log:api
          }
 };
 export function funGdsGuardaServLog(serv)  {
   return {
       type: types.GDS_GUARDA_SERV_LOG,
       estado: 'Guardando servicio',
       serv_log:serv
    }
 };
 export function funGdsGuardaEstadoLog(estado)  {
   return {
       type: types.GDS_GUARDA_ESTADO_LOG,
       estado: 'Guardando estado',
       estado_log:estado
    }
 };