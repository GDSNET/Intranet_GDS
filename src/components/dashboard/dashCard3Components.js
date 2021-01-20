
import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {View, StyleSheet, Text, ScrollView} from 'react-native-web';


 
class dashCard0 extends Component {

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
    const {title, footer} = this.props;
    return (

    <View style={styles.container}>
        
          <View style={styles.containerDivisor}>
                <View style={styles.containerTitile}>
                    <Text  style={styles.txtTitle}>{title}</Text>
                </View>
                <View style={styles.gridview}>
                <ScrollView style={styles.gridview}>
                    {this.funGridview()}
                </ScrollView>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.txtFooter}>{footer}</Text>
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

const COLOR_PRIMARIO = "#3390D3";
const COLOR_WHITE = "#FFF";
const COLOR_PRIMARIO_OSCURO = "#567";
const COLOR_GRIS_CLARO = "#AAA";



export default connect(mapStateToProps, mapDispatchToProps)(dashCard0);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    

    
  },
  containerDivisor: {
    flex: 1,
    flexDirection: 'column',
    height: 400,
    
  },
  containerDivisorIzq: {
    flex: 1,
    flexDirection: 'column',
    
  },
  containerDivisorDerecha: {
    flex: 2,
    flexDirection: 'column',
    
  },
  containerTitles:{
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    flex: 1,
    
  },
  footer: {
    flex: 0.5,
 
    
  },
  txtFooter: {
    fontSize: 15,
    paddingRight: 20 ,
    color: COLOR_GRIS_CLARO,
    
  },
  txtTitle: {
    fontSize: 25,
    padding: 10,
    color: '#567',
    

  },
  containerTitile:{
    flex:1,
    padding: 10,
 

    
  },
  gridview:{
    flex: 5,
    padding: 10,
  },
  containerGrid: {
    
    padding: 10,
    backgroundColor: '#567',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#AAA',
  },
  txtGrid:{
    color: '#FFF',
    size: 35,
  },
  containerAtributo1: {
    flex: 2
    
    
  },
  containerIndicador1: {
    flex: 1
  }
});
