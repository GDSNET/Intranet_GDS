
import * as types from '../constants/controlConstants'



  export function startAction()  {
    return {
        type: types.START_ACTION,
        visible: true,
        estado: 'paso Star'
     }
  };

  export function stopAction()  {
    return {
        type: types.STOP_ACTION,
        visible: false,
        estado: 'paso Stop'
     }
  };
  
  export function funCalCambiarSala(numero)  {
    return {
        type: types.AGREGAR_NUMERO,
        estado: 'cambiando Numero...',
        numero: numero
     }
  };
  
  export function funCambiaNumero(numero)  {
   return {
       type: types.CONTROL_CAMBIA_NUMERO,
       estado: 'cambiando Numero...',
       numero: numero
    }
 };

 export function funGuardaSemana(api)  {
   return {
       type: types.CONTROL_API_SEMANA,
       estado: 'Guardando Semana',
       data_semana: api
    }
 };

 export function funCambiaProfile(profile)  {
   return {
       type: types.CONTROL_GUARDO_PROFILE,
       profile: profile,
       estado: 'Guardando Profile'
    }
 };

 export function funCambiaEstado(estado)  {
   return {
       type: types.CONTROL_CAMBIA_ESTADO,
       estado: estado
    }
 };

 export function funCambiaSemana(numero)  {
   return {
       type: types.CONTROL_CAMBIA_NUMERO,
       estado: 'cambiando Semana...',
       numero: numero
    }
 };

 export function funGuardaDatosNivel1(api)  {
   return {
       type: types.CONTROL_GUARDA_NIVEL1,
       estado: 'Guardando Detalle Punto Servicio',
       data_nivel1: api,
       estado_fetch : 1
    }
 };
 export function funGuardaDatosNivel2(api)  {
   return {
       type: types.CONTROL_GUARDA_NIVEL2,
       estado: 'Guardando Detalle Sala Tarea',
       data_nivel2: api
    }
 };
 export function funGuardaDatosNivel3(api,tarea_det){
   return {
       type: types.CONTROL_GUARDA_NIVEL3,
       estado: 'Detalle de la categoria: ' + tarea_det,
       data_nivel3: api
    }
 };
 export function funGuardaPunto(punto)  {
   return {
       type: types.CONTROL_GUARDA_PUNTO,
       estado: 'Guardando punto',
       punto: punto
    }
 };

 export function funGuardaTarea(tarea,tarea_det)  {
   return {
       type: types.CONTROL_GUARDA_TAREA,
       estado: 'Guardando Tarea',
       tarea: tarea,
       tarea_det: tarea_det
    }
 };

 export function funGuardaDias(fecha_inicio,fecha_fin)  {
   return {
       type: types.CONTROL_GUARDA_DIA,
       estado: 'Guardando dias ...',
       fecha_inicio: fecha_inicio,
       fecha_fin : fecha_fin,
    }
 };
 export function funBorraNivel3()  {
   return {
       type: types.CONTROL_BORRA_NIVEL3,
       estado: '...Refrencando',
       data_nivel3 : []
    }
 };
 export function funBorraNivel2()  {
   return {
       type: types.CONTROL_BORRA_NIVEL2,
       estado: '...Refrencando',
       data_nivel2 : []
    }
 };
 export function funBorraNivel1()  {
   return {
       type: types.CONTROL_BORRA_NIVEL1,
       estado: '...Refrencando',
       data_nivel1 : []
    }
 };
 export function funBorrafetch()  {
   return {
       type: types.CONTROL_BORRA_FETCH,
       estado: '...Refrencando',
       estado_fetch : 0
    }
 };