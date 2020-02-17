import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import Button from "../publica/buttonComponents";


 
class Arriba extends Component {


  render() {
    const {tittle, numero,funCambiaNumero, visible } = this.props;
    return (
      <div>
        <p> ARRIBA COMPONENTE : numero = {numero} </p>
        <Button tittle = {'Hola Mundo'} variable= {90} funcExec={funCambiaNumero} > </Button>

      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    numero: state.control.numero
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



export default connect(mapStateToProps, mapDispatchToProps)(Arriba);
