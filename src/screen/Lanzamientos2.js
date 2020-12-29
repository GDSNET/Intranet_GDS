import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import * as colores from '../constants/coloresConstants'


import { Timeline, TimelineEvent } from "react-event-timeline";
import { IoIosCart } from "react-icons/io";


import {View,  Text, Dimensions, StyleSheet} from 'react-native-web';




import Screen1 from '../components/lanzamientos/Screen1'
import Screen2 from '../components/lanzamientos/Screen2'
import Screen3 from '../components/lanzamientos/Screen3'



const alto = Dimensions.get('window').height
const ancho = Dimensions.get('window').width




export default class Lanzamiento extends React.Component {



  render() {
    return (

      
      
   <View style={styles.presentacion}>
       
      <Timeline
      orientation="left"
      lineColor={colores.COLOR_NARANJO} 
      lineStyle={{width:10 ,height:'100%'}}
      
      >
      <TimelineEvent
        title="Inicio del Lanzamiento"
        createdAt="dia 0"
        icon={<IoIosCart color={colores.COLOR_NARANJO} size={20}/>}
      >
        <Screen1 />
      </TimelineEvent>
      <TimelineEvent
        title="Procesamos Informacion"
        onClick={() => alert("clicked")}
        createdAt="un dia despues"
        icon={<IoIosCart color={colores.COLOR_NARANJO} size={20}/>}
        
      >

        
   
        <Screen2 />
      </TimelineEvent>

      <TimelineEvent
        title="Procesamos Informacion"
        onClick={() => alert("clicked")}
        createdAt="un dia despues"
        icon={<IoIosCart color={colores.COLOR_NARANJO} size={20}/>}
        
      >

        
   
        <Screen3 />
      </TimelineEvent>
    </Timeline>


      </View>


    );
  }
}

const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'row'

  },
  carrousel: {
  
  marginLeft: 200,

  },

  presentacion: {

    
    height: alto,

  },
  botones: {
    backgroundColor: '#098'
  },
  container_boton:{
    flex: 1
  },
  linea: {

    width: 20
  }

});

const promstyles2 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
