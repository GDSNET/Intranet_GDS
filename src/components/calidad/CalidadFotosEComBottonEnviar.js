import React, { Component } from "react";
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import * as constants from "../publica/constants"
import ImageUploader from "react-images-upload";




import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import LottieLoop from '../../lottie/components/LottieLoop'
import toggleAnimation from  '../../lottie/images/20431-cloud-storage.json'


 


export default class CalidadFotosEComBottonEnviar extends Component {
  constructor(props) {
    super(props);
    this.state = {showBoton: true, };
    
 
  }


  resizeImage (base64Str, maxWidth = 500, maxHeight = 400) {
    return new Promise((resolve) => {
      let img = new Image()
      img.src = base64Str
      img.onload = () => {
        let canvas = document.createElement('canvas')
        const MAX_WIDTH = maxWidth
        const MAX_HEIGHT = maxHeight
        let width = img.width
        let height = img.height
  
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width
            width = MAX_WIDTH
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height
            height = MAX_HEIGHT
          }
        }
        canvas.width = width
        canvas.height = height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL())
      }
    })
  }





  async funExec(imagen){
const {id_sku_sap, funEnviando} = this.props;
   


const result = await this.resizeImage(imagen);
   
 await funEnviando(id_sku_sap,result)

    this.setState({
      showBoton: true
    })

  }

  funEditar(){
    this.setState({
          showBoton: false
        })
    
      }
    


funBoton(id_sku_sap,imagen) {
  if (this.state.showBoton) {
      return (
        <View visible={false} style={styles.ViewBoton} >
            <TouchableOpacity style={styles.Boton}  onClick={()=>this.funEditar()}>
                  <Text style={styles.txt_boton}>Editar</Text>
            </TouchableOpacity>
      </View>
      );
  } else {
      return (
        
        <View visible={false} style={styles.ViewBoton} >
  
               <ImageUploader
                         label=""
                         withPreview={true}
                          withIcon={false}
                          buttonText="Seleccione Imagen"
                          onChange={(pictureFiles, pictureDataURLs)=>this.funExec(pictureDataURLs)}
                          imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                          maxFileSize={1000000}
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