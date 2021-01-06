
import * as types from '../constants/eComConstants'



  export function funGuardaProfile(id_profile)  {
    return {
        type: types.ECOM_GUARDA_ID_PROFILE,
        id_profile: id_profile,
        estado: 'Guardando Profile'
     }
  };

  export function funGuardaIdSala(id_sala)  {
   return {
       type: types.ECOM_GUARDA_ID_SALA,
       id_sala: id_sala,
       estado: 'Guardando Sala'
    }
 };
 