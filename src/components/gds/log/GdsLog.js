import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import ButtonSalvaSala from './GdsButtonSalvaSala'
import {Text, View, StyleSheet} from 'react-native-web'
import GdsPicker from './GdsPicker'
import * as gds_function from './GdsFunction'
import GdsLogFila from './GdsLogFila'

 
class Cliente extends Component {

componentDidMount(){

  const {funGdsGuardaDataSemLog, funGdsGuardaDataServLog,funApiLog} = this.props;

  new Promise((resolve, reject) => {
    resolve(gds_function.funApiSeamana())
}).then(res=>{
  //alert(JSON.stringify(res))
  funGdsGuardaDataSemLog(res)
})

new Promise((resolve, reject) => {
  resolve(gds_function.funApiServicio())
}).then(res=>{
alert(JSON.stringify(res))
funGdsGuardaDataServLog(res)
})

  new Promise((resolve, reject) => {
    resolve(gds_function.funApiArrayLog())
}).then(res=>{
  
  funApiLog(res)

  //alert(JSON.stringify(res))
  
})
}

funRecorreLog(){
  const {array_log } = this.props;
 return array_log.map((value,i)=>{

        return(
          
                <View>
               
                <GdsLogFila 
                id_sala = {value.id_cfg}
                desc_sala = {value.desc_sala}
                desc_pre_log = {value.desc_pre_log}
                desc_log = {value.desc_log}
                estado_valido = {value.estado_valido}
                estado_ok  = {value.estado_ok}
                />
                </View>

        )

 })

}





  funButton(){
   
     if(window.confirm("¿Esta seguro que desea validar la sala?")) {
       window.alert("Sala validada")
     }
     else{
       window.alert("Sala no validada")
     }
    
  }


  render() {
    const {funGdsGuardaSemLog, data_semana_log,semana_log, data_serv_log  } = this.props;

    return (
  
    <View>
      <View style={styles.container}>

        <Text>Desarrollando Log</Text>
        <Text>  {semana_log} </Text>

        <GdsPicker
          data = {data_semana_log}
          funExec= {funGdsGuardaSemLog}
          selecionado = {semana_log}
          comentario={'Seleccione Semana'}
        />
        
        <ButtonSalvaSala
          variable = {0}
          funExecute={()=>this.funButton()}
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
    array_log: state.gds.array_log
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

    flexDirection: 'row'
    
  },
  
});