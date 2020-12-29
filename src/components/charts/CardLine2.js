import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';


import * as colores from '../../constants/coloresConstants'



 
class CardLine extends Component {
 

  render() {
  
   const  {backgroundColor,title, indicador, anterior, diferencia, txt_anterior, txt_diferencia } = this.props;
    
    return (
<View style={[styles.container]} >

        
           

  </View>
    );
  }
}
 



const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  
  },
  


});


export default CardLine;