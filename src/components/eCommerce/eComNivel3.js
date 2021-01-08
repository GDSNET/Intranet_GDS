import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import * as constants from "../publica/constants"
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

  funInicioPagina(){
    return(
    <TouchableOpacity  onClick={()=>this.funCargaPlataforma()}>
          <IoMdCreate style={styles.touchable}/>
          <Text>Solicitar Planilla</Text>
    </TouchableOpacity>
    )

  }


  componentDidMount(){


  }



  async funCargaPlataforma(){
    
    const {data_sala, id_profile, PlanillaOK, data_plataforma} = this.props;
    console.log("Solicitando planilla")
   
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
            console.log("guardando Planilla" + JSON.stringify(json))
            PlanillaOK(json)
          });
          
        } catch (e) {
          console.log(e.message)
    
        }  
  
  }


  mostrarResultado = () => {
    const {data_sala, dataPlanilla, funGuardaPresencia} = this.props;
  try {
  
  const planilla = dataPlanilla.map((fila,i) => {
  
  return(  
      <View style={styles.contenedor} key={i}>    
         <View style={styles.fila1} key={"fila1" + i}>    
                <Text style={styles.txt_titulos} >{i}</Text>
                <Text style={styles.txt_titulos}>{fila.id_sku_sap}</Text>
                <Text style={styles.txt_titulos}>{fila.desc_marca}</Text>
                <Text style={styles.txt_titulos}>{fila.desc_sku}</Text>
                <Text style={styles.txt_titulos}>{fila.imagen_sku}</Text>
         </View>
          <View style={styles.fila2} key={"fila2" + i}>                  
                      <View>
                         <Imagen  valor={fila.f_imagen} funExecute={this.funChange} />
                    </View>
                      <View>     
                        <Presencia valor={fila.presencia} funExecute={()=>funGuardaPresencia(fila.id_sku_sap, !fila.presencia)} />
                        <Stock valor={fila.f_stock} funExecute={this.funChange} />
                        <Descripcion valor={fila.f_descripcion} funExecute={this.funChange} />
                    </View>
                    <View> 
                        <PrecioUnitario valor={fila.f_precio_unitario} funExecute={this.funChange} />
                        <PrecioDescuento valor={fila.f_precio_descuento} funExecute={this.funChange} />
                        
                    </View>
                    <View> 
                        <Mecanica  valor={fila.f_mecanica} funExecute={this.funChange} />
                        <Alerta valor={fila.f_alerta_quiebre} funExecute={this.funChange} />
                    </View>
                            
                      <View> 
                          <TouchableOpacity  onClick={()=> {funGuardaPresencia(fila.id_sku_sap, true)}}>
                          <IoMdCreate style={styles.touchable}/>
                          </TouchableOpacity>
                      </View>
              </View>
               
    </View>
  )
    
  
  });
  
  return planilla
  
  } catch (error) {
  
  
  return(
    //Tabla sin contenido, porque Aun no se selecciona pauta a revisar
    <View>
    </View>
  )
  }
  }

 

  render() {
    const {data_sala, dataPlanilla, data_plataforma} = this.props;

    return (
      <View style={styles.planilla}>
        <Text>ID USUARIO:  {JSON.stringify(this.props.id_profile)}</Text>
        <Text>ID SALA:  {JSON.stringify(data_sala.id_sala)}</Text>
        <Text>ID plataforma  {JSON.stringify(data_plataforma.id_plataforma)}</Text>
        <Text>PLANILLA INGRESO {JSON.stringify(dataPlanilla)}</Text>
        <Text>PLANILLA INGRESO {Object.keys(dataPlanilla).length}</Text>
        
        {this.funInicioPagina()}
        
      
             <View style={styles.planilla}>
                  <View style={styles.planilla}>
                       <Text  scope="col">#</Text>
                       <Text scope="col">ID</Text>
                       <Text scope="col">MARCA</Text>
                       <Text scope="col">PRODUCTO</Text>
                       <Text scope="col">IMAGEN</Text>   
                       <Text scope="col">CARGA IMAGEN</Text>   
                       <Text scope="col">SI o NO</Text> 
                       <Text scope="col">PRECIO UNITARIO</Text>   

                   </View>
             
                   <View style={styles.planilla}>
                       {this.mostrarResultado()}
                    </View>

                </View>
          </View>
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
  contenedor: {  alignItem: 'center',},
 touchable: {
  alignItem: 'center',
  },
  fila1: {
    alignItem: 'center',
    flexDirection: "row"
    },
    fila2: {
      alignItem: 'center',
      flexDirection: "row"
      },
      planilla: {
        alignItem: 'center',
        },
    txt_titulos: {
      padding: 5,
      color: constants.COLOR_BLANCO
    }

})