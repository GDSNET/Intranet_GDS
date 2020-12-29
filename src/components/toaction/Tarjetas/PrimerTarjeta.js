import React, { Component } from 'react';
import {View, Text,  StyleSheet, Dimensions} from 'react-native-web'
import  * as colores from '../../../constants/coloresConstants'


export default class Tarjeta extends Component {
 
  render() {
    const {titulo, icono, subtitulo, footer} = this.props;
    return (
       <View style={styles.container}>  



<View style={styles.view_principal}>  
    <View style={styles.view_principal_izq}>  
         <Text> {icono}</Text> 
    </View>
    <View style={styles.view_principal_der}>  
        <Text> {titulo}</Text>     
    </View>          
</View>
<View style={styles.view_centro}>  
<Text> {subtitulo}</Text>
            
</View>
<View style={styles.view_footer}>  
    <Text> {footer}</Text>          
</View>

      </View>

    );
  }
}




const styles = StyleSheet.create({
   
  container: {
   flex: 1,
   backgroundColor: colores.COLOR_CELESTE,
   margin: 5,
   borderRadius: 5
    
  },
  view_principal: {backgroundColor: colores.COLOR_GRIS_CLARO,flex: 1,  flexDirection: 'row'},
  view_principal_izq: {backgroundColor: colores.COLOR_NARANJO, flex : 1,  padding: 5},
  view_principal_der: {backgroundColor: colores.COLOR_PRIMARIO, flex: 2,  padding: 5},
  view_centro: {backgroundColor: colores.COLOR_SECUNDARIO, flex: 1,  padding: 5},
  view_footer: {backgroundColor: colores.COLOR_TERNARIO, flex: 1,  padding: 5},
  
})


