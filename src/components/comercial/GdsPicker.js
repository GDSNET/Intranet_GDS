import React, { Component } from "react";
import {View, Picker, StyleSheet} from 'react-native-web'

 
class GdsPicker extends Component {


  


  render() {

   const {selecionado, funExec,data, comentario  } = this.props;
    

    return (
      <View>
        <Picker 
              style={styles.Picker}
              mode="dropdown"
              selectedValue={selecionado || ''}
              onValueChange={(value)=>{funExec(value)}}>
              
              <Picker.Item label={comentario} value={100} key={0}/>

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
    padding: 10,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    fontSize: 20,
    marginLeft:100,
    borderTopLeftRadius:5,
    borderTopRightRadius:10,

  },
  
});
