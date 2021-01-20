import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

 
class dashCard0 extends Component {
 

  render() {
  
   const  {backgroundColor,title, indicador, anterior, diferencia, txt_anterior, txt_diferencia } = this.props;
    
    return (
<View style={[styles.container]} >
<View style={styles.containerDivisorColumn}>
          <View style={styles.containerDivisorArriba}>
   
              <View style={styles.containerDivisorIzq}>
                    <View style={[styles.divIndicador, {backgroundColor: backgroundColor}]}>
                        <Text 
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                         style={styles.txtIndicador}>{indicador}
                         </Text>


                    </View>
              </View>
              <View style={styles.containerDivisorDerecha}>
              <View style={styles.title}>  
                    <Text 
                    
                          adjustsFontSizeToFit={true}
                          numberOfLines={1}
                            style={styles.txtTitle}>{title}</Text>

                  <LineChart width={300} height={100} data={data}>
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
                  </View>
             </View>
                  
         </View> 



         <View style={styles.containerDivisor}>
                          <View style={styles.view_anterior}>
                          <Text style={styles.txtAnterior}>{txt_anterior}</Text>
                          <Text style={styles.txtAnteriorIndicador}>{anterior}</Text>
                          </View>
                          <View style={styles.view_diferencia}>
                             <Text style={styles.txtDiferencia}>{txt_diferencia}</Text>
                              <Text style={styles.txtDiferenciaIndicador}>{diferencia}</Text>
                          </View>
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
    borderRadius: 5,
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


export default dashCard0;