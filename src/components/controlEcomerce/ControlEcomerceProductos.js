import React, { Component } from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native-web';
import * as constants from '../publica/constants'


 
export default class ControlEcomerceSalas extends Component {


funSIONO(valor){

  if(valor){
    return(<Text style={styles.txt_gridON}>SI</Text>)
  }
  else {
    return(<Text style={styles.txt_gridOFF}>NO</Text>)
  }
  
}


  funLlenar(data){


 return   data.map((value, i)=>{

      return(
<View  style={styles.containerfila} key={'v'+ i}> 

<View  style={[styles.fila, {background: 'linear-gradient(to right , #231f20, #454041)'}]} key={'v'+ i}> 


        <View style={styles.view_grid}>
              <Text style={styles.txt_title}>id: {value.id_sku}</Text>
        </View>  

          <View style={styles.view_grid_grande}>
          <Text style={styles.txt_title}>descripcion: {value.desc_sku}</Text>
          </View>  

          <View style={styles.view_grid}>
          <Text style={styles.txt_title}>Marca: {value.desc_marca}</Text>
          </View>  

          <View style={styles.view_grid}>
          <Text style={styles.txt_title}>Categoria: {value.desc_categoria}</Text>
          </View> 

  </View> 

  <View  style={[styles.fila, {background: 'linear-gradient(to right , #231f20, #454041)'}]} key={'v'+ i}> 


        <View style={styles.view_grid_indicador}>
          <Text style={styles.txt_grid}>presencia</Text>
          {this.funSIONO(value.presencia)}
        </View>   
        <View style={styles.view_grid_indicador}>
          <Text style={styles.txt_grid}>stock</Text>
          {this.funSIONO(value.f_stock)}
        </View>   
        <View style={styles.view_grid_indicador}>
          <Text style={styles.txt_grid}>imagen</Text>
          {this.funSIONO(value.f_imagen)}
        </View>   
        <View style={styles.view_grid_indicador}>
          <Text style={styles.txt_grid}>descripcion</Text>
          {this.funSIONO(value.f_descripcion)}
        </View>   
        <View style={styles.view_grid_indicador}>
            <Text style={styles.txt_grid}>$ unitario</Text>
            <Text style={styles.txt_grid}> {value.f_precio_unitario}</Text>
        </View>   
        <View style={styles.view_grid_indicador}>
          <Text style={styles.txt_grid}>$ descuento</Text>
          <Text style={styles.txt_grid}> {value.f_precio_descuento}</Text>
        </View>   
        <View style={styles.view_grid_indicador}>
          <Text style={styles.txt_grid}>mecanica </Text>
          <Text style={styles.txt_grid}>{value.f_mecanica}</Text>
        </View>   
        <View style={styles.view_grid_indicador}>
          <Text style={styles.txt_grid}>!quiebre</Text>
          {this.funSIONO(value.f_alerta_quiebre)}
        </View>   



</View>   


    </View>   
       )

    })



  }


  render() {
    const {data} = this.props;
    


   return(
    <View  style={styles.container}> 
    {this.funLlenar(data)}
     </View>   
   )
}

}
 


const styles = StyleSheet.create({

  container: {
    
    margin: 20,

  },

  containerfila: {
    alignItems: 'center',
    margin: 2,
  },
  fila: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
    
  },
  btnGO: {
    flex: 1,
    padding: 3,
    alignItems: 'center',
    backgroundColor: constants.COLOR_PRIMARIO,
    borderRadius: 100,
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    placeholderTextColor: '#FFCAB8',
    fontSize: 20,
  },
  view_grid_cont:{
    backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row'
 
   },
   view_grid_boton:{
    
    
    flexDirection: 'column',    //its children will be in a column
    alignItems: 'center', //align items according to this parent (like setting self align on each item)
    justifyContent: 'center',
    flexWrap: 'wrap',
    
    margin: 5,
    borderRadius: 5,
 },
 view_grid:{
    flex: 1,
  
  flexDirection: 'column',    //its children will be in a column
  alignItems: 'center', //align items according to this parent (like setting self align on each item)
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: 1,
},
view_grid_indicador:{
  flex: 0.5,

flexDirection: 'column',    //its children will be in a column
alignItems: 'center', //align items according to this parent (like setting self align on each item)
justifyContent: 'center',
flexWrap: 'wrap',
margin: 1,
},
view_grid_grande:{
  flex: 2,
flexDirection: 'column',    //its children will be in a column
alignItems: 'center', //align items according to this parent (like setting self align on each item)
justifyContent: 'center',
flexWrap: 'wrap',
margin: 5,
},
txt_title:{
  color: constants.COLOR_BLANCO,
  fontSize: constants.SIZE_LETRA_X_LARGE,
  flex: 0.3,  //width (according to its parent)
  padding: 3,
  fontWeight: "bold",
 },
txt_grid:{
 color: constants.COLOR_BLANCO,
 fontSize: constants.SIZE_LETRA_LARGE,
 flex: 0.3,  //width (according to its parent)
 flexDirection: 'column',    //its children will be in a column
 alignItems: 'center', //align items according to this parent (like setting self align on each item)
 justifyContent: 'center',
 flexWrap: 'wrap',
 padding: 3,
},
txt_gridON:{
  color: constants.COLOR_PRIMARIO,
  fontSize: constants.SIZE_LETRA_LARGE,
  padding: 3,
 },
 txt_gridOFF:{
  color: constants.COLOR_SECUNDARIO,
  fontSize: constants.SIZE_LETRA_LARGE,
  padding: 3,
 },
});
