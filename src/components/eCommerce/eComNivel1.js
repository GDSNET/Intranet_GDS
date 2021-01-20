import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import {  IoMdArrowDroprightCircle, IoIosAttach, IoIosCheckmarkCircle, IoIosAlert} from "react-icons/io";

import * as constants from '../publica/constants'

 
class eComN1 extends Component {

  componentDidMount(){
    const {} = this.props;
  
    this.mostrarResultado()
    const {id_profile, dataSala, funGetSala} = this.props;
    this.funCargaSalas(id_profile)
    
  }

  funTouchableNivel1(item){
    const {funGuardaSala, history} = this.props;
    
    funGuardaSala(item)

    console.log(history)

    history.push('/eComNivel2')
 
  

  }


async funCargaSalas(){
  const {id_profile,SalasOK} = this.props;

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3009/post_intranet_salas';

let body_data = JSON.stringify({
  "id_usuario" : id_profile
  })

    const config =  {
      method: 'POST',
      body: body_data,
      headers: {
      "Content-Type": "application/json",
      },
    }  

      
try {
  
await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando SALAS" + JSON.stringify(json))
          SalasOK(json)
        });
        
      } catch (e) {
        console.log(e.message)
  
      }  

}


  funCargaJson(){
    
    const {id_profile, dataSala, funGetSala} = this.props;
    
    return(<View>
      <Text>id_profile: {id_profile}</Text>
      <Text>data: {JSON.stringify(dataSala)}</Text>
    </View>)
    

  }

  mostrarResultado = () => {
    const {dataSala} = this.props;
  try {
  
  let algo = dataSala.map((fila,i) => {
  
    
  return(  
  <tr className="regPauta" key={i}>    
  
  
                <th scope="row" key={i}>{i}</th>
                <td>{fila.estado}</td>
                <td>{fila.id_sala}</td>
                <td>{fila.desc_sala}</td>
                <td>
                    <View  style={styles.view_tochable}> 
                      <View  style={styles.view_tochable}> 
                          <TouchableOpacity onClick={()=> {this.funTouchableNivel1(fila)}}  >
                              <IoMdArrowDroprightCircle size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_BLANCO}/>
                          </TouchableOpacity>
                        </View>
                    </View>
               </td>
               
    </tr>
  )
    
  
  });
  
  return algo
  
  } catch (error) {
  
  
  return(
    //Tabla sin contenido, porque Aun no se selecciona pauta a revisar
    <tr>
    </tr>
  )
  }
  }


  render() {
    const {} = this.props;
    return (
      <View  style={styles.container}> 
      <div className ='tabla'>


                 <View  style={styles.view_text}> 
                      <View  style={styles.view_info}> 

                      <View  style={styles.view_texto}> 
                               
                  <table id="TablaClick" className="TablaPauta table table-hover">
                          <thead className="theadPauta">
                              <tr className="bg-primary">
                                  <th  scope="col">#</th>
                                  <th scope="col">ESTADO</th>
                                  <th scope="col">ID SALA</th>
                                  <th scope="col">DESCRIPCIÓN SALA</th>
                                  <th scope="col">SELECCIÓN</th>   
                              </tr>
                          </thead>
                          <tbody>
                                  {this.mostrarResultado()}
                                  
                          </tbody>
                      </table>
                           </View>
                          
        
                         
                               <View  style={[styles.view_texto, {background: 'linear-gradient(to right , #231f20, #454041)'}]}> 
                               
                                          <View  style={styles.view_detalle}> 
                                          
                                              <Text style={styles.text_titulo}> 
                                              <IoIosAttach size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_PRIMARIO} />  Precauciones y Sugerencias
                                              </Text>
                                              
                                          </View>
                                      </View>

                                      <View  style={[styles.view_texto, {background: 'linear-gradient(to right , #231f20, #454041)'}]}> 
                                          <View  style={styles.view_icon}> 
                                              <IoIosCheckmarkCircle size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_PRIMARIO}/>
                                          </View>
                                          <View  style={styles.view_detalle}> 
                                              <Text style={styles.text_informacion}> 
                                                  Esta Planilla de ingreso tiene guardado de memoria persistente, ósea no se borra. podrás trabajar tranquilo debido a que no perderás datos.
                                              </Text>
                                              
                                          </View>
                                      </View>

                                      <View  style={[styles.view_texto, {background: 'linear-gradient(to right , #231f20, #454041)'}]}> 
                                          <View  style={styles.view_icon}> 
                                              <IoIosAlert size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_SECUNDARIO}/>
                                          </View>
                                          <View  style={styles.view_detalle}> 
                                             <Text style={styles.text_informacion}> 
                                              ¿En qué caso pierdo datos?
                                             </Text>
                                              <Text style={styles.text_informacion}> 
                                              cada vez que solicitas una planilla si no enviaste la anterior se perderá, debido que los datos de la planilla antigua se remplazaran por la nueva.
                                              </Text>
                                              
                                          </View>
                                      </View>

                                      <View  style={[styles.view_texto, {background: 'linear-gradient(to right , #231f20, #454041)'}]}> 
                                          <View  style={styles.view_icon}> 
                                              <IoIosAlert size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_SECUNDARIO}/>
                                          </View>
                                          <View  style={styles.view_detalle}> 
                                              <Text style={styles.text_informacion}> 
                                              en un explorador, no puedes llenar dos planillas en pestañas diferentes, debido a que los guardados se solaparan y perderán uno de los dos ingresos.
                                              </Text>
                                              
                                          </View>
                                      </View>

                                      <View  style={[styles.view_texto, {background: 'linear-gradient(to right , #231f20, #454041)'}]}> 
                                          <View  style={styles.view_icon}> 
                                              <IoIosAlert size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_SECUNDARIO}/>
                                          </View>
                                          <View  style={styles.view_detalle}> 
                                              <Text style={styles.text_informacion}> 
                                              el Boton de envío siempre esta visible, si envías y no has hecho nada, la planilla igual entrara a nuestros sistemas, ten cuidado y avisa, te podemos ayudar a borrar un ingreso falso.
                                              </Text>
                                              
                                          </View>
                                      </View>

                                      <View  style={[styles.view_texto, {background: 'linear-gradient(to right , #231f20, #454041)'}]}> 
                                          <View  style={styles.view_icon}> 
                                              <IoIosCheckmarkCircle size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_PRIMARIO}/>
                                          </View>
                                          <View  style={styles.view_detalle}> 
                                              <Text style={styles.text_informacion}> 
                                                realiza solo una planilla a la vez y envía cada vez que termines una planilla.
                                              </Text>
                                              
                                          </View>
                                      </View>

                                      <View  style={[styles.view_texto, {background: 'linear-gradient(to right , #231f20, #454041)'}]}> 
                                          <View  style={styles.view_icon}> 
                                              <IoIosCheckmarkCircle size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_PRIMARIO}/>
                                          </View>
                                          <View  style={styles.view_detalle}> 
                                              <Text style={styles.text_informacion}> 
                                                  y por ultimo, si envías y es exitoso, te enviara un mensaje OK y te dirigirá al Inicio, suerte.
                                              </Text>
                                              
                                          </View>
                                      </View>

     

                                      
                                  
                                      </View>

                                    







                          
                        
                    </View>
           </div>
           </View>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    id_profile: state.eCom.id_profile,
    dataSala: state.eCom.dataSala,

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



export default connect(mapStateToProps, mapDispatchToProps)(eComN1);


const styles = StyleSheet.create({

container: { padding: 2},
  icon: {
    alignItem: 'center',
    size: constants.SIZE_LETRA_XXXXX_LARGE,

    },
  view_tochable: {padding: 3, alignItem: 'center', alignSelf: 'center'},

  text_titulo: {fontSize: constants.SIZE_LETRA_XXXXX_LARGE, color: constants.COLOR_GRIS_G, },
  text_informacion: {fontSize: constants.SIZE_LETRA_X_LARGE, color: constants.COLOR_GRIS_G, fontStyle: 'italic', textAlign: 'left'},
  view_text: {paddingHorizontal: 100, marginHorizontal: 100},
  view_info: {},
  view_texto: {flex: 1, padding: 5, borderRadius: 5, margin: 5, flexDirection:'row'  },
  view_icon: {padding: 5},
  view_detalle: {padding: 5, flex: 1, flexWrap: 'wrap'},

})