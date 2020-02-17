import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TextInput,Button} from 'react-native-web';
import PickerExh from "../components/calidad/CalPickerExhComponents";
import PickerPromo from "../components/calidad/CalPickerPromoComponents";
import GoBack from '../components/control/ButtonGoBack';
import Botton from "../components/publica/buttonComponents";

class CalidadN3Update extends Component {
 

  componentDidMount(){
    const {sala, history,funCalGuardaExh,item,funCalGuardaPromo,funCalGuardaFrentes,funCalGuardaPrecio} = this.props;
    if (!sala){
      history.push('/Calidad')
    }

    this.funCargaExh();

    this.funCargaPromo();

    funCalGuardaExh(item.id_exh_tip_exhibicion)
    funCalGuardaPromo(item.id_prm_tip_promo)
    funCalGuardaFrentes(item.f_q_frentes_abs)
    funCalGuardaPrecio(item.f_precio)
    
  }

  async funCargaExh(){
  
    const {funCalGuardaDataExh} = this.props;

   // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'http://api.gdsnet.com:3005/api_calidad_select_exh';
    
      const config =  {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        },
      }  
  
  try {
    
  
  await  fetch(url, config)
          .then((response) => {
           return response.json()})
          .then((json) => {
            console.log("guardando datos" + JSON.stringify(json))
            funCalGuardaDataExh(json.exh)
          });
          
        } catch (e) {
          console.log(e.message)
    
        }  
  
  }


  async funCargaPromo(){
  
    const {funCalGuardaDataPromo} = this.props;

   // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'http://api.gdsnet.com:3005/api_calidad_select_promo';
    
      const config =  {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        }
      }  
  
  try {
    
  
  await  fetch(url, config)
          .then((response) => {
           return response.json()})
          .then((json) => {
            console.log("guardando datos" + JSON.stringify(json))
            funCalGuardaDataPromo(json.promo)
          });
          
        } catch (e) {
          console.log(e.message)
    
        }  
  
  }

  async funCargaEjecutaCambios(){
  
    const {funCalGuardaDataPromo} = this.props;

   // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'http://api.gdsnet.com:3005/api_calidad_update';
    
      const config =  {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        },
        body:{



        },
      }  
  
  try {
    
  
  await  fetch(url, config)
          .then((response) => {
           return response.json()})
          .then((json) => {
            console.log("guardando datos" + JSON.stringify(json))
            funCalGuardaDataPromo(json.promo)
          });
          
        } catch (e) {
          console.log(e.message)
    
        }  
  
  }

async funModifica(){

  const {funCalGuardaRespuesta,cliente,semana,sala,id_sku,exh,frentes,precio,promo,item} = this.props;

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'http://api.gdsnet.com:3005/api_calidad_update';

  let body_data = JSON.stringify({
    "cliente" : cliente,
    "semana" : semana,
    "sala" : sala,
    "sku" : id_sku,
    "exh" : item.id_exh_tip_exhibicion,
    "prom" : item.id_prm_tip_promo,
    "exhmod" : exh,
    "promod" : promo,
    "frentes" : frentes,
    "precio" : precio,
    "presencia" : 1,
    })

    console.log('IMPRIMIENDO BODY:' + body_data);
      
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
              console.log("guardando datos" + JSON.stringify(json))
              funCalGuardaRespuesta(json.data)
              return json.data
            });
            
          } catch (e) {
            console.log(e.message)
      
          }  

        

}

async funCargaSelect(){
  const { semana, cliente, sala, id_sku, funCalGuardaDataDetalle} = this.props;

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3005/api_calidad_select';

let body_data = JSON.stringify({
  "cliente" : cliente,
  "semana" : semana,
  "sala" : sala,
  "sku" : id_sku
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
          console.log("guardando datos" + JSON.stringify(json))
          funCalGuardaDataDetalle(json.b_detalle)
        });
        
      } catch (e) {
        console.log(e.message)
  
      }  

}



