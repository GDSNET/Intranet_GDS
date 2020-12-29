import React, { Component } from 'react';
import {View, Text,  StyleSheet} from 'react-native-web'
import * as colores from '../../../constants/coloresConstants'


class Colores extends Component {
  constructor(props){
    super(props)
    this.state = {  
    }    
  }

  


  render() {

    
    return (
      
        <View style={styles.container}>
              
   <View style={styles.fila}>
        <View style={{flex: 1, backgroundColor: colores.COLOR_PRIMARIO}}>
          <Text> COLOR_PRIMARIO </Text>
        </View>
        <View style={{flex: 1, backgroundColor: colores.COLOR_PRIMARIO_CLARO}}>
          <Text> COLOR_PRIMARIO_CLARO </Text>
        </View>
        <View style={{flex: 1, backgroundColor: colores.COLOR_PRIMARIO_OSCURO}}>
          <Text> COLOR_PRIMARIO_OSCURO </Text>
        </View>
        </View>
        <View style={styles.fila}>

        <View style={{flex: 1, backgroundColor: colores.COLOR_SECUNDARIO}}>
          <Text> COLOR_SECUNDARIO </Text>
        </View>
        <View style={{flex: 1, backgroundColor: colores.COLOR_SECUNDARIO_CLARO}}>
          <Text> COLOR_SECUNDARIO_CLARO </Text>
        </View>
        <View style={{flex: 1, backgroundColor: colores.COLOR_SECUNDARIO_OSCURO}}>
          <Text> COLOR_SECUNDARIO_OSCURO </Text>
        </View>
        </View>
        <View style={styles.fila}>
        

        <View style={{flex: 1, backgroundColor: colores.COLOR_TERNARIO}}>
          <Text> COLOR_TERNARIO </Text>
          </View>
        <View style={{flex: 1, backgroundColor: colores.COLOR_TERNARIO_CLARO}}>
          <Text> COLOR_TERNARIO_CLARO </Text>
        </View>
        <View style={{flex: 1, backgroundColor: colores.COLOR_TERNARIO_OSCURO}}>
          <Text> COLOR_TERNARIO_OSCURO </Text>
        </View>
        </View>
        <View style={styles.fila}>

        <View style={{flex: 1, backgroundColor: colores.COLOR_CUATERNARIO}}>
          <Text> COLOR_CUATERNARIO </Text>
        </View>
        <View style={{flex: 1, backgroundColor: colores.COLOR_CUATERNARIO_CLARO}}>
          <Text> COLOR_CUATERNARIO_CLARO </Text>
        </View>
        </View>
        <View style={styles.fila}>


        <View style={{flex: 1, backgroundColor: colores.COLOR_QUINTENARIO}}>
          <Text> COLOR_QUINTENARIO </Text>
        </View>
        <View style={{flex: 1, backgroundColor: colores.COLOR_QUINTENARIO_CLARO}}>
          <Text> COLOR_QUINTENARIO_CLARO </Text>
        </View>
        </View>
        <View style={styles.fila}>

        <View style={{flex: 1, backgroundColor: colores.COLOR_SEXTENARIO}}>
          <Text> COLOR_SEXTENARIO </Text>
        </View>
        <View style={{flex: 1, backgroundColor: colores.COLOR_SEXTENARIO_CLARO}}>
          <Text> COLOR_SEXTENARIO_CLARO </Text>
        </View>

        </View>
       
        </View>

    );
  }
}





function mapStateToProps(state){
  return{
    ...state,        
    titulo: state.to.titulo,


  }
}





export default Colores



const styles = StyleSheet.create({
   
  container: {
  
    marginTop:20,
    padding: 10,
    height: '100%',
    padding: 20,
    
  },
  fila: {
    flexDirection: 'row',
      marginTop:20,
      padding: 10,
      height: '100%',
      padding: 20,
      
    },
  
});
