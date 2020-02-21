import  * as conexiones from '../publica/api_conexiones'




  export async function funApiCargaCli(){
  
    const url = conexiones.GDS_CONEXION_3009 + '/post_select_indicador_carga_p';  
          const config =  {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            },
          }
      
    return  await  fetch(url, config)
              .then((response) => {
               return response.json()})
              .then((json) => {
                return json.indicador
              });
      
      }

  