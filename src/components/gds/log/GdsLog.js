import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';

import GdsButton from './GdsButton'
import {Text, View, StyleSheet, ScrollView} from 'react-native-web'
import GdsPicker from './GdsPicker'
import * as gds_function from './GdsFunction'
import GdsLogFila from './GdsLogFila';
import GdsLogFilaTitulos from './GdsLogFilaTitulos';
import FlashMessage from './FlashMessage'

 
class Cliente extends Component {

componentDidMount(){

  const {funGdsGuardaDataSemLog, funGdsGuardaDataServLog} = this.props;
 
  new Promise((resolve, reject) => {
    resolve(gds_function.funApiServicio())
  }).then(res=>{
  //alert(JSON.stringify(res))
  funGdsGuardaDataServLog(res)
  })


  new Promise((resolve, reject) => {
    resolve(gds_function.funApiSeamana())
}).then(res=>{
  //alert(JSON.stringify(res))
  funGdsGuardaDataSemLog(res)
})



}

funImportData(){
  const {semana_log,serv_log,estado_ok,funApiLog,funGdsMessage  } = this.props;
  if(semana_log==null || serv_log==null || estado_ok==null){
    funGdsMessage('Falta completar un Selector')
    
  }else {


  new Promise((resolve, reject) => {
    resolve(gds_function.funApiArrayLog(semana_log, serv_log, estado_ok))
}).then(res=>{
    //alert(JSON.stringify(res))
  funApiLog(res)
  if(res[0]==null){
    funGdsMessage('... sin datos')
  }else{
    funGdsMessage('recibimos ' + res.length + ' filas')
  }
    
})

  }
}





funRecorreLog(){
  const {array_log } = this.props;


try {

  return array_log.map((value,i)=>{

    return(
      
            <View>
           
            <GdsLogFila 
            data = {value}
            />
            </View>

    )

})
  
} catch (error) {

  return(<Text>Cargando....{JSON.stringify(error)}</Text>)
  
}



}




  render() {
    const {funGdsGuardaSemLog,estado_ok, data_semana_log,semana_log, data_serv_log,serv_log,funGdsGuardaServLog,funGdsGuardaEstadoOk  } = this.props;

    return (
  
    <View>
      <View style={styles.container}>


        <FlashMessage />
        
    

        



        
        <Text style={styles.colorMensaje}> Seleccionando Semana: {semana_log} - Servicio: {serv_log} - Estado: {estado_ok} </Text>      
        
        <View style={styles.vistaPickers}>

              <GdsPicker
                data = {data_semana_log}
                funExec= {funGdsGuardaSemLog}
                selecionado = {semana_log}
                comentario={'Seleccione Semana'}
              />
              
              <GdsPicker
                data = {data_serv_log}
                funExec= {funGdsGuardaServLog}
                selecionado = {serv_log}
                comentario={'Seleccione Cliente'}
              />

                <GdsPicker
                data = {[{"id":"1", "desc":"OK"},{"id":"0", "desc":"ERROR"}]}
                funExec= {funGdsGuardaEstadoOk}
                selecionado = {estado_ok}
                comentario={'Seleccione Estado'}
              />

              <GdsButton
                variable = {0}
                varExec={()=>{this.funImportData()}}
              />

        </View>


      </View>
      <View style={styles.vistaData}>
      <GdsLogFilaTitulos />
      <ScrollView style={styles.view_scroll}>
            {this.funRecorreLog()}
      </ScrollView>
      </View>
      </View>
    );
  }
}
 

function mapStateToProps(state){
  return{
    data_semana_log: state.gds.data_semana_log,
    semana_log: state.gds.semana_log,
    data_serv_log: state.gds.data_serv_log,
    array_log: state.gds.array_log,
    message: state.gds.message,
    serv_log: state.gds.serv_log,
    estado_ok: state.gds.estado_ok,
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



export default connect(mapStateToProps, mapDispatchToProps)(Cliente);

const styles = StyleSheet.create({

  container: {

    flex: 1,
    
  },

  view_scroll: {
flex: 1
  },

  colorMensaje: {

    
    color: '#FFF',
    fontSize: 12
    
  },

  vistaPickers: {
    flex: 1,
    flexDirection: 'row',
    
  },
  vistaData: {
    margin: 10
    
  },
});