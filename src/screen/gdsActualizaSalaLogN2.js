import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {TextInput, StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native-web';
import { IoMdRefresh }  from "react-icons/io";
import GoBack from '../components/control/ButtonGoBack';

class gdsActualizaSalaLogN2 extends Component {


async componentDidMount(){
    await this.funClienteLog()
    await this.funSelectLog()
  }

  funClienteLog(){
    const {funGdsGuardaClienteLog, cliente2,data_cliente} = this.props
  
  try{
    return  data_cliente.map((fila,i) => {
  
      if(fila.desc_cliente ==  cliente2){
        funGdsGuardaClienteLog(fila.cliente_log)
      }
        
      
      });
  } catch (error) {
      console.log(error)
    }
  
  
  }

  async funSelectLog(){
    const {clienteLog,sala,semana,funGdsSelectLog} = this.props
  
  const url = 'http://api.gdsnet.com:3005/api_gds_select_cliente_log';
    
  let body_data = JSON.stringify({
    "cliente": clienteLog,
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
            funGdsSelectLog(json.log)
          });
  }

  mostrarResultadoLog = () => {
    const {data_log} = this.props;
  try {

  let algo = data_log.map((fila,i) => {
    
  return(  
  <tr className="regPauta" key={i}>    
  
  
                <th scope="row" key={i}>{i}</th>
                <td>{fila.cliente}</td>
                <td>{fila.id_cfg}</td>
                <td>{fila.id_sala}</td>
                <td>{fila.desc_sala}</td>
                <td>{fila.desc_pre_log}</td>
                <td>{fila.estado_log}</td>
                <td>{fila.desc_log}</td>
                <td>{fila.estado_valido}</td>
                <td>{fila.estado_ok}</td>
                <td> 
                <TouchableOpacity onClick={()=> {this.funActualizaLog()}}>
                    <IoMdRefresh className ='style_image_ir'/>
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

  async funActualizaLog(){

    const { respuesta} = this.props;
  
    if (window.confirm("¿Esta seguro que decia actualizar la sala?")) 
    {
      var person = prompt("Ingrese la Clave", '');
      if (person == 'actualiza1111') {
      
      window.alert('Contraseña Correcta')
  
      await this.funApiUpdateLog();
  
  
      await this.funSelectLog()
  
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

  render() {
    const {clienteLog,sala,semana,data_log} = this.props;
    try{

      if( data_log.length > 0 ){
    return (
<div>  <GoBack history={this.props.history} varIr={'gdsActualizaSalaLog'}/>
 <h1 className = 'h1_info'>Si ha modificado la medicion de una sala, mediante este modulo puede actualizar su estado en el log
            para que se refresque con la nueva informacion. Solo debes presionar el boton de actualizar.</h1>

 <div className ='tabla'>
               <table id="TablaClick" className="TablaPauta table table-hover">
                        <thead className="theadPauta">
                            <tr className="bg-primary">
                                <th  scope="col">#</th>
                                <th scope="col">CLIENTE</th>
                                <th scope="col">ID SEMANA</th>
                                <th scope="col">ID SALA</th>
                                <th scope="col">DESC SALA</th>
                                <th scope="col">DESC PRE LOG</th>
                                <th scope="col">ESTADO LOG</th>                   
                                <th scope="col">DESC LOG</th>       
                                <th scope="col">ESTADO VALIDO</th>      
                                <th scope="col">ESTADO OK</th>      
                                <th scope="col">ACTUALIZAR</th>      
                            </tr>
                        </thead>
                        <tbody>
                                {this.mostrarResultadoLog()}
                        </tbody>
                    </table>
                    </div>
                    </div>
    ) }else{
      return(<div className='div_prof'>
      <GoBack history={this.props.history} varIr={'gdsActualizaSalaLog'}/>
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
    data_cliente: state.gds.data_cliente,
    sala: state.gds.sala,
    estado: state.gds.estado,
    semana: state.gds.semana,
    clienteLog:state.gds.clienteLog,
    cliente2:state.gds.cliente2,
    data_log:state.gds.data_log,
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



export default connect(mapStateToProps, mapDispatchToProps)(gdsActualizaSalaLogN2);