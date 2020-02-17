import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import Button from "../publica/buttonComponents";


 
class Abajo extends Component {


  render() {
    const {nombre, funCambiaNombre,  } = this.props;
    return (
      <div>
           
        <p> ABAJO COMPONENTE :  {nombre} </p>
        <Button tittle = {'Boton de abajo'} variable= {'rodrigo'} funcExec={funCambiaNombre} > </Button>

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



export default connect(mapStateToProps, mapDispatchToProps)(Abajo);
