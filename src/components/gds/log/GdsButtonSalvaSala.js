import React, { Component } from "react";
import { connect } from "react-redux";
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native-web'
import { FiSquare,FiCheckSquare } from "react-icons/fi";

 
export default class ButtonSalvaSala extends Component {


  funButton(funExecutame){

    funExecutame()
   
   
 }

  funCambiaValor(){
const {estadoValido} = this.props
      if (estadoValido == 1) {
        return(<FiCheckSquare />)


      }else
      {
        return( <FiSquare /> )
      }

  }

  render() {
    const {varExec, } = this.props;
    return (
      <View style={styles.container}  >

        <TouchableOpacity style={styles.touch}  onClick={()=>{varExec()}}>

        {this.funCambiaValor()}

        </TouchableOpacity>

        
        </View>
    );
  }
}
 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  touch: {
    
    padding: 20,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
    marginHorizontal: 100,
    shadowColor: '#333',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', 
  },
});
