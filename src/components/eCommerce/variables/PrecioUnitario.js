import React, { Component } from "react";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native-web';
import * as constants from '../../publica/constants'

 
export default class PrecioUnitario extends Component {

  funCargaValor(valor){
    if(valor){
     return(
      <View style={styles.contenedorON}>
        <Text style={styles.text_desc}> con PrecioUnitario </Text>
        </View>
     )
    }else{
      return(
        <View style={styles.contenedorOFF}>
        <Text style={styles.text_desc}> sin PrecioUnitario </Text>
        </View>
      )
    }
  }

  render() {
    const {valor, funExecute} = this.props;
    
    return (
        
        <View style={styles.contenedor}>
          <TouchableOpacity onPress={funExecute}>
          {this.funCargaValor(valor)}
          </TouchableOpacity>
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
      fontSize: constants.SIZE_LETRA_LARGE
    },
  contenedorON: {
    alignItem: 'center',
    borderRadius: 2,
    padding: 5,
    backgroundColor: constants.COLOR_PRIMARIO
},
contenedorOFF: {
  alignItem: 'center',
  borderRadius: 2,
  padding: 5,
  backgroundColor: constants.COLOR_SECUNDARIO_CLARO
},
})