

import * as types from '../constants/comercialConstants'



  export function funApiCargaCli(cliente)  {
    return {
        type: types.CARGA_CLIENTE_PARAMETRO,
        cliente: cliente
     }
  };
