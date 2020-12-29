import React, { Component } from "react";
import {View, StyleSheet, Text} from 'react-native-web';
import * as colores from '../../constants/coloresConstants'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import AnimatedProgressProvider from './AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';



class ChartDonuts extends Component {
 
  


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
                textColor: colores.COLOR_PRIMARIO,
                pathColor: colores.COLOR_PRIMARIO,
                trailColor: colores.COLOR_GRIS_CLARO,
                textSize: 30,
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
 
    
  },
  

});


export default ChartDonuts;