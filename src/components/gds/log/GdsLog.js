import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import {Text, View, StyleSheet} from 'react-native-web'
import GdsPicker from './GdsPicker'

 
class Cliente extends Component {

  funEjemplo (){
    alert('ejemplo picker')
  }

  render() {
    const {nombre, funCambiaNombre,  } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          Desarrollando Log
        </Text>

     

    <GdsPicker funExec={this.funEjemplo} />
    <GdsPicker funExec={this.funEjemplo} />
    <GdsPicker funExec={this.funEjemplo} />
    <GdsPicker funExec={this.funEjemplo} />



           
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