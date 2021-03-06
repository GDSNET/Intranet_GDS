import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import { Tooltip, BarChart, Bar, Legend} from 'recharts';

import * as colores from '../../../constants/coloresConstants'


const data = [
  {
    name: 'Page A', uv: 10, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 30, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 20, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 75, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 95, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 65, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 90, pv: 4300, amt: 2100,
  },
];


const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  } if (label === 'Page B') {
    return "Page B is about women's dress";
  } if (label === 'Page C') {
    return "Page C is about women's bag";
  } if (label === 'Page D') {
    return 'Page D is about household goods';
  } if (label === 'Page E') {
    return 'Page E is about food';
  } if (label === 'Page F') {
    return 'Page F is about baby food';
  }
};


const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="style_tooltip">
        <h1>
            {`${payload[0].value}`}
      </h1>
  

      </div>
    );
  }

  return null;
};

class CardBarChart extends Component {
 

  render() {
  
   const  {backgroundColor,title, indicador, anterior, diferencia, txt_anterior, txt_diferencia } = this.props;
    
    return (
<View style={[styles.container]} >
<View style={styles.containerDivisorColumn}>
          <View style={styles.containerDivisorArriba}>
   
            <Text> titulo</Text>
         </View> 



         <View style={styles.containerDivisor}>
              <BarChart width={300} height={50} data={data}>
                  <Tooltip content={<CustomTooltip />}/>
                  <Bar dataKey="uv" fill={colores.COLOR_PRIMARIO}  />
                </BarChart>
        </View>
          <View style={styles.containerDivisor}>
          <Tooltip content={<CustomTooltip />} />
         
     
    

         </View>

    </View>
           

  </View>
    );
  }
}
 


const COLOR_PRIMARIO = "#3390D3";
const COLOR_WHITE = "#FFF";
const COLOR_PRIMARIO_OSCURO = "#567";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 5,
    backgroundColor: COLOR_WHITE
  
  },
  containerDivisorArriba:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOR_PRIMARIO,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    
  },
  containerDivisor: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    
    
  },
  containerDivisorColumn:{
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
    
    padding: 10,

    
    
  },
  footer: {
    flex: 1,
   
    
  },
  txtFooter: {
    fontSize: 15,
    padding: 10,
    
  },
  txtTitle: {
    fontSize: 15,
    
    aligItem: 'right',
    color: COLOR_WHITE,
    alignSelf: 'stretch'

  },
  txtIndicador: {
    fontSize: 20,
 
    alignItems:  'center',
    
    color: COLOR_PRIMARIO,
    
  },
  divIndicador: {

    height: 70,
    width: 70,
    marginTop: -20,
    marginLeft: 10,
    
 
    alignItems:  'center',
    justifyContent: 'center',
    borderRadius: 5,
    boxShadow: "3px 3px 3px #555",
  },
  view_anterior: {
 
    alignItems:  'center',
    flex: 1,
    fontSize: 20,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
    
  },
  view_diferencia: {
 
    alignItems:  'center',
    flex: 1,
    fontSize: 20,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
    
  },
  txtAnterior:{
    fontSize: 15,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
  },
  txtDiferencia:{
    fontSize: 15,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
  },
  txtAnteriorIndicador:{
    fontSize: 15,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
  },
  txtDiferenciaIndicador:{
    fontSize: 15,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
  }


});


export default CardBarChart;