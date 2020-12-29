import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native-web'

import * as colores from '../../../constants/coloresConstants'

import toggleAnimation19 from  '../../../lottie/images/download-w24-h24.json'

import LottieHoverPress from '../../../lottie/components/LottieHoverPress'

import logo from '../../../images/logogds2020_03blanco.svg';

class MenuTop extends Component {

constructor(props){

  super(props);
  this.state={
      mensaje:'Hola Mundo',
      variable : '',
      menu_class: 'clicked'
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
 

 funNull(){}
  
      


  render() {

    const {titulo} = this.props;
    return (
      
      <div  className={"dash_footer"}>
      
        <View style={[styles.menu, {background: 'linear-gradient(to right , #231f20, #454041)'}]} >

   

        <View style={styles.menu_icon}>
             
        </View>


        <View style={styles.view_title}>
              
              <img src={logo} alt="LogoFooter" className={"logo_footer"} />
        
  
        </View>
    
        <View style={styles.view_menu_icon_derecha}>

        <View style={styles.view_icon}></View>
        <View style={styles.view_icon}></View>
        <View style={styles.view_icon}></View>
        <View style={styles.view_icon}>
          <LottieHoverPress
                        icon={toggleAnimation19}
                        funPress={()=>this.funNull()}
                        />
            </View>
                        
                    
        

             
                 
        </View>


     
   
        </View>
      
</div>

    );
  }
}





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



export default connect(mapStateToProps, mapDispatchToProps)(MenuTop);


const styles = StyleSheet.create({
   
  menu: {

    flexDirection: 'row'
  },
  menu_icon: {
    flex: 1,

  },
  menu_icon_icon: {
    
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
  },
  view_title:{
    flex: 1,
    textAlign:  'center',
    alignItems:  'center',
    
  },

  view_icon: {
    flex: 1,
      paddingHorizontal: 5
      
  },
  

});
