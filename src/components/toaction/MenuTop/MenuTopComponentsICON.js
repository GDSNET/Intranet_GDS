import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native-web'
import { IoIosmenudos, IoMdPerson, IoMdContacts, IoIosMail , IoIosNotifications} from "react-icons/io";
import * as colores from '../../../constants/coloresConstants'


import LottieOnPress from '../../../lottie/components/LottieOnPress'
import LottieHoverPress from '../../../lottie/components/LottieHoverPress'


import toggleAnimation from  '../../../lottie/images/menuwhithe.json'
import toggleNotificacion from  '../../../lottie/images/notification-w24-h24.json'
import toggleMensaje from '../../../lottie/images/mail-w32-h32.json'
import toggleCalendario from  '../../../lottie/images/calendar-w24-h24.json'
import toggleStar from  '../../../lottie/images/star-w24-h24.json'


class menudosTop extends Component {

constructor(props){

  super(props);
  this.state={
      mensaje:'Hola Mundo',
      variable : '',
      menudos_class: 'clicked'
  }
}


funCambiaEstado(){
 const {menudos, tofunmenudos}= this.props
 if (menudos) {
  tofunmenudos(menudos, 'clicked')
} else {
  tofunmenudos(menudos, '')
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
 


  
      


  render() {

    const {titulo} = this.props;
    return (
      
      
      
        <View style={styles.menudos}>

   

        <View style={styles.menudos_icon}>
        <View style={styles.menudos_icon_icon}>
                            
                            <LottieOnPress
                          icon={toggleAnimation}
                          width={40}
                          funPress={()=>this.funCambiaEstado()}

                        />
                         
                   
                         </View>               
        </View>


        <View style={styles.view_title}>
              <Text style={styles.title}>TO  {<span className='icon_action'>&#8743;</span>}CTION</Text>
        
  
        </View>
    
        <View style={styles.view_menudos_icon_derecha}>

        <View style={styles.view_icon}></View>
        <View style={styles.view_icon}></View>
        <View style={styles.view_icon}></View>
                        
                    
                <View style={styles.view_icon}>
                        <LottieHoverPress
                          icon={toggleNotificacion}
                          width={30}
                          funPress={()=>this.funCambiaDesplegable('despliegaCampana')}
                        />
                </View>

                    <View style={styles.view_icon}>
                          <LottieHoverPress
                          icon={toggleCalendario}
                          width={30}
                          funPress={()=>this.funCambiaDesplegable('despliega')}
                        />
                    </View>
                    <View style={styles.view_icon}>
             
                        <LottieHoverPress
                          icon={toggleStar}
                          width={30}
                          funPress={()=>this.funCambiaDesplegable('despliegaSupervisor')}
                        />
                    </View>
                  
                    <View style={styles.view_icon}>
           
                        <LottieHoverPress
                          icon={toggleMensaje}
                          width={30}
                          funPress={()=>this.funCambiaDesplegable('despliegaMail')}
                        />
                    </View>
        </View>


     
   
        </View>
      


    );
  }
}





function mapStateToProps(state){
  return{
    ...state,        
    titulo: state.to.titulo,
    menudos: state.to.menudos,
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



export default connect(mapStateToProps, mapDispatchToProps)(menudosTop);


const styles = StyleSheet.create({
   
  menudos: {

    flexDirection: 'row',
    flex: 1,
    marginTop: 100,
  },
  menudos_icon: {
    flex: 1,

  },
  menudos_icon_icon: {
    
    alignItems: 'center',
    textAlign:'center',
    alignSelf: 'flex-start',
    textAlignVertical: 'center',
  },
  view_menudos_icon_derecha: {
 
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
