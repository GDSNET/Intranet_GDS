

import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import Picker from './GdsDelSalaPickerComponents';
import PickerSemana from './GdsPickerSemanaComponents';
import {TextInput, StyleSheet} from 'react-native-web';
import Button from '../publica/buttonComponents';

class gdsActualizaSalaLog extends Component {


  componentDidMount(){
    this.funApiSeamana();
    this.funApiClienteHtml();
  }

  async funApiSeamana(){
    const {funGdsGuardaDataSemana} = this.props;
    
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://api.gdsnet.com:3005/post_api_semana';
    
        const config =  {
          method: 'POST',
          headers: {
          "Content-Type": "application/json",
          },
        }
    
    await  fetch(url, config)
            .then((response) => {
             return response.json()})
            .then((json) => {
              //console.log("guardando datos" + JSON.stringify(json))
              funGdsGuardaDataSemana(json.semana)
            });
    
    }
    
async funApiClienteHtml(){
const {funGdsGuardaDataClienteHtml} = this.props;


const url = 'http://api.gdsnet.com:3005/api_gds_select_clientes_intranet';

    const config =  {
      method: 'POST',
      headers: {
      "Content-Type": "application/json",
      },
    }                 

await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando datos" + JSON.stringify(json))
          funGdsGuardaDataClienteHtml(json.cliente_int)
        });
}

funIr(){
  const {sala, cliente2,funGdsCambiaEstado,history} = this.props;
if(!sala ){
  funGdsCambiaEstado('Sala Vacia, favor revisar :D')
}else if (!cliente2){
  funGdsCambiaEstado('Cliente Vacio, favor revisar :D')
}else{
  history.push('gdsActualizaSalaLogN2')
}
  
}

  render() {
    const {estado,funGdsGuardaSalaHtml,sala} = this.props;
    return (



      <div >
      
      <h1>Modulo para actualizar el estado del log.</h1>
      <div >
         <PickerSemana/>
         <Picker />
      </div>
      
      <div>
         <h1>Ingrese Sala: {sala} </h1>
         <TextInput style={styles.textinput} 
         keyboardType='numeric'
         placeholder='Ingrese Sala' 
         onChangeText={(text)=> funGdsGuardaSalaHtml(text)}
          value={sala}
        />

<Button title='Continuar' className = 'style_boton_2' funExecute={()=>this.funIr()} varible={''} />
      </div>
                
        <div className={'style_status'}>
            <h5 className='style_status_text'>{estado}</h5>
        </div>

      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    data_cliente: state.gds.data_cliente,
    sala: state.gds.sala,
    estado: state.gds.estado,
    cliente2: state.gds.cliente2,
    semana:state.gds.semana,
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



export default connect(mapStateToProps, mapDispatchToProps)(gdsActualizaSalaLog);


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