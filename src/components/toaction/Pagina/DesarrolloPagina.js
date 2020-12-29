import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {View, Text,  StyleSheet, Dimensions} from 'react-native-web'
import  * as colores from '../../../constants/coloresConstants'
import Tarjeta1 from '../Tarjetas/PrimerTarjeta'
import Tarjeta2 from '../Tarjetas/SegundaTarjeta'






class Dash extends Component {
  constructor(props){
    super(props)
    this.state = {  
      usuario: '',
      datos: [],

    }    
  }

  funStyles(){
    if ( Dimensions.get('window').width > 600){
     return(
       styles1.container
     )
    }
    else
      {
        return(
       styles2.container
        )
        }
  }


 



  render() {
    const {titulo} = this.props;
    return (
      
        <View style={styles.container}>

        <div className="div_screen">
        <Text> hola aqui crearems los Componentes estilo Tarjetas</Text>

        <View style={styles.container_tarjeta}>

   
        <Tarjeta1
        titulo={'Primera Tarjeta'}
        icono={'ya lo pasare'}
        subtitulo={'subtitulo 1'}
        footer={'soy el footer 1'}
        />

      <Tarjeta1
              titulo={'Primera Tarjeta info 2'}
              icono={'ya lo pasare fghj'}
              subtitulo={'subtitulo 1'}
              footer={'soy el footer 1'}
              />

      <Tarjeta1
              titulo={'Primera Tarjeta jshdas '}
              icono={'ya lo pasare'}
              subtitulo={'subtitulo 1'}
              footer={'soy el footer 1'}
              />

      
 </View>
 <View style={styles.container_tarjeta}> 
        <Tarjeta2
        icono={"soy icono"}
        subtitulo={"soy subtitulo"}
        titulo={"Titulo"}
        indicador={"Indicador"}
        grafico={"aqui grafico"}
        
        />
        </View>

      </div>
        </View>

    );
  }
}





function mapStateToProps(state){
  return{
    ...state,        
    titulo: state.to.titulo,
    menu: state.to.menu,
  }
}

function mapDispatchToProps (dispatch) {
 const combiner = Object.assign({},
ControlActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}



export default connect(mapStateToProps, mapDispatchToProps)(Dash);



const styles = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_CUATERNARIO_CLARO,
    marginTop:20,
    padding: 10,
    height: '100%',
    padding: 20,
    
  },
  view_pequeño: {
    width: 200,
    height: 200,
    
  },
  container_tarjeta: {
    flexDirection: 'row',
  },
  contDerecho: {
    flex: 3,
    flexDirection: 'row',
  },
  contIzquierdo: {
flex: 2,

  }
})


const styles1 = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_CUATERNARIO_CLARO,
    flex: 1,
    flexDirection: 'row'

  }
});

const styles2 = StyleSheet.create({
   
  container: {
    backgroundColor: colores.COLOR_CUATERNARIO_CLARO,
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
