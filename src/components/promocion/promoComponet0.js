import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';

  
class promoCard0 extends Component {
 

  render() {
  
   const  {backgroundColor,title, indicador, anterior, diferencia, txt_anterior, txt_diferencia, styles } = this.props;
    
    return (
<View style={[styles.container]} >
<View style={styles.containerDivisorColumn}>
          <View style={styles.containerDivisorArriba}>
   
              <View style={styles.containerDivisorIzq}>
                    <View style={[styles.divIndicador, {backgroundColor: backgroundColor}]}>
                        <Text 
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                         style={styles.txtIndicador}>{indicador}
                         </Text>


                    </View>
              </View>
              <View style={styles.containerDivisorDerecha}>
              <View style={styles.title}>  
                    <Text 
                    
                          adjustsFontSizeToFit={true}
                          numberOfLines={1}
                            style={styles.txtTitle}>{title}</Text>
                  </View>
             </View>
                  
         </View> 



         <View style={styles.containerDivisor}>
                          <View style={styles.view_anterior}>
                          <Text style={styles.txtAnterior}>{txt_anterior}</Text>
                          <Text style={styles.txtAnteriorIndicador}>{anterior}</Text>
                          </View>
                          <View style={styles.view_diferencia}>
                             <Text style={styles.txtDiferencia}>{txt_diferencia}</Text>
                              <Text style={styles.txtDiferenciaIndicador}>{diferencia}</Text>
                          </View>
         </View>

    </View>
           

  </View>
    );
  }
}
 



export default promoCard0;