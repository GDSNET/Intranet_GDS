import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';

import {View,  Text, Dimensions, StyleSheet} from 'react-native-web';
import { styles1 } from "../components/promocion/StyleComponents";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Screen1 from '../components/lanzamientos/Screen1'
import Screen2 from '../components/lanzamientos/Screen2'
import Screen3 from '../components/lanzamientos/Screen3'
import Screen4 from '../components/lanzamientos/Screen4'
import Screen5 from '../components/lanzamientos/Screen5'
import Screen6 from '../components/lanzamientos/Screen6'




import Arbol from './ScreenArbol'
import Promocion from './ScreenPromocion'
import Carpetas from './Carpetas'


const alto = Dimensions.get('window').height
const ancho = Dimensions.get('window').width




export default class Lanzamiento extends React.Component {



  render() {
    return (

      
      
   <View style={styles.presentacion}>
       
       <CarouselProvider
        naturalSlideWidth={ancho}
        naturalSlideHeight={alto}
        totalSlides={6}
      >
        <View style={styles.container}>
        <View style={styles.container_boton}> 
        <ButtonBack className="botones">Anterior</ButtonBack>
         </View>
        <View style={styles.container_boton}> 
        <ButtonNext className="botones">Siguiente</ButtonNext>
         </View>
        
      

        </View>
        <Slider >
          <Slide index={0}>
                <Screen1 />
          </Slide>
          <Slide index={1}>
                <Screen2 />
          </Slide>
          <Slide index={2}>
                <Screen3 />
          </Slide>
          <Slide index={3}>
                <Screen4 />
          </Slide>
          <Slide index={4}>
                <Screen5 />
          </Slide>
          <Slide index={5}>
                <Screen6 />
          </Slide>
          
        </Slider>
 
      </CarouselProvider>


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
  }

});

const promstyles2 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
