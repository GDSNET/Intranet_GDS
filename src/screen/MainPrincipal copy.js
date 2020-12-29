import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";

import {TouchableOpacity, Text, View} from 'react-native-web'
import Promocion from './Promocion'
import Main from './Main'

import { IoIosMenu } from "react-icons/io";
import logo from '../images/gds.svg';


//import "../css/index.css";


class MainPrincipal extends Component {

  state = {
    menu: true,
    menu_class: ''
  }

  

  render() {
    
    
    
    return (
      <div>
      <HashRouter>

   
          <ul>
            <li><NavLink to="/Main">Main</NavLink></li>
            <li><NavLink to="/Promocion">Promocion</NavLink></li>
          </ul>
        <Switch>
          <Route path="/Main">
              <Main />
          </Route>
          <Route path="/Promocion">
              <Promocion />
          </Route>
          
        </Switch>



          <div>



</div>


      </HashRouter>
      </div>

      
    );
  }
}

 
export default MainPrincipal;


