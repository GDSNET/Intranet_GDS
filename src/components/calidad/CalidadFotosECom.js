import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity, Image, Picker} from 'react-native-web';
import * as constants from "../publica/constants"
import * as conexiones from '../../util/Funciones'


//VARIABLES

import Imagen from './Imagen'



import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import ImageUploader from "react-images-upload";

import LottieLoop from '../../lottie/components/LottieLoop'
import toggleAnimation from  '../../lottie/images/20431-cloud-storage.json'
import CalidadFotosEComBottonEnviar from './CalidadFotosEComBottonEnviar'






class calFotos extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], envios: [],  showBoton: true, };
    this.onDrop = this.onDrop.bind(this);
    this.funEnviando = this.funEnviando.bind(this)
 

  }


async funBuscaDataCategoria(){
  const {funEcomDataCategoria} = this.props;
  const url = 'http://api.gdsnet.com:3009/post_intranet_select_categoria_sku';
 
 let body_data = JSON.stringify({
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
           console.log("guardando datos" + JSON.stringify(json))
           funEcomDataCategoria(json)
         });
         
       } catch (e) {
         console.log(e.message)
   
       }  
}
  
  onDrop(pictureFiles, pictureDataURLs) {
   // console.log("Upload:" +  JSON.stringify(pictureDataURLs) )
    this.setState({
      pictures: this.state.pictures.concat(pictureDataURLs),
      solicitar: false
  
    });
  }

async componentDidMount(){

 const {funImagenCount} = this.props;
 await this.funBuscaDataCategoria()

 const url = 'http://api.gdsnet.com:3009/post_intranet_ecomerce_count_image';
 let respuesta = await conexiones.Conexion(url, null)
 .then((res) => funImagenCount(res))


}



