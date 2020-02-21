import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {View,StyleSheet} from 'react-native-web'
import FilaText from './GdsLogFilaText'
import ButtonSalvaSala from './GdsButtonSalvaSala'
import  {funApiUpdateValida} from './GdsFunction'
import * as gds_function from './GdsFunction'
 
class Fila extends Component {


  funCambiaValida(){
    const {data, funApiLog, funGdsMessage} = this.props;
    let estadoValida = null

if(data.estado_valido == 1){
  estadoValida = 0
}else
{
  estadoValida = 1
}
   
    let body_data = JSON.stringify({
      "cliente" : data.cliente,
      "sala" : data.id_sala,
      "semana" : data.id_cfg,
      "estado" : estadoValida,
      })


    


  new Promise((resolve, reject) => {
    resolve(funApiUpdateValida(body_data))
  }).then(res=>{
    if (res.data=='ok'){
      funGdsMessage(':D Sala Validada :D')
      new Promise((resolve, reject) => {
        resolve(gds_function.funApiArrayLog())
    }).then(res=>{
      funApiLog(res)
    })
  }else{alert('Error Datos No Modificados:' + res.data)}
  })

  

  }  


  render() {
    const {data} = this.props;
    return (
    <View style={styles.container}>

            <FilaText text={data.cliente}></FilaText>
            <FilaText text={data.id_sala}></FilaText>
            <FilaText text={data.desc_sala}></FilaText>
            <FilaText text={data.desc_pre_log}></FilaText>
            <FilaText text={data.desc_log}></FilaText>
            <FilaText text={data.estado_valido}></FilaText>
            <FilaText text={data.estado_ok}></FilaText>
            <ButtonSalvaSala varExec={()=>this.funCambiaValida()} estadoValido = {data.estado_valido}></ButtonSalvaSala>
            

            

    </View>
    );
  }
}
 

function mapStateToProps(state){
  return{

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

export default connect(mapStateToProps, mapDispatchToProps)(Fila);


const styles = StyleSheet.create({

  container: {
      flexDirection:"row",
      flex:1

  },
  grilla: { 
    padding:5,
    flex:1

},
text: {
  textColor:"#F2FBED"

},
  
});