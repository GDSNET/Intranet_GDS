import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';

import {IoIosArrowForward, IoIosRocket, IoIosWalk, IoMdContacts, IoMdPerson} from "react-icons/io";

import {Dimensions, Alert} from 'react-native-web'

import ToCarga from './ToCarga'

import MenuTop from '../components/toaction/MenuTop/MenuTopComponents'
import MenuTopMobile from '../components/toaction/MenuTop/MenuTopMobileComponents'
import Footer from '../components/toaction/Footer/FooterComponents'

import Home from "../components/toaction/Pagina/HomePagina";
import Pagina from '../components/toaction/Pagina/PaginaPagina'
import Supervisor from '../components/toaction/Pagina/SupervisorPagina'
import SellOut from '../components/toaction/Pagina/SellOutPagina'


import Lanzamientos from '../screen/Lanzamientos3'


import Desplegable from '../components/toaction/Desplegable/DesplegableComponents'
import DesplegableMail from '../components/toaction/Desplegable/DesplegableMailComponents'
import DesplegableCampana from '../components/toaction/Desplegable/DesplegableCampanaComponents'
import DesplegableSupervisor from '../components/toaction/Desplegable/DesplegableSupervisorComponents'

import ToRootMenuDesktop from './ToRootMenuDesktop'
import ToRootMenuMobile from './ToRootMenuMobile'






import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
 
class ToRoot extends Component {
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

  funTopMenu(){
    if ( Dimensions.get('window').width > 600){
     return(
       <MenuTop />
     )
    }
    else
      {
        return(
          <MenuTopMobile />
        )
        }
  }

  funMenu(){
    if ( Dimensions.get('window').width > 600){
     return(
       <ToRootMenuDesktop />
     )
    }
    else
      {
        return(
      <ToRootMenuMobile />
        )
        }
  }



  render() {
    

    const {menu_class, Pantalla} = this.props;
    let top_menu_class = `top-menu ${menu_class}`
    let top_dash_class = `dashboard ${menu_class}`


    return (
      <div>
            {this.funTopMenu()}
            <div className="principal">
                <HashRouter>
                    <Desplegable />
                    <Pantalla />
                    <DesplegableMail />
                    <DesplegableCampana />
                    <DesplegableSupervisor />
                 
                    <Footer />
                
                </HashRouter>
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



export default connect(mapStateToProps, mapDispatchToProps)(ToRoot);


