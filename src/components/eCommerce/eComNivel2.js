import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import {  IoMdArrowDroprightCircle, } from "react-icons/io";
import { MdDeleteSweep } from "react-icons/md";
import * as constants from '../publica/constants'


 
class eComN2 extends Component {

  componentDidMount(){
    const {} = this.props;

  this.funCargaPlataforma()

  }



async funCargaPlataforma(){
  const {data_sala, id_profile, PlataformaOK} = this.props;

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3009/post_intranet_plataforma';

let body_data = JSON.stringify({
  "id_usuario" : id_profile,
  "id_sala" : data_sala.id_sala
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
          console.log("guardando Plataforma" + JSON.stringify(json))
          PlataformaOK(json)
        });
        
      } catch (e) {
        console.log(e.message)
  
      }  

}

funTouchableNivel1(item){
  const { history, funGuardaPlataforma,dataPlataforma,data_sala} = this.props;
  
  funGuardaPlataforma(item)

  history.push('/eComNivel3')

}

async funApiDelete(id_plataforma, id_sala ,id_profile){

  const {funGuardaMensaje} = this.props;

 const url = 'http://api.gdsnet.com:3009/post_intranet_ecomerce_delete';
 
 let body_data = JSON.stringify({
   "id_plataforma" : id_plataforma,
   "id_sala" : id_sala,
   "id_profile" : id_profile
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
           console.log("guardando datos" + JSON.stringify(json.mensaje))
           funGuardaMensaje(JSON.stringify(json.mensaje))
         });
         
       } catch (e) {
         console.log(e.message)
   
       }  

}

async funDelete(item){

  const {data_sala, mensaje ,id_profile} = this.props;

  if (window.confirm('¿Esta seguro de ELIMINAR esta medicion? ' 
                     +' Plataforma: ' +item.desc_plataforma 
                     +' Sala: ' +data_sala.desc_sala)) 
  {   
    var person = prompt("Ingrese la Clave", '');
    if (person == 'Operacion1') {

    await this.funApiDelete(item.id_plataforma, data_sala.id_sala ,id_profile);

    await this.funCargaPlataforma()

    window.alert(mensaje)
    } 
    else
    {
      window.alert('Contraseña incorrecta.')
    }
  }
  else    
   { 

  }


}


  mostrarResultado = () => {
    const {data_sala, dataPlataforma} = this.props;
  try {
  
  let algo = dataPlataforma.map((fila,i) => {
  
  return(  
  <tr className="regPauta" key={i}>    
  
  
                <th scope="row" key={i}>{i}</th>
                <td>{fila.estado}</td>
                <td>{fila.id_plataforma}</td>
                <td>{fila.desc_plataforma}</td>
                <td>{data_sala.desc_sala}</td>
                <td>
                    <View  style={styles.view_tochable}> 
                      <View  style={styles.view_tochable}> 
                          <TouchableOpacity onClick={()=> {this.funTouchableNivel1(fila)}}  >
                              <IoMdArrowDroprightCircle size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_BLANCO}/>
                          </TouchableOpacity>
                        </View>
                    </View>
               </td>
               <td>
                    <View  style={styles.view_tochable}> 
                      <View  style={styles.view_tochable}> 
                          <TouchableOpacity onClick={()=> {this.funDelete(fila)}}  >
                              <MdDeleteSweep size={constants.SIZE_LETRA_XXXXX_LARGE} color={constants.COLOR_BLANCO}/>
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
    const {data_sala} = this.props;

    console.log(data_sala)
    return (
      <div className ='tabla'>
      <table id="TablaClick" className="TablaPauta table table-hover">
               <thead className="theadPauta">
                   <tr className="bg-primary">
                       <th  scope="col">#</th>
                       <th scope="col">ESTADO</th>
                       <th scope="col">ID PLATAFORMA</th>
                       <th scope="col">DESC PLATAFORMA</th>
                       <th scope="col">DESCRIPCIÓN SALA</th>
                       <th scope="col">SELECCIÓN</th>   
                       <th scope="col">ELIMINAR</th>   
                   </tr>
               </thead>
               <tbody>
                       {this.mostrarResultado()}
                       
               </tbody>
           </table>

       


           </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    data_sala: state.eCom.data_sala,
    id_profile: state.eCom.id_profile,
    dataPlataforma: state.eCom.dataPlataforma,
    mensaje: state.eCom.mensaje,

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



export default connect(mapStateToProps, mapDispatchToProps)(eComN2);



const styles = StyleSheet.create({

  
  icon: {
    alignItem: 'center',
    size: constants.SIZE_LETRA_XXXXX_LARGE,

    },
  view_tochable: {padding: 3, alignItem: 'center', alignSelf: 'center'},
  view_text: {padding: 100, alignItem: 'center', alignSelf: 'center'},
  
  text_titulo: {fontSize: constants.SIZE_LETRA_XXXXX_LARGE, color: constants.COLOR_GRIS_D, },
  text_informacion: {fontSize: constants.SIZE_LETRA_LARGE, color: constants.COLOR_GRIS_D, },

})