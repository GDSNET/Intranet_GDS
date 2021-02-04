import React from 'react'
import {} from 'react-native'



export async function Conexion(url, json_data_body){

        console.log("datos para conexion" + JSON.stringify(json_data_body))
       
       let body_data = JSON.stringify({})
       
           const config =  {
             method: 'POST',
             body: body_data,
             headers: {
             "Content-Type": "application/json",
             },
           }  
             
       try {
      return await  fetch(url, config)
               .then((response) => {
                return response.json()})
               .then((json) => {
                 console.log("datos recibidos" + JSON.stringify(json))
                 return json
               });
               
             } catch (e) {
               console.log(e.message)
         
             }  
      

}
