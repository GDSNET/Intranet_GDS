

import * as types from '../constants/calidadConstants'



  export function startActionCalidad()  {
    return {
        type: types.CALIDAD_START_ACTION,
        visible: true,
        estado: 'paso Star Calidad'
     }
  };

  export function stopActionCalidad()  {
    return {
        type: types.CALIDAD_STOP_ACTION,
        visible: false,
        estado: 'paso Stop Calidad'
     }
  };
  
  export function calidadagregarNumero(numero)  {
    return {
        type: types.CALIDAD_AGREGAR_NUMERO,
        estado: 'cambiando Numero...',
        numero: numero
     }
  };


 export function funCalCambiaEstado(estado)  {
   return {
       type: types.CALIDAD_GUARDA_ESTADO,
       estado: estado
    }
 };
 export function funCalGuardaSemana(api)  {
   return {
       type: types.CALIDAD_GUARDA_SEMANA,
       estado: 'Guarda semana',
       semana:api
    }
 };
 export function funCalGuardaDataSemana(api)  {
   return {
       type: types.CALIDAD_GUARDA_DATA_SEMANA,
       estado: 'Guardando data semana',
       data_semana:api
    }
 };
 export function funCalGuardaSala(sala)  {
   return {
       type: types.CALIDAD_GUARDA_SALA,
       estado: '...Guardando Sala',
       sala:sala
    }
 };
 export function funCalGuardaCliente(dato)  {
   return {
       type: types.CALIDAD_GUARDA_CLIENTE,
       estado: '...Guardando cliente',
       cliente:dato
    }
 };
 export function funCalGuardaSku(dato)  {
   return {
       type: types.CALIDAD_GUARDA_SKU,
       estado: '...Guardando sku',
       id_sku:dato
    }
 };
 export function funCalGuardaDataDetalle(dato)  {
   return {
       type: types.CALIDAD_GUARDA_B_DETALLE,
       estado: '...Guardando datos',
       data_b_detalle:dato
    }
 };
 export function funCalGuardaDataCliente(dato)  {
   return {
       type: types.CALIDAD_GUARDA_DATA_CLIENTE,
       estado: '...Guardando datos cliente',
       data_cliente:dato
    }
 };
 export function funCalGuardaItem(dato)  {
   return {
       type: types.CALIDAD_GUARDA_ITEM,
       estado: '...Guardando Fila',
       item:dato
    }
 };
 export function funCalGuardaExh(dato)  {
   return {
       type: types.CALIDAD_GUARDA_EXH,
       estado: '...Guardando Exhibicion',
       exh:dato
    }
 };
 export function funCalGuardaDataExh(dato)  {
   return {
       type: types.CALIDAD_GUARDA_DATA_EXH,
       estado: '...Guardando Data Exhibicion',
       data_exh:dato
    }
 };

 export function funCalGuardaPromo(dato)  {
   return {
       type: types.CALIDAD_GUARDA_PROMO,
       estado: '...Guardando Promocion',
       promo:dato
    }
 };
 export function funCalGuardaDataPromo(dato)  {
   return {
       type: types.CALIDAD_GUARDA_DATA_PROMO,
       estado: '...Guardando Data Promocion',
       data_promo:dato
    }
 };
 export function funCalGuardaFrentes(dato)  {
   return {
       type: types.CALIDAD_GUARDA_FRENTES,
       estado: '...Guardando Frentes',
       frentes:dato
    }
 };
 export function funCalGuardaPrecio(dato)  {
   return {
       type: types.CALIDAD_GUARDA_PRECIO,
       estado: '...Guardando Precio',
       precio:dato
    }
 };
 export function funCalGuardaExhOld(dato)  {
   return {
       type: types.CALIDAD_GUARDA_EXH_OLD,
       estado: '...Guardando Exh Antigua',
       exh_old:dato
    }
 };
 export function funCalGuardaPromoOld(dato)  {
   return {
       type: types.CALIDAD_GUARDA_PROMO_OLD,
       estado: '...Guardando Promocion Antigua',
       promo_old:dato
    }
 };
 export function funCalGuardaRespuesta(dato)  {
   return {
       type: types.CALIDAD_GUARDA_RESPUESTA_MOD,
       estado: '...Guardando Respuesta',
       respuesta:dato
    }
 };
 
 export function funActivacionOn()  {
   return {
       type: types.CALIDAD_ACTIVATION_ON,
       estado: 'Activando Ruedita...',
       activation:true
    }
 };
 
 
 export function funActivacionOff()  {
   return {
       type: types.CALIDAD_ACTIVATION_OFF,
       estado: '...Desactivando Ruedita',
       activation:false
    }
 };
 export function funValidadSku(dato)  {
   return {
       type: types.CALIDAD_VALIDAR_SKU,
       estado: 'Validando Sku',
       validacion : dato
    }
 };
 export function funGuardaDescSku(desc_sku)  {
   return {
       type: types.CALIDAD_GUARDA_DESC_SKU,
       desc_sku : desc_sku
    }
 };
 export function funGuardaNombreCli(nombre_cliente)  {
   return {
       type: types.CALIDAD_NOMBRE_CLIENTE,
       nombre_cliente : nombre_cliente
    }
 };
 export function funTipoModificacion(tipo_modificacion)  {
  return {
      type: types.CALIDAD_TIPO_MODIFICACION,
      tipo_modificacion : tipo_modificacion
   }
};
export function funGuardaPredominante(predominante)  {
  return {
      type: types.CALIDAD_GUARDA_PREDOMINANTE,
      predominante : predominante
   }
};
export function funGuardaNroExhibidor(nro_exhibidor)  {
  return {
      type: types.CALIDAD_GUARDA_NRO_EXHIBIDOR,
      nro_exhibidor : nro_exhibidor
   }
};
export function funGuardaNroExhibidorOld(nro_exhibidor_old)  {
  return {
      type: types.CALIDAD_GUARDA_NRO_EXHIBIDOR_OLD,
      nro_exhibidor_old : nro_exhibidor_old
   }
};
export function funGuardaPredominanteOld(predominante_old)  {
  return {
      type: types.CALIDAD_GUARDA_PREDOMINANTE_OLD,
      predominante_old : predominante_old
   }
};