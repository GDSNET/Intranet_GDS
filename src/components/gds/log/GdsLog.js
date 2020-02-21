import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import ButtonSalvaSala from './GdsButtonSalvaSala'
import {Text, View, StyleSheet} from 'react-native-web'
import GdsPicker from './GdsPicker'
import * as gds_function from './GdsFunction'
import GdsLogFila from './GdsLogFila';
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
 
   
  const {semana_log,serv_log,estado_ok,funApiLog  } = this.props;
  new Promise((resolve, reject) => {
    resolve(gds_function.funApiArrayLog(semana_log, serv_log, estado_ok))
}).then(res=>{
  funApiLog(res)
})
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
    const {funGdsGuardaSemLog,estado_ok, data_semana_log,semana_log, data_serv_log,serv_log,funGdsGuardaServLog,funGdsGuardaEstadoOk, message  } = this.props;

    return (
  
    <View>
      <View style={styles.container}>


        <FlashMessage />
        
    

        <Text>Desarrollando Log</Text>



        <Text>  {semana_log} </Text>
        <Text>  {semana_log} </Text>      
        <Text>  {serv_log} </Text>  
        <Text>  {estado_ok} </Text> 

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

        <ButtonSalvaSala
          variable = {0}
          varExec={()=>{this.funImportData()}}
        />


      </View>
      {this.funRecorreLog()}
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

  flashMessage: {

    flex: 1,
    backgroundColor: '#FFF'
    
  },
});