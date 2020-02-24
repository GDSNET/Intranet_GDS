import React, { Component } from "react";
import {Text,View,StyleSheet} from 'react-native-web'
import * as colores from '../../publica/colores'

 
export default class FilaText extends Component {


  render() {
    const {text} = this.props;
    return (
    <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
    </View>
    );
  }
}
 

const styles = StyleSheet.create({

  container: {
      flex:1

  },
text: {
  color: colores.COLOR_BLANCO,
  fontSize: 20,

},
  
});