import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import {TouchableOpacity, Text, View} from 'react-native-web'
import Promocion from './Promocion'
import Main from './Main'
import Home from "./Home";

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
      <BrowserRouter>
      <div>
        
      <div className="NavBar">
        <div className="link-container">
          <Link to="/home" className="link">Página 1</Link>
        </div>
        <div className="link-container">
          <Link to="/page1" className="link">Página 2</Link>
        </div>
        <div className="link-container">
          <Link to="/page2" className="link">Página 2</Link>
        </div>
      </div>


        <Switch>
          <Route
            path="/home"
            component={Home} />
          <Route
            exact
            path="/page1"
            render={() => <Main name="React Medellín" />} />
          <Route
            exact
            path="/page2"
            render={() => <Promocion />} />
          <Route component={Promocion} />
        </Switch>
      </div>
    </BrowserRouter>

      
    );
  }
}

 
export default MainPrincipal;


