import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {View, Text,  StyleSheet, Dimensions} from 'react-native-web'
import * as colores from '../../../constants/coloresConstants'

import { MdPersonPin } from "react-icons/md";

import CardTitle from '../../../components/CardTitle/CardTitleComponents'
import CardTitleAmplioComponents from '../../../components/CardTitle/CardTitleMobile'

import CardHomeTipe1 from '../../../components/CardHome/CardHomeTipe1'
import CardHomeTipe2 from '../../../components/CardHome/CardHomeTipe2'
import CardHomeTipe3 from '../../../components/CardHome/CardHomeTipe3'
import CardHomeTipe4 from '../../../components/CardHome/CardHomeTipe4'

import CardHomeTipe2Loop from '../../../components/CardHome/CardHomeTipe2Loop'


import creditCard from '../../../lottie/home/7383-credit-card.json'
import box from '../../../lottie/home/5081-empty-box.json'
import shop from '../../../lottie/home/5238-isometric-shop.json'

import logo from '../../../images/titulos/TOPmobile.svg'

import {IoIosListBox,IoMdPeople } from "react-icons/io";

import {f_sellout,f_osa, f_promocion,f_tarea, funAtributo1Promocion, funAtributo1OOS, funAtributo1SellOut, funAtributo1Tarea} from  '../Data/Home/HomeData'

class Dash extends Component {
  constructor(props){
    super(props)
    this.state = {  
    }    
  }

  funStyles(){
    if ( Dimensions.get('window').width > 600){
     return(
       styles1.container
     )
    }
    else
      {
        return(
       styles2.container
        )
        }
  }

  funEnviar(){
    this.setState({ isToggled: !this.state.isToggled})
  }



  render() {

    const {titulo} = this.props;
    return (


      
        <View style={styles.container}>

        <div className="div_screen">
        
        <View style={this.funStyles()}>
          <View style={[styles.etiqueta, {background: 'linear-gradient(to right , #231f20, #454041)'}]} >
           <img src={logo} alt="Logo"  />
           </View>
        </View>
 

 
        <View style={this.funStyles()}>
        
        
          <CardTitle titulo={' RESUMEN TOTAL '} 
          subtitulo={'INDICADORES'} 
      
          color_fondo={colores.COLOR_QUINTENARIO} 
          color_texto={colores.COLOR_PRIMARIO_CLARO} 
          icon={<IoIosListBox className='icon_menu_mediano' /> }
          />
          </View>       
        
  


              
          <View style={this.funStyles()}>
          <View style={styles.contIzquierdo}>
          <CardHomeTipe1
              
              titulo={"EVOLUTIVO"}
              icon={creditCard}
              speed={1}
              />
          </View>   
          </View>  
          
           
          <View style={this.funStyles()}>
          <CardHomeTipe2Loop
              data={f_sellout()}
              titulo={"SELL OUT"}
              icon={creditCard}
              speed={1}
              height={100}
              />
            </View>  
            <View style={this.funStyles()}>
            <CardHomeTipe2Loop
              data={f_osa()}
              titulo={"OSA"}
              icon={box}
              speed={0.5}
              height={100}
              />
             </View>  
            <View style={this.funStyles()}>
              <CardHomeTipe2Loop
              data={f_promocion()}
              titulo={"PROMOCION"}
              icon={shop}
              speed={1}
              height={100}
              />   
                 </View>      
         

      
            <View style={this.funStyles()}>
          
          <CardTitle titulo={'RESUMEN RANKING '} 
          subtitulo={'KAM INDICADORES'} 
          
          color_fondo={colores.COLOR_QUINTENARIO} 
          color_texto={colores.COLOR_PRIMARIO_CLARO} 
          icon={<IoMdPeople className='icon_menu_mediano' /> }
          />
          </View>    
                
        
        <View style={this.funStyles()}>
        <View style={styles.contIzquierdo}>
       
        <CardHomeTipe3 
          data={f_tarea()}
          titulo={"TAREAS"}
          subtitulo={""}
          icon={<MdPersonPin color={colores.COLOR_PRIMARIO} size={40}/>}
        />
 </View> 
 </View>  
  <View style={this.funStyles()}>   
 <View style={styles.contDerecho}>
        <CardHomeTipe4
        data={f_sellout()}
        titulo={"SELL OUT"}
        subtitulo={"/ RANKING"}
        icon={<MdPersonPin color={colores.COLOR_PRIMARIO} size={40}/>}
        />
         </View>  
  <View style={this.funStyles()}>  
              <CardHomeTipe4
        data={f_osa()}
        titulo={"OSA"}
        subtitulo={"/ RANKING"}
        icon={<MdPersonPin color={colores.COLOR_PRIMARIO} size={40}/>}
        />
         </View>  
  <View style={this.funStyles()}>  
              <CardHomeTipe4
        data={f_promocion()}
        titulo={"PROMOCION"}
        subtitulo={"/ RANKING"}
        icon={<MdPersonPin color={colores.COLOR_PRIMARIO} size={40}/>}
        />
    </View>
</View>  



<View style={this.funStyles()}>
           <CardTitleAmplioComponents />
        </View>


        
      </div>
        </View>


    );
  }
}





function mapStateToProps(state){
  return{
    ...state,        
    titulo: state.to.titulo,


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



export default connect(mapStateToProps, mapDispatchToProps)(Dash);



const styles = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_PRIMARIO_OSCURO,
    padding: 10,
    height: '100%',
    marginTop: 40,
    
  },
  view_pequeño: {
    width: 200,
    height: 200,
    
  },
  contDerecho: {
    flex: 3,
    flexDirection: 'row',
  },
  contIzquierdo: {
flex: 2,

  },
  etiqueta: {
    
    
 
    alignItems:  'center',
    margin:10,
    borderRadius: 5,
    
  
  },
})


const styles1 = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_PRIMARIO_OSCURO,
    flex: 1,
    flexDirection: 'row'

  }
});

const styles2 = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_PRIMARIO_OSCURO,
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
