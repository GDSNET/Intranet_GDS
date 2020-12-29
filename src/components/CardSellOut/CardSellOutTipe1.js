

import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {View, StyleSheet, Text, ScrollView} from 'react-native-web';
import * as colores from '../../constants/coloresConstants'


import LottieHoverPress from '../../lottie/components/LottieHoverPress'

import CardLineOne from '../charts/CardLineOne'
import ChartLineProgressMini from '../charts/ChartLineProgressMini'


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
         
      <View style={styles.containerIndicador}>
              <Text  style={styles.txtGrid}>{(Math.round(item.valor1*100/ item.cantidad))} % </Text>
          </View>
      

              <View style={styles.containerSubIndicador}>
                <View style={styles.containerSubIndicadorDato}>
                  <Text  style={styles.txtsubGrid}>{(Math.round(item.valor1*100/ item.cantidad))-Math.round(item.valor2*100/ item.cantidad)} % </Text>
                  <Text  style={styles.txtsubText}> Semana </Text>
                  <Text  style={styles.txtsubText}> Anterior </Text>
                </View>
                <View style={styles.containerSubIndicadorDato}>
                  <Text  style={styles.txtsubGrid}>{(Math.round(item.valor1*100/ item.cantidad))-Math.round(item.valor3*100/ item.cantidad)} % </Text>
                  <Text  style={styles.txtsubText}> vs año </Text>
                  <Text  style={styles.txtsubText}> Anterior </Text>
                </View>
                <View style={styles.containerSubIndicadorDato}>
                  <Text  style={styles.txtsubGrid}>{(Math.round(item.valor1*100/ item.cantidad))-Math.round(item.valor4*100/ item.cantidad)} % </Text>
                  <Text  style={styles.txtsubText}> vs </Text>
                  <Text  style={styles.txtsubText}> YTD </Text>
                </View>
                
              
              
              
              
              
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
        
          
                
          <View style={styles.containertitulos}>  

          
                  <Text style={[styles.txtTitulo, {color: colores.COLOR_PRIMARIO}]}>
                    {titulo}
                  </Text>
          </View> 

          <View style={styles.containerBar}>  
              <ChartLineProgressMini
              progress={90}
              color={colores.COLOR_PRIMARIO}
              />
          </View>    
          
                {this.funGridview()}
          
          <View style={styles.containerLine}>  
                <CardLineOne />
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
  containerBar: {
    paddingHorizontal: 100,    
    
  },
  containerGrid: {
    flexDirection: 'column',
    
  },
  containerIndicador: {
    flex: 1,
    padding: 5,    
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',

  },
  containerSubIndicador: {
    flexDirection: 'row',
    flex: 2,
    padding: 10,  

  },
  containerSubIndicadorDato: {    
    flex: 1,
    alignItems:  'center',
    justifyContent: 'center',  
    
  },
  containerLine: {
  
    
    paddingHorizontal: 20,    
  },
  containertitulos:{
    padding: 10,
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',
  },
  txtGrid:{
    color: colores.COLOR_QUINTENARIO_CLARO,
    fontSize: 40,

  },
  txtsubText: {
    color: colores.COLOR_QUINTENARIO_CLARO,
    fontSize: 10,
  }
  
});
