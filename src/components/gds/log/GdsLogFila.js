import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {Text,View,StyleSheet} from 'react-native-web'
import FilaText from './GdsLogFilaText'

 
class Fila extends Component {


  render() {
    const {id_sala, desc_sala,desc_pre_log,desc_log,estado_valido,estado_ok  } = this.props;
    return (
    <View style={styles.container}>

      
            <FilaText text={id_sala}></FilaText>
            <FilaText text={desc_sala}></FilaText>
            <FilaText text={desc_pre_log}></FilaText>
            <FilaText text={desc_log}></FilaText>
            <FilaText text={desc_log}></FilaText>
            <FilaText text={estado_valido}></FilaText>
            <FilaText text={estado_ok}></FilaText>
            <FilaText text={id_sala}></FilaText>

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

export default connect(mapStateToProps, mapDispatchToProps)(Fila);


const styles = StyleSheet.create({

  container: {
      flexDirection:"row",
      flex:1

  },
  grilla: { 
    padding:5,
    flex:1

},
text: {
  textColor:"#F2FBED"

},
  
});