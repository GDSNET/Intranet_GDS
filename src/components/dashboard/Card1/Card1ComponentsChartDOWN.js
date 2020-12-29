import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import * as colores from '../../../constants/coloresConstants'
import {
  CircularProgressbar,
  buildStyles,

} from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';


class Card1 extends Component {
 
  


  render() {
  
    
    const  {indicador} = this.props;

    return (
<View style={[styles.container]} >


<AnimatedProgressProvider
        valueStart={0}
        valueEnd={indicador}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat={false}
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({
                backgroundColor: 'transparent',
                pathTransition: 'none',
                textColor: colores.COLOR_NARANJO,
                pathColor: colores.COLOR_NARANJO,
                trailColor: colores.COLOR_GRIS_CLARO,
              })}
            />
          );
        }}
      </AnimatedProgressProvider>

</View>
    );
  }
}
 




const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 3,
    backgroundColor: colores.COLOR_WHITE
    
  },
  

});


export default Card1;