import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import * as colores from '../../../constants/coloresConstants'




class Card1 extends Component {
 
  


  render() {
  
    const  {indicador, titulo} = this.props;

    return (
<View style={[styles.container]} >
<View style={[styles.container]} >
<View style={[styles.titulo]} >
<Text  style={[styles.titulo_text]}>{titulo}</Text>
</View>

<View style={[styles.indicador]} >
<Text  style={[styles.indicador_text]}> {indicador}% </Text>
  
</View>

</View>

  
</View>
    );
  }
}
 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 3,
    backgroundColor: colores.COLOR_PRIMARIO,
  },
  titulo:{
    flex: 1,
    textAlign:  'center',
    alignItems:  'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colores.COLOR_WHITE,   
  },
  titulo_text:{
    color: colores.COLOR_WHITE,
    fontSize: 10,
  },
  indicador:{
    flex: 3,
    textAlign:  'center',
    alignItems:  'center',
    padding: 20,
 
  },
  indicador_text:{
    color: colores.COLOR_WHITE,
    fontSize: 15,
  },
  

});


export default Card1;