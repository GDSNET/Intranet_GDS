import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native-web';
import { MdDeleteSweep } from "react-icons/md";
import GoBack from '../components/control/ButtonGoBack';


class GdsEliminaMedicion1 extends Component {

  async componentDidMount(){

    await this.funClienteLog()
    await this.funClienteCorreoHTML()
    await this.funLLenaBDetalle()
    await this.funLLenaBDetalleExh()
    
  }

funClienteLog(){
  const {funGdsGuardaClienteLog, cliente2,data_cliente,funGdsGuardaEsquema2} = this.props

try{
  return  data_cliente.map((fila,i) => {

    if(fila.desc_cliente ==  cliente2){
      funGdsGuardaEsquema2(fila.esquema)
      funGdsGuardaClienteLog(fila.cliente_log)
    }
      
    
    });
} catch (error) {
    console.log(error)
  }


}

funClienteCorreoHTML(){
  const {funGdsGuardaClienteHTML, cliente2,data_cliente} = this.props

try{
  return  data_cliente.map((fila,i) => {

    if(fila.desc_cliente ==  cliente2){
      funGdsGuardaClienteHTML(fila.id_cliente_corrreos)
    }
      
    
    });
} catch (error) {
    console.log(error)
  }


}

async funLLenaBDetalle(){
  const {semana,sala,clienteEsquema,funGdsGuardaBDetalle} = this.props

const url = 'http://api.gdsnet.com:3005/api_gds_select_b_detalle_agrupado';




let body_data = JSON.stringify({
	"esquema": clienteEsquema,
	"sala": sala,
	"semana": semana
})


    const config =  {
      method: 'POST',
      body: body_data,
      headers: {
      "Content-Type": "application/json",
      },
    }

await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando datos" + JSON.stringify(json))
          funGdsGuardaBDetalle(json.b_detalle)
        });
}

async funLLenaBDetalleExh(){
  const {semana,sala,clienteEsquema,funGdsGuardaBDetalleExh} = this.props

const url = 'http://api.gdsnet.com:3005/api_gds_select_b_detalle_exh_agrupado';

let body_data = JSON.stringify({
	"esquema": clienteEsquema,
	"sala": sala,
	"semana": semana
})

//console.log(body_data)

    const config =  {
      method: 'POST',
      body: body_data,
      headers: {
      "Content-Type": "application/json",
      },
    }  

await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando datos" + JSON.stringify(json))
          funGdsGuardaBDetalleExh(json.b_detalle)
        });
}

mostrarResultadoBDetalle = () => {
  const {b_detalle} = this.props;
try {

var tabla = "b_detalle"
let algo = b_detalle.map((fila,i) => {

  
return(  
<tr className="regPauta" key={i}>    


              <th scope="row" key={i}>{i}</th>
              <td>{tabla}</td>
              <td>{fila.id_pto_pto_observ}</td>
              <td>{fila.id_tie_dia}</td>
              <td>{fila.id_tie_fecha_carga}</td>
              <td>{fila.tot_reg}</td>
              <td>{fila.f_q_presencia}</td>
              <td> 
              <TouchableOpacity onClick={()=> {this.funDelete(fila, tabla)}}>
                  <MdDeleteSweep className ='style_image_ir'/>
              </TouchableOpacity>
              </td>
             
  </tr>
)
	

});

return algo

} catch (error) {


return(
  //Tabla sin contenido, porque Aun no se selecciona pauta a revisar
  <tr>
  </tr>
)
}
}

mostrarResultadoBDetalleExh = () => {
  const {b_detalle_exh} = this.props;
try {

var tabla = "b_detalle_exhibidores"
let algo = b_detalle_exh.map((fila,i) => {

  
return(  
<tr className="regPauta" key={i}>    


              <th scope="row" key={i}>{i}</th>
              <td>{tabla}</td>
              <td>{fila.id_pto_pto_observ}</td>
              <td>{fila.id_tie_dia}</td>
              <td>{fila.id_tie_fecha_carga}</td>
              <td>{fila.tot_reg}</td>
              <td>{fila.f_q_presencia}</td>
              <td> 
              <TouchableOpacity onClick={()=> {this.funDelete(fila, tabla)}}>
                  <MdDeleteSweep className ='style_image_ir'/>
              </TouchableOpacity>
              </td>
             
  </tr>
)
	

});

return algo

} catch (error) {


return(
  //Tabla sin contenido, porque Aun no se selecciona pauta a revisar
  <tr>
  </tr>
)
}
}

async funDelete(item, tabla){

  const { respuesta} = this.props;

  if (window.confirm("¿Esta seguro que decia eliminar la sala?")) 
  {
    var person = prompt("Ingrese la Clave", '');
    if (person == 'elimina1111') {
    
    window.alert('Contraseña Correcta')

    await this.funApiDelete(item, tabla);
    await this.funApiUpdateLog();

    if (window.confirm("¿Quiere volver a emitir la alerta?")) 
        {
           await this.funApiUpdateTablaHTML();
        }

    await this.funLLenaBDetalle()
    await this.funLLenaBDetalleExh()

    }
    else
    {
      window.alert('Contraseña Incorrecta.')
    }
  }
  else    
   {

   }
}

