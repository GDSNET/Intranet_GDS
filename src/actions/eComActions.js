
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

 export function   funGuardaPlataforma(valor) {
   console.log('seleccion plataforma');
   return {
     type: types.ECOM_GUARDA_PLATAFORMA,
     data_plataforma: valor,
     estado: 'seleccion plataforma'
   }
 }
 
 
 
 
 