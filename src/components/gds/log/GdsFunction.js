import  * as conexiones from '../../publica/api_conexiones'

 export async function funApiSeamana(){
  
const url = conexiones.GDS_CONEXION_3009 + '/post_api_semana';  
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
            return json.semana
          });
  
  }

  export async function funApiServicio(){
  
    const url = conexiones.GDS_CONEXION_3009 + '/api_gds_select_cliente_intranet';  
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
                return json.cliente_int
              });
      
      }