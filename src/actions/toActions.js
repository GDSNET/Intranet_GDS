
import * as types from '../constants/toConstants'



  export function tostartAction()  {
    return {
        type: types.TO_START_ACTION,
        visible: true,
        estado: 'TO Star'
     }
  };

  export function tostopAction()  {
    return {
        type: types.TO_STOP_ACTION,
        visible: false,
        estado: 'TO Stop'
     }
  };
  
  export function tofunCalCambiarSala(numero)  {
    return {
        type: types.TO_AGREGAR_NUMERO,
        estado: 'TO CAMBIANDO Numero...',
        numero: numero
     }
  };

  export function tofunMenu(menu, menu_class)  {
   return {
       type: types.TO_MENU,
       estado: 'Cambiando Menu...',
       menu: !menu,
       menu_class: menu_class
    }
 };
  
 export function tofunDesplegable(desplegable)  {
   return {
       type: types.TO_DESPLEGABLE,
       estado: 'Cambiando desplegable...',
       desplegable: desplegable
    }
 };

 export function funCambiaLoading(valor)  {
   return {
       type: types.TO_LOADING,
       estado: 'Cambiando Loading...',
       loading: valor
    }
 };
 export function funLoginOn(valor)  {
   return {
       type: types.TO_LOGIN,
       estado: 'Login ON',
       dataUser: valor,
       desPerfil: valor.desc_perfil
    }
 };
 export function funLoginOff()  {
   return {
       type: types.TO_LOGIN,
       estado: 'Login OFF',
       dataUser: null,
       desPerfil: null
    }
 };



 
 