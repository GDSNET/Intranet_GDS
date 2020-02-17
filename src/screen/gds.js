import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import GdsMenu from "../components/gds/GdsMenu";
import Lottie from 'lottie-react-web'
import toggleAnimation from  '../images/433-checked-done.json'


class Gds extends Component {

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
<h1> Por favor, Seleccione una opción </h1> 
      <div>
      <GdsMenu/>

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



export default connect(mapStateToProps, mapDispatchToProps)(Gds);