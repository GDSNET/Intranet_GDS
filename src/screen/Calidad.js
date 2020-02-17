import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {TextInput, StyleSheet} from 'react-native-web';
import Button from '../components/publica/buttonComponents';
import PickerItem from '../components/calidad/CalPickerComponents'; 
import CliPicker from '../components/calidad/CalPickerClientesComponents';
import {Picker} from 'react-native-web';

class Calidad extends Component {


  componentDidMount(){
    this.funApiSeamana();
    this.funApiCliente();
  }

  async funApiSeamana(){
    const {funCalGuardaDataSemana} = this.props;
    
  //  const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://api.gdsnet.com:3005/post_api_semana';
    
       const config =  {
         method: 'POST',
          headers: {
          "Content-Type": "application/json",
          },
     
        }

        

    await  fetch(url,config)
            .then((response) => {
             return response.json()})
            .then((json) => {
              console.log("guardando datos" + JSON.stringify(json))
              funCalGuardaDataSemana(json.semana)
            });
    
    }

    async funApiCliente(){
      const {funCalGuardaDataCliente} = this.props;
      
      //const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = 'http://api.gdsnet.com:3005/api_calidad_select_cliente';
      
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
                funCalGuardaDataCliente(json.cliente)
              });
      
      }

      async funApiSku(sku){
        const {cliente} = this.props;        
        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'http://api.gdsnet.com:3005/api_calidad_select_sku';

        
let body_data = JSON.stringify({
  "cliente" : cliente,
  "sku" : sku
  })
        
            const config =  {
              method: 'POST',
              headers: {
              "Content-Type": "application/json",
              },
              body: body_data
            }
            console.log("imp body" + JSON.stringify(body_data))   
 let  data_sku =  await  fetch(url, config)
                .then((response) => {
                 return response.json()})
                .then((json) => {
                  console.log("guardando datos" + JSON.stringify(json))
                  return json.sku
                });

    return data_sku                
        }
  

      
  
      funIr(){


        const {sala, semana, cliente,funCalCambiaEstado, history,validacion,tipo_modificacion} = this.props;
if(!sala) {funCalCambiaEstado('favor revise sala')}
else if(!validacion) { funCalCambiaEstado('favor revisar sku')}
else if(!semana) {funCalCambiaEstado('favor revise semana')}
else if(!cliente) {funCalCambiaEstado('favor revise cliente')}
else if(tipo_modificacion==1) {history.push('/CalidadN1')}
else (
  history.push('/CalidadN1Exh')

)

      }

      

      async funValidadSku(value){

        const {funValidadSku} = this.props;

       // console.log('paso')
      const data = await this.funApiSku(value)
        
    try {
      if (data[0].desc_id_sku){

        let validador = true;
        funValidadSku(validador)

      }else{
        let validador = false;
        funValidadSku(validador)
      }
    } catch (error) {
      let validador = false;
      funValidadSku(validador)
    }
    return data;
      }

      funRetornoValidar(){
        const {validacion} = this.props;

        if(validacion){
           return styles.textinput_ok
        }else{
           return styles.textinput
        }
      }
    
funRetornarBoton(){


  const {validacion} = this.props;

  if(validacion){
    return  (<Button title='Ir' funExecute={()=>this.funIr()} varible={''} />)
  }
   
}
    
funRetornarSkuLabel(){

  const {validacion} = this.props;

   if(validacion==false){
    return  (<h2>SKU No encontrado!!!</h2>)
  }
  
}


  render() {
    const {estado,tipo_modificacion, sala, funCalGuardaSala,id_sku,funCalGuardaSku,funTipoModificacion} = this.props;

       
    return (
      
      <div  className='container'>        

        <div className='div_left'>

        <PickerItem />
        <CliPicker />
        <h2>Seleccione Tipo de Modificacion {tipo_modificacion}</h2>
        <Picker
                ref="ModificacionSeleccion"
                className="style_picker"
                selectedValue={tipo_modificacion}
                onValueChange={(value)=>{funTipoModificacion(value)}}>
                >
            <Picker.Item label='Seleccione Modificacion' value ={0} />    
            <Picker.Item label='b_detalle' value ={1} />
            <Picker.Item label='b_detalle_exhibicion' value ={2} />

            </Picker>
       
       
      </div>
                <div className='div_right'>

                <h2>Ingrese Sku: {id_sku} </h2>
               
                {this.funRetornarSkuLabel()}
          <TextInput style={this.funRetornoValidar()} 
          keyboardType='numeric'
          placeholder='Ingrese Sku' 
          onChangeText={(text)=> funCalGuardaSku(text)}
          onBlur ={()=>this.funValidadSku(id_sku)}
          value={id_sku}

          />

          <h2>Ingrese Sala: {sala} </h2>
          <TextInput style={styles.textinput} 
          keyboardType='numeric'
          placeholder='Ingrese Sala' 
          onChangeText={(text)=> funCalGuardaSala(text)}
          value={sala}
          />
         

          {this.funRetornarBoton()}
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
    
    estado: state.calidad.estado,
    data_cliente: state.calidad.data_cliente,
    data_semana: state.calidad.data_semana,
    sala: state.calidad.sala,
    id_sku: state.calidad.id_sku,
    semana: state.calidad.semana,
    cliente: state.calidad.cliente,
    validacion: state.calidad.validacion,
    desc_sku: state.calidad.desc_sku,
    tipo_modificacion:state.calidad.tipo_modificacion
    
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

export default connect(mapStateToProps, mapDispatchToProps)(Calidad);


const styles = StyleSheet.create({

  textinput: {    
    padding: 20,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    placeholderTextColor: '#FFCAB8',
    fontSize: 16,
  },
  textinput_ok: {    
    padding: 20,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#33FF93',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#000',
    placeholderTextColor: '#FFCAB8',
    fontSize: 16,
  },
});
