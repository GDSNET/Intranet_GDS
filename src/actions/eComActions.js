
import * as types from '../constants/eComConstants'




  export function funGuardaProfile(id_profile)  {
    return {
        type: types.ECOM_GUARDA_ID_PROFILE,
        id_profile: id_profile,
        estado: 'Guardando Profile'
     }
  };

  export function funGuardaSala(data_sala)  {
   return {
       type: types.ECOM_GUARDA_SALA,
       data_sala: data_sala,
       estado: 'Guardando Sala'
    }
 };
 

function SalasRequest() {
   console.log('Salas Rquest');
   return {
     type: types.ECOM_GET_SALA_REQUEST,
     estado: 'Salas Request',
     dataSala: null,
   }
 }
 
 function SalasError(isRefresh) {
   console.log('Salas Error');
   return {
     type: types.ECOM_GET_SALA_ERROR,
     estado: 'Salas ERROR'
   }
 }
 
 export function   SalasOK(api_salas) {
   console.log('Salas OK');
   //console.log(api_salas)
   return {
     type: types.ECOM_GET_SALA_OK,
     dataSala: api_salas,
     estado: 'Salas OK'
   }
 }

 
 export function   PlataformaOK(api_salas) {
   console.log('Plataforma OK');
   return {
     type: types.ECOM_GET_PLATAFORMA_OK,
     dataPlataforma: api_salas,
     estado: 'Plataforma OK'
   }
 }

  
 export function   PlanillaOK(api_salas) {
   console.log('Planilla OK');
   return {
     type: types.ECOM_GET_PLANILLA_OK,
     dataPlanilla: api_salas,
     estado: 'Planilla OK'
   }
 }

 
 export function   PlanillaLimpiar() {
  console.log('Planilla Limpia');
  return {
    type: types.ECOM_GET_PLANILLA_ERROR,
    dataPlataforma: null,
    planilla: false,
    estado: 'Planilla Limpia'
  }
}

 export function   funGuardaPlataforma(valor) {
   console.log('seleccion plataforma');
   return {
     type: types.ECOM_GUARDA_PLATAFORMA,
     data_plataforma: valor,
     estado: 'guarda plataforma:' + valor
   }
 }

 export function   funGuardaPresencia(id_sku_sap, valor) {
  console.log('guarda presencia');
  return {
    type: types.ECOM_GUARDA_PRESENCIA,
    id_sku_sap: id_sku_sap,
    presencia: valor,
    estado: 'guarda presencia:' + valor
  }
}

export function   funGuardaStock(id_sku_sap, valor) {
  console.log('guarda Stock');
  return {
    type: types.ECOM_GUARDA_STOCK,
    id_sku_sap: id_sku_sap,
    stock: valor,
    estado: 'guarda stock:' + valor
  }
} 
export function   funGuardaDescripcion(id_sku_sap, valor) {
  console.log('guarda Descripcion');
  return {
    type: types.ECOM_GUARDA_DESCRIPCION_SKU,
    id_sku_sap: id_sku_sap,
    descripcion: valor,
    estado: 'guarda descripcion:' + valor
  }
} 

export function   funGuardaImagen(id_sku_sap, valor) {
  console.log('guarda Imagen');
  return {
    type: types.ECOM_GUARDA_VALOR_IMAGEN,
    id_sku_sap: id_sku_sap,
    imagen: valor,
    estado: 'guarda imagen:'
  }
} 
 
export function   funGuardaPrecioUnitario(id_sku_sap, valor) {
  console.log('guarda precio unitario');
  return {
    type: types.ECOM_GUARDA_PRECIO_UNITARIO,
    id_sku_sap: id_sku_sap,
    precio_unitario: valor,
    estado: 'guarda precio unitario' + valor
  }
} 

export function   funGuardaPrecioDescuento(id_sku_sap, valor) {
  console.log('guarda precio descuento');
  return {
    type: types.ECOM_GUARDA_PRECIO_DESCUENTO,
    id_sku_sap: id_sku_sap,
    precio_descuento: valor,
    estado: 'guarda precio descuento' + valor
  }
} 

export function   funGuardaMecanica(id_sku_sap, valor) {
  console.log('guarda mecanica');
  return {
    type: types.ECOM_GUARDA_MECANICA,
    id_sku_sap: id_sku_sap,
    mecanica: valor,
    estado: 'guarda mecanica' + valor
  }
} 

export function   funGuardaAlertaQuiebre(id_sku_sap, valor) {
  console.log('guarda alerta quiebre');
  return {
    type: types.ECOM_GUARDA_ALERTA_QUIEBRE,
    id_sku_sap: id_sku_sap,
    alerta: valor,
    estado: 'guarda alerta quiebre' + valor
  }
} 

export function   funSolicitarPlanilla(valor) {
  console.log('Solicita Planilla');
  return {
    type: types.ECOM_SOLICITAR_PLANILLA,
    planilla: valor,
    estado: 'Solicita Planilla?' + valor
  }
} 

export function   funApiExhibiciones(valor) {
  console.log('Solicita Exhibiciones');
  return {
    type: types.ECOM_EXHIBICIONES,
    exhibiciones: valor,
    estado: 'Solicita Exhibiciones'
  }
} 

export function  funEnvio(id_sku_sap, envio_estado, envio_comentario) {
  console.log('enviando');
  return {
    type: types.ECOM_ENVIA,
    id_sku_sap: id_sku_sap,
    envio_estado: envio_estado,
    envio_comentario: envio_comentario,
    estado: 'Enviando: ' + id_sku_sap
  }
} 




