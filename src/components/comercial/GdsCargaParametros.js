import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {Text, View, StyleSheet} from 'react-native-web'
import * as gds_function from './GdsFunction'
import GdsPicker from './GdsPicker'
 
class Comercial extends Component {

  componentDidMount(){
    
    const {funCargaCli,funCargaIndicador} = this.props;

    new Promise((resolve, reject) => {
      resolve(gds_function.funApiCargaCli())
  }).then(res=>{
    alert(JSON.stringify(res))
    funCargaCli(res)

  })

  new Promise((resolve, reject) => {
    resolve(gds_function.funApiCargaIndicador())
  }).then(res=>{
 // alert(JSON.stringify(res))
  funCargaIndicador(res)

})

  }

  render() {
const {cliente,funCargaCli,sel_cliente,funCargaIndicador,indicador,sel_indicador}=this.props

    return (
  
    <View>
              <Text>hola soy la carga de parametros</Text>
                    <Text>{sel_cliente}</Text>

                <GdsPicker
                  data = {cliente}
                  funExec= {funCargaCli}
                  selecionado = {sel_cliente}
                  comentario={'Seleccione Cliente'}
                 />
                 
                <GdsPicker
                  data = {indicador}
                  funExec= {funCargaIndicador}
                  selecionado = {sel_indicador}
                  comentario={'Seleccione Indicador'}
                 />

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

    flexDirection: 'row'
    
  },
  
});