import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import { MdDeleteSweep } from "react-icons/md";
import { IoIosRefreshCircle, IoMdCreate, } from "react-icons/io";
import GoBack from '../publica/ButtonGoBack';
import CliPicker from '../calidad/CalPickerClientesAPP';
import PickerItem from './CalPickerComponents'; 

class AccionesN1 extends Component {

  componentDidMount(){

    this.funApiCliente()
    this.funApiSeamana()
    this.funCargaSelect()
    
  }
 
async funCargaSelect(){
  const { funGuardaAcciones,cliente_app,semana} = this.props;

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3009/post_intranet_view_acciones';

let body_data = JSON.stringify({
  "id_cliente": cliente_app,
  "id_tie_semana": semana
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
          //console.log("guardando datos" + JSON.stringify(json))
          funGuardaAcciones(json)
        });
        
      } catch (e) {
        console.log(e.message)
  
      }  

}

async funApiSeamana(){
  const {funCalGuardaDataSemana} = this.props;
  
//  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'http://api.gdsnet.com:3005/post_api_semana';
  
     const config =  {
       method: 'POST',
        headers: {
        "Content-Type": "application/json",
        },
   
      }

      

  await  fetch(url,config)
          .then((response) => {
           return response.json()})
          .then((json) => {
            console.log("guardando datos" + JSON.stringify(json))
            funCalGuardaDataSemana(json.semana)
          });
  
  }

  async funApiCliente(){
    const {funGuardaDataClienteApp} = this.props;
    
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://api.gdsnet.com:3009/post_select_from';

    let body_data = JSON.stringify({
      "tabla" : 'app_cfg_cliente'
      })
    
        const config =  {
          method: 'POST',
          body: body_data,
          headers: {
          "Content-Type": "application/json",
          },
        }                 
    
    await  fetch(url, config)
            .then((response) => {
             return response.json()})
            .then((json) => {
              console.log("guardando datos" + JSON.stringify(json))
              funGuardaDataClienteApp(json)
            });
    
    }

mostrarResultado = () => {
  const {data_acciones} = this.props;
try {

let algo = data_acciones.map((fila,i) => {

  
return(  
<tr className="regPauta" key={i}>    


              <th scope="row" key={i}>{i}</th>
              <td>{fila.desc_cliente}</td>
              <td>{fila.id_usuario}</td>
              <td>{fila.nombre}</td>
              <td>{fila.apellido}</td>
              <td>{fila.fecha_objecion}</td>
              <td>{fila.id_sala}</td>
              <td>{fila.id_indicador}</td>
              <td>{fila.desc_indicador}</td>
              <td>{fila.id_sku}</td>
              <td>{fila.desc_type}</td>
              <td>{fila.desc_objecion}</td>
              <td>{fila.fecha_envio}</td>
              <td>{fila.latitude}</td>
              <td>{fila.longitude}</td>
             
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

funTouchable(){
  this.funCargaSelect()
  this.mostrarResultado()
}
     
  render() {
    const {estado, data_acciones} = this.props;
    
    return (
     <div>
      <View style={styles.styles_view_principal}>
       <PickerItem/> 
      <CliPicker></CliPicker>

      <TouchableOpacity onClick={()=> {this.funTouchable()}}>
                  <IoIosRefreshCircle className ='style_image_ir'/>
      </TouchableOpacity> 

      </View>
            <div className ='tabla'>
               <table id="TablaClick" className="TablaPauta table table-hover">
                        <thead className="theadPauta">
                            <tr className="bg-primary">
                                <th  scope="col">#</th>
                                <th scope="col">DESC CLIENTE</th>
                                <th scope="col">ID USUARIO</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">APELLIDO</th>
                                <th scope="col">FECHA OBJECION</th>     
                                <th scope="col">ID SALA</th>                        
                                <th scope="col">ID INDICADOR</th>     
                                <th scope="col">DESC INDICADOR</th>     
                                <th scope="col">ID SKU</th>     
                                <th scope="col">DESC TYPE</th>     
                                <th scope="col">DESC OBJECION</th>    
                                <th scope="col">FECHA ENVIO</th>    
                                <th scope="col">LATITUDE</th>    
                                <th scope="col">LONGITUDE</th>     
                            </tr>
                        </thead>
                        <tbody>
                        {this.mostrarResultado()}
                        </tbody>
                    </table>
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
    data_acciones:state.calidad.data_acciones,
    cliente_app: state.calidad.cliente_app,
    semana: state.calidad.semana
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

export default connect(mapStateToProps, mapDispatchToProps)(AccionesN1);


const styles = StyleSheet.create({

  textinput: {
    
    padding: 20,
  },
  styles_view_principal: {
    flexDirection: 'row',
    flex: 1,
    alignItem: 'center',
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
  }
});
