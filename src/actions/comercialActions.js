import * as types from '../constants/comercialConstants'

  export function funApiCargaCli(cliente)  {
    return {
        type: types.CARGA_CLIENTE_PARAMETRO,
        cliente: cliente
     }
  };

  export function funGuardaDataExcel(json)  {
    return {
        type: types.GUARDA_DATA_EXCEL_JSON,
        data_excel: json
     }
  };

export function funGuardaDataArrayExcel(array)  {
   return {
       type: types.GUARDA_DATA_ARRAY_EXCEL,
       data_array: array
    }
 };

 export function funGuardaQueryArray(query)  {
   return {
       type: types.GUARDA_QUERY,
       query_array: query
    }
 };
 export function funGuardaJsonBody(json)  {
   return {
       type: types.GUARDA_JSON_BODY,
       data_json_body: json
    }
 };
 export function funGuardaCli(sel_cliente)  {
   return {
       type: types.GUARDA_CLIENTE_PARAMETRO,
       sel_cliente: sel_cliente
    }
 };
 export function funCargaIndicador(indicador)  {
   return {
       type: types.CARGA_INDICADOR_PARAMETRO,
       indicador: indicador
    }
 };
 export function funGuardaIndicador(sel_indicador)  {
   return {
       type: types.GUARDA_INDICADOR_PARAMETRO,
       sel_indicador: sel_indicador
    }
 };
 export function funCargaCli(cliente)  {
   return {
       type: types.CARGA_CLIENTE_PARAMETRO,
       cliente: cliente
    }
 };
 export function funGuardaEsquema(esquema)  {
   return {
       type: types.GUARDA_ESQUEMA_CLIENTE,
       esquema: esquema
    }
 };
 export function funGuardaFetch(respuesta)  {
   return {
       type: types.GUARDA_RESPUESTA_FETCH,
       res_fetch: respuesta
    }
 };

 export function funGuardaBaseDatos(data)  {
   return {
       type: types.GUARDA_BASE_DATOS_CLIENTE,
       base_datos: data
    }
 };
 export function funGuardaServidor(data)  {
   return {
       type: types.GUARDA_SERVIDOR_CLIENTE,
       servidor: data
    }
 };
