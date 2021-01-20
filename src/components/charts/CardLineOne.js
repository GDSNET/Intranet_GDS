import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import {ResponsiveContainer, LineChart, Line, Tooltip} from 'recharts';

import * as colores from '../../constants/coloresConstants'


const data = [
  {
    name: 'Page A', SellOut: 40, OOS: 9, Promocion: 68,
  },
  {
    name: 'Page B', SellOut: 60, OOS: 12, Promocion: 71,
  },
  {
    name: 'Page C', SellOut: 30, OOS: 11, Promocion: 75,
  },
  {
    name: 'Page D', SellOut: 40, OOS: 6, Promocion: 81,
  },
  {
    name: 'Page E', SellOut: 50, OOS: 2, Promocion: 72,
  },
  {
    name: 'Page F', SellOut: 45, OOS: 5, Promocion: 68,
  },
  {
    name: 'Page G', SellOut: 92, OOS: 1, Promocion: 76,
  },
];



const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="style_tooltip">
        <h1>
            {`${payload[0].value}`}
            {`${payload[1].value}`}
      </h1>
  

      </div>
    );
  }

  return null;
};

 
class CardLine extends Component {
 

  render() {
  
   const  {backgroundColor,title, indicador, anterior, diferencia, txt_anterior, txt_diferencia } = this.props;
    
    return (
<View style={[styles.container]} >
<ResponsiveContainer width="99%" aspect={3}>
         
         <LineChart  data={data} 
         margin={{ top: 5, right: 5, left: 5, bottom: 5 }} >
            <Line type="monotone" dataKey="SellOut"  stroke={colores.COLOR_PRIMARIO} 
              strokeWidth={3}
              />

              <Tooltip  />
              
                     
           </LineChart>
           
           </ResponsiveContainer>
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
 
  
  },
  graficLine: {
    flex: 1,
    width: 400,
    height: 60
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


export default CardLine;