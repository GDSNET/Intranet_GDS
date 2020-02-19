import React, { Component } from "react";
import {View, Picker, StyleSheet} from 'react-native-web'

 
class GdsPicker extends Component {


  


  render() {

    const data = [{"desc": "algo", "id": "10"},{"desc": "traer", "id": "10"}]
   const {algo, funExec  } = this.props;
    return (
      <View>
        <Picker 
              style={styles.Picker}
              mode="dropdown"
              selectedValue={algo || ''}
              onValueChange={(value)=>{funExec(value)}}>
              {data.map((item, key) => {
                  return (
                  <Picker.Item label={item.desc} value={item.id} key={key}/>) 
              })}
                
          </Picker>
      </View>
    );
  }
}
 



export default (GdsPicker);

const styles = StyleSheet.create({

  Picker: {
    
    padding: 20,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
    marginHorizontal: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    placeholderTextColor: '#FFCAB8',
    fontSize: 20,
  },
  
});
