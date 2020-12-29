import React, { Component } from "react";


import '../css/Steps.css';

import {View, Dimensions, StyleSheet} from 'react-native-web';

import StepZilla from "react-stepzilla";


import Screen1 from '../components/lanzamientos/Screen1'
import Screen2 from '../components/lanzamientos/Screen2'
import Screen3 from '../components/lanzamientos/Screen3'
import Screen4 from '../components/lanzamientos/Screen4'
import Screen5 from '../components/lanzamientos/Screen5'
import Screen6 from '../components/lanzamientos/Screen6'
import Screen7 from '../components/lanzamientos/Screen7'
import Screen8 from '../components/lanzamientos/Screen8'



const ancho =  Dimensions.get('window').height
const alto =   ancho * 0.75


const steps =
    [
      {name: 'Setup', component: <Screen1 alto={alto} ancho={ancho} />},
      {name: '72 Horas Antes', component: <Screen2 alto={alto} ancho={ancho} />},
      {name: '48 Horas Antes', component: <Screen3 alto={alto} ancho={ancho} />},
      {name: '24 Horas Antes', component: <Screen4 alto={alto} ancho={ancho} />},
      {name: 'Lanzamiento', component: <Screen5 alto={alto} ancho={ancho} />},
      {name: 'Dia 1', component: <Screen6 alto={alto} ancho={ancho} />},
      {name: 'Equipo gds', component: <Screen7 alto={alto} ancho={ancho} />},
      {name: 'Informacion', component: <Screen8 alto={alto} ancho={ancho} />},
      
    ]

export default class Lanzamiento extends React.Component {
  

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };


  render() {
  

    return (

      
      
   <View style={styles.presentacion}>
  
      

          <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            showSteps={true}
            showNavigation={true}
            stepsNavigation={true}
            prevBtnOnLastStep={false}
            dontValidate={false}
            preventEnterSubmission={false}
            startAtStep={0}
            nextButtonText='Siguiente'
            backButtonText='Anterior'
            nextTextOnFinalActionStep='Final'
            nextButtonCls='botones'
            backButtonCls='botones'

           
          />
        
      

      </View>


    );
  }
}

const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'row',


  },
  carrousel: {
  
  marginLeft: 200,

  },

  presentacion: {
    top: 30,
    
    

  },
  botones: {
    backgroundColor: '#098'
  },
  container_boton:{
    flex: 1
  },
  linea: {

    width: 20
  }

});

const promstyles2 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
