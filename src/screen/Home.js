import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {DiAptana} from 'react-icons/di';

 
class Home extends Component {

 
  render() {
    const {controlestado,calidadestado, stopAction, startAction, visible } = this.props;

    return (
      <div>
        
        <DiAptana className="style_image_home"></DiAptana>
        <DiAptana className="style_image_home_izq"></DiAptana>
        <DiAptana className="style_image_home"></DiAptana>
    
      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    ...state,
    visible: state.control.visible,
   controlestado: state.control.estado,
  calidadestado: state.calidad.estado

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



export default connect(mapStateToProps, mapDispatchToProps)(Home);
