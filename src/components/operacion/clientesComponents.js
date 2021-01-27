import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {View,FlatList, Text, TouchableOpacity} from 'react-native-web';
import Data from "../../api/api_clientes.json";
import '../../css/cliente.css';

class Cliente extends Component {

  funCrearClientes(item){
const {funCambiaNumero} = this.props;

    return(
      <TouchableOpacity onClick={()=> {funCambiaNumero(item.id_cliente)}}>
        <View className = 'style_view'>
        <Text className= 'style_texto'> {item.desc_cliente} </Text>
        <Text className= 'style_texto'> {item.esquema} </Text>
        </View>
        
      </TouchableOpacity>
    )
  }

  render() {
    const {nombre, funCambiaNombre,  } = this.props;
    return (
      <div>
<h1>Cliente</h1>

<FlatList 
  data = {Data} 
  renderItem={({item}) => this.funCrearClientes(item)}
  keyExtractor={(item, index) => '' + index} />

      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    nombre: state.control.nombre

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



export default connect(mapStateToProps, mapDispatchToProps)(Cliente);
