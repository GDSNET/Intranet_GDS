

import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {View, StyleSheet, Text, ScrollView} from 'react-native-web';
import * as colores from '../../constants/coloresConstants'

import LottieLoop from '../../lottie/components/LottieLoop'



class CardSellOutTipe4 extends Component {

  funGridview(){
    const {data, icon} = this.props;

    return data.filter((item)=>{
      return item.cargo == 'GERENTE' 
    }).sort((a, b) => {
      if(a.valor1 > b.valor1) return -1;
      if(a.valor1 < b.valor1) return 1;
      return 0})
      .map((item, i) => {
      return(
      <View style={styles.containerGrid}>
          <View style={styles.containerIndicador1}> 
               <Text  style={styles.txtGrid}>{Math.round(item.valor1*100/ item.cantidad)}%</Text> 
          </View>
          <View style={styles.containerIndicador2}> 
          <View style={styles.columna}> 
          <Text  style={styles.txtsubGrid}>{(Math.round(item.valor1*100/ item.cantidad) - Math.round(item.valor2*100/ item.cantidad))}%</Text> 
          </View>
          <View style={styles.columna}> 
          <Text  style={styles.txtsubGrid}>{(Math.round(item.valor1*100/ item.cantidad) - Math.round(item.valor2*100/ item.cantidad))>0?(<span className='icon_action_true'>&#8743;</span>):(<span className='icon_action_false'>&#8744;</span>)} </Text> 
          </View>
          
              
          </View>
      </View>
      )
    })

  }

  funVacia(){

  }

 
  render() {
    const {titulo, icon, speed, height} = this.props;
    return (

    <View style={styles.container}>
        
  
                
          <View style={styles.containertitulos}>  
                  <Text style={[styles.txtTitulo, {color: colores.COLOR_PRIMARIO}]}>
                    {titulo}
                  </Text>

                  <LottieLoop
                          icon={icon}
                          height={height}
                          funPress={()=>this.funVacia()}
                          speed={speed}
                          height={height}
                        />
                
           </View>    
              
                
                <View style={styles.gridview}>

              
                    {this.funGridview()}
                
                </View>
               

          <View style={styles.footer}>  
          <Text style={styles.txtfooter}>
            Datos de Semana Actual
          </Text>
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
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 5,
    backgroundColor: colores.COLOR_WHITE,
   
  },
  containerDivisor: {
    flex: 1,
    flexDirection: 'column',
  
    
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
    flex: 2,
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',
  },
  titulo: {
    flex: 1,
    
    
  },
  footer: {
    flex: 0.5,
    alignItems:  'center',
    justifyContent: 'center',
    
  },
  txtfooter: {
    fontSize: 10,
    color: colores.COLOR_TERNARIO,
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
    flex: 2,
    padding: 1,
  },
  containerGrid: {
    
    padding: 1,
    backgroundColor: colores.COLOR_WHITE,
    flexDirection: 'column',    
    
  },
  containerGrid_cabeza: {
    padding: 10,
    backgroundColor: colores.COLOR_PRIMARIO_OSCURO,
    flexDirection: 'row',
  },

  txtGrid:{
    fontSize: 50,
    fontWeight: 'bold',
    color: colores.COLOR_PRIMARIO_CLARO,
    alignItems:  'center',
    justifyContent: 'center',

  },
  txtsubGrid:{
    fontSize: 16,
    fontWeight: 'bold',
    color: colores.COLOR_TERNARIO_CLARO,
    alignItems:  'center',
    justifyContent: 'center',

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
    alignItems:  'center',
    justifyContent: 'center',
  },
  containerIndicador2: {
    alignItems:  'center',
    justifyContent: 'center',
  },

  containerAtributo1_cabeza: {
    flex: 2,
    

    
  },
  columna: {
    flex: 1,
    alignItems:  'center',
    justifyContent: 'center',
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
  txtTitulo:{
    fontSize: 20,
    alignItems:  'center',
    justifyContent: 'center',
    
  },

  txtSubtitulo:{
    fontSize: 16,
    color: colores.COLOR_GRIS
    
  }
});
