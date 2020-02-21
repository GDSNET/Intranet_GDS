import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import {Text, View, StyleSheet} from 'react-native-web'
import { FiAlertCircle } from "react-icons/fi";
 
class FlashMessages extends Component {


funEnviar(){
  const {message, funGdsMessage} = this.props;

  setTimeout(() => {
    funGdsMessage('')
  }, 5000);
  
if(message==''){
 
return ( 
      <View />
           )

}else{
  return (
  
  <View style={styles.flashMessage}>

  
    <FiAlertCircle color={'#FFF'} size={20} ></FiAlertCircle>

    <View style={styles.v_text}>
    <Text style={styles.texto}>
      {message}
      </Text>

      
    </View>

  </View>
   )

}



}




render() {
  

  return (
<View>
    {this.funEnviar()}
 </View>
  );
}
}
 

function mapStateToProps(state){
  return{
    nombre: state.control.nombre,
    message: state.gds.message

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



export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages);


const styles = StyleSheet.create({

  container: {

    flex: 1,
    
  },
  v_icon: {
margin: 2
  },

  v_text: {
    marginHorizontal: 20
  },
  texto: {
    color: '#FFF',
    fontSize: 20,
  },

  flashMessage: {

    flexDirection: 'row',
    backgroundColor: '#76D7C4',
    position: 'fixed',
    left:0,
    right:300,
    height: 50,
    padding: 20,
    bottom: 0,
    borderTopRightRadius: 50,
    
  },
});