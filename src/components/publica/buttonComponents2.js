import React, { Component } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native-web';

 
class Boton extends Component {

  render() {
    const {title, funExecute, varible  } = this.props;
    return (
      <View style={styles.container}  >
        <TouchableOpacity style={styles.touch}  onClick={()=>{funExecute(varible)}}>
          <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
        </View>
    );
  }
}
 

export default Boton

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  touch: {
   
    padding:10,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
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
