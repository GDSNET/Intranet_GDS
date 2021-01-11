import React, { Component } from "react";
import {StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native-web';
import * as constants from '../../publica/constants'


 
export default class Mecanica extends Component {



  render() {
    const {valor, id_sku_sap, funExecute} = this.props;
    
    return (
        
        <View style={styles.contenedor}>
          <Picker 
           style={styles.picker}
            mode="dropdown"
            selectedValue={valor || ""}
            onValueChange={(text)=> funExecute(id_sku_sap, text)}>
          <Picker.Item label='Seleccione Mecanica' value="" key={null}/>
            {this.props.data.map((item, key) => {
                return (
                <Picker.Item label={item.desc_mecanica} value={item.id_mecanica} key={key}/>) 
            })}
              
        </Picker>
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
picker: {
  alignItem: 'center',
  borderRadius: 2,
  padding: 5,
  backgroundColor: constants.COLOR_QUINTENARIO_CLARO,
  color: constants.COLOR_BLANCO,
  fontSize: constants.SIZE_LETRA_LARGE
},
})