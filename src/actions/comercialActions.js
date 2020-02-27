
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