async funApiDelete(item, tabla){

  const { clienteEsquema, sala, funGdsGuardaRespuesta} = this.props;

const url = 'http://api.gdsnet.com:3005/api_gds_delete_b_detalle';

let body_data = JSON.stringify({
  "esquema" : clienteEsquema,
  "tabla" : tabla,
  "sala" : sala,
  "id_tie_dia" : item.id_tie_dia,
  "id_tie_fecha_carga" : item.id_tie_fecha_carga
  })

    const config =  {
      method: 'POST',
      body: body_data,
      headers: {
      "Content-Type": "application/json",
      },
    }

let var_res = null;

try {
  var_res = await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando datos" + JSON.stringify(json))
          funGdsGuardaRespuesta(json.data)
          return json.data
        });
        
      } catch (e) {
        console.log(e.message)
  
      }
      window.confirm('Resultado :' + var_res)
}

async funApiUpdateLog(){

  const { clienteLog, sala, semana, funGdsGuardaRespuesta} = this.props;

const url = 'http://api.gdsnet.com:3005/api_gds_update_log';

let body_data = JSON.stringify({
  "cliente_log" : clienteLog,
  "sala" : sala,
  "semana" : semana,
  })

    const config =  {
      method: 'POST',
      body: body_data,
      headers: {
      "Content-Type": "application/json",
      },
    }

let var_res = null;

try {
  var_res = await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando datos" + JSON.stringify(json))
          funGdsGuardaRespuesta(json.data)
          return json.data
        });
        
      } catch (e) {
        console.log(e.message)
  
      } 
     // window.confirm('Resultado :' + var_res)
}

async funApiUpdateTablaHTML(){

  const { clienteHTML, sala,funGdsGuardaRespuesta} = this.props;

const url = 'http://api.gdsnet.com:3005/api_gds_update_correos_html';

let body_data = JSON.stringify({
  "id_cliente" : clienteHTML,
  "sala" : sala,
  })

    const config =  {
      method: 'POST',
      body: body_data,
      headers: {
      "Content-Type": "application/json",
      },
    }

let var_res = null;

try {
  var_res = await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando datos" + JSON.stringify(json))
          funGdsGuardaRespuesta(json.data)
          return json.data
        });
        
      } catch (e) {
        console.log(e.message)
  
      } 
     // window.confirm('Resultado :' + var_res)
}


   render() {
    const {estado, b_detalle, b_detalle_exh} = this.props;

    try{

      if(b_detalle.length > 0 || b_detalle_exh.length > 0){
       return (

        <div>
         <GoBack history={this.props.history} varIr={'gdsEliminaMedicion'}/>

          <h1 className='h1_info'>Modulo para eliminar mediciones, actualiza automaticamente el estado del log y 
          le pregunta si quiere volver a emitir la alerta del cliente.
          Para eliminar una medicion de CCU lo debe hacer en el cliente "CCU-Regular" y "CCU-Secundaria." </h1>

          <div className ='tabla'>
               <table id="TablaClick" className="TablaPauta table table-hover">
                        <thead className="theadPauta">
                            <tr className="bg-primary">
                                <th  scope="col">#</th>
                                <th scope="col">TABLA</th>
                                <th scope="col">ID SALA</th>
                                <th scope="col">FECHA MEDICION</th>
                                <th scope="col">FECHA DE CARGA</th>
                                <th scope="col">REGISTROS TOTALES</th>
                                <th scope="col">PRESENCIAS TOTALES</th>                   
                                <th scope="col">ELIMINAR</th>       
                            </tr>
                        </thead>
                        <tbody>
                                {this.mostrarResultadoBDetalle()}
                        </tbody>
                    </table>
                    </div>

            <div className ='tabla'>
               <table id="TablaClick" className="TablaPauta table table-hover">
                        <thead className="theadPauta">
                            <tr className="bg-primary">
                                <th  scope="col">#</th>
                                <th scope="col">TABLA</th>
                                <th scope="col">ID SALA</th>
                                <th scope="col">FECHA MEDICION</th>
                                <th scope="col">FECHA DE CARGA</th>
                                <th scope="col">REGISTROS TOTALES</th>
                                <th scope="col">PRESENCIAS TOTALES</th>                   
                                <th scope="col">ELIMINAR</th>       
                            </tr>
                        </thead>
                        <tbody>
                                {this.mostrarResultadoBDetalleExh()}
                        </tbody>
                    </table>
                    </div>
        <div className={'style_status'}>
            <h5 className='style_status_text'>{estado}</h5>
        </div>
        </div>
       )
       }else{
        return(<div className='div_prof'>
        <GoBack history={this.props.history} varIr={'gdsEliminaMedicion'}/>
        <h1>SALA SIN MEDICIONES PARA LA SEMANA SELECCIONADA</h1>
        </div>)
      }
      }catch(error){
        return(
          <ActivityIndicator  color='#FFF' size='100' />
        )
      }

}
}

function mapStateToProps(state){
  return{
    sala: state.gds.sala,
    estado: state.gds.estado,
    cliente2: state.gds.cliente2,
    semana: state.gds.semana,
    b_detalle: state.gds.b_detalle,
    respuesta: state.gds.respuesta,
    b_detalle_exh: state.gds.b_detalle_exh,
    clienteLog:state.gds.clienteLog,
    data_cliente:state.gds.data_cliente,
    clienteEsquema:state.gds.clienteEsquema,
    clienteHTML:state.gds.clienteHTML,
  }
}

function mapDispatchToProps (dispatch) {
 const combiner = Object.assign({},
  combinaActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}



export default connect(mapStateToProps, mapDispatchToProps)(GdsEliminaMedicion1);


const styles = StyleSheet.create({

  textinput: {
    
    padding: 20,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
    marginHorizontal: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    placeholderTextColor: '#FFCAB8',
    fontSize: 20,
  },
});