import React, { Component } from "react";
import {View,StyleSheet} from 'react-native-web'
import FilaText from './GdsLogFilaTextTitulos'

 
export default class GdsLogFilaTitulos extends Component {




  render() {
    const {data} = this.props;
    return (
    <View style={styles.container}>

            
            
            <FilaText text={"Sala"}></FilaText>
            <FilaText text={"Comentarios"}></FilaText>
            <FilaText text={"Validado ?"}></FilaText>
            
            

            

    </View>
    );
  }
}
 





const styles = StyleSheet.create({

  container: {
      flexDirection:"row",
      flex:1

  },
  grilla: { 
    padding:5,
    flex:1

},
text: {

},
  
});