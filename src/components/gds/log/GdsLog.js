import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import {Text} from 'react-native-web'
import ButtonSalvaSala from './GdsButtonSalvaSala'

 
class Cliente extends Component {

  funButton(){
    return(
      console.log("FUNCION BUTTON SALVAR SALA")
    )
  }


  render() {
    const {nombre, funCambiaNombre,  } = this.props;
    return (
      <div>
        <Text>
          Desarrollando Log
        </Text>
        
        <ButtonSalvaSala
          title = 'Button'
          funExecute={()=>this.funButton()}
        />

      </div>
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
