import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';

import { Carousel } from "react-responsive-carousel";

import ParticleAnimation from 'react-particle-animation'


import fondo from '../images/carousel/fondo.png';
import escena1 from '../images/carousel/escena 1.png';
import escena2 from '../images/carousel/escena 2.png';
import escena3 from '../images/carousel/escena 3.png';
import escena4 from '../images/carousel/escena 4.png';
import escena5 from '../images/carousel/escena 5.png';
import escena6 from '../images/carousel/escena 6.png';
import escena7 from '../images/carousel/escena 7.png';
import escena8 from '../images/carousel/escena 8.png';
import moletar from '../images/carousel/molestar.png';
import moletar2 from '../images/carousel/molestar2.png';
import moletar3 from '../images/carousel/molestar3.png';

import "react-responsive-carousel/lib/styles/carousel.min.css";



import PromoCard0 from '../components/promocion/promoComponet0'
import {View,  Dimensions, StyleSheet, TouchableOpacity, Text} from 'react-native-web';

import {styles1} from '../components/promocion/StyleComponents'
import {styles2} from '../components/promocion/StyleComponents2'

class Promocion extends Component {

  state = {
    tarjeta1: true,
    tarjeta2: false,
    tarjeta3: false,
    estado: ''
    
  }




  funStyles(){
    if ( Dimensions.get('window').width > 600){
     return(
      promstyles1.container
     )
    }
    else
      {
        return(
          promstyles2.container
        )
        }
  }


  funCard1(){
      this.setState({
        tarjeta1: true,
        tarjeta2: false,
        tarjeta3: false,
      })

  }
  funCard2(){
    this.setState({
      tarjeta1: false,
      tarjeta2: true,
      tarjeta3: false,
    })

}

funCard3(){
  this.setState({
    tarjeta1: false,
    tarjeta2: false,
    tarjeta3: true,
  })

}

funStyles(valor)
{
  if(valor){
    return(styles1)
  }
  else{
    return(styles2)
  }
}
  

  render() {


    const {visible } = this.props;
    const altura = Dimensions.get('window').height
    return (
      <div className="principal">
        
        <View style={this.funStyles()}>
        <View style={promstyles1.carrousel}>

<Text> ancho { Dimensions.get('window').width} </Text>
<Text> alto {altura} </Text>
 
 
     <Carousel
      height= {altura}
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
      className="presentation-mode">

<div  class="div_carrousel" >
            <img src={escena1}  />
            <img src={escena1} class="div_carrousel_principal" /> 
            <img src={moletar2} class="div_molestar2"   />
            <img src={moletar} class="div_molestar"   />
            
           
                    <div  class="div_carrousel_fondo" >
                       <img src={fondo}   />
                    </div>
            </div>

<div  class="div_carrousel" >
            <img src={escena2}  />
            <img src={escena2} class="div_carrousel_principal" /> 
            <img src={moletar2} class="div_molestar2"   />
            <img src={moletar} class="div_molestar"   />
            
           
                    <div  class="div_carrousel_fondo" >
                       <img src={fondo}   />
                    </div>
            </div>

          

            <div  class="div_carrousel" >
            <img src={escena3} class="div_desaparecer"  />
            <img src={escena3} class="div_carrousel_principal" /> 
            <img src={moletar2} class="div_molestar2"   />
            <img src={moletar} class="div_molestar"   />
            
           
                    <div  class="div_carrousel_fondo" >
                       <img src={fondo}   />
                    </div>
            </div>


            <div  class="div_carrousel" >
            <img src={escena4} width="10px" />
            <img src={escena4} class="div_carrousel_principal" /> 
            <img src={moletar2} class="div_molestar2"   />
            <img src={moletar} class="div_molestar"   />
            
           
                    <div  class="div_carrousel_fondo" >
                       <img src={fondo}   />
                    </div>
            </div>



            <div  class="div_carrousel" >
            <img src={escena5}  />
            <img src={escena5} class="div_carrousel_principal" /> 
            <img src={moletar2} class="div_molestar2"   />
            <img src={moletar} class="div_molestar"   />
            
           
                    <div  class="div_carrousel_fondo" >
                       <img src={fondo}   />
                    </div>
            </div>


            <div  class="div_carrousel" >
            <img src={escena6}  />
            <img src={escena6} class="div_carrousel_principal" /> 
            <img src={moletar2} class="div_molestar2"   />
            <img src={moletar} class="div_molestar"   />
            
           
                    <div  class="div_carrousel_fondo" >
                       <img src={fondo}   />
                    </div>
            </div>


            <div  class="div_carrousel" >
            <img src={escena7}  />
            <img src={escena7} class="div_carrousel_principal" /> 
            <img src={moletar2} class="div_molestar2"   />
            <img src={moletar} class="div_molestar"   />
            
           
                    <div  class="div_carrousel_fondo" >
                       <img src={fondo}   />
                    </div>
            </div>


            <div  class="div_carrousel" >
            <img src={escena8}  />
            <img src={escena8} class="div_carrousel_principal" /> 
            <img src={moletar2} class="div_molestar2"   />
            <img src={moletar} class="div_molestar"   />
            
           
                    <div  class="div_carrousel_fondo" >
                       <img src={fondo}   />
                    </div>
            </div>


            
             





</Carousel>


     
              
   
        </View>
    

        </View>
                

      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    ...state,
    visible: state.control.visible,
   controlestado: state.control.estado,
  calidadestado: state.calidad.estado

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



export default connect(mapStateToProps, mapDispatchToProps)(Promocion);




const promstyles1 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'row'

  },
  carrousel: {
  
  marginLeft: 200,

  }
});

const promstyles2 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
