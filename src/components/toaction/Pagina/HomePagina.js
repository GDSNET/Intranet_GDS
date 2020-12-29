import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {View, Text,  StyleSheet, Dimensions} from 'react-native-web'
import * as colores from '../../../constants/coloresConstants'

import HomePaginaDesktop from './HomePaginaDesktop'
import HomePaginaMobile from './HomePaginaMobile'


class Dash extends Component {
  constructor(props){
    super(props)
    this.state = {  
    }    
  }

  funStyles(){
    if ( Dimensions.get('window').width > 600){
     return(
       <HomePaginaDesktop />
     )
    }
    else
      {
        return(
          <HomePaginaMobile />
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
          {this.funStyles()}

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
    backgroundColor: colores.COLOR_PRIMARIO_OSCURO,
    padding: 10,
    height: '100%',
    marginTop: 40,
    
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
    backgroundColor: colores.COLOR_PRIMARIO_OSCURO,
    flex: 1,
    flexDirection: 'row'

  }
});

const styles2 = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_PRIMARIO_OSCURO,
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
