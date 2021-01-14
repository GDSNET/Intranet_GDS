import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity, Image} from 'react-native-web';
import * as constants from "../publica/constants"
import { IoIosAddCircle, IoMdCreate, } from "react-icons/io";

//VARIABLES
import Presencia from './variables/Presencia'
import Stock from './variables/Stock'
import Descripcion from './variables/Descripcion'
import PrecioUnitario from './variables/PrecioUnitario'
import PrecioDescuento from './variables/PrecioDescuento'
import Alerta from './variables/Alerta'
import Mecanica from './variables/Mecanica'
import Imagen from './variables/Imagen'


import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import ImageUploader from "react-images-upload";





class eComN2 extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], envios: [] };
    this.onDrop = this.onDrop.bind(this);

  }

  onDrop(pictureFiles, pictureDataURLs) {
    console.log("Upload:" +  JSON.stringify(pictureDataURLs) )
    this.setState({
      pictures: this.state.pictures.concat(pictureDataURLs),
      solicitar: false
    });
  }

componentDidMount(){

    try {

      console.log("pasando por componentDidMount")
      const {data_sala, id_profile, dataPlanilla, data_plataforma, PlanillaERROR, funSolicitarPlanilla} = this.props;
      if( id_profile ===  dataPlanilla[0].id_usuario 
       && data_sala.id_sala ===  dataPlanilla[0].id_sala
       && data_plataforma.id_plataforma ===    dataPlanilla[0].id_plataforma){
         console.log("pasando por SI")
         funSolicitarPlanilla(true)
       } else {
        funSolicitarPlanilla(false)
         console.log("pasando por NO")
         PlanillaERROR()
       return(
         console.log("pasando por NO")
       )
       }  
      
    } catch (error) {

      
      
    }

}

async funFetch(obj){
console.log('intentando enviar',  JSON.stringify(obj))

const url = 'http://api.gdsnet.com:3009/post_intranet_planilla';

const config =  {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
  "Content-Type": "application/json",
  },
}  

  
try {
await  fetch(url, config)
    .then((response) => {
     return response.json()})
    .then((json) => {
      console.log("enviando Planilla" + JSON.stringify(json))
      if(json.data==="ok"){
        console.log("OK INGRESADO")
     this.state.envios.push({"estado": "ok"})

      this.setState({
        envios:  "OK"

      })
 

      }
      else {
        console.log("ERROR INGRESADO")
        this.setState({
          envios:  "ERROR"
  
        })



     } 
    });
    
  } catch (e) {
    console.log(e.message)
  }  
}




async funEnviando(){
    
const {dataPlanilla} = this.props;

let obj = []
let data = await dataPlanilla.map(async(value)=> {
obj = ({
  "desc_periodo": value.periodo,
  "id_tie_semana": value.id_tie_semana,
  "id_plataforma": value.id_plataforma,
  "id_sala": value.id_sala,
  "id_sku_sap": value.id_sku_sap,
  "presencia": value.presencia?1:0,
  "f_stock": value.stock?1:0,
  "f_imagen": value.imagen?value.imagen:"sin imagen",
  "f_descripcion": value.descripcion?1:0,
  "f_precio_unitario": value.precio_unitario?value.precio_unitario:null,
  "f_precio_descuento": value.precio_descuento?value.precio_descuento:null,
  "f_mecanica": value.mecanica,
  "f_alerta_quiebre": value.alerta?1:0
})




 let respuesta =  await this.envioNuevo(obj)
console.log(respuesta)



})




 console.log(this.state.envios)

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
 

store.addNotification({
  title: 'Enviado Error',
  message: 'Revise la informacion',
  type: 'warning',                         // 'default', 'success', 'info', 'warning'
  container: 'center',                // where to position the notifications
  animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
  animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
  dismiss: {
    duration: 3000
  }
})


}


