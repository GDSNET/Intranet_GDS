import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import * as colores from '../../../constants/coloresConstants'
import DashCard0Up from './Card0UPComponents'
import DashCard0Down from './Card0DOWNComponents'
 
class Card0 extends Component {
 
  funUpOrDown(diferencia){
  const  {titulo,indicador,anterior,  txt_diferencia,txt_anterior } = this.props;

if (diferencia>'0%'){
  return (
    <DashCard0Up
    titulo={titulo}
    indicador={indicador}
    anterior={anterior}
    diferencia={diferencia}
    txt_diferencia={txt_diferencia}
    txt_anterior={txt_anterior}
    />
  )
}
  else {
    return (
      <DashCard0Down 
    titulo={titulo}
    indicador={indicador}
    anterior={anterior}
    diferencia={diferencia}
    txt_diferencia={txt_diferencia}
    txt_anterior={txt_anterior}
    />
  )

  
}

}


  render() {
  
   const  {diferencia} = this.props;

    return (
<View style={[styles.container]} >
    {this.funUpOrDown(diferencia)}
  
</View>
    );
  }
}
 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 5,
    backgroundColor: colores.COLOR_WHITE
    
  
  },
  

});


export default Card0;