import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import ButtonSalvaSala from './GdsButtonSalvaSala'
import {Text, View, StyleSheet} from 'react-native-web'
import GdsPicker from './GdsPicker'


 
class Cliente extends Component {

  funButton(){
    return(
      console.log("FUNCION BUTTON SALVAR SALA")
    )
  }


  render() {
    const {nombre, funCambiaNombre,  } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          Desarrollando Log
        </Text>
        
        <ButtonSalvaSala
          variable = {0}
          funExecute={()=>this.funButton()}
        />
      </View>
    );
  }
}
 

function mapStateToProps(state){
  return{
    nombre: state.control.nombre

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



export default connect(mapStateToProps, mapDispatchToProps)(Cliente);

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row'
    
  },
  
});