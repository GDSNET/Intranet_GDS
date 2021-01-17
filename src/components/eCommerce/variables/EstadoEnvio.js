import React, { Component } from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native-web';
import * as constants from '../../publica/constants'

 
export default class EstadoEnvio extends Component {


  funCargaValor(valor){
    if(valor===0){
     return(
         <View style={styles.contenedorNULL}>
            <Text style={styles.text_desc}>listo para enviar</Text>
        </View>
     )
    }
    else if(valor===1){
      return(
           <View style={styles.contenedorON}>
         <Text style={styles.text_desc}> OK </Text>
         </View>
      )
     }else{
      return(
        <View style={styles.contenedorOFF}>
            <Text style={styles.text_desc}> Error </Text>
        </View>
      )
    }
  }
  render() {
    const {valor,detalle} = this.props;
    
    return (
      <View style={styles.contenedor}>  
              <View style={styles.contenedor}>
                
                {this.funCargaValor(valor, detalle)}
                <Text style={styles.text_detalle}> {detalle} </Text>
              </View>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({


  contenedor: {
    alignItem: 'center',
    margin: 5,
    },
  
    text_desc: {
      color: constants.COLOR_BLANCO,
      fontSize: constants.SIZE_LETRA_SMALL,
      padding: 20,
    },
      
    text_detalle: {
      color: constants.COLOR_SECUNDARIO_CLARO,
      fontSize: constants.SIZE_LETRA_SMALL,
      padding: 20,
    },
  contenedorON: {
    alignItem: 'center',
    borderRadius: 100,
    padding: 5,

    backgroundColor: constants.COLOR_PRIMARIO
},
contenedorOFF: {
  alignItem: 'center',
  borderRadius: 100,
  padding: 30,
  backgroundColor: constants.COLOR_SECUNDARIO_CLARO
},
})