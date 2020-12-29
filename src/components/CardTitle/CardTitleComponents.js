import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import * as colores from '../../constants/coloresConstants'

 
class CardTitle extends Component {
 



  render() {
  
   const  {titulo, subtitulo, info ,icono, color_fondo, color_texto, icon} = this.props;

    return (
  <View style={[styles.container]} >
    <View style={[styles.etiqueta, {background: 'linear-gradient(to right , #231f20, #454041)'}]} >
    <View style={styles.v_dropview}>
    <Text style={[styles.txtSubtitulo]}>
          {info}
    </Text>

    </View>
    <View style={styles.v_titles}>
         <Text style={[styles.txtTitulo, {color: color_texto}]}>
          {titulo}
        
        </Text>
        <Text style={[styles.txtSubtitulo]}>
          {subtitulo}
        </Text>

    </View>

    <View style={styles.v_icon}>
     {icon}
    </View>
       
    </View>
</View>
    );
  }
}
 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:  'center',
    alignItems:  'center',
    marginHorizontal:10,
  
  },
  etiqueta: {
    flexDirection: 'row',
    width: '100%',
    padding:0,
    textAlign:  'center',
    alignItems:  'center',
    margin:10,
    borderRadius: 5,
    height: 80,
    
  
  },
  container_interno:{
    marginTop: -10,
    backgroundColor: colores.COLOR_WHITE,
    textAlign:  'center',
    alignItems:  'center',
    height: 40,
    paddingHorizontal: 20, 
    borderWidth: 0,
    marginBottom: -10,
    justifyContent: 'center',
    borderRadius: 5,
    
  },
  txtTitulo:{
    fontSize: 18,
    
  },

  txtSubtitulo:{
    fontSize: 14,
    color: colores.COLOR_CUATERNARIO
    
  },
  v_icon: {flex: 1, padding: 10},
  v_titles: {flex: 6, padding: 10},
  v_dropview: {flex: 1, padding: 10},
  
  

});


export default CardTitle;