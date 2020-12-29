import React, { Component } from 'react';
import {View, Text,  StyleSheet, Dimensions} from 'react-native-web'
import  * as colores from '../../../constants/coloresConstants'


export default class Tarjeta extends Component {
 
  render() {
    const {icono,titulo,subtitulo,indicador,grafico} = this.props;
    return (
       <View style={styles.container}>  


       <View style={styles.view_principal}>

          <View style={styles.view_pri_superior}>

            <View style={styles.view_sup_izq}>
                    
                    <View style={styles.view_sup_izq_arriba}>
                    <Text>{titulo}</Text>
                    </View>
                    <View style={styles.view_sup_izq_abajo}>
                    <Text>{subtitulo}</Text>
                    </View>
            </View>

            <View style={styles.view_sup_der}>
            <Text>{icono}</Text>
            </View>  

          </View>

          <View style={styles.view_pri_inferior}>

               <View style={styles.view_inferior_izq}>
               <Text>{indicador}</Text>
               </View>
               <View style={styles.view_inferior_der}>
               <Text>{grafico}</Text>
              </View>
          </View>


       </View>



            <Text> soy la Segunda tarjeta</Text>
            
           
            
            
            
      </View>

    );
  }
}

const styles = StyleSheet.create({
   
  container: {
   flex: 1
    
  },
  view_principal: {backgroundColor: colores.COLOR_NARANJO, flex : 1},
  
  view_pri_superior: {backgroundColor: colores.COLOR_CELESTE, flex : 1,  padding: 5,flexDirection: 'row'},
  
  view_sup_izq: {backgroundColor: colores.COLOR_PRIMARIO_CLARO, flex : 4,  padding: 5},
  view_sup_der: {backgroundColor: colores.COLOR_QUINTENARIO_CLARO, flex : 1,  padding: 5},
  view_sup_izq_arriba: {backgroundColor: colores.COLOR_PRIMARIO_CLARO, flex : 1,  padding: 5},
  view_sup_izq_abajo: {backgroundColor: colores.COLOR_GRIS, flex : 1,  padding: 5},

  view_pri_inferior: {backgroundColor: colores.COLOR_CELESTE, flex : 1,  padding: 5,flexDirection: 'row'},
  view_inferior_izq: {backgroundColor: colores.COLOR_SECUNDARIO_OSCURO, flex : 1,  padding: 5},
  view_inferior_der: {backgroundColor: colores.COLOR_SEXTENARIO_CLARO, flex : 3,  padding: 5},
  
   
})


