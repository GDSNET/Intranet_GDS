import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {IoIosRocket, IoLogoGameControllerA} from "react-icons/io";
import logo from '../images/logogds2020_01blanco.svg';

import Ecommerce from "./Ecommerce";
import eComNivel1 from "../components/eCommerce/eComNivel1"
import eComNivel2 from "../components/eCommerce/eComNivel2"
import eComNivel3 from "../components/eCommerce/eComNivel3"
import ControlEcomerce from '../components/controlEcomerce/ControlEcomerce'

import {
  Route,
  NavLink,
} from "react-router-dom";
 
class ScreenEcommerce extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }
      
        
  
  funExec (){
    const {tostopAction, tostartAction, visible } = this.props;
    if (visible){
      
      tostopAction();
    }
    else{
      tostartAction()
    }
  }

  funExecVariables( tostopAction, tostartAction, visible){
    if (visible){
      tostopAction();
    }
    else{
      tostartAction()
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  handleScroll = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  funLeee(){
    
    const {menu, tofunMenu}= this.props
    
      if (menu) {
       tofunMenu(menu, 'clicked')
     } else {
       tofunMenu(menu, '')
     }

    
  }

  render() {
    

    const {menu_class} = this.props;
    let top_menu_class = `top-menu ${menu_class}`
    let top_dash_class = `dashboard ${menu_class}`


    return (
      <div>

        <div  className={top_menu_class} >
          <div  className={"div_logo"} >
                
                <img src={logo} alt="Logo" className={"logo"} />
              </div>
                <ul>
       
                  
                  <li onClick={()=>this.funLeee()}><NavLink to="/Ecommerce"> <IoIosRocket className='icon_menu' />E-commerce</NavLink></li>
                  <li onClick={()=>this.funLeee()}><NavLink to="/ControlEcomerce"> <IoLogoGameControllerA className='icon_menu' /> Control Ecomerce</NavLink></li>
                
                  
                </ul>
              </div>
            <div  className={top_dash_class}>
              <div  className={"dash_body"}>
                <div  className={"dash_body_right"}>
              
                    <Route path="/Ecommerce" component={Ecommerce}/>
                    <Route path="/eComNivel1" component={eComNivel1}/>
                    <Route path="/eComNivel2" component={eComNivel2}/>
                    <Route path="/eComNivel3" component={eComNivel3}/>
                    <Route path="/ControlEcomerce" component={ControlEcomerce}/>
                    

                  </div>
              </div>
          </div>
      </div>
 
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    
    menu_class: state.to.menu_class,
    menu: state.to.menu,
    

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



export default connect(mapStateToProps, mapDispatchToProps)(ScreenEcommerce);


