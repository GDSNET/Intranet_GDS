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
funGdsGuardaDataServLog(res)
})

  new Promise((resolve, reject) => {
    resolve(gds_function.funApiArrayLog())
}).then(res=>{
  funApiLog(res)
})


}

funRecorreLog(){
  const {array_log } = this.props;
 return array_log.map((value,i)=>{

        return(
          
                <View>
               
                <GdsLogFila 
                data = {value}
                />
                </View>

        )

 })

}



  render() {
    const {funGdsGuardaSemLog, data_semana_log,semana_log,message } = this.props;

    return (
  
    <View>
      <View style={styles.container}>

        <Text>Desarrollando Log</Text>
        <Text>  {semana_log} </Text>
        <Text>{message} </Text>

        <GdsPicker
          data = {data_semana_log}
          funExec= {funGdsGuardaSemLog}
          selecionado = {semana_log}
          comentario={'Seleccione Semana'}
        />
        
        <ButtonSalvaSala />

        
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