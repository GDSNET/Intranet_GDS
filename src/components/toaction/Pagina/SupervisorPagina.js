import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {View, Text, StyleSheet, Dimensions} from 'react-native-web'
import * as colores from '../../../constants/coloresConstants'

import { IoIosMenu, IoIosAdd } from "react-icons/io";

import CardLine from '../../../components/dashboard/CardLine/CardLineComponents'
import CardBarChart from '../../../components/dashboard/CardLine/CardBarChartComponents'

import CardTitle from '../../../components/CardTitle/CardTitleComponents'

import DashCard0 from '../../../components/dashboard/Card0/Card0Components'
import DashCard1 from '../../../components/dashboard/Card1/Card1Components'
import DashCard2 from '../../../components/dashboard/Card2/Card2Components11'
import DashCard2_13 from '../../../components/dashboard/Card2/Card2Components13'


import dataSalas from '../../../json/dataSalas.json'
import dataCadena from '../../../json/dataCadena.json'





class Dash extends Component {
  constructor(props){
    super(props)
    this.state = {  
    }

    
  }

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

  funEnviar(){
    this.setState({ isToggled: !this.state.isToggled})
   // alert('cambiando')
  }



  render() {

    const {titulo} = this.props;
    return (
      
        <View style={styles.container}>

           <div className="div_screen">
           
           
        
        <View style={this.funStyles()}>
          
          <CardTitle titulo={'TODO TEXTO EN ALTA'} 
          subtitulo={' / SUBTITULO IGUAL'} 
          color_fondo={colores.COLOR_CUATERNARIO} 
          color_texto={colores.COLOR_PRIMARIO_CLARO} 
          />
          </View>       
          <View style={this.funStyles()}>  

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
           titulo={'PROMOCION'} 
           indicador={'56%'} 
           anterior={'54%'} 
           diferencia={'2%'} 
           txt_diferencia={'Diferencia'}
           txt_anterior={'Anterior'}
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
        </View>

    );
  }
}





function mapStateToProps(state){
  return{
    ...state,        
    titulo: state.to.titulo,


  }
}

function mapDispatchToProps (dispatch) {
 const combiner = Object.assign({},
ControlActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}



export default connect(mapStateToProps, mapDispatchToProps)(Dash);



const styles = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_CUATERNARIO_CLARO,
    marginTop:20,
    padding: 10,
    height: '100%',
    padding: 20,
    
  },
  view_pequeño: {
    width: 200,
    height: 200,
    
  },
})


const styles1 = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_CUATERNARIO_CLARO,
    flex: 1,
    flexDirection: 'row'

  }
});

const styles2 = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_CUATERNARIO_CLARO,
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
