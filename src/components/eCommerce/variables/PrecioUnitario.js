import React, { Component } from "react";
import {StyleSheet, View, TextInput} from 'react-native-web';
import * as constants from '../../publica/constants'

 
export default class PrecioUnitario extends Component {


  render() {
    const {valor, id_sku_sap, funExecute} = this.props;
    
    return (
        
        <View style={styles.contenedor}>
          <TextInput style={valor===""?styles.contenedorOFF:styles.contenedorON} 
            placeholder='Precio Unitario' 
            onChangeText={(text)=> funExecute(id_sku_sap, text)}
            value={valor}
            />
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
    backgroundColor: constants.COLOR_PRIMARIO,
    placeholderTextColor:  constants.COLOR_GRIS_B,
},
contenedorOFF: {
  alignItem: 'center',
  borderRadius: 2,
  padding: 5,
  backgroundColor: constants.COLOR_SECUNDARIO_CLARO,
  placeholderTextColor:  constants.COLOR_GRIS_B,
},

})