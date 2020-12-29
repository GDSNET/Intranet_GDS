import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {View, Dimensions, StyleSheet } from 'react-native-web';


import DashCard0 from '../components/dashboard/dashCard0Components'
import DashCard1 from '../components/dashboard/dashCard1Components'
import DashCard2 from '../components/dashboard/dashCard2Components'
import DashCard3 from '../components/dashboard/dashCard3Components'


import dataKam from '../json/dataKam.json'
import dataSalas from '../json/dataSalas.json'
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
              backgroundColor={'#48FCBB'}
              indicador={'55%'} 
              title={'OSA'} 
              footer={'footer'}
              anterior={'60%'} 
              diferencia={'-5%'} 
              txt_diferencia={'Diferencia'}
              txt_anterior={'Anterior'}
              />

                 <DashCard0 
              backgroundColor={'#FC6948'}
              indicador={'55%'} 
              title={'OSA'} 
              footer={'footer'}
              anterior={'60%'} 
              diferencia={'-5%'} 
              txt_diferencia={'Diferencia'}
              txt_anterior={'Anterior'}
              />
                   <DashCard0 
              backgroundColor={'#FC4848'}
              indicador={'55%'} 
              title={'EXHIBICIONES'} 
              footer={'footer'}
              anterior={'60%'} 
              diferencia={'-5%'} 
              txt_diferencia={'Diferencia'}
              txt_anterior={'Anterior'}
              />




        </View>
                
        <View style={this.funStyles()}>
              

        <DashCard2 data={dataGrafico} colorFondo={COLOR_PRIMARIO} colorLinea={COLOR_WHITE} title={'OOS'}/>
        <DashCard2 data={dataGrafico2} colorFondo={COLOR_PRIMARIO} colorLinea={COLOR_WHITE} title={'Sell-Out'}/>


 
        </View>
        <View style={this.funStyles()}>
              

              <DashCard3 data={dataKam} title={'Kam'} footer={'Datos de Hoy'}/>
              <DashCard3 data={dataSalas} title={'Salas'} footer={'Datos semana anterior'}/>


 
        </View>
        <View style={this.funStyles()}>
              

              <DashCard3 data={dataKam} title={'Kam'} footer={'Datos de Hoy'}/>
              <DashCard3 data={dataSalas} title={'Salas'} footer={'Datos semana anterior'}/>


 
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