funBoton(id_sku_sap,imagen, valor) {
  if (this.state.showBoton) {
      return (
        <View visible={false} style={styles.ViewBoton} >
            <TouchableOpacity style={styles.Boton}  onClick={()=>this.funEnviando(id_sku_sap,imagen)}>
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

 store.addNotification({
  title: 'Imagen OK',
  message: 'imagen guardada',
  type: 'success',                         // 'default', 'success', 'info', 'warning'
  container: 'center',                // where to position the notifications
  animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
  animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
  dismiss: {
    duration: 3000
  }
})
 

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


  async funCargaPlataforma(value){
    console.log("buscando categoria: ", value)
    
    const {PlanillaOKCal, funSolicitarPlanillaSku} = this.props;
    console.log("Solicitando planilla")
    
   let obj = JSON.stringify({"desc_categoria" : value})

    console.log("enviando", JSON.stringify(obj))
    const url = 'http://api.gdsnet.com:3009/post_intranet_select_sku';
    const config =  {
        method: 'POST',
        body: obj,
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
    } = this.props;
  try {
  
  const planilla = dataPlanilla.map((fila,i) => {
  
  return(  
      <View style={styles.View} key={i}>  
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
        
 
          <View style={styles.fila2} key={"fila2" + i}>                  
                <View style={styles.filaImagen} key={"filaImagen" + i}>      
                        <Image style={styles.imagen} source={{uri: fila.desc_imagen_sku}}/>
                </View> 
               
              </View>  

              <View style={styles.filaImagen} key={"filaBoton" + i}> 
              
              <CalidadFotosEComBottonEnviar funEnviando={this.funEnviando} id_sku_sap={fila.id_sku_sap} />
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
      title: 'Imagen Guardada',
      message: 'Cuando refresque la Categoria, apareceran las imagenes',
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

  funCambioCat(value){
    const {funEcomCategoria} = this.props;
    funEcomCategoria(value)
    this.funCargaPlataforma(value)
  }



  funSemama(){
    const {dataCategoria, categoria} = this.props;
    try {

      return(
        <Picker 
        className="style_picker"
        mode="dropdown"
        selectedValue={categoria || ''}
        onValueChange={(value)=>{this.funCambioCat(value)}}>
      <Picker.Item label='Seleccione Categoria' value='' key={null}/>
        {dataCategoria.map((item, key) => {
            return (
            <Picker.Item label={item.desc_categoria} value={item.desc_categoria} key={key}/>) 
        })}
          
    </Picker>
      )
      
      
    } catch (error) {
      
    }
  }


  funCount(){
    const {data_image_count} = this.props;
    

 
    try {


   return data_image_count.map((value, i) => {

    let porcentaje_cumplimiento_imagen = (JSON.stringify(value.imagen_cargada) / value.imagen_total) * 100
    let color = value.imagen_cargada===value.imagen_total?styles.styleON:styles.styleOFF
   

      return(
        
         <View  style={[styles.view_container_conteo, {background: 'linear-gradient(to right , #231f20, #454041)'}]} key={'v'+ i}> 
              <Text key={'tc'+ i} style={[styles.txt_titulo1, color]}> Categoria: {value.desc_categoria} <Text  key={'td'+ i}  style={styles.txt_titulo3}> {JSON.stringify(value.imagen_cargada)} de {JSON.stringify(value.imagen_total)}</Text> {porcentaje_cumplimiento_imagen.toString().substr(0, 4)}%</Text>

        </View>
            )

    })



      
      
    } catch (error) {
      
    }
  }




  funCountTotales(){
    const {data_image_count} = this.props;
    

 
    try {

      let porcentaje_cumplimiento_imagen = ""


var msgTotal = data_image_count.reduce(function(prev, cur) 
{
     return prev + cur.imagen_total ;
}, 0); 
var msgCargada = data_image_count.reduce(function(prev, cur) 
{
     return prev + cur.imagen_cargada ;
}, 0); 

porcentaje_cumplimiento_imagen = msgCargada / msgTotal * 100

return (
        
  <View> 
    <Text style={styles.txt_titulo2}> cantidad de imagenes cargadas {msgCargada} de {msgTotal}</Text>
    <Text style={styles.txt_titulo1}> en porcentaje: {porcentaje_cumplimiento_imagen.toString().substr(0, 4)}%</Text>
</View>
)



      
      
    } catch (error) {
      
    }
  }


  render() {
    const {funEcomCategoria, categoria, data_image_count} = this.props;



    return (
      <View style={styles.contenedor}>
        
          <View style={styles.view_container_conteo}>
            <View style={styles.view_container_conteo}>
                {this.funCount()}
            </View>
          </View>
        
        <View style={styles.view_container_imagen}>
            <Text style={styles.txt_titulo1}> Categoria seleccionada: {categoria}</Text>
            {this.funCountTotales()}
            {this.funSemama()}
            {this.funTitulos()}
            <View style={styles.notification}>
            </View>
            
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
    categoria: state.calidad.categoria,
    dataCategoria: state.calidad.dataCategoria,
    data_image_count: state.calidad.data_image_count

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
    flexDirection: 'row'
    },
    view_imagen: {
      flex: 1,
    },
    imagen: {
      width: 300,
      height: 300
    },
    view_container_conteo: {
      flex: 0.5,
      alignContent: 'flex-start',
      alignItem: 'flex-start',
      alignSelf: 'flex-start'

    },
    view_container_imagen: {
flex: 1,
alignContent: 'flex-start'
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
  txt_titulo1: {
    fontSize: constants.SIZE_LETRA_XX_LARGE,
    color: constants.COLOR_BLANCO,
    margin: 5,
    alignContent: 'flex-start',
    alignItem: 'flex-start',
    
  },
  txt_titulo2: {
    fontSize: constants.SIZE_LETRA_X_LARGE,
    color: constants.COLOR_BLANCO,
    margin: 5,
    
  },
  txt_titulo3: {
    fontSize: constants.SIZE_LETRA_LARGE,
    color: constants.COLOR_BLANCO,
    margin: 5,
    
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
styleON: {color: constants.COLOR_PRIMARIO},
styleOFF: {color: constants.COLOR_SECUNDARIO},

})