async funIr(){

  const {history} = this.props;

  await this.funModifica();
  await this.funCargaSelect();

 await history.push('/CalidadN1')

}

  render() {
    const {estado,item,frentes,precio,respuesta, funCalGuardaPrecio, funCalGuardaFrentes} = this.props;
    
    
    return (
      <div>
           <GoBack history={this.props.history} varIr={'CalidadN1'}/>
           <h1> Calidad Nivel 1 {JSON.stringify(respuesta)}</h1>
           <View style={styles.styles_view_principal}> 
    <View style={styles.styles_view_encabezado}> 
      <View style={styles.styles_view_titulo}> 
          <Text style={styles.style_text}>id_sala: {item.id_pto_pto_observ} </Text>
          <Text style={styles.style_text}>id_sku: {item.id_pro_sku} </Text>


          <Text style={styles.style_text}>id_exh_tip_exhibicion: {item.id_exh_tip_exhibicion} </Text>
          <Text style={styles.style_text}>desc_exh: {item.desc_exh} </Text>
          <Text style={styles.style_text}>id_prm_tip_promo: {item.id_prm_tip_promo} </Text>
          <Text style={styles.style_text}>desc_promo: {item.desc_promo} </Text>
          <Text style={styles.style_text}>f_q_frentes_abs: {item.f_q_frentes_abs} </Text>
          <Text style={styles.style_text}>f_precio: {item.f_precio} </Text>
          <Text style={styles.style_text}>f_q_presencia: {item.f_q_presencia} </Text>
      </View> 

      
    </View> 
      
    </View> 

<div className= 'div_left_30'>    
    <h2>Ingrese Frentes:</h2>
         <TextInput style={styles.textinput} 
         keyboardType='numeric'
         onChangeText={(text)=> funCalGuardaFrentes(text)}
         value={frentes}
        />
        <h2>Ingrese Precio:  </h2>
          <TextInput style={styles.textinput} 
          keyboardType='numeric'
          onChangeText={(text)=> funCalGuardaPrecio(text)}
          value={precio}
        />
</div>

<div className= 'div_left_30'>
<PickerExh />
<PickerPromo />
</div>

<div className= 'div_left_30'>

<Botton title='Modificar' funExecute={()=>this.funIr()} varible={''} />

</div>


        <div className={'style_status'}>
            <h5 className='style_status_text'>{estado}</h5>
        </div>

      </div>
        

    );
  }
}
 

function mapStateToProps(state){
  return{
    
    estado: state.calidad.estado,
    sala: state.calidad.sala,
    id_sku: state.calidad.id_sku,
    item:state.calidad.item,
    exh: state.calidad.exh,
    data_exh: state.calidad.data_exh,
    data_promo: state.calidad.data_promo,
    promo: state.calidad.promo,
    precio:state.calidad.precio,
    frentes:state.calidad.frentes,
    cliente:state.calidad.cliente,
    semana: state.calidad.semana,
    exh_old: state.calidad.exh_old,
    promo_old: state.calidad.promo_old,
    respuesta: state.calidad.respuesta,
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

export default connect(mapStateToProps, mapDispatchToProps)(CalidadN3Update);



const styles = StyleSheet.create({

  textinput: {
    
    padding: 20,
  },
  styles_view_principal: {
    flexDirection: 'row',
    flex: 1,
    alignItem: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    margin: 30

  },
  styles_view_encabezado: {


    padding: 20,
    flexDirection: 'column',
    flex: 5,
  },
  styles_view_titulo: {

    padding: 20,
    size: 30,
    flexDirection: 'row',
  },
  styles_view_subtitulo: {

    padding: 20,
    size: 20,
    flexDirection: 'row',
  },
  styles_view_update: {

    padding: 20,
    flex: 1,
    alignItem: 'center'
  },
  styles_view_delete: {

    padding: 20,
    flex: 1,
    alignItem: 'center'
  },
  style_text:{
    color: '#fff',
    fontSize: 15
  },
  style_text2:{
    color: '#fff',
    fontSize: 10
  },
  style_titulo:{
    fontSize: 20,
    color: '#fff'
  },
  textinput: {    
    padding: 20,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    placeholderTextColor: '#FFCAB8',
    fontSize: 16,
  },
});







