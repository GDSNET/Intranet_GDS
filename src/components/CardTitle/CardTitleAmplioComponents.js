import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import * as colores from '../../constants/coloresConstants'
import logo from '../../images/logogds2020_03blanco.svg';
 
class CardTitle extends Component {
 





  render() {
  
   const  {titulo, subtitulo, color_texto, icon} = this.props;
   let newDate = new Date()

    return (
<View style={[styles.container,  {background: 'linear-gradient(to right , #231f20, #454041)'}]} >
    <View style={[styles.etiqueta]} >
    <View style={styles.v_titles}>
          <View style={styles.v_titulo}>
              <Text style={styles.txtTitulo}>
              Global Decision Support
              </Text>
          </View>  
          <View style={styles.v_subtitles}>
              <Text style={[styles.txtSubtitulo]}>
              Copyright © Todos los Derechos Reservados - {newDate.getFullYear()}
              </Text>
      
          </View>   
    </View>
    <View style={styles.v_icon}>
    <img src={logo} alt="LogoFooter" className={"logo_title"} />
    </View>
    </View>  
    </View>

    );
  }
}
 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:-20,
    marginTop:0,
    paddingHorizontal:20,
    paddingVertical:0,
  
  },
  etiqueta: {
    flexDirection: 'row',
    width: '100%',

    paddingHorizontal:40,
    paddingTop:80,

    
  
  },

  txtTitulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: colores.COLOR_CUATERNARIO,
  },

  txtSubtitulo:{
    paddingTop: 2,
    fontSize: 12,
    color: colores.COLOR_CUATERNARIO,
    
    
  },
  v_icon: {flex: 1, padding: 5, paddingHorizontal: 100},
  v_titles: {flex: 5, padding: 10},
  v_dropview: {flex: 1, padding: 10},
  v_titulo: {padding: 5},
  v_subtitles: {padding: 5},
  

});


export default CardTitle;