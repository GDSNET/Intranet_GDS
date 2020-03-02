import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {Text, View, StyleSheet} from 'react-native-web'
import * as gds_function from './GdsFunction'
import ReadExcel from './ReadExcel/ExcelReader'
import GdsPicker from './GdsPicker'
import Button from './ComercialComponents/ComercialButton'

class Comercial extends Component {

  componentDidMount(){
    
    const {funCargaCli} = this.props;

    new Promise((resolve, reject) => {
      resolve(gds_function.funApiCargaCli())
  }).then(res=>{
    funCargaCli(res)
  })

  }

  funCargaPickerIndicador(){
    const {funCargaIndicador,sel_cliente} = this.props;

    new Promise((resolve, reject) => {
      resolve(gds_function.funApiCargaIndicador(sel_cliente))
    }).then(res=>{
    funCargaIndicador(res)
  }).then(res=>{
    this.funEsquemaCliente()
  })


  }

  funEsquemaCliente(){
    const {sel_cliente ,cliente ,funGuardaEsquema ,funGuardaServidor ,funGuardaBaseDatos} = this.props;

    console.log(cliente)
    
  cliente.map((v, indice) => {
     if(sel_cliente == v.desc){
       const esq = v.esquema
       funGuardaEsquema(esq)

       const bd = v.base_datos
       funGuardaBaseDatos(bd)

       const sv = v.server
       funGuardaServidor(sv)
     }
     })

  }

  render() {
const {cliente,funGuardaCli,sel_cliente,funGuardaIndicador,indicador,sel_indicador,esquema,res_fetch}=this.props

    return (
  
    <View style={styles.container}>
      <Text  style={styles.TextRespuesta} >{JSON.stringify(res_fetch)}</Text> 
              <View style={styles.StyleSelectorCli}>

                 <GdsPicker
                  data = {cliente}
                  funExec= {funGuardaCli}
                  selecionado = {sel_cliente}
                  comentario={'Seleccione Cliente'}
                 />
                 <View>
                 <Button
                  varExec={()=>{this.funCargaPickerIndicador()}}
                 />
                 </View>
                 <GdsPicker
                  data = {indicador}
                  funExec= {funGuardaIndicador}
                  selecionado = {sel_indicador}
                  comentario={'Seleccione Indicador'}
                 />
              </View>

      <ReadExcel/>
   
      </View>
    );
  }
}
 

function mapStateToProps(state){
  return{

    cliente: state.comercial.cliente,
    sel_cliente: state.comercial.sel_cliente,
    indicador:state.comercial.indicador,
    sel_indicador:state.comercial.sel_indicador,
    esquema:state.comercial.esquema,
    res_fetch: state.comercial.res_fetch,    
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



export default connect(mapStateToProps, mapDispatchToProps)(Comercial);

const styles = StyleSheet.create({

  container: {
    flex:1,
    
  },
  TextRespuesta: {

    fontSize: 20,
    color: '#ffffff'
    
  },
  StyleSelectorCli:{

    flexDirection:'row',
    alingItems:'left',
    width:100,
    paddingLeft: 400,

  }
});