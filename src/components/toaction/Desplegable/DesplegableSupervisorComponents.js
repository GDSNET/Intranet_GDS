import React, { Component } from "react";
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import { IoIosArrowDown, IoMdContacts } from "react-icons/io";
import * as colores from '../../../constants/coloresConstants'


import {TouchableOpacity, Text, View, StyleSheet} from 'react-native-web'

import Botom from './BotonIr'

//import "../css/index.css";




class DesplegableSupervisor extends Component {

    funCambiaDesplegable(){
        const {tofunDesplegable}= this.props
        tofunDesplegable('')
       }

       funIrPagina(){
  
        
         
       }
    

  render() {
    const {desplegable} = this.props;
    
    let top_menu_class = `desplegableSupervisor ${desplegable}`
    
    return (
      
      
      <div  className={top_menu_class} >
         <View style={styles.header}>
                  <TouchableOpacity  style={styles.touch_minimize} onPress={()=>{this.funCambiaDesplegable()}} >
                      <IoIosArrowDown className='icon_minimize' /> 
                </TouchableOpacity>
        </View>
              <View style={styles.container}>
              <Text style={styles.txt_title}>Mi Equipo</Text> 
              <View style={styles.container_abajo}>
              
               
                     
        
              
                
             
              <View style={styles.view_detalle}>
              <View style={styles.view_usuario}>
              <IoMdContacts className='icon_menu_grande' />
              </View>
                  <View style={styles.view_detalle_info}>   
                       <Text style={styles.text}>Cadena: Jumbo </Text> 
                  </View>
                  <View style={styles.view_detalle_info}>   
                       <Text style={styles.text}>Supervisores: 8 </Text> 
                  </View>
                  <View style={styles.view_detalle_info}>
  
                  <View style={styles.view_global}>
                  <Text style={styles.txt_subtitle}> Cumplimiento de Metas </Text> 
                  <View style={styles.view_global_detalle}>
                        <View style={styles.view_detalle_info}>   
                            <Text style={styles.text}> Global: 88% </Text> 
                        </View>
                        <View style={styles.view_detalle_info}>   
                            <Text style={styles.text}> Meta: 80% </Text> 
                        </View>
                    </View>
                  </View>
                 
              </View>
           
                  
                 
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
    
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(DesplegableSupervisor);
    
  
    const styles = StyleSheet.create({
     
  container: {
    borderRadius: 30,
    marginTop:20,
    backgroundColor: colores.COLOR_PRIMARIO_CLARO,
    height: '100%',
 
    alignItems:  'center',
    
  },
  
  container_abajo: {
    borderRadius: 30,
    marginTop:20,
    height: '100%',
    flexDirection: 'row',
 
    alignItems:  'center',
    
  },
  header: {
    
 
    alignItems:  'center',
  
    
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
        color: colores.COLOR_WHITE
      },
      txt_title: {
        padding: 5,
        fontSize: 25,
        color: colores.COLOR_WHITE
      },
      txt_subtitle: {
        padding: 5,
        fontSize: 20,
        color: colores.COLOR_WHITE
      },
      view_usuario: {
        flex: 1,
     
        alignItems:  'center',
  
    
      },
      view_detalle: {
        flex: 3,
      },
      view_detalle_info: {
        flex: 1,
        
      },
      touch_minimize: {
        flex: 1,
        paddingHorizontal:50 ,
      },
  
      view_global: {
        borderRadius: 30,
        marginTop:20,
        backgroundColor: colores.COLOR_NARANJO,
        height: '100%',
        padding: 20,
        flexDirection: 'column',
        
      },
      view_global_detalle: {
        
        flexDirection: 'row',
        
      },
    
    });
    
  
  