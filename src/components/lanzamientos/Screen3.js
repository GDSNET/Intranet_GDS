import React, { Component } from "react";
import {View,  Text, StyleSheet, Image, Dimensions, ImageBackground} from 'react-native-web';
import { Textfit } from 'react-textfit';


import fondo from '../../images/carousel/fondo.png';
import escena1 from '../../images/carousel/escena 3.png';

import moletar2 from '../../images/carousel/molestar2.png';



import {styles_export} from './StyleLanzamientos'



export default class Screen extends React.Component {

  constructor(props){

    super(props);
    this.state={
      newwidth: '',
      newheight: ''
    }
  
   
  }
  

  render() {
    
    const {alto, ancho} = this.props;

    Image.getSize(escena1, (width, height) => {

      this.setState({
        newwidth: width,
        newheight: height 
      })

    })
    
    return (

     <View style={styles.container}>
            <View style={styles.containerimagen}>

              <ImageBackground source = {{uri: fondo}}   
             style = {{height: alto, width: ancho}}>
                  <Image source = {{uri: escena1}}
                   style = {{height: alto, width: ancho,    zIndex: 3}}/>
                    <img src={moletar2} class="div_molestar2"   />
                    
            
              </ImageBackground>

            </View>
            <View style={styles.containerVacio}>


            </View>
            <View style={[styles.divtexto, {background: 'linear-gradient(to right , #3B5365, #454041)'}]}>
              
    
            <View style={styles_export.div_presentacion}>
        
                <View style={styles_export.divtitulo}>
                  
                  <Text style={styles_export.txt_titulo}>  ALERTA</Text>
                  <Text style={styles_export.txt_subtitulo}>  KAM</Text>
                  <Text style={styles_export.txt_subtitulo}>  CUSTOMER SERVICE</Text>
            
                </View>
                <View style={styles_export.divsubtexto}>
    
                <Textfit mode="multi" class="style_texfield">Locales donde los Skus no pertenecen al surtido</Textfit>
                <Textfit mode="multi" class="style_texfield">
                Locales que no cuentan con stock suficiente
                </Textfit>
                              
                </View>

            </View>
            </View>
      
      </View>

    );
  }
}



const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'row',

    
  },
  containerimagen: {
    flex: 1,
    zIndex: 1,
    backgroundColor: '#3B5365'
  }
,
containerVacio: {
  flex: 1,
  zIndex: 0,
  backgroundColor: '#3B5365'
  
}
,
imagen: {
  flex: 1
}, 
divtexto: {
  
  alignItems:  'right',
  flex: 1,
    zIndex: 0,
    backgroundColor: '#000'
  },
  text_style: {
    color: '#FFF'
  }

});