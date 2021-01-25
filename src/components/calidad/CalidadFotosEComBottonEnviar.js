import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity, Image} from 'react-native-web';
import * as constants from "../publica/constants"




import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import LottieLoop from '../../lottie/components/LottieLoop'
import toggleAnimation from  '../../lottie/images/20431-cloud-storage.json'





class CalidadFotosEComBottonEnviar extends Component {
  constructor(props) {
    super(props);
    this.state = {showBoton: true, };
    
 
  }


  funExec(){
const {funEnviando, id_sku_sap,imagen} = this.props.
    this.setState({
      showBoton: false
    })

    funEnviando(id_sku_sap,imagen)

  }


funBoton(id_sku_sap,imagen) {
  if (this.state.showBoton) {
      return (
        <View visible={false} style={styles.ViewBoton} >
            <TouchableOpacity style={styles.Boton}  onClick={()=>this.funExec()}>
                  <Text style={styles.txt_boton}>Guardar</Text>
            </TouchableOpacity>
      </View>
      );
  } else {
      return (
        
        <View visible={false} style={styles.ViewBoton} >
                <LottieLoop
                icon={toggleAnimation}
                width={50}
                
              />
      </View>
      )
  }
}

render() {

  return (
    <View style={styles.contenedor}>

      {this.funBoton()}
       
      
      
      </View>
      
  );
}
}


function mapStateToProps(state){
  return{
    dataPlanilla: state.calidad.dataPlanilla,
    planillaSku:  state.calidad.planillaSku,
    estado:  state.calidad.estado,
    id_sku_sap:  state.calidad.id_sku_sap,
    imagen: state.calidad.imagen,
    

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



export default connect(mapStateToProps, mapDispatchToProps)(CalidadFotosEComBottonEnviar);


const styles = StyleSheet.create({
  contenedor: { 
    flex: 1,
     alignItem: 'center',
    margin: 50,
    },
    view_imagen: {
      flex: 1,
    },
    imagen: {
      width: 150,
      height: 150
    },
    contenedor_fila: {
    flex: 1,
      backgroundColor: constants.COLOR_BLANCO,
        margin: 5,
      borderRadius: 10,
    },
    contenedor_titulos: {
      flexDirection: "row",
      backgroundColor: constants.COLOR_GRIS_I,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 3,
    },
 touchable: {
  alignItem: 'center',
  },
  notification: {
    margin: 100,
    backgroundColor: '#76D7C4',
    left:0,
    top:300,
   
  },
  resumen: {
    flexDirection: "column"
  },
  txt_resumen: {
    fontSize: constants.SIZE_LETRA_XXXXX_LARGE,
    color: constants.COLOR_BLANCO,
    margin: 1
  },
  txt_sub_resumen: {
    fontSize: constants.SIZE_LETRA_SMALL,
    color: constants.COLOR_BLANCO,
    margin: 1
  },

  fila: {
flexDirection: "row"
},
title_marca: {
  flexDirection: "row",

  flex: 1,
},
title_sku: {
  alignContent: 'right',
  alignSelf: 'right',
  flex: 2,
},
  fila1: {
    alignItem: 'center',
 flex: 0.3
    },
    filaImagen: {
      alignItem: 'center',

      
      },
    fila2: {
      alignItem: 'center',
      flexDirection: "row",
      flex: 1
      },
      columna: {
        alignItem: 'center',
        
        flex: 1
        },
      planilla: {
        alignItem: 'center',
        },
    txt_titulos: {
      padding: 5,
      color: constants.COLOR_BLANCO,
      fontSize: constants.SIZE_LETRA_XX_LARGE,
    },
 
    txt_boton: {
      padding: 5,
      fontSize: constants.SIZE_LETRA_XX_LARGE,
      color: constants.COLOR_BLANCO
    },
    Boton: {
      
      alignItem: 'center',
      borderRadius: 20,
      padding: 5,
      margin: 10,
      width: 200,
      backgroundColor: constants.COLOR_SECUNDARIO,
      placeholderTextColor:  constants.COLOR_GRIS_B,
  },
  ViewBoton: {
    
    alignContent: 'center',
    alignSelf: 'center',

},

})