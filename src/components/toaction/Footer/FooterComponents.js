import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native-web'

import * as colores from '../../../constants/coloresConstants'

import toggleAnimation19 from  '../../../lottie/images/download-w24-h24.json'

import LottieHoverPress from '../../../lottie/components/LottieHoverPress'

import logo from '../../../images/logogds2020_03blanco.svg';
import styled from "styled-components";


class FooterComponents extends Component {

constructor(props){

  super(props);
  this.state={
      mensaje:'Hola Mundo',
      variable : '',
      menu_class: 'clicked',
      prevScrollpos: window.pageYOffset,
      visible: true
  }
}


funCambiaEstado(){
 const {menu, tofunMenu}= this.props
 if (menu) {
  tofunMenu(menu, 'clicked')
} else {
  tofunMenu(menu, '')
}
}
funCambiaDesplegable(valor){
  const {desplegable, tofunDesplegable}= this.props
 
  if (valor==desplegable){
    tofunDesplegable('')
  }
  else {
    tofunDesplegable(valor)
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


 funNull(){

 }
      


  render() {

    const {titulo} = this.props;
    return (
      <Transition>
      <StyledNavbar className={this.state.visible ?"active" : "hidden"}>
      
      

   

<View style={styles.menu_icon}>
     
</View>


<View style={styles.view_title}>
      
      <img src={logo} alt="LogoFooter" className={"logo_footer"} />


</View>

<View style={styles.view_menu_icon_derecha}>

<View style={styles.view_icon}></View>
<View style={styles.view_icon}></View>
<View style={styles.view_icon}></View>
<View style={styles.view_lottie}>
  <LottieHoverPress
                icon={toggleAnimation19}
                funPress={()=>this.funNull()}
                width={80}
                />
    </View>
                
            


     
         
</View>






     
   
        
      
        </StyledNavbar>
        </Transition>
    );
  }
}

const StyledNavbar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: linear-gradient(to left , #231f20, #24727a);
  z-index: 1000;
  a {
    margin-right: 1rem;
    font-weight: normal;
  }
  .brand {
    font-style: italic;
    margin-left: 1rem;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }`;

  const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 500ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 500ms ease-out;
    transform: translate( 0, 100%);
  }
`;


function mapStateToProps(state){
  return{
    ...state,        
    titulo: state.to.titulo,
    menu: state.to.menu,
    desplegable: state.to.desplegable


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



export default connect(mapStateToProps, mapDispatchToProps)(FooterComponents);


const styles = StyleSheet.create({
   
  menu: {
    flexDirection: 'row'
  },
  menu_icon: {
    flex: 1,

  },
  menu_icon_icon: {
    flex: 1,
    alignItems: 'center',
    textAlign:'center',
    alignSelf: 'flex-start',
    textAlignVertical: 'center',
  },
  view_menu_icon_derecha: {
 
    flex: 1,
    flexDirection: 'row',
    textAlign:  'center',
    alignItems:  'center',
    textAlignVertical: 'center',

  },
  title: {
    color: colores.COLOR_WHITE,
    fontSize: 30,
    padding:5,
  },
  view_title:{
    alignItems: 'center',
    textAlign:'center',

    
  },

  view_icon: {
    flex: 1,
      
      
  },
  view_lottie: {
    flex: 1,
    padding: 5
      
      
  },
  
  

});
