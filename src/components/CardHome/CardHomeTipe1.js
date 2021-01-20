

import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {View, StyleSheet, Text, ScrollView} from 'react-native-web';
import * as colores from '../../constants/coloresConstants'
import CardLineComponents from '../charts/CardLineComponents'



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
    const {titulo, icon, speed, subtitulo} = this.props;
    return (

    <View style={styles.container}>
        
          
                
        <View style={styles.containertitulos}>
                 <Text style={[styles.txttitulo, {color: colores.COLOR_PRIMARIO}]}>
                    {titulo}
                    <Text style={[styles.txtSubtitulo]}>
                    {subtitulo}
                  </Text>
                  </Text>
          </View>
                  
          
                 <View style={styles.grafico}>
                 <CardLineComponents />
                 </View>
                 <View style={styles.leyendas}>
                     <View style={styles.leyendas_sellout}>
                         <Text  style={styles.txt_leyenda}>
                           Sell-Out
                         </Text>
                     </View>
                     <View style={styles.leyendas_oos}>
                         <Text  style={styles.txt_leyenda}>
                         OSA
                       </Text>
                   </View>

                   <View style={styles.leyendas_promocion}>
                         <Text  style={styles.txt_leyenda}>
                           Promocion
                       </Text>
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
    padding: 5
    

    
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
    flex: 1,
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
    fontSize: 20,
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
  grafico: { flex: 8, padding: 5, margin:5, zIndex: 1000},
  leyendas: { flex: 1,
    flexDirection: 'row',
  },
  leyendas_oos: {flex: 1, backgroundColor: colores.COLOR_SECUNDARIO, padding: 5, borderRadius:5, margin:5,     alignItems:  'center',
  justifyContent: 'center',},
  leyendas_promocion: {flex: 1, backgroundColor: colores.COLOR_TERNARIO, padding: 5, borderRadius:5, margin:5,     alignItems:  'center',
  justifyContent: 'center', zIndex: -1},
  leyendas_sellout: {flex: 1, backgroundColor: colores.COLOR_PRIMARIO, padding: 5, borderRadius:5, margin:5,     alignItems:  'center',
  justifyContent: 'center',},
  txt_leyenda: {color: colores.COLOR_WHITE, fontSize: 12,     alignItems:  'center',
  justifyContent: 'center',},

  
});
