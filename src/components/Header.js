import React, { Component } from 'react';

import '../App.css';

import { connect } from "react-redux";
import ControlActions from "../actions/index";
import {bindActionCreators} from 'redux';

class App extends Component {

constructor(props){

  super(props);
  this.state={
      mensaje:'Hola Mundo',
      variable : ''
  }

 
}



funCambiar(variable){
  
try {

  if (this.props.visible) 
  
  {
    return( this.props.startAction) 
  } 
  else 
  return( this.props.stopAction) 
    
} catch (error) {
  
}


}

  render() {
    return (



      <div className="App">
      
        <header className="App-header">

          
        <p>INICIAL</p>

        <p> hola:  {this.props.visible} </p>
        <p> hola:  {this.props.estado} </p>
        {this.props.visible ? "visible":" no visible"}
        <p> numero:  {this.props.numero} </p>
     
        </header>
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
ControlActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
