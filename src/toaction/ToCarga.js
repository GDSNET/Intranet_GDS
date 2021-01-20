import React, { Component } from "react";
import * as colores from '../constants/coloresConstants'

import {Text, View, StyleSheet} from 'react-native-web'



//import "../css/index.css";
import logo from '../images/logogds2020_03blanco.svg';



class Carga extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: '',
    };
  }

  componentDidMount(){

    setTimeout(()=>{
      this.funCambia();
  }, 2000)
  };
    
funCambia(){
  console.log('paso')
  this.setState({loading: 'despliegapageloading'})
}
  render() {

    let top_menu_class = `pageloading ${this.state.loading}`
    let top_icon_class = `pagelogoloading ${this.state.loading}`
    
    return (
      
      
    <div  className={top_menu_class} >
       <View style={styles.header}>
       <div  className={top_icon_class} >
        <img src={logo} className={top_icon_class} className={"logocarga"} />
      </div>
        </View>
      </div>

      
    );
  }
}

 

  
  
  export default (Carga);
  

const styles = StyleSheet.create({
   
container: {
  borderRadius: 30,
  marginTop:20,
  backgroundColor: colores.COLOR_PRIMARIO_CLARO,
  height: '100%',
 
  alignItems:  'center',
  
},

container_abajo: {
  borderRadius: 30,
  marginTop:20,
  height: '100%',
  flexDirection: 'row',
 
  alignItems:  'center',
  
},
header: {
  
 
  alignItems:  'center',

  
},

    menu: {
      flex: 1,
      flexDirection: 'row'
  
    },
    menu_icon: {
      flex: 1
    },
    text: {
      padding: 5,
      fontSize: 16,
      color: colores.COLOR_WHITE
    },
    txt_title: {
      padding: 5,
      fontSize: 25,
      color: colores.COLOR_WHITE
    },
    txt_subtitle: {
      padding: 5,
      fontSize: 20,
      color: colores.COLOR_WHITE
    },
    view_usuario: {
      flex: 1,
   
      alignItems:  'center',

  
    },
    view_detalle: {
      flex: 3,
    },
    view_detalle_info: {
      flex: 1,
      
    },

    view_global: {
      borderRadius: 30,
      marginTop:20,
      backgroundColor: colores.COLOR_NARANJO,
      height: '100%',
      padding: 20,
      flexDirection: 'column',
      
    },
    view_global_detalle: {
      
      flexDirection: 'row',
      
    },
  
  });
  

