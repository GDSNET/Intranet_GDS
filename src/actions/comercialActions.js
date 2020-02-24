

import * as types from '../constants/comercialConstants'



  export function funCargaCli(cliente)  {
    return {
        type: types.CARGA_CLIENTE_PARAMETRO,
        cliente: cliente
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
  export function funGuardaIndicador(indicador)  {
    return {
        type: types.GUARDA_INDICADOR_PARAMETRO,
        sel_indicador: indicador
     }
  };
