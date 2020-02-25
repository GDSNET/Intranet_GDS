import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {View,TextInput,StyleSheet} from 'react-native-web';


class CalidadLogin extends Component {

constructor(props){
  super(props);
  this.state ={
    pass:null,

  }
}

funInput(){

  if(this.state.pass == "modifica2020"){

return(
  <View></View>
)
  }else { 
     return(    
  <View style={styles.container}>
  <TextInput
   style={{ height: 40, borderColor: 'gray', borderWidth: 1,color:'#F2FBED' }}
   onChangeText={this.onChangeText}
   value={this.state.pass}
   placeholder=" Ingrese Contraseña"
   />
   </View>
  )
   }

}

  funValidaPass(){

    const {history} = this.props

    if(this.state.pass == "modifica2020"){

      //alert("pass correcto")
     return(
     
      history.push('/Calidad')
    )


    }else {

      //alert("contraseña incorrecta")
    }
}
 onChangeText=(pass) => {

  this.setState({pass})

 }

  render() {
    return (
<View>
      {this.funInput()}
    {this.funValidaPass()}
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



export default connect(mapStateToProps, mapDispatchToProps)(CalidadLogin);

const styles = StyleSheet.create({

container:{

  padding: 20,
  margin: 5,
  alignItems: 'center',

}

})