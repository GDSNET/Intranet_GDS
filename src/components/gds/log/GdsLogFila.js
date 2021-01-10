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
    const {data, funGdsMessage} = this.props;
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
      funGdsMessage('Sala Modificada')

      // refrescamos la data
      const {semana_log,serv_log,estado_ok,funApiLog  } = this.props;
      new Promise((resolve, reject) => {
        resolve(gds_function.funApiArrayLog(semana_log, serv_log, estado_ok))
    }).then(res=>{
        
      funApiLog(res)
    })

  }else{alert('Error Datos No Modificados:' + res.data)}
  })

  

  }  


  funCambiaValidaConfirm(){
    const {funGdsMessage} = this.props;
    var r = window.confirm("Validas?");
    if (r == true) {
      this.funCambiaValida()
    } else {
      funGdsMessage('Cancelado....')
    }
  }


  render() {
    const {data} = this.props;
    return (
    <View style={styles.container}>

            
            
            <FilaText text={data.id_sala + ' - ' + data.desc_sala}></FilaText>


                <View style={styles.view_column}>
                            <FilaText text={data.desc_pre_log?'PreLog : ' + data.desc_pre_log:''}></FilaText>
                            <FilaText text={data.desc_log?'Log : ' + data.desc_log:''}></FilaText>
                            
                </View>

           
            <ButtonSalvaSala varExec={()=>this.funCambiaValidaConfirm()} estadoValido = {data.estado_valido}></ButtonSalvaSala>
            

            

    </View>
    );
  }
}
 

function mapStateToProps(state){
  return{

    semana_log: state.gds.semana_log,
    serv_log: state.gds.serv_log,
    estado_ok: state.gds.estado_ok


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
      flex:1,
      borderBottomWidth: 0.5,
      borderBottomColor: '#FFF',
      alignItems: 'center'

  },
  grilla: { 
    padding:5,
    flex:1

},
text: {

},
view_row: {
  flexDirection:"row",
},
view_column: {
  flexDirection:"column",
}
  
});