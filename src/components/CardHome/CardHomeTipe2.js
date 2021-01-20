

import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {View, StyleSheet, Text, ScrollView} from 'react-native-web';
import * as colores from '../../constants/coloresConstants'


import LottieHoverPress from '../../lottie/components/LottieHoverPress'


class CardSellOutTipe4 extends Component {

  funGridview(){
    const {data, icon} = this.props;

    return data.filter((item)=>{
      return item.desc_atributo == 'TOTAL' 
    }).sort((a, b) => {
      if(a.valor1 > b.valor1) return -1;
      if(a.valor1 < b.valor1) return 1;
      return 0})
      .map((item, i) => {
      return(
      <View style={styles.containerGrid}>
          <View style={styles.containerIndicador1}> 
              <Text  style={styles.txtGrid}>{Math.round(item.valor1*100/ item.cantidad)} % </Text>
          </View>
      </View>
      )
    })

  }

  funVacia(){

  }

 
  render() {
    const {titulo, icon, speed} = this.props;
    return (

    <View style={styles.container}>
        
          <View style={styles.containerDivisor}>
                
          <View style={styles.containertitulos}>  
                  <Text style={[styles.txttitulo, {color: colores.COLOR_PRIMARIO}]}>
                    {titulo}
                  </Text>

                  <LottieHoverPress
                          icon={icon}
                          width={200}
                          funPress={()=>this.funVacia()}
                          speed={speed}
                        />
                
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
    
    padding: 10
    
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
    padding: 10,
  },
  containerGrid: {
    
    padding: 10,
    backgroundColor: colores.COLOR_WHITE,
    flexDirection: 'row',    
    
  },
  containerGrid_cabeza: {
    padding: 10,
    backgroundColor: colores.COLOR_PRIMARIO_OSCURO,
    flexDirection: 'row',
  },

  txtGrid:{
    color: colores.COLOR_QUINTENARIO_CLARO,
    fontSize: 60,

  },
  txtGridCabeza:{
    color: colores.COLOR_WHITE,
    size: 35,
  },
  containerAtributo1: {
    flex: 3,
    alignItems:  'center',
    justifyContent: 'center',
    
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
 
    alignItems:  'center',
    margin:10,
    height: 30,
    borderRadius: 5,
  
  },
  container_interno:{
    marginTop: -10,
    backgroundColor: colores.COLOR_WHITE,
 
    alignItems:  'center',
    height: 40,
    paddingHorizontal: 20, 
    borderWidth: 1,
    marginBottom: -10,
    justifyContent: 'center',
    borderRadius: 5,
    
  },



  txtSubtitulo:{
    fontSize: 16,
    color: colores.COLOR_GRIS
    
  }
});
