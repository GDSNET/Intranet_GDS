import React, { Component } from "react";
import {View,  Text, StyleSheet, Image, Dimensions, ImageBackground} from 'react-native-web';



import fondo from '../../images/carousel/fondo.png';
import escena1 from '../../images/carousel/escena 4.png';

import moletar2 from '../../images/carousel/molestar2.png';


import { Textfit } from 'react-textfit';
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
            <View style={[styles.divtexto, {background: 'linear-gradient(to right , #3B5365, #454041)'}]}>
              
    
            <View style={styles_export.div_presentacion}>
        
                <View style={styles_export.divtitulo}>
                  
                  
                  <Textfit mode="multi" class="style_texfield_title">Tareas realizadas  </Textfit>
            
                </View>
                <View style={styles_export.divsubtexto}>
                
                
             
                  
                <Textfit mode="multi" class="style_texfield"> Locales abastecidos con stock para la promo    </Textfit>
                <Textfit mode="multi" class="style_texfield"> Incremento en las ventas  </Textfit>
                <Textfit mode="multi" class="style_texfield">Locales con el surtido y los productos correspondientes   </Textfit>
                <Textfit mode="multi" class="style_texfield"> Locales llegan OK a la fecha de inicio   </Textfit>
            
                </View>
                <View style={styles_export.divtitulo}>
                  
                <Textfit mode="multi" class="style_texfield_title">No realizadas </Textfit>
                
            
                </View>
                <View style={styles_export.divsubtexto}>
                  
                <Textfit mode="multi" class="style_texfield">Locales sin stock suficiente para el inicio de la Promocion   </Textfit>
                <Textfit mode="multi" class="style_texfield"> Locales sin las ventas esperadas de la Promocion  </Textfit>
                <Textfit mode="multi" class="style_texfield">Locales sin Productos que pertenecen a su surtido  </Textfit>
                <Textfit mode="multi" class="style_texfield"> Perdida de exhibiciones adicionales   </Textfit>
            
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
imagen: {
  flex: 1
}, 
divtexto: {
  textAlign:  'right',
  alignItems:  'right',
  flex: 1,
    zIndex: 0,
    backgroundColor: '#000'
  },
  text_style: {
    color: '#FFF'
  }

});