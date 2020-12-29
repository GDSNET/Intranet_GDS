import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {View, Dimensions, StyleSheet } from 'react-native-web';

import * as colores from '../constants/coloresConstants'

import { IoIosMenu, IoIosAdd } from "react-icons/io";

import DashCard0 from '../components/dashboard/Card0/Card0Components'
import DashCard1 from '../components/dashboard/Card1/Card1Components'
import DashCard2 from '../components/dashboard/Card2/Card2Components11'
import DashCard2_13 from '../components/dashboard/Card2/Card2Components13'





import DashCard3 from '../components/dashboard/dashCard3Components'


import dataKam from '../json/dataKam.json'
import dataSalas from '../json/dataSalas.json'
import dataCadena from '../json/dataCadena.json'

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
      <div className="div_screen">
        
        <View style={this.funStyles()}>
              
             
                 <DashCard0 
              titulo={'OOS'} 
              indicador={'55%'} 
              anterior={'60%'} 
              diferencia={'-5%'} 
              txt_diferencia={'Diferencia'}
              txt_anterior={'Anterior'}
              />

                 <DashCard0 
              titulo={'VOID'} 
              indicador={'65%'} 
              anterior={'60%'} 
              diferencia={'5%'} 
              txt_diferencia={'Diferencia'}
              txt_anterior={'Anterior'}
              />
               

               <DashCard0 
              titulo={'REPOSICION'} 
              indicador={'45%'} 
              anterior={'60%'} 
              diferencia={'-15%'} 
              txt_diferencia={'Diferencia'}
              txt_anterior={'Anterior'}
              />
               

               <DashCard0 
              titulo={'DISTRIBUCION'} 
              indicador={'55%'} 
              anterior={'60%'} 
              diferencia={'5%'} 
              txt_diferencia={'Diferencia'}
              txt_anterior={'Anterior'}
              />
                   <DashCard0 
              titulo={'DISTRIBUCION'} 
              indicador={'55%'} 
              anterior={'60%'} 
              diferencia={'5%'} 
              txt_diferencia={'Diferencia'}
              txt_anterior={'Anterior'}
              />
               
               




        </View>
                
        <View style={this.funStyles()}>
   

        <DashCard1 
            titulo={'DISTRIBUCION'} 
            subtitulo={'% Segun Target'} 
            indicador={'95'}
            vs_sem_ant={'-1'} 
            vs_y_ant={'0'} 
            vs_ytd_ant={'2'} 
            vs_sem_ant_txt={'VS SEM ANT'} 
            vs_y_ant_txt={'VS Y ANT'} 
            vs_ytd_ant_txt={'VS YTD ANT'} 
            
            />
       
       <DashCard1 
            titulo={'SELLOUT'} 
            subtitulo={'% Segun Target'} 
            indicador={'87'}
            vs_sem_ant={'-1'} 
            vs_y_ant={'0'} 
            vs_ytd_ant={'2.2'} 
            vs_sem_ant_txt={'VS SEM ANT'} 
            vs_y_ant_txt={'VS Y ANT'} 
            vs_ytd_ant_txt={'VS YTD ANT'} 
            
            />
      
       <DashCard1 
            titulo={'INSTOCK'} 
            subtitulo={'Cumplimiento Actual'} 
            indicador={'95'}
            vs_sem_ant={'1.8'} 
            vs_y_ant={'-2.8'} 
            vs_ytd_ant={'2.4'} 
            vs_sem_ant_txt={'VS SEM ANT'} 
            vs_y_ant_txt={'VS Y ANT'} 
            vs_ytd_ant_txt={'VS YTD ANT'} 
            
            />
            
 
        </View>
        <View style={this.funStyles()}>
              

            <DashCard2 
            data={dataSalas}
            titulo={'Kam'} 
            cab_attr1={'Cadena'}
            cab_ind1={'Sellout vs SA'}
            icon={<IoIosMenu color={colores.COLOR_WHITE} size={60}/>}/>

     
        <DashCard2_13 
            data={dataCadena}
            titulo={'Salas'} 
            cab_attr1={'Cadena'}
            cab_ind1={'INSTOCK'}
            cab_ind2={'FILL RATE'}
            cab_ind3={'OSA'}
            cab_ind4={'Calificación'}
            icon={<IoIosAdd color={colores.COLOR_WHITE} size={60}/>}/> 




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
    flexDirection: 'row'

  }
});

const styles2 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
  }
});