async envioNuevo(obj){
  console.log("enviando", JSON.stringify(obj))
  const url = 'http://api.gdsnet.com:3009/post_intranet_planilla';
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

async envioNuevoBack(obj){
  console.log("enviando", JSON.stringify(obj))
  const url = 'http://api.gdsnet.com:3009/post_intranet_planilla';
  const config =  {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
      "Content-Type": "application/json",
      },
    }
try {

let response = await  fetch(url, config)
        .then((response) => {
         return response.json()})
      } catch (e) {
        console.log(e.message)
  
      }  

}






  async funCargaPlataforma(){
    
    const {data_sala, id_profile, PlanillaOK, data_plataforma, funSolicitarPlanilla} = this.props;
    console.log("Solicitando planilla")
    
   
   const url = 'http://api.gdsnet.com:3009/post_intranet_pauta';
   

   let body_data = JSON.stringify({
    "id_usuario" : id_profile,
    "id_sala" : data_sala.id_sala,
    "id_plataforma" : data_plataforma.id_plataforma
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
            console.log("guardando Planilla" + JSON.stringify(json))
            PlanillaOK(json)
            funSolicitarPlanilla(true)
          });
          
        } catch (e) {
          console.log(e.message)
    
        }  
  
  }

  async funGuardaImagenConvierte(id_sku_sap, pictureDataURLs){
    const {data_sala, 
      funGuardaImagen
    } = this.props;

    
    await funGuardaImagen (id_sku_sap, pictureDataURLs)

  }


  mostrarResultado = () => {
    const {data_sala, 
      dataPlanilla, 
      funGuardaPresencia,
      funGuardaStock,
      
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
                        <Text style={styles.txt_titulos}>{fila.desc_marca}</Text>
                </View> 
                <View style={styles.title_sku} key={"filaSku" + i}>       
                   <Text style={styles.txt_titulos}>{fila.desc_sku} codigo: {fila.id_sku_sap}</Text>
                </View>    
         </View>
      
    <View style={styles.fila} key={i}>  
              <View style={styles.filaImagen} key={"filaImagen" + i}> 
                        <Text style={styles.txt_titulos} >Imagen referencial</Text>   
                        <Image style={styles.imagen} source={{uri: fila.imagen_sku}}/>
                </View> 
 
          <View style={styles.fila2} key={"fila2" + i}>                  
          
          <View style={styles.columna}>    
                        <Presencia valor={fila.presencia} funExecute={()=>funGuardaPresencia(fila.id_sku_sap, !fila.presencia)} />
                        <Stock valor={fila.stock} funExecute={()=>funGuardaStock(fila.id_sku_sap, !fila.stock)} />
                        <Alerta valor={fila.alerta} funExecute={()=>funGuardaAlertaQuiebre(fila.id_sku_sap, !fila.alerta)} />
                
                        
                    </View>
         
                    <View style={styles.columna}>
                        
                        <PrecioUnitario valor={fila.precio_unitario}  id_sku_sap={fila.id_sku_sap} funExecute={funGuardaPrecioUnitario} />
                        <PrecioDescuento valor={fila.precio_descuento}  id_sku_sap={fila.id_sku_sap} funExecute={funGuardaPrecioDescuento} />
                        <Mecanica data={this.props.exhibiciones} valor={fila.mecanica}  id_sku_sap={fila.id_sku_sap} funExecute={funGuardaMecanica} />
                    </View>

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
    const {data_sala, dataPlanilla, data_plataforma, estado} = this.props;
    try {

      return (
        <View style={styles.planilla}>
        <View style={styles.planilla}>
            <View style={styles.resumen}>
            <Text style={styles.txt_sub_resumen}>ID USUARIO:  {JSON.stringify(this.props.id_profile)} - Cantidad de Productos {Object.keys(dataPlanilla).length}</Text>
                <Text style={styles.txt_resumen}>SALA:  {JSON.stringify(data_sala.id_sala)} / {data_sala.desc_sala}</Text>
                <Text style={styles.txt_resumen}>Plataforma:  {JSON.stringify(data_plataforma.desc_plataforma)}</Text>
                
          </View>
        <View style={styles.ViewBoton} >
          <TouchableOpacity style={styles.Boton}  onClick={()=>this.funEnviando()}>
                <Text style={styles.txt_boton}>Enviar Planilla</Text>
          </TouchableOpacity>
        </View>

   

         </View>
   
         <View style={styles.planilla}>
             {this.mostrarResultado()}
          </View>

      </View>

      )
      
    } catch (error) {


      
    }
  }
 

  funSolicitarPlanilla(){
    if(this.props.planilla){
      return (
        <View style={styles.ViewBoton} >
        
              <Text style={styles.txt_sub_resumen}>Planilla Solicitada</Text>
              
        
        </View>
       
      )
    }
    else {
      return (
        <View style={styles.ViewBoton} >
        <TouchableOpacity style={styles.Boton}  onClick={()=>this.funCargaPlataforma()}>
              <Text style={styles.txt_boton}>Solicitar Planilla</Text>
        </TouchableOpacity>
        </View>
      )
    }



  }

  render() {


    return (
      <View style={styles.contenedor}>
      
     
        {this.funSolicitarPlanilla()}
        {this.funTitulos()}
         <View style={styles.notification}>
        </View>
        
        </View>
        
    );
  }
}
 

function mapStateToProps(state){
  return{
    data_sala: state.eCom.data_sala,
    id_profile: state.eCom.id_profile,
    dataPlanilla: state.eCom.dataPlanilla,
    data_plataforma:  state.eCom.data_plataforma,
    estado:  state.eCom.estado,
    planilla:  state.eCom.planilla,
    exhibiciones: state.eCom.exhibiciones,
    

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