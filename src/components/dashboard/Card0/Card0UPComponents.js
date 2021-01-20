import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import * as colores from '../../../constants/coloresConstants'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
 
class Card0Up extends Component {
 


  render() {
  
   const  {titulo, indicador, anterior, diferencia, txt_anterior, txt_diferencia } = this.props;
    
    return (
<View style={[styles.container]} >
    
      <View style={[styles.div_titulo]}>
            <Text style={[styles.div_titulo_text]} > {titulo} </Text>
      </View>
    <View style={[styles.div_porcentaje]}>
        <View style={[styles.div_porcentaje_icono]}>
              <FaAngleUp color={colores.COLOR_PRIMARIO} size={100}/>
        </View>
        <View style={[styles.div_porcentaje_dato]}>
        
        <View style={[styles.div_porcentaje_dato]}>
        <Text style={[styles.div_porcentaje_dato_text]} >  {indicador} </Text>
        </View>

        
        </View>
    </View>
    <View style={[styles.div_abajo]}>
          <View style={[styles.div_diferencias]}>
              <View style={[styles.div_anterior]}> 
                <View style={[styles.div_anterior_titulo]}>
                    <Text style={[styles.div_anterior_titulo_text]} >  {txt_anterior} </Text>
                </View>
                <View style={[styles.div_anterior_dato]}>
                    <Text style={[styles.div_anterior_dato_text]} >  {anterior} </Text>
                </View>
              </View>
              <View style={[styles.div_diferencia]}> 
                <View style={[styles.div_diferencia_titulo]}>
                    <Text style={[styles.div_diferencia_titulo_text]} >  {txt_diferencia} </Text>
                </View>
                <View style={[styles.div_diferencia_dato]}>
                    <Text style={[styles.div_diferencia_dato_text]} >  {diferencia} </Text>
                </View>
              </View>
        </View>
    </View>
  
</View>
    );
  }
}
 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 3,
    backgroundColor: colores.COLOR_WHITE
    
  
  },
  div_filas: {
    backgroundColor: colores.COLOR_PRIMARIO,
 
    alignItems:  'center',
    flexDirection: 'column',
    
  },
  div_titulo: {
    backgroundColor: colores.COLOR_PRIMARIO,
 
    alignItems:  'center',
    padding: 10,
    borderRadius: 50,
  },
  div_titulo_text: {
    color: colores.COLOR_WHITE,
    fontSize: 20,
  
  },
  div_porcentaje: {
    padding: 20,
    alignItem: 'center',
    flexDirection: 'column',
    flex: 2,
 
    alignItems:  'center',
  },
  div_porcentaje_icono: {
    
    flex: 1,
  },
  div_porcentaje_dato: {
    
    flex: 1,
  },
  div_porcentaje_dato_text: {
    fontSize: 34,
    color: colores.COLOR_PRIMARIO
  },

  div_diferencias: {
    flexDirection: 'row',
    
 
    alignItems:  'center',

    
  },
  div_anterior: {
    
    flex: 1,
 
    alignItems:  'center',
   
  },
  div_anterior_titulo: {
    
    flex: 1,
 
    alignItems:  'center',
  },
  div_anterior_titulo_text: {
    
    color: colores.COLOR_GRIS,
    fontSize: 10,
   },
  div_anterior_dato: {
    
    flex: 1,
 
    alignItems:  'center',
    paddingTop: 5,
    
  },
  div_anterior_dato_text: {
    
    color: colores.COLOR_GRIS,
    fontSize: 20,
   },
   div_abajo: {
    
    padding: 20,
    borderTopWidth: 1,
    borderColor: colores.COLOR_GRIS_CLARO,   
    
  },
  div_diferencia: {
    
    flex: 1,
 
    alignItems:  'center',
    borderLeftWidth: 1,
    borderColor: colores.COLOR_GRIS_CLARO,   
    
  },
  div_diferencia_titulo: {
    
    flex: 1,
 
    alignItems:  'center',
  },
  div_diferencia_titulo_text: {
    
    color: colores.COLOR_PRIMARIO,
    fontSize: 10,
   },
  div_diferencia_dato: {
    
    flex: 1,
 
    alignItems:  'center',
    paddingTop: 5,
  },
  div_diferencia_dato_text: {
    
   color: colores.COLOR_PRIMARIO,
   fontSize: 20,
  },

});


export default Card0Up;