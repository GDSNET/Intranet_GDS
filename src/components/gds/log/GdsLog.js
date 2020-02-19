import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import {Text,View} from 'react-native-web'
import GdsLogFila from './GdsLogFila'
 
class Cliente extends Component {


  render() {
    const {id_sala, funCambiaNombre,  } = this.props;
    return (
      <View>
        <GdsLogFila 
        id_sala='68888'
        desc_sala="jumbo pepito"
        desc_pre_log="nada"
        desc_log="retenida nsg"
        estado_valido="0"
        estado_ok="0"
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
