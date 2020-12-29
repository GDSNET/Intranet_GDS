import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import { LineChart, Line, Tooltip} from 'recharts';

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



const CustomTooltip = ({ active, payload }) => {
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

 
class CardLine extends Component {
 

  render() {
  
   const  {backgroundColor,title, indicador, anterior, diferencia, txt_anterior, txt_diferencia } = this.props;
    
    return (
<View style={[styles.container]} >
<View style={styles.containerDivisorColumn}>
          <View style={styles.containerDivisorArriba}>
   
            <Text> titulo</Text>
         </View> 



         <View style={styles.containerDivisor}>
         <LineChart width={300} height={50} data={data}>
                  <Line type="monotone" dataKey="uv"  stroke={colores.COLOR_PRIMARIO} 
                  strokeWidth={3}
                  />
                     <Tooltip content={<CustomTooltip />} />
           </LineChart>

          
         </View>
         <View style={styles.containerDivisor}>
         
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