import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, Text, View} from 'react-native-web';
import data from './apiIndicadores.json'
import * as constants from '../publica/constants'
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


  }

  funChange(){

   return console.log("se apretooo!!!")

  }

  funCargar(){
  return  data.map((values, i)=>{
   return   this.funFila(values, i)
    })
  }
  funFila(value, i){

    return(     
    
    <View key={i} style={styles.view_fila}>
          
      
      <Presencia valor={value.presencias} funExecute={this.funChange} />
      <Stock valor={value.f_stock} funExecute={this.funChange} />
      <Descripcion valor={value.f_descripcion} funExecute={this.funChange} />
      <PrecioUnitario valor={value.f_precio_unitario} funExecute={this.funChange} />
      <PrecioDescuento valor={value.f_precio_descuento} funExecute={this.funChange} />
      <Descuento valor={value.presencia} funExecute={this.funChange} />
      <Mecanica  valor={value.f_mecanica} funExecute={this.funChange} />
      <Imagen  valor={value.f_imagen} funExecute={this.funChange} />
      <Alerta valor={value.f_alerta_quiebre} funExecute={this.funChange} />
 
     
    </View>
    )
  }


  render() {
    //const {id_sala} = this.props;
    return (
      <div >
        
<View>
  {this.funCargar()}
  <Text style={styles.textJson}> presencia:  {JSON.stringify(data)} </Text>
</View>
      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    id_sala: state.eCom.id_sala

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

  view_fila: {
    backgroundColor: constants.COLOR_BLANCO,
    flexDirection: 'row',
  },
  text_desc: {
    color: constants.COLOR_PRIMARIO,
    fontSize: constants.SIZE_LETRA_LARGE
  },
  textJson: {
    color: constants.COLOR_BLANCO,
    fontSize: constants.SIZE_LETRA_MEDIUM
  }   


})