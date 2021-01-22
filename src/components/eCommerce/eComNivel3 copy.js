import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import { MdDeleteSweep } from "react-icons/md";
import { IoIosAddCircle, IoMdCreate, } from "react-icons/io";

//VARIABLES
import Presencia from './variables/Presencia'
import Stock from './variables/Stock'
import Descripcion from './variables/Descripcion'
import PrecioUnitario from './variables/PrecioUnitario'
import PrecioDescuento from './variables/PrecioDescuento'
import Descuento from './variables/Descuento'
import Alerta from './variables/Alerta'
import Mecanica from './variables/Mecanica'
import Imagen from './variables/Imagen'


 
class eComN2 extends Component {

  componentDidMount(){
    const {} = this.props;
  this.funCargaPlataforma()

  }



async funCargaPlataforma(){
  const {data_sala, id_profile, PlanillaOK, data_plataforma} = this.props;

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3009/post_intranet_pauta';

let body_data = JSON.stringify({
  "id_usuario" : id_profile,
  "id_sala" : data_sala.id_sala,
  "id_plataforma" : data_plataforma.id_plataforma
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
          //console.log("guardando Plataforma" + JSON.stringify(json))
          PlanillaOK(json)
        });
        
      } catch (e) {
        console.log(e.message)
  
      }  

}

  mostrarResultado = () => {
    const {data_sala, dataPlanilla} = this.props;
  try {
  
  let algo = dataPlanilla.map((fila,i) => {
  
  return(  
  <tr className="regPauta" key={i}>    
                <th scope="row" key={i}>{i}</th>
                <td>{fila.id_sku_sap}</td>
                <td>{fila.desc_marca}</td>
                <td>{fila.desc_sku}</td>
                <td>{fila.imagen_sku}</td>
                
                <td>
              <Imagen  valor={fila.f_imagen} funExecute={this.funChange} />
              </td>
                <td>     
                  <Presencia valor={fila.presencias} funExecute={this.funChange} />
                  <Stock valor={fila.f_stock} funExecute={this.funChange} />
                  <Descripcion valor={fila.f_descripcion} funExecute={this.funChange} />
       
              </td>
              <td> 
              <PrecioUnitario valor={fila.f_precio_unitario} funExecute={this.funChange} />
      <PrecioDescuento valor={fila.f_precio_descuento} funExecute={this.funChange} />
      <Descuento valor={fila.presencia} funExecute={this.funChange} />
              </td>
              <td> 
                 <Mecanica  valor={fila.f_mecanica} funExecute={this.funChange} />
                <Alerta valor={fila.f_alerta_quiebre} funExecute={this.funChange} />
              </td>
                      
 
  

                
                <td> 
                  <TouchableOpacity  onClick={()=> {this.funTouchableNivel1(fila)}}>
                  <IoMdCreate style={styles.touchable}/>
                  </TouchableOpacity>
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
      <div className ='nada'>
        <Text>PLANILLA INGRESO {JSON.stringify(this.props.data_plataforma)}</Text>
        <Text>PLANILLA INGRESO {JSON.stringify(this.props.dataPlanilla)}</Text>
      <table id="TablaClick" className="TablaPauta table table-hover">
               <thead className="nada">
                   <tr className="nada">
                       <th  scope="col">#</th>
                       <th scope="col">ID</th>
                       <th scope="col">MARCA</th>
                       <th scope="col">PRODUCTO</th>
                       <th scope="col">IMAGEN</th>   
                       <th scope="col">CARGA IMAGEN</th>   
                       <th scope="col">SI o NO</th> 
                       <th scope="col">PRECIO UNITARIO</th>   

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
    dataPlanilla: state.eCom.dataPlanilla,
    data_plataforma:  state.eCom.data_plataforma,
    

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

 touchable: {
  alignItem: 'center',
  },


})