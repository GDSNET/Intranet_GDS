import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {View, Text,  StyleSheet, Dimensions} from 'react-native-web'
import * as colores from '../../../constants/coloresConstants'


import CardSellOutTipe1 from '../../../components/CardSellOut/CardSellOutTipe1'
import CardSellOutTipe2 from '../../../components/CardSellOut/CardSellOutTipe2'
import {funAtributo1SellOut, f_sellout_usuario} from  '../../CardSellOut/DataSellOut'





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
  }



  render() {
    const {titulo} = this.props;
    return (
      
        <View style={styles.container}>

        <div className="div_screen">

        <View style={this.funStyles()}>

                 <CardSellOutTipe1
              data={funAtributo1SellOut()}
              titulo={"SELL OUT"}
              speed={1}
              />
                      <CardSellOutTipe1
              data={funAtributo1SellOut()}
              titulo={"IN STOCK"}
              speed={1}
              />
                      <CardSellOutTipe1
              data={funAtributo1SellOut()}
              titulo={"OSA"}
              speed={1}
              />
                      <CardSellOutTipe1
              data={funAtributo1SellOut()}
              titulo={"FILL RATE"}
              speed={1}
              />
              

          </View>    
          <View style={this.funStyles()}>
        
      
           <CardSellOutTipe2
              data={f_sellout_usuario()}
              titulo={"SELL OUT"}
              speed={1}
              />
                  <CardSellOutTipe2
              data={f_sellout_usuario()}
              titulo={"SELL OUT"}
              speed={1}
              />

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
    menu: state.to.menu,
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
  contDerecho: {
    flex: 3,
    flexDirection: 'row',
  },
  contIzquierdo: {
flex: 2,

  }
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
