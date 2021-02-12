import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native-web';
import * as funConect from '../../util/Funciones'

import ControlEcomerceSemana from './ControlEcomerceSemana'
import ControlEcomerceSalas from './ControlEcomerceSalas'
import ControlEcomerceCategoria from './ControlEcomerceCategoria'
import ControlEcomerceProductos from './ControlEcomerceProductos'
import ControlEcomercePlataforma from './ControlEcomercePlataforma'

import  * as constants from '../publica/constants'
import  * as fechas from '../publica/Fechas'
import {
  useJsonToCsv
} from 'react-json-csv';
const { saveAsCsv } = useJsonToCsv();


 
class ControlEcomerce extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 1,
      dataSemana: [],
      dataSala: [],
      dataPlataforma: [],
      dataCategorias: [],
      dataSkus: [],
      espere: false
      
   };
    this.funSalas = this.funSalas.bind(this)
    this.funCategorias = this.funCategorias.bind(this)
    this.funSkus= this.funSkus.bind(this)
    this.funReporte= this.funReporte.bind(this)
    this.funPlataforma= this.funPlataforma.bind(this)
    
    

  }


async componentDidMount(){

  this.setState({espere: true})
  window.scrollTo({top: 0, behavior: 'smooth'});

const parametros = {
  "reporte": "ecom-ctrl-semana",
  "parametros": ""
  
  }
 const url = 'http://api.gdsnet.com:3009/post_intranet_ecomerce_control';
 await funConect.ConexionParametros(url, parametros)
 .then((res) => 
 this.setState({
  dataSemana: res,
  espere: false
    })
 )

}


async funSalas(parametros){
  this.setState({espere: true})
  window.scrollTo({top: 0, behavior: 'smooth'});
   const url = 'http://api.gdsnet.com:3009/post_intranet_ecomerce_control';
   await funConect.ConexionParametros(url, parametros)
   .then((res) => 
   this.setState({
    dataSala: res,
    espere: false
      })
   )
  }
  
  async funPlataforma(parametros){
    this.setState({espere: true})
    window.scrollTo({top: 0, behavior: 'smooth'});
     const url = 'http://api.gdsnet.com:3009/post_intranet_ecomerce_control';
     await funConect.ConexionParametros(url, parametros)
     .then((res) => 
     this.setState({
      dataPlataforma: res,
      espere: false
        })
     )
    }

  async funCategorias(parametros){
    this.setState({espere: true})
    window.scrollTo({top: 0, behavior: 'smooth'});
    const url = 'http://api.gdsnet.com:3009/post_intranet_ecomerce_control';
    await funConect.ConexionParametros(url, parametros)
    .then((res) => 
    this.setState({
    dataCategorias: res,
    espere: false
       })
    )
   }

   async funSkus(parametros){
    this.setState({espere: true})
    window.scrollTo({top: 0, behavior: 'smooth'});
    const url = 'http://api.gdsnet.com:3009/post_intranet_ecomerce_control';
    await funConect.ConexionParametros(url, parametros)
    .then((res) => 
    this.setState({
    dataSkus: res,
    espere: false
       })
    )
   }

  

   funLoadPage(valor){

    if(valor){
      return(<Text style={styles.txtCargando}>Consultando...</Text>)
    }

  }

  async funReporte(parametros){
    this.setState({espere: true})
    const filename = 'gds-descarga' + fechas.fechaSQL2()
    let fieldsinicio = {}
    let fields = {}
    let data = []
    let separator = ';' 

    this.setState({espere: true})
    window.scrollTo({top: 0, behavior: 'smooth'});
    const url = 'http://api.gdsnet.com:3009/post_intranet_ecomerce_control';
    await funConect.ConexionParametros(url, parametros)
    .then((res) => {

    fieldsinicio = Object.keys(res[0])
    fieldsinicio.map((v)=>{
     fields[v]=v
    })

    data = res
    }
    )
    .then(()=> saveAsCsv({ data, fields, filename, separator }))
    .then(()=> this.setState({espere: false}))
  }
  
  



  render() {
    const {dataSemana, dataSala, dataPlataforma, dataCategorias, dataSkus, espere} = this.state;

   return(
     <View>


       <Text style={styles.titleEcomerce} >hola control e-commerce</Text>
       {this.funLoadPage(espere)}
       <ControlEcomerceProductos data={dataSkus}/> 
       <ControlEcomerceCategoria data={dataCategorias} funExecute={this.funSkus} funReporte={this.funReporte} /> 
       <ControlEcomercePlataforma data={dataPlataforma} funExecute={this.funCategorias}/>
       <ControlEcomerceSalas data={dataSala} funExecute={this.funPlataforma} />
       <ControlEcomerceSemana data={dataSemana} funExecute={this.funSalas}/>
       

       
     </View>
   )
}

}
 

function mapStateToProps(state){
  return{
    data_semana: state.control.data_semana,
    estado: state.control.estado,
    profile: state.control.profile,
    numero: state.control.numero,
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




export default connect(mapStateToProps, mapDispatchToProps)(ControlEcomerce);


const styles = StyleSheet.create({

  titleEcomerce: {
    padding: 10,

    alignItems: 'center',
    backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
    borderRadius: 100,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    placeholderTextColor: '#FFCAB8',
    fontSize: 40,
  },
  txtCargando: {
    padding: 10,
    alignItems: 'center',
    fontSize: 30,
    color: constants.COLOR_SECUNDARIO_CLARO,
  },
});
