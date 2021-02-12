import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';

import {IoIosArrowForward, IoIosRocket, IoMdContacts, IoLogoGameControllerA} from "react-icons/io";

import logo from '../images/logogds2020_01blanco.svg';


import Calidad from "./Calidad";
import CalidadLogin from "./CalidadLogin";
import CalidadN1Exh from "../components/calidad/CalidadN1Exh";
import CalidadN3UpdateExh from "../components/calidad/CalidadN3UpdateExh";
import CalidadN2InsertExh from "../components/calidad/CalidadN2InsertExh"; 
import CalidadN1 from "../components/calidad/CalidadN1";
import CalidadN3Update from "../components/calidad/CalidadN3Update";
import CalidadN2Insert from "../components/calidad/CalidadN2Insert";
import CalidadFotosECom from "../components/calidad/CalidadFotosECom";

import ControlEcomerce from '../components/controlEcomerce/ControlEcomerce'

import gdsAlarmasHtml from "../components/gds/gdsAlarmasHtml";
import gdsAlarmasHtml00 from "../components/gds/gdsAlarmasHtml00";
import gdsActualizaSalaLog from "../components/gds/gdsActualizaSalaLog";
import gdsActualizaSalaLogN2 from "../components/gds/gdsActualizaSalaLogN2";

import {
  Route,
  NavLink,
} from "react-router-dom";
 
class ScreenCalidad extends Component {
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
       
                  
                  <li onClick={()=>this.funLeee()}><NavLink to="/Calidad"> <IoMdContacts className='icon_menu' />Modificaciones</NavLink></li>
                  <li onClick={()=>this.funLeee()}><NavLink to="/gdsAlarmasHtml00"> <IoIosArrowForward className='icon_menu' /> Liberar Alertas</NavLink></li>              
                  <li onClick={()=>this.funLeee()}><NavLink to="/gdsActualizaSalaLog"> <IoIosRocket className='icon_menu' /> Actualiza estado Log</NavLink></li>              
                  <li onClick={()=>this.funLeee()}><NavLink to="/CalidadFotosECom"> <IoIosRocket className='icon_menu' /> Administracion de fotos E-COMMERCE</NavLink></li>   
                  <li onClick={()=>this.funLeee()}><NavLink to="/ControlEcomerce"> <IoLogoGameControllerA className='icon_menu' /> Control Ecomerce</NavLink></li>

                </ul>
              </div>
            <div  className={top_dash_class}>
              <div  className={"dash_body"}>
                <div  className={"dash_body_right"}>
              
                    <Route path="/Calidad" component={Calidad}/>
                    <Route path="/CalidadN1" component={CalidadN1}/>
                    <Route path="/CalidadN1Exh" component={CalidadN1Exh}/>  
                    <Route path="/CalidadN3UpdateExh" component={CalidadN3UpdateExh}/>
                    <Route path="/CalidadN2InsertExh" component={CalidadN2InsertExh}/>
                    <Route path="/CalidadN3Update" component={CalidadN3Update}/>
                    <Route path="/CalidadN2Insert" component={CalidadN2Insert}/>
                    <Route path="/Calidadlogin" component={CalidadLogin}/>

                    <Route path="/gdsAlarmasHtml" component={gdsAlarmasHtml}/>
                    <Route path="/gdsAlarmasHtml00" component={gdsAlarmasHtml00}/>
                    <Route path="/gdsActualizaSalaLog" component={gdsActualizaSalaLog}/>
                    <Route path="/gdsActualizaSalaLogN2" component={gdsActualizaSalaLogN2}/>
                    <Route path="/CalidadFotosECom" component={CalidadFotosECom}/>
                    
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



export default connect(mapStateToProps, mapDispatchToProps)(ScreenCalidad);


