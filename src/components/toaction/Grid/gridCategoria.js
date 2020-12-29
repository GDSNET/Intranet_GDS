import React, { Component } from "react";
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native-web';

 
export default class GridCategoria extends Component {


     constructor(props) {
        super(props);
        this.state = { 
            isFetching: false,
            kam: 'Total',
            categoria: 'Total'
        };
      }
 
funItem({ item }) {
    const  {categoria, kam} = this.state;
    var dato = kam + categoria 

        console.log("paso function item")
        return (
          <View style={styles.item}>
              <Text> aqui la llave : {dato}</Text>  
            <Text> aqui el JSON : {JSON.stringify(item[dato])}</Text>  
            
          </View>
        );
      }

      onRefresh() {
        this.setState({ isFetching: true }, function() { this.getApiData() });
     }
      
      funFats(){
        const  {data} = this.props;
          return(
            <FlatList
            data={data}
            renderItem={(item) => this.funItem(item)}
            keyExtractor={item => item.id}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
          />   
          )
      }


      funCambiaCategoria(categoria){
        this.setState({
          categoria: categoria
        })
      }
    
      funCambiaKam(kam){
        this.setState({
          kam: kam
        })
      }
      
    

  render() {


    
    const  {data} = this.props;
  
   
    
    return (
<View style={[styles.container]} >
    {this.funFats()}


    <Text>Categoria:  {this.state.categoria}</Text>
        <Text>Kam:  {this.state.kam}</Text>
   
        <TouchableOpacity style={styles.botones}onPress={()=>{this.funCambiaCategoria('Total')}} >
        <Text>CATEGORIA  Total</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botones} onPress={()=>{this.funCambiaKam('Total')}} >
        <Text>KAM Total</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botones}
      onPress={()=>{this.funCambiaCategoria('Gaseosas')}} >
        <Text>Gaseosas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botones} onPress={()=>{this.funCambiaKam('Roberto')}} >
        <Text>Roberto</Text>
      </TouchableOpacity>

        
 </View>
  
    );
  }
}
 
const COLOR_PRIMARIO= "#FFA9A9";
const COLOR_CELESTE = "#3390D3";
const COLOR_WHITE = "#FFF";
const COLOR_AZUL_OSCURO = "#567";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: COLOR_CELESTE
  
  },
  item: {
    backgroundColor: COLOR_WHITE
  },
  botones: {
    backgroundColor: COLOR_PRIMARIO,
    padding: 20,
    borderRadius:5
  }
});


