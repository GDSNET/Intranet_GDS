import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import * as colores from '../../../constants/coloresConstants'
import DonnutChartUP from './Card1ComponentsChartUP'
import DonnutChartDOWN from './Card1ComponentsChartDOWN'
import Card1VSdown from './Card1VSdown'
import Card1VSmedio from './Card1VSmedio'
import Card1VSup from './Card1VSup'
 
class Card1 extends Component {

  
 
  funIndicador(indicador){
    if (indicador > 90) {
      return( <DonnutChartUP indicador={indicador} />
        )
    }
    else {
      return(<DonnutChartDOWN indicador={indicador} />)
    }

  }

  funCard(valor, titulo){
    if (valor == 0) {
      return( <Card1VSmedio indicador={valor} titulo={titulo}/>
        )
    }
    else if (valor > 0) {
      return( <Card1VSup indicador={valor} titulo={titulo}/>
        )
    }
    else {
      return(<Card1VSdown indicador={valor} titulo={titulo} />)
    }

  }


  render() {
  
   const  {titulo, subtitulo,indicador, vs_sem_ant, vs_y_ant, vs_ytd_ant, vs_sem_ant_txt, vs_y_ant_txt, vs_ytd_ant_txt} = this.props;


    return (
<View style={[styles.container]} >
    <View style={[styles.div_titulo]} >
          <View style={[styles.div_titulo_izq]} >
              <Text  style={[styles.div_titulo_text]} >{titulo}</Text>
          </View>
          <View style={[styles.div_titulo_der]}>
              <Text style={[styles.div_titulo_subtext]}>{subtitulo}</Text>
          </View>
    </View>
    <View style={[styles.div_indicador]} >
          <View style={[styles.div_indicador_chart]} >
            
            {this.funIndicador(indicador)}
            </View>
    </View>
    <View style={[styles.div_abajo]} >
          <View style={[styles.div_abajo_indicador]} >
          {this.funCard(vs_sem_ant,vs_sem_ant_txt )}
          </View>
          <View style={[styles.div_abajo_indicador]} >
          {this.funCard(vs_y_ant,vs_y_ant_txt )}
          </View>
          <View style={[styles.div_abajo_indicador]} >
          {this.funCard(vs_ytd_ant,vs_ytd_ant_txt )}
          </View>
    </View>
  
</View>
    );
  }
}
 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding:10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 5,
    backgroundColor: colores.COLOR_WHITE
    
  },
  div_abajo: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
  },
  div_abajo_indicador: {
    flex: 1,
    
  },
  div_indicador: {

 
    alignItems:  'center',

  },
  div_indicador_chart: {
    width: 150,
  

  },
  div_titulo: {
    margin: 5,
    padding:10,
    borderRadius: 50,
    backgroundColor: colores.COLOR_PRIMARIO,
    flexDirection: 'row',
  },
  div_titulo_izq: {
   flex: 1,
   paddingLeft:10,
  },
  div_titulo_der: {
    flex: 1,
    paddingRight:10,
  },
  div_titulo_text: {
 
    color: colores.COLOR_WHITE,
    fontSize: 20
  },
  div_titulo_subtext: {
    
 
    color: colores.COLOR_GRIS_CLARO,
    fontSize: 15
  }

});


export default Card1;