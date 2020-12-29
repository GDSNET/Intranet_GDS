import React, { Component } from "react";
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import { IoIosArrowDown, IoIosMailUnread } from "react-icons/io";
import * as colores from '../../../constants/coloresConstants'

import ChartDonuts from '../../charts/ChartDonuts'




import {TouchableOpacity, Text, View, StyleSheet, Button} from 'react-native-web'

import Pamela from '../../../images/ImagenesKam/Pamela.jpg'

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
    
    let top_menu_class = `desplegable ${desplegable}`
    
    return (
      
      
      <div  className={top_menu_class} >
         <View style={styles.header}>
                  <TouchableOpacity style={styles.touch_minimize} onPress={()=>{this.funCambiaDesplegable()}} >
                      <IoIosArrowDown className='icon_minimize' /> 
                </TouchableOpacity>
                <img style={{width: 60, height: 60, borderRadius: 100}}
                         src={Pamela} />
                <Text style={styles.text}>Pamela Henriquez</Text> 
                <Text style={styles.text_subtext}>Gerente de Ventas</Text> 
        </View>
              <View style={styles.container}>
         
              <View style={styles.container_abajo}>
              
              <View style={styles.view_detalle}>
              <View style={styles.view_detalle_info}>   
                       <Text style={styles.text_pasivo}>Metas</Text> 
                  </View>

                  <View style={styles.view_detalle_info}>   
                  <View style={styles.v_cont}>
              
                 
                    <View style={styles.v_desc}>
                      <Text style={styles.text_activo}>Global </Text>
                    </View>

                    <View style={styles.v_logo}>
                      <View style={styles.view_dount}><ChartDonuts indicador={76} /></View>
                    </View>


                  </View>
                      <View style={styles.v_cont}>
              
                     
                        <View style={styles.v_desc}>
                          <Text style={styles.text_pasivo}>Global</Text>
                          <Text style={styles.text_pasivo}>Año Anterior </Text>
                        </View>

                        <View style={styles.v_logo}>
                           <View style={styles.view_dount}><ChartDonuts indicador={82} /></View>
                        </View>
                      </View>
  
                  </View>
                 
              
              <View style={styles.view_global}>
              
              <View style={styles.view_global_row}>
                <View style={styles.view_global_izq}>
                <IoIosMailUnread className='icon_menu_grande' />
                </View>
                <View style={styles.view_global_der}>
      
                <View style={styles.view_global_der_subtitulo}>
                <Text style={styles.text_pasivo_indicador}>3 Mensajes</Text> 
                
                </View>
                
                </View>
              
                </View>  
                <Button color={colores.COLOR_PRIMARIO_CLARO} title={"Ver Mensajes"} ></Button> 
                  
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
    
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(Campana);
    
  
    const styles = StyleSheet.create({
     
  container: {
    marginTop:5,
    backgroundColor: colores.COLOR_WHITE,
    height: '100%',
    textAlign:  'center',
    alignItems:  'center',
    
    
  },
  
  container_abajo: {
    borderRadius: 30,
    marginTop:20,
    height: '100%',
    flexDirection: 'row',
    textAlign:  'center',
    alignItems:  'center',
    
  },
  view_dount: {
    width: 40,
    height: 40,
  },
  header: {
    
    textAlign:  'center',
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
        color: colores.COLOR_WHITE
      },
      text_oscuro: {
        padding: 5,
        fontSize: 16,
        color: colores.COLOR_QUINTENARIO
      },
      text_activo: {
        padding: 5,
        fontSize: 16,
        color: colores.COLOR_PRIMARIO
      },
      text_pasivo: {
        padding: 5,
        fontSize: 16,
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
        color: colores.COLOR_WHITE
      },
      txt_subtitle: {
        padding: 5,
        fontSize: 16,
        textAlign:  'center',
        alignItems:  'center',
        color: colores.COLOR_WHITE
      },
      text_subtext: {
        fontSize: 12,
        textAlign:  'center',
        alignItems:  'center',
        color: colores.COLOR_WHITE
      },
      view_usuario: {
        flex: 1,
        textAlign:  'center',
        alignItems:  'center',
  
    
      },
      view_detalle: {
        flex: 3,
      },
      view_detalle_info: {
        textAlign:  'center',
        alignItems:  'center',
  
        
      },
  
      view_global: {
        
        marginTop:20,
        backgroundColor: colores.COLOR_QUINTENARIO,
        height: '100%',
        padding: 20,
        flexDirection: 'column',
        
      },
      view_global_row: {
        

        flexDirection: 'row',
        
      },
      view_global_detalle: {
        
        flexDirection: 'row',
        
      },

      view_global_izq: {
        flex: 1, 
        paddingHorizontal: 5
      },
      view_global_der: {
        textAlign:  'center',
        alignItems:  'center',
        flex: 3
      },
      view_global_der_subtitulo: {
        padding: 20
      },
      view_global_der_titulo: {},
      text_pasivo_indicador: {
        fontWeight: 'bold',
        padding: 5,
        fontSize: 22,
        color: colores.COLOR_SECUNDARIO

      },
      v_cont:{
        width: '100%',
        padding:10,
        flexDirection: 'row',
        alignItems:  'center',
        justifyContent: 'center',
      },

      v_desc:{
        flex:2,
        alignItems:  'center',
        justifyContent: 'center',

      },
      v_logo:{
        flex: 1,
        alignItems:  'center',
        justifyContent: 'center',

      }

    
    });
    
  
  