import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity, Image} from 'react-native-web';
import * as constants from "../publica/constants"


//VARIABLES

import Imagen from './Imagen'



import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import ImageUploader from "react-images-upload";

import * as fechas from '../publica/Fechas'

import LottieLoop from '../../lottie/components/LottieLoop'
import toggleAnimation from  '../../lottie/images/20431-cloud-storage.json'





class calFotos extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], envios: [],  showBoton: true, };
    this.onDrop = this.onDrop.bind(this);
 

  }

  onDrop(pictureFiles, pictureDataURLs) {
   // console.log("Upload:" +  JSON.stringify(pictureDataURLs) )
    this.setState({
      pictures: this.state.pictures.concat(pictureDataURLs),
      solicitar: false
  
    });
  }

componentDidMount(){

 { this.funCargaPlataforma()}

  /*  try {

      console.log("pasando por componentDidMount")
      const {data_sala, id_profile, dataPlanilla, data_plataforma, PlanillaERROR, funSolicitarPlanillaSku} = this.props;
      if( id_profile ===  dataPlanilla[0].id_usuario 
       && data_sala.id_sala ===  dataPlanilla[0].id_sala
       && data_plataforma.id_plataforma ===    dataPlanilla[0].id_plataforma){
         console.log("pasando por SI")
         funSolicitarPlanillaSku(true)
       } else {
        funSolicitarPlanillaSku(false)
         console.log("pasando por NO")
         PlanillaERROR()
       return(
         console.log("pasando por NO")
       )
       }  
      
    } catch (error) {

      
      
    }*/

}



funBoton() {
  if (this.state.showBoton) {
      return (
        <View visible={false} style={styles.ViewBoton} >
            <TouchableOpacity style={styles.Boton}  onClick={()=>this.funEnviando()}>
                  <Text style={styles.txt_boton}>Actualizar SKU'S</Text>
            </TouchableOpacity>
      </View>
      );
  } else {
      return (
        
        <View visible={false} style={styles.ViewBoton} >
                <LottieLoop
                icon={toggleAnimation}
                width={150}
                
              />
      </View>
      )
  }
}

async funEnviando(id_sku_sap,imagen){

 await  this.setState({
    showBoton: !this.state.showBoton
  });
    
const {dataPlanilla, funEnvioCal} = this.props;

let obj = []
  
obj = ({
  "id_sku_sap": id_sku_sap,
  "desc_imagen_sku": imagen?imagen:"sin imagen",
})
console.log('sku:'+id_sku_sap + 'image:'+imagen)
console.log(obj)
//AQUI VAMOS
let respuesta =  await this.envioNuevo(obj)
await console.log(JSON.stringify(respuesta))

if (respuesta.data === "ok"){
 console.log("RESPUESTA OK")
 await funEnvioCal(id_sku_sap, 1, 'enviado OK')
}
else{
 console.log("Error", JSON.stringify(respuesta))
 await funEnvioCal(id_sku_sap, 2, 'enviado Error')
}
}


async envioNuevo(obj){
  console.log("enviando", JSON.stringify(obj))
  const url = 'http://api.gdsnet.com:3009/post_intranet_insert_sku';
  const config =  {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
      "Content-Type": "application/json",
      },
    }


let response = await  fetch(url, config)
let data = await response.json()
return data;

}


  async funCargaPlataforma(){
    
    const {PlanillaOKCal, funSolicitarPlanillaSku} = this.props;
    console.log("Solicitando planilla")
    
   
   const url = 'http://api.gdsnet.com:3009/post_intranet_select_sku';
  
      const config =  {
        method: 'POST',
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
            PlanillaOKCal(json)
            funSolicitarPlanillaSku(true)
          });
          
        } catch (e) {
          console.log(e.message)
    
        }  
  
  }

  async funGuardaImagenConvierte(id_sku_sap, pictureDataURLs){
    const {data_sala, 
      funGuardaImagenCal
    } = this.props;

    
    await funGuardaImagenCal (id_sku_sap, pictureDataURLs)

  }


  mostrarResultado = () => {
    const {data_sala, 
      dataPlanilla, 
      id_sku_sap,
      imagen,
      
      funGuardaPrecioUnitario, 
      funGuardaPrecioDescuento,
      funGuardaMecanica,
      funGuardaAlertaQuiebre,
      funGuardaDescripcion,
    } = this.props;
  try {
  
  const planilla = dataPlanilla.map((fila,i) => {
  
  return(  
      <View style={styles.contenedor_fila} key={i}>  
          <View style={styles.contenedor_titulos} key={"fila1" + i}>    
              
           
                <View style={styles.title_marca} key={"filaMarca" + i}> 
                <Text style={styles.txt_titulos} >{i}</Text>
                        <Text style={styles.txt_titulos}>{fila.desc_categoria}</Text>
                </View> 
                <View style={styles.title_sku} key={"filaSku" + i}>       
                   <Text style={styles.txt_titulos}>{fila.desc_sku} Codigo Sap: {fila.id_sku_sap}</Text>
                </View>    
         </View>
      
    <View style={styles.fila} key={i}>  
              <View style={styles.filaImagen} key={"filaImagen" + i}> 
                        <Text style={styles.txt_titulos} >Imagen referencial</Text>   
                        <Image style={styles.imagen} source={{uri: fila.desc_imagen_sku}}/>
                </View> 
 
          <View style={styles.fila2} key={"fila2" + i}>                  

                    <View style={styles.columna}>
                         <Imagen  valor={fila.imagen} funExecute={null} />
                         <ImageUploader
                         label=""
                         withPreview={true}
                          withIcon={false}
                          buttonText="Seleccione Imagen"
                          onChange={(pictureFiles, pictureDataURLs)=>this.funGuardaImagenConvierte(fila.id_sku_sap, pictureDataURLs)}
                          imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                          maxFileSize={1000000}
                        />
                    </View>       
              </View>  

              <View style={styles.filaImagen} key={"filaBoton" + i}> 
              {this.funBoton(id_sku_sap,imagen)}
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


  funTitulos(){
    const {dataPlanilla} = this.props;


    try {
      var cantidadOK = dataPlanilla.filter(function(value, index) {return value.envio_estado === 1;})

      if(Object.keys(dataPlanilla).length===cantidadOK.length){
        this.funPlanillaEnviadaOK()
      }
      
      



      return (
        <View style={styles.planilla}>
        <View style={styles.planilla}>

         </View>
   
         <View style={styles.planilla}>
             {this.mostrarResultado()}
          </View>

      </View>

      )
      
    } catch (error) {


      
    }
  }


  funPlanillaEnviadaOK(){
    const { history, PlanillaLimpiar} = this.props;
    
    PlanillaLimpiar()

    store.addNotification({
      title: 'Enviado OK',
      message: 'Datos guardados con exito',
      type: 'success',                         // 'default', 'success', 'info', 'warning'
      container: 'center',                // where to position the notifications
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
      dismiss: {
        duration: 3000
      }
    })
     
    
    history.push('/Ecommerce')
  }
 

  funSolicitarPlanilla(){
  
      return (
        <View style={styles.ViewBoton} >
        <TouchableOpacity style={styles.Boton}  onClick={()=>this.funCargaPlataforma()}>
              <Text style={styles.txt_boton}>Actualizar Lista SKU</Text>
        </TouchableOpacity>
        </View>
      )



  }

  render() {

    return (
      <View style={styles.contenedor}>

        {this.funTitulos()}
         <View style={styles.notification}>
        </View>
        
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



export default connect(mapStateToProps, mapDispatchToProps)(calFotos);


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