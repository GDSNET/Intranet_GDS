import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions";
import {bindActionCreators} from 'redux';
import GdsCargaParametros from "../components/comercial/GdsCargaParametros";
import Lottie from 'lottie-react-web'
import toggleAnimation from  '../images/433-checked-done.json'


class Comercial extends Component {

  constructor(props){
    super(props)
    this.state = {  
      isToggled: false
    }
  }

  funCambiar(){
    this.setState({ isToggled: !this.state.isToggled})
  }


  render() {
  
    return (

    <div>
<h1> Carga de Parametros </h1> 
      <div>
      <GdsCargaParametros/>

      </div>   
    </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    data_cliente: state.gds.data_cliente,
    sala: state.gds.sala,
    estado: state.gds.estado,
    cliente: state.gds.cliente,
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



export default connect(mapStateToProps, mapDispatchToProps)(Comercial);