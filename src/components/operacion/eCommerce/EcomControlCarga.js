

import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native-web'
import * as constants from '../../publica/constants'
import * as fechas from '../../publica/Fechas'



export default class EcomControlCarga extends Component {
  constructor(props) {
    super(props);
    this.state = { errores: [] };
    //this.funEnviando = this.funEnviando.bind(this)
  }


  componentDidMount(){
    this.funCargaErrores()
  }

  
    componentDidUpdate(prevProps, prevState) {
      // Uso tipico (no olvides de comparar las props):
      console.log("prevState", prevProps.actualizar)
      console.log("New State", this.props.actualizar)
      if (this.state.actualizar !== prevState.actualizar) {
        console.log("pasando componentDidUpdate")
        this.funCargaErrores()
      }

      
    }
 


  async funCargaErrores(){
    const {funEcomDataCategoria} = this.props;
    const url = 'http://api.gdsnet.com:3009/post_intranet_select_errores_pauta';
   
   let body_data = JSON.stringify({
     })
   
       const config =  {
         method: 'POST',
         body: body_data,
         headers: {
         "Content-Type": "application/json",
         },
       }  
         
   try {
   await  fetch(url, config)
           .then((response) => {
            return response.json()})
           .then((json) => {
             console.log("guardando datos" + JSON.stringify(json))
             this.setState({
              errores: json
             }) 
           });
           
         } catch (e) {
           console.log(e.message)
     
         }  

         
  }

  recorreFilas(data){
try {
  return  data.map((value, i)=>{
    
return( 
<View style={styles.view_grid_cont}>
    <View style={styles.view_grid}>
          <Text style={styles.txt_grid}>Ultima Carga: {fechas.fechaConvierteSQLTZ(value.fecha)}</Text>
      </View>  

      <View style={styles.view_grid}>
      <Text style={styles.txt_grid}>Tipo Error: {value.desc_error}</Text>
      </View>  

      <View style={styles.view_grid_detalle}>
      <Text style={styles.txt_grid}>Detalles: {value.id_erroneos}</Text>
      </View>    
  
</View>   
)
})
  
} catch (error) {
  console.log(error)
}
 

  }

  funRecorreError(){

try {
  let data = this.state.errores
  let cantErrores = data.length
  if(cantErrores>0){
     return(
<View>
      <Text style={styles.txt_OFF}>Up's tenemos errores</Text>
      <View style={styles.container_grid}>
         {this.recorreFilas(data)}
      </View>
</View>      
     )
  }
  else {
    return(
      <Text style={styles.txt_ON}>Todo Bien!!</Text>
     
    )
  }

} catch (error) {
  console.log(error)
}

  }



  render(){
const {cliente}=this.props

    return (
  
    <View style={styles.container}>
          <Text  style={styles.TextRespuesta} >dato: {this.state.errores.length}</Text> 
          <Text  style={styles.TextRespuesta} >hola EcomControlCarga</Text> 
          {this.funRecorreError()}
          
    </View>
    );
  }
}
 


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  container_grid: {
    margin: 5,
    flex: 1,

  },

  TextRespuesta: {
    fontSize: 20,
    color: '#ffffff'
  },

  StyleSelectorCli:{
    flexDirection:'row',
    alingItems:'left',
  },
  txt_ON:{
   color: constants.COLOR_PRIMARIO_CLARO,
   fontSize: constants.SIZE_LETRA_XXXXX_LARGE,
  },
  txt_OFF:{
    color: constants.COLOR_SECUNDARIO_CLARO,
    fontSize: constants.SIZE_LETRA_XXXXX_LARGE,
   },
   view_grid_cont:{
    backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row'
 
   },
   view_grid_detalle:{
    
    flex: 0.5,  //width (according to its parent)
    flexDirection: 'column',    //its children will be in a column
    alignItems: 'center', //align items according to this parent (like setting self align on each item)
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: constants.COLOR_PRIMARIO,
    margin: 5,
    borderRadius: 5,
 },
   view_grid:{
    
      flex: 0.3,  //width (according to its parent)
      flexDirection: 'column',    //its children will be in a column
      alignItems: 'center', //align items according to this parent (like setting self align on each item)
      justifyContent: 'center',
      flexWrap: 'wrap',
      backgroundColor: constants.COLOR_PRIMARIO,
      margin: 5,
      borderRadius: 5,
   },
   txt_grid:{
     width: 350,
    color: constants.COLOR_BLANCO,
    fontSize: constants.SIZE_LETRA_LARGE,
    flex: 0.3,  //width (according to its parent)
    flexDirection: 'column',    //its children will be in a column
    alignItems: 'center', //align items according to this parent (like setting self align on each item)
    justifyContent: 'center',
    flexWrap: 'wrap'
   },
  
});