import React, { Component } from "react";
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import * as colores from '../../../constants/coloresConstants'

import Rodrigo from '../../../images/ImagenesKam/Rodrigo.jpg'
import Daniela from '../../../images/ImagenesKam/Daniela.jpg'


import {TouchableOpacity, Text, View, StyleSheet, Button} from 'react-native-web'

import Botom from './BotonIr'
import { FaBold } from "react-icons/fa";

//import "../css/index.css";




class Campana extends Component {

    funCambiaDesplegable(){
        const {tofunDesplegable}= this.props
        tofunDesplegable('')
       }

       funIrPagina(){
  
        
         
       }
    

  render() {
    const {desplegable} = this.props;
    
    let top_menu_class = `desplegableCampana ${desplegable}`
    
    return (
      
      
      <div  className={top_menu_class} >
         <View style={styles.header}>
                  <TouchableOpacity style={styles.touch_minimize} onPress={()=>{this.funCambiaDesplegable()}} >
                      <IoIosArrowDown className='icon_minimize' /> 
                </TouchableOpacity>
                <IoIosNotifications className='icon_menu_grande' />
                <Text style={styles.text}>Alertas</Text> 
        </View>
              <View style={styles.container}>
         
           
              
              <View style={styles.view_global}>
              
              <View style={styles.view_global_row}>
                    
                    <View style={styles.view_global_izq}>
                    <img style={{width: 50, height: 50, borderRadius: 100}} src={Daniela} />
                    </View>
                    <View style={styles.view_global_der}>
                    <View style={styles.view_global_der_titulo}>

                    <Text style={styles.txt_subtitle}>Daniela Rioseco</Text> 
                    </View>
                    <View style={styles.view_detalle_info}>   
                    <Text style={styles.text_pasivo_alerta}>3º semana bajo el </Text> 
                      <Text style={styles.text_pasivo_alerta}>80% Sell-Out </Text> 
                  
                       
                       
                       
                   </View>
                    <View style={styles.view_global_der_subtitulo}>
                    <Text style={styles.text_pasivo_indicador}>74%</Text> 
    
                    </View>
                    
                    </View>
              
             </View>  
     
                <Button color={colores.COLOR_PRIMARIO_CLARO} title={"ENVIAR MENSAJE"} ></Button> 
                  
              </View>
              <View style={styles.view_global}>
              
              <View style={styles.view_global_row}>
                    
                    <View style={styles.view_global_izq}>
                    <img style={{width: 50, height: 50, borderRadius: 100}} src={Rodrigo} />
                    </View>
                    <View style={styles.view_global_der}>
                    <View style={styles.view_global_der_titulo}>
                    <Text style={styles.txt_subtitle}>Rodrigo Arancibia</Text> 
                    </View>
                    <View style={styles.view_detalle_info}>   
             <Text style={styles.text_pasivo_alerta}>2ª semana bajo el</Text> 
             <Text style={styles.text_pasivo_alerta}>50% Tareas</Text> 
             
                       
                       
                   </View>
                    <View style={styles.view_global_der_subtitulo}>
                    <Text style={styles.text_pasivo_indicador}>28%</Text> 
    
                    </View>
                    
                    </View>
              
             </View>  
  
                <Button color={colores.COLOR_PRIMARIO_CLARO} title={"ENVIAR MENSAJE"} ></Button> 
                  
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
    
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(Campana);
    
  
    const styles = StyleSheet.create({
     
  container: {
    
    backgroundColor: colores.COLOR_WHITE,
 
    alignItems:  'center',
    flexDirection: 'row',
    
  },
  

  header: {
    
 
    alignItems:  'center',
  
    
  },

  touch_minimize: {
    flex: 1,
    paddingHorizontal:50 ,
  },
  
      menu: {
        flex: 1,
        flexDirection: 'row'
    
      },
      menu_icon: {
        flex: 1
      },
      text: {
        padding: 5,
        fontSize: 16,
        color: colores.COLOR_QUINTENARIO
      },
      text_oscuro: {
        padding: 5,
        fontSize: 16,
        color: colores.COLOR_QUINTENARIO
      },
      text_activo: {
        padding: 1,
        fontSize: 14,
        color: colores.COLOR_PRIMARIO
      },
      text_pasivo: {
        padding: 5,
        fontSize: 16,
        color: colores.COLOR_SECUNDARIO
      },
      text_pasivo_alerta: {
        padding: 2,
        fontSize: 12,
        color: colores.COLOR_SECUNDARIO
      },
      text_pasivo_title: {
        padding: 5,
        fontSize: 20,
        color: colores.COLOR_SECUNDARIO
      },
      txt_title: {
        padding: 5,
        fontSize: 25,
        color: colores.COLOR_QUINTENARIO
      },
      txt_subtitle: {
        padding: 5,
        fontSize: 16,
     
        alignItems:  'center',
        color: colores.COLOR_QUINTENARIO
      },
      view_usuario: {
        flex: 1,
     
        alignItems:  'center',
        flexDirection: 'row'
    
      },
      view_detalle: {
        flex: 3,
      },
      view_detalle_info: {
        flex: 1,
        margin: 5,
        
      },
  
      view_global: {
        
        marginTop:2,
        backgroundColor: colores.COLOR_WHITE,
        height: '100%',
        padding: 5,
        flexDirection: 'column',
        
      },
      view_global_row: {
        

        flexDirection: 'column',
        
      },
      view_global_detalle: {
        
        flexDirection: 'row',
        
      },

      view_global_izq: {
        flex: 0.5, 
        
     
        alignItems:  'center',
      },
      view_global_der: {
     
        alignItems:  'center',
        flex: 2
      },
      view_global_der_subtitulo: {
        padding: 5
      },
      view_global_der_titulo: {},
      text_pasivo_indicador: {
        fontWeight: 'bold',
        padding: 3,
        fontSize: 25,
        color: colores.COLOR_SECUNDARIO

      }

    
    });
    
  
  