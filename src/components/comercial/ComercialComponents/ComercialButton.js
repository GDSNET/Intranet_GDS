import React, { Component } from "react";
import {TouchableOpacity,View,StyleSheet} from 'react-native-web'
import {FiDownloadCloud } from "react-icons/fi";

 
export default class ComercialButton extends Component {



  render() {
    const {varExec, } = this.props;
    return (
      <View style={styles.container}  >

        <TouchableOpacity style={styles.touch}  onClick={()=>{varExec()}}>

            <FiDownloadCloud color={'#FFF'} size={30} />

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
    marginLeft:130,
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