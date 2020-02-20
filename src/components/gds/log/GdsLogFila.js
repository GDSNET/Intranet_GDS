import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {Text,View,StyleSheet} from 'react-native-web'

 
class Fila extends Component {


  render() {
    const {id_sala, desc_sala,desc_pre_log,desc_log,estado_valido,estado_ok  } = this.props;
    return (
    <View style={styles.container}>

      <View style={styles.grilla}>
            <Text style={styles.text}>{id_sala}</Text>
      </View>
      <View style={styles.grilla}>
            <Text>{desc_sala}</Text>
      </View>
      <View style={styles.grilla}>
            <Text>{desc_pre_log}</Text>
      </View>
      <View style={styles.grilla}>
            <Text>{desc_log}</Text>
      </View>
      <View style={styles.grilla}>
            <Text>{estado_valido}</Text>
      </View>
      <View style={styles.grilla}>
            <Text>{estado_ok}</Text>
      </View>

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
    
    padding:5

},
text: {
    
  textColor:"#F2FBED"

},
  
});