
import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import {View, StyleSheet, Text, ScrollView} from 'react-native-web';
import * as colores from '../../../constants/coloresConstants'



 
class Card2 extends Component {

  funGridview(){
    const {data} = this.props;

   return data.map((data, i) => {
      return(
      <View style={styles.containerGrid}>
        <View style={styles.containerAtributo1}> 
           <Text  style={styles.txtGrid}>{data.desc_atributo}</Text>
      </View>
      <View style={styles.containerIndicador1}> 
           <Text  style={styles.txtGrid}>{data.valor}</Text>
      </View>
      </View>
      )
    })

  }

 
  render() {
    const {titulo, icon, cab_attr1, cab_ind1} = this.props;
    return (

    <View style={styles.container}>
        
          <View style={styles.containerDivisor}>
                <View style={styles.containerArriba}>
                      <View style={styles.containerIcon1}>
                          <View style={styles.containerIcon2}>
                            {icon}
                          </View>
                      </View>
                      <View style={styles.containerTitulo}>
                        <Text  style={styles.txttitulo}>{titulo}</Text>
                      </View>
                </View>
                <View style={styles.gridview}>
              

                      <View style={styles.containerGrid_cabeza}>
                          <View style={styles.containerAtributo1_cabeza}> 
                            <Text  style={styles.txtGridCabeza}>{cab_attr1}</Text>
                        </View>
                        <View style={styles.containerIndicador1_cabeza}> 
                              <Text  style={styles.txtGridCabeza}>{cab_ind1}</Text>
                        </View>
                    </View>
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





export default connect(mapStateToProps, mapDispatchToProps)(Card2);

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
    height: 400,
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
    flex: 1,
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
    textAlign:  'center',
    alignItems:  'center',

    

  },
  containerArriba:{
 
    padding: 10,
    textAlign:  'center',
    alignItems:  'center',
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
    color: colores.COLOR_GRIS,
    size: 35,

  },
  txtGridCabeza:{
    color: colores.COLOR_WHITE,
    size: 35,
  },
  containerAtributo1: {
    flex: 2
    
    
  },
  containerIndicador1: {
    flex: 1
  },

  containerAtributo1_cabeza: {
    flex: 2,
    

    
  },
  containerIndicador1_cabeza: {
    flex: 1,
 
    
  },
  containerIcon1: {  
    height: 70,
    width: 70,
    marginTop: -30,
    marginLeft: 10,
    
    backgroundColor: colores.COLOR_WHITE,
    textAlign:  'center',
    alignItems:  'center',
    justifyContent: 'center',
    borderRadius: 5,
    
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
  }
});
