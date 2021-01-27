import  * as conexiones from '../../publica/api_conexiones'




  export async function funApiCargaCli(){
  
    const url = conexiones.GDS_CONEXION_3009 + '/post_select_cliente_carga_p';  
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
                return (json.cliente)
              });
      
      }

      export async function funApiCargaIndicador(cliente){

  
        const url = conexiones.GDS_CONEXION_3009 + '/post_select_indicador_carga_p';  
       
        let body_data = JSON.stringify({
          "cliente" : cliente,
          })
              const config =  {
                method: 'POST',
                body: body_data,
                headers: {
                "Content-Type": "application/json",
                },
              }
        return  await  fetch(url, config)
                  .then((response) => {
                   return response.json()})
                  .then((json) => {
                    return json.log
                  });
          
          }
