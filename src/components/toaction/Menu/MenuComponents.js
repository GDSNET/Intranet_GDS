import React, { Component } from "react";
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {TouchableOpacity, Text, View, StyleSheet} from 'react-native-web'

import Home from "../Dash/HomeComponents";
import Pagina from '../Dash/PaginaComponents'



import logo from '../../../images/gds.svg';


//import "../css/index.css";





class Menu extends Component {






  aparece(){
    if(this.state.menu){
      return (
        <TouchableOpacity  hide={this.state.menu} >
        <Text >
          aparecio
        </Text>
      </TouchableOpacity>
      )
    }
  }

  render() {
    const {menu_class} = this.props;
    
    let top_menu_class = `top-menu ${menu_class}`
    let top_dash_class = `dashboard ${menu_class}`
    return (
      <div className="principal">
      <HashRouter>
        <div  className={top_menu_class} >
          <div  className={"div_logo"} >
            <p>{menu_class}</p>
            <img src={logo} alt="Logo" className={"logo"} />
          </div>
          <ul>
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/Pagina">Pagina</NavLink></li>
    
            
            
          </ul>

       
          
          </div>

          <div  className={top_dash_class}>
       
            
          <div  className={"dash_body"}>

   

          
          <div  className={"dash_body_right"}>
                  <Route path="/Home" component={Home}/>
                  <Route path="/Pagina" component={Home}/>
  
          </div>
              </div>
          </div>
      </HashRouter>
      </div>

      
    );
  }
}

 

function mapStateToProps(state){
    return{
      ...state,        
      titulo: state.to.titulo,
      menu_class: state.to.menu_class
  
  
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
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);
  

  const styles = StyleSheet.create({
   
    menu: {
      flex: 1,
      flexDirection: 'row'
  
    },
    menu_icon: {
      flex: 1
    }
   
    
  
  });
  

