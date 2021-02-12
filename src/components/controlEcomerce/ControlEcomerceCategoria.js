import React, { Component } from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native-web';
import * as constants from '../publica/constants'
import LottieHoverPress from '../../lottie/components/LottieOnPress'
import toggleAnimation19 from  '../../lottie/images/download-w24-h24.json'

 
export default class ControlEcomerceSalas extends Component {


  funExecutar(semana, id_sala, id_plataforma, categoria){
    const parametros = {
      "parametros": semana + ',' + id_sala + ',' + id_plataforma  + ',' +  categoria,
      "reporte": "ecom-ctrl-sku"
      }

      this.props.funExecute(parametros)
 

  }

  funReport(semana, id_sala){
    const parametros = {
      "parametros": semana + ',' + id_sala,
      "reporte": "ecom-ctrl-descarga-detalle-sku"
      }

      this.props.funReporte(parametros)
      

  }


  funLlenar(data){


 return   data.map((value, i)=>{

      return(
<View  style={styles.containerfila} key={'v'+ i}> 
  <View  style={[styles.fila, {background: 'linear-gradient(to right , #231f20, #454041)'}]} key={'v'+ i}> 


          <View style={styles.view_grid_grande}>
          <Text style={styles.txt_grid}>{value.desc_categoria}</Text>
          </View>  
    
          <View style={styles.view_grid}>
          <Text style={styles.txt_grid}>Cant. Pautado: {value.t_pautado}</Text>
          </View>  
    
          <View style={styles.view_grid}>
          <Text style={styles.txt_grid}>Cant. Relevo: {value.t_relevo}</Text>
          </View>  

          <View style={styles.view_grid_boton}>
              <TouchableOpacity style={styles.btnGO} onPress={()=>{this.funExecutar(value.id_tie_semana, value.id_sala, value.id_plataforma, value.desc_categoria)}}>
              <Text style={styles.txt_grid}>IR</Text>
              </TouchableOpacity>    
          </View>  
        
        </View>   
    </View>   
       )

    })



  }

  funBotonSolicitarReporte(data){
    
if(data.length>0){
  
    return(
      <View style={styles.viewDescarga}>
      
         <Text style={styles.txt_grid} >Descargar Toda la Sala?</Text>


        <LottieHoverPress
        icon={toggleAnimation19}
        funPress={()=>this.funReport(data[0].id_tie_semana, data[0].id_sala)}
        width={80}
        />
</View>
    )
    }
   
  }


  render() {
    const {data} = this.props;
  

 

   return(
    <View  style={styles.container}> 
      <View  style={styles.containerBton}> 
        {this.funBotonSolicitarReporte(data)}
    </View>  
        {this.funLlenar(data)}

     </View>   
   )
}

}
 


const styles = StyleSheet.create({

  container: {
    
    margin: 20,


  },

  containerBton: {
    
    alignItems: 'center',

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

  viewDescarga: {
    flex: 1,
    margin: 10,
    padding: 3,
    alignItems: 'center',
    backgroundColor: constants.COLOR_SECUNDARIO_CLARO,
    borderRadius: 5,
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


  btnReporte:{
    width: '30%',
    margin: 5,
    padding: 3,
    alignItems: 'center',
    backgroundColor: constants.COLOR_SECUNDARIO_CLARO,
    borderRadius: 100,
    marginHorizontal: 3,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: constants.COLOR_PRIMARIO,
    fontSize: 15,
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
