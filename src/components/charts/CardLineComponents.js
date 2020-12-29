import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import {ResponsiveContainer, LineChart, Line, Tooltip,  XAxis, YAxis,} from 'recharts';

import * as colores from '../../constants/coloresConstants'





const data = [
  {
    name: 'JUNIO', SellOut: 76, OSA: 83, Promocion: 69,
  },
  {
    name: 'JULIO', SellOut: 80, OSA: 90, Promocion: 64,
  },
  {
    name: 'AGOSTO', SellOut: 76, OSA: 85, Promocion: 68,
  },
  {
    name: 'SEPTIEMBRE', SellOut: 84, OSA: 90, Promocion: 64,
  },
  {
    name: 'OTUBRE', SellOut: 78, OSA: 83, Promocion: 66,
  },
  {
    name: 'NOVIEMBRE', SellOut: 84, OSA: 86, Promocion: 67,
  },

];



const getIntroOfPage = (label) => {
  if (label === 0) {
    return "JUNIO";
  } if (label === 1) {
    return 'JULIO';
  } if (label === 2) {
    return 'AGOSTO';
  } if (label === 3) {
    return 'SEPTIEMBRE';
  } if (label === 4) {
    return 'OCTUBRE';
  } if (label === 5) {
    return 'NOBIEMBRE';
  }
};


const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <View style={styles.view_tool} >
        <Text style={styles.view_tool_title} >{getIntroOfPage(label)}</Text>
        <Text style={styles.leyendas_oos}>OSA: {payload[1].value}%</Text>
        <Text  style={styles.leyendas_sellout} >Sell-Out: {payload[0].value}%</Text>
        <Text style={styles.leyendas_promocion}>Promocion: {payload[2].value}%</Text>

      </View>
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
         margin={{ top: 25, right: 5, left: 5, bottom: 5 }} >
            <YAxis hide={true} type="number" domain={['auto', 'auto']} />
  


            <Line type="monotone" dataKey="SellOut"  stroke={colores.COLOR_PRIMARIO} 
              strokeWidth={3}
              />

              <Line type="monotone" dataKey="OSA"  stroke={colores.COLOR_SECUNDARIO} 
              strokeWidth={3}  activeDot={{ r: 5 }}
              />
              <Line type="monotone" dataKey="Promocion"  stroke={colores.COLOR_TERNARIO} 
              strokeWidth={3}
              />

            <Tooltip content={<CustomTooltip />} />
              
                     
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
  view_tool:{
    backgroundColor: colores.COLOR_QUINTENARIO,
    padding: 5,
    borderRadius: 5

  },
  view_tool_title:{
fontSize: 16,
padding: 5,
color: colores.COLOR_WHITE,

  },
  leyendas_oos: {flex: 1, backgroundColor: colores.COLOR_SECUNDARIO, padding: 2, borderRadius:5, margin:5,     alignItems:  'center',    fontSize: 10,
  justifyContent: 'center',color: colores.COLOR_WHITE},
  leyendas_promocion: {flex: 1, backgroundColor: colores.COLOR_TERNARIO, padding: 2, borderRadius:5, margin:5,     alignItems:  'center',    fontSize: 10,
  justifyContent: 'center', zIndex: -1,color: colores.COLOR_WHITE},
  leyendas_sellout: {color: colores.COLOR_WHITE,flex: 1, backgroundColor: colores.COLOR_PRIMARIO, padding: 2, borderRadius:5, margin:5,     fontSize: 10,    alignItems:  'center',
  justifyContent: 'center',},
  view_tool_datos:{
    fontSize: 12,
    color: colores.COLOR_WHITE
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
    textAlign: 'right',
    padding: 10,

    
    
  },
  footer: {
    flex: 1,
    textAlign: 'right'
    
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
    textAlign:  'center',
    alignItems:  'center',
    
    color: COLOR_PRIMARIO,
    
  },
  divIndicador: {

    height: 70,
    width: 70,
    marginTop: -20,
    marginLeft: 10,
    
    textAlign:  'center',
    alignItems:  'center',
    justifyContent: 'center',
    borderRadius: 5,
    boxShadow: "3px 3px 3px #555",
  },
  view_anterior: {
    textAlign:  'center',
    alignItems:  'center',
    flex: 1,
    fontSize: 20,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
    
  },
  view_diferencia: {
    textAlign:  'center',
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