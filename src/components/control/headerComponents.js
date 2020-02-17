import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';


 
class Header extends Component {


  render() {
    const {estado, stopActionCalidad, startActionCalidad, visible } = this.props;
    return (
      <div>
           
        <p> CABECERA :  {estado} </p>
        
        <button style={{width:100 ,height:100}} tittle='Boton' 
        onClick={visible ? stopActionCalidad : startActionCalidad}>
       Funcion HEADER
        </button>

      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    ...state

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



export default connect(mapStateToProps, mapDispatchToProps)(Header);
