import React, { Component } from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native-web';
import * as constants from '../publica/constants'


 
export default class ControlEcomerceSalas extends Component {


  funExecutar(semana, id_sala){
    const parametros = {
      "parametros": semana + ',' + id_sala,
      "reporte": "ecom-ctrl-plataforma"
      }

      this.props.funExecute(parametros)
      

  }




  funLlenar(data){


 return   data.map((value, i)=>{

      return(
<View  style={styles.containerfila} key={'v'+ i}> 
  <View  style={[styles.fila, {background: 'linear-gradient(to right , #231f20, #454041)'}]} key={'v'+ i}> 

        <View style={styles.view_grid}>
              <Text style={styles.txt_grid}>Semana: {value.id_tie_semana}</Text>
        </View>  

        <View style={styles.view_grid}>
          <Text style={styles.txt_grid}>id sala: {value.id_sala}</Text>
          </View>  
    
          <View style={styles.view_grid_grande}>
          <Text style={styles.txt_grid}>Sala: {value.desc_sala}</Text>
          </View>  
    
          <View style={styles.view_grid}>
          <Text style={styles.txt_grid}>Cant. Pautado: {value.t_pautado}</Text>
          </View>  
    
          <View style={styles.view_grid}>
          <Text style={styles.txt_grid}>Cant. Relevo: {value.t_relevo}</Text>
          </View>  

          <View style={styles.view_grid_boton}>
              <TouchableOpacity style={styles.btnGO} onPress={()=>{this.funExecutar(value.id_tie_semana, value.id_sala)}}>
              <Text style={styles.txt_grid}>IR</Text>
              </TouchableOpacity>    
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
  },
  fila: {
    flex: 1,
    flexDirection: 'row',
    width: '80%'
    
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
view_grid_grande:{
  flex: 2,
flexDirection: 'column',    //its children will be in a column
alignItems: 'center', //align items according to this parent (like setting self align on each item)
justifyContent: 'center',
flexWrap: 'wrap',
margin: 5,
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
});
