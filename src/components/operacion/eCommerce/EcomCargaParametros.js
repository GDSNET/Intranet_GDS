import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import {Text, View, StyleSheet} from 'react-native-web'
import * as gds_function from './EcommerceFunction'
import ReadExcel from './ReadExcel/ExcelReader'
import GdsPicker from './EcommercePicker'
import Button from './EcommerceButton'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Comercial extends Component {

  componentDidMount(){
    
    const {funCargaCli} = this.props;

    new Promise((resolve, reject) => {
      resolve(gds_function.funApiCargaCli())
  }).then(res=>{
    funCargaCli(res)
  })

  }

  createNotification(type){
    console.log(type)
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('por favor seleccione.','Indicadores actualizados');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
  }

  funCargaPickerIndicador(){
    const {funCargaIndicador,sel_cliente} = this.props;

    new Promise((resolve, reject) => {
      resolve(gds_function.funApiCargaIndicador(sel_cliente))
    }).then(res=>{
    funCargaIndicador(res)
  }).then(res=>{
    this.funEsquemaCliente()
  })
  this.createNotification('success')
  }

  funEsquemaCliente(){
    const {sel_cliente ,cliente ,funGuardaEsquema ,funGuardaServidor ,funGuardaBaseDatos} = this.props;

    //console.log(cliente)
    
  cliente.map((v, indice) => {
     if(sel_cliente == v.desc){
       const esq = v.esquema
       funGuardaEsquema(esq)

       const bd = v.base_datos
       funGuardaBaseDatos(bd)

       const sv = v.server
       funGuardaServidor(sv)
     }
     })

  }

  render(){
const {cliente,funGuardaCli,sel_cliente,funGuardaIndicador,indicador,sel_indicador,res_fetch}=this.props

    return (
  
    <View style={styles.container}>

      <Text  style={styles.TextRespuesta} >{JSON.stringify(res_fetch)}</Text> 
              <View style={styles.StyleSelectorCli}>
                 <GdsPicker
                  data = {cliente}
                  funExec= {funGuardaCli}
                  selecionado = {sel_cliente}
                  comentario={'Seleccione Cliente'}
                 />

                 <View>
                 <Button
                  varExec={()=>{this.funCargaPickerIndicador()}}
                 />
                 </View>

                 <GdsPicker
                  data = {indicador}
                  funExec= {funGuardaIndicador}
                  selecionado = {sel_indicador}
                  comentario={'Seleccione Indicador'}
                 />
              </View>

      <NotificationContainer/>   
      <ReadExcel/>
    
      </View>
    );
  }
}
 

function mapStateToProps(state){
  return{

    cliente: state.comercial.cliente,
    sel_cliente: state.comercial.sel_cliente,
    indicador:state.comercial.indicador,
    sel_indicador:state.comercial.sel_indicador,
    esquema:state.comercial.esquema,
    res_fetch: state.comercial.res_fetch,    
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



export default connect(mapStateToProps, mapDispatchToProps)(Comercial);

const styles = StyleSheet.create({

  container: {
    
  },
  TextRespuesta: {
    fontSize: 20,
    color: '#ffffff'
  },

  StyleSelectorCli:{
    flexDirection:'row',
    alingItems:'left',
  }
});