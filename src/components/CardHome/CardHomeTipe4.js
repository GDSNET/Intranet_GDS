

import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native-web';
import * as colores from '../../constants/coloresConstants'
import Pablo from '../../images/ImagenesKam/Pablo.jpg'
import Lorena from '../../images/ImagenesKam/Lorena.jpg'
import Daniela from '../../images/ImagenesKam/Daniela.jpg'
import Rodrigo from '../../images/ImagenesKam/Rodrigo.jpg'
import Pamela from '../../images/ImagenesKam/Pamela.jpg'




class CardSellOutTipe4 extends Component {

  funImagen(im){


      switch (im) {
        case "Pamela":
            return Pamela
        case "Lorena":
          return Lorena
        case "Daniela":
          return Daniela
        case "Pablo":
          return Pablo
        case "Pablo":
            return Rodrigo
        default:
          return Rodrigo
      }
    }


      
    
  

  funGridview(){
    const {data, icon} = this.props;
    const url = "../../images/ImagenesKam/"
    

    return data.filter((item)=>{
      return item.cargo !== "GERENTE"
    }).sort((a, b) => {
      if(a.valor1 > b.valor1) return -1;
      if(a.valor1 < b.valor1) return 1;
      return 0})
      .map((item, i) => {
        var im =  url + item.foto
       // var imagen = require(im)
      return(
      <View style={styles.containerGrid}>
          <View style={styles.containerIcon1}> 
            <img style={{width: 50, height: 50, borderRadius: 100}}
            src={this.funImagen(item.foto)} />
          </View>
          <View style={styles.containerAtributo1}> 
               <View style={styles.containerAtributo1Titulo}> 
              <Text  style={styles.txtAtributo1Titulo}>{item.desc_atributo}</Text>
              </View>
              <View style={styles.containerAtributo1Subtitulo}> 
              <Text  style={styles.txtAtributo1Subtitulo}>{item.cargo}</Text>
              </View>
          </View>
          <View style={styles.containerIndicador1}> 
              
              <View style={styles.containerAtributo1Titulo}> 
              
              <Text  style={styles.txtsubGrid}>{(Math.round(item.valor1*100/ item.cantidad))>75?(<span className='icon_action_true_small'><Text className='icon_action_true_small' style={styles.txtGrid}>{Math.round(item.valor1*100/ item.cantidad)}%</Text></span>):(<span className='icon_action_false_small'><Text className='icon_action_false_small' style={styles.txtGrid}>{Math.round(item.valor1*100/ item.cantidad)}%</Text></span>)} </Text> 
              </View>
              <View style={styles.containerAtributo1Subtitulo}> 
              <Text  style={styles.txtsubGrid}>{(Math.round(item.valor1*100/ item.cantidad))>75?(<span className='icon_action_true_small'>&#8743;</span>):(<span className='icon_action_false_small'>&#8744;</span>)} </Text> 
              </View>
          </View>
      </View>
      )
    })

  }

 
  render() {
    const {titulo, subtitulo} = this.props;
    return (

    <View style={styles.container}>
        
          <View style={styles.containerDivisor}>
                
          <View style={styles.containertitulos}>  
                  <Text style={[styles.txtTitulo, {color: colores.COLOR_PRIMARIO}]}>
                    {titulo}
                    <Text style={[styles.txtSubtitulo]}>
                    {subtitulo}
                  </Text>
                  </Text>
                
                  </View>    
              
                
                <View style={styles.gridview}>
              

         
              <ScrollView style={styles.gridview}>
                    {this.funGridview()}
                </ScrollView>
                </View>
               
          </View>
            
              
         </View>
           

    );
  }
}
 

function mapStateToProps(state){
  return{
    ...state

  }
}

function mapDispatchToProps (dispatch) {
 const combiner = Object.assign({},
  combinaActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}





export default connect(mapStateToProps, mapDispatchToProps)(CardSellOutTipe4);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 5,
    backgroundColor: colores.COLOR_WHITE,
    

    
  },
  containerDivisor: {
    flex: 1,
    flexDirection: 'column',
    
    padding: 5
    
  },
  containerDivisorIzq: {
    flex: 1,
    flexDirection: 'column',
    
  },
  containerDivisorDerecha: {
    flex: 2,
    flexDirection: 'column',
    
  },
  containertitulos:{
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',
  },
  titulo: {
    flex: 1,
    
    
  },
  footer: {
    flex: 0.5,
    textAlign:  'right',
    
  },

  txttitulo: {
    fontSize: 25,
    color: colores.COLOR_WHITE,
    alignItems:  'center',
    justifyContent: 'center',

    

  },
  containerArriba:{
 
    padding: 10,
    alignItems:  'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colores.COLOR_PRIMARIO,
    flexDirection: 'row',

    
  },
  gridview:{
    flex: 5,
    padding: 5,
  },
  containerGrid: {
    
    padding: 5,
    backgroundColor: colores.COLOR_WHITE,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colores.COLOR_GRIS_CLARO,
    
  },
  containerGrid_cabeza: {
    padding: 10,
    backgroundColor: colores.COLOR_PRIMARIO_OSCURO,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colores.COLOR_GRIS_CLARO,
  },

  txtGrid:{
    color: colores.COLOR_QUINTENARIO_CLARO,
    fontSize: 14,

  },
  txtAtributo1Titulo:{
    color: colores.COLOR_QUINTENARIO_CLARO,
    fontSize: 14,

  },

  txtAtributo1Subtitulo:{
    color: colores.COLOR_TERNARIO_CLARO,
    fontSize: 10,
    

  },


  
  txtGridCabeza:{
    color: colores.COLOR_WHITE,
    size: 35,
  },
  containerAtributo1: {
    flex: 4,
    padding: 20,

    
  },
  containerAtributo1Titulo: {

    
  },
  containerAtributo1Subtitulo: {

  },

  
  containerIndicador1: {
    flex: 1,
    alignItems:  'center',
    justifyContent: 'center',
  },

  containerAtributo1_cabeza: {
    flex: 2,
    

    
  },
  containerIndicador1_cabeza: {
    flex: 1,
 
    
  },
  containerIcon1: {  
  flex: 1,
  alignItems:  'center',
  justifyContent: 'center',
    
  },
  containerIcon2: {  
  
    
    backgroundColor: colores.COLOR_PRIMARIO,
    margin: 5,
    textAlign:  'center',
    alignItems:  'center',
    justifyContent: 'center',
    borderRadius: 5,
    
  },
  containerTitulo: {
    flex: 1
  },
  etiqueta: {
    width: '100%',
    padding:5,
    textAlign:  'center',
    alignItems:  'center',
    margin:10,
    height: 30,
    borderRadius: 5,
  
  },
  container_interno:{
    marginTop: -10,
    backgroundColor: colores.COLOR_WHITE,
    textAlign:  'center',
    alignItems:  'center',
    height: 40,
    paddingHorizontal: 5, 
    borderWidth: 1,
    marginBottom: -10,
    justifyContent: 'center',
    borderRadius: 5,
    
  },
  txtTitulo:{
    fontSize: 20,
    
  },

  txtSubtitulo:{
    fontSize: 16,
    color: colores.COLOR_GRIS
    
  }
});
