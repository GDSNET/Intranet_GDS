import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {View, Dimensions, StyleSheet } from 'react-native-web';

import * as colores from '../constants/coloresConstants'

import { IoIosCart, IoMdTrendingDown,IoMdPin} from "react-icons/io";

import DashCard0 from '../components/dashboard/Card0/Card0Components'
import DashCard1 from '../components/dashboard/Card1/Card1Components'
import DashCard2 from '../components/dashboard/Card2/Card2Components11'
import DashCard2_13 from '../components/dashboard/Card2/Card2Components13'





import DashCard3 from '../components/dashboard/dashCard3Components'



import dataSelloutCadena from '../json/dataSelloutCadena.json'
import dataSelloutZona from '../json/dataSelloutZona.json'



import dataGrafico from '../json/dataGrafico.json'
import dataGrafico2 from '../json/dataGrafico2.json'



const COLOR_PRIMARIO = "#3390D3";
const COLOR_WHITE = "#FFF";
const COLOR_PRIMARIO_OSCURO = "#567";


 
class Dashboard extends Component {





  funStyles(){
    if ( Dimensions.get('window').width > 600){
     return(
       styles1.container
     )
    }
    else
      {
        return(
       styles2.container
        )
        }
  }


  

  render() {


    const {visible } = this.props;
    return (
      <div style={styles1.container}>
        
   
                
        <View style={this.funStyles()}>
   

        <DashCard1 
            titulo={'SELLOUT'} 
            subtitulo={'% Segun Target'} 
            indicador={'98'}
            vs_sem_ant={'-1'} 
            vs_y_ant={'1.8'} 
            vs_ytd_ant={'2.2'} 
            vs_sem_ant_txt={'VS SEM ANT'} 
            vs_y_ant_txt={'VS Y ANT'} 
            vs_ytd_ant_txt={'VS YTD ANT'} 
            
            />
            
       
       <DashCard1 
            titulo={'INSTOCK'} 
            subtitulo={'Cumplimiento Actual'} 
            indicador={'92'}
            vs_sem_ant={'-3'} 
            vs_y_ant={'1'} 
            vs_ytd_ant={'-4'} 
            vs_sem_ant_txt={'VS SEM ANT'} 
            vs_y_ant_txt={'VS Y ANT'} 
            vs_ytd_ant_txt={'VS YTD ANT'} 
            
            />
      
       <DashCard1 
            titulo={'OSA'} 
            subtitulo={'Cumplimiento Actual'} 
            indicador={'89'}
            vs_sem_ant={'-2.4'} 
            vs_y_ant={'1.4'} 
            vs_ytd_ant={'2.3'} 
            vs_sem_ant_txt={'VS SEM ANT'} 
            vs_y_ant_txt={'VS Y ANT'} 
            vs_ytd_ant_txt={'VS YTD ANT'} 
            
            />
            
 
        </View>
        <View style={this.funStyles()}>
              

            <DashCard2 
            data={dataSelloutCadena}
            titulo={'SELLOUT'} 
            cab_attr1={'Cadena'}
            cab_ind1={'Sellout vs SA'}
            icon={<IoIosCart color={colores.COLOR_WHITE} size={60}/>}/>
     
        <DashCard2_13 
            data={dataSelloutCadena}
            titulo={'EJECUCION'} 
            cab_attr1={'Cadena'}
            cab_ind1={'INSTOCK'}
            cab_ind2={'FILL RATE'}
            cab_ind3={'OSA'}
            cab_ind4={'CALIFICACION'}
            icon={<IoMdTrendingDown color={colores.COLOR_WHITE} size={60}/>}/> 

        </View>
        <View style={this.funStyles()}>
              

              <DashCard2 
              data={dataSelloutZona}
              titulo={'SELLOUT'} 
              cab_attr1={'ZONA'}
              cab_ind1={'Sellout vs SA'}
              icon={<IoMdPin color={colores.COLOR_WHITE} size={60}/>}/>
       
          <DashCard2_13 
              data={dataSelloutZona}
              titulo={'EJECUCION'} 
              cab_attr1={'ZONA'}
              cab_ind1={'INSTOCK'}
              cab_ind2={'FILL RATE'}
              cab_ind3={'OSA'}
              cab_ind4={'CALIFICACION'}
              icon={<IoMdTrendingDown color={colores.COLOR_WHITE} size={60}/>}/> 
  
          </View>
  

        
      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    ...state,
    visible: state.control.visible,
   controlestado: state.control.estado,
  calidadestado: state.calidad.estado

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



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



const styles1 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'row',
    
  }
});

const styles2 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
  }
});

