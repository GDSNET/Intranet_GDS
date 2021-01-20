


import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {View, StyleSheet, Text, ScrollView} from 'react-native-web';
import { ResponsiveLine } from '@nivo/line';


 



class dashCard2 extends Component {

  

  render() {
    const {title, colorFondo, data, colorLinea} = this.props;
    return (

    <View style={styles.container}>

      <View style={[styles.containerGrafico, {backgroundColor: colorFondo, text: '#fff'}] }>

      <ResponsiveLine
         animate={true}
         data={data}
         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
         xScale={{ type: 'point' }}
         yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto'}}

         axisTop={null}
         axisRight={null}
         axisLeft={null}
         axisBottom={null}
         curve={'cardinal'}
         enableGridX={false}
         enableGridY={false}
         enablePointLabel={true}
         enableArea={false}
         areaBaselineValue={10}
         enableCrosshair={false}
         enableSlices= {'x'}
         pointBorderColor="#e66d00"
         
       colors={colorLinea}
       pointSize={10}
       pointColor={{ from: 'color' }}
       pointBorderWidth={1}
       pointLabel={function(e){return  e.y + '%'}}
       
       pointBorderColor={{ from: 'serieColor' }}
       
       pointLabelYOffset={-12}
       
       useMesh={true}
      


    />

      </View>
      
        
          <View style={styles.containerDivisor}>
                <View style={styles.containerTitile}>
                    <Text  style={styles.txtTitle}>{title}</Text>
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



export default connect(mapStateToProps, mapDispatchToProps)(dashCard2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    

    
  },
  containerGrafico: {
    flex: 5,
    margin: 10,
    borderRadius: 5,
    fontSize: 20,
    color: '#567',
    
    
    

    
  },
  grfico: {
    color: '#567',
    
    
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
