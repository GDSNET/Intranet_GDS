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
    this.state = { pictures: [] };
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


async funEnviando(){
    
const {dataPlanilla} = this.props;

let obj = []
dataPlanilla.map((value, i)=> {
obj.push({
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

})


 // [{"periodo":"PERIODO 1","id_tie_semana":1017,"id_usuario":5,"id_plataforma":3,"desc_plataforma":"RAPPI","estado":"NUEVA","id_sala":10,"desc_sala":"JUMBO BILBAO","imagen_sku":"IMAGEN SKU","desc_marca":"SUPER POLLO","desc_sku":"AS-TRUTRO LARGO POLL","id_sku_sap":1010095,"presencia":false,"descripcion":false,"stock":false,"imagen":false,"precio_unitario":"","precio_descuento":"","mecanica":"","alerta":false}

console.log("entregando envio", JSON.stringify(obj))


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

          this.props.history.push('/eComNivel1')
          this.props.funSolicitarPlanilla(false)
          this.props.PlanillaERROR()

         }
         else {

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
       });
       
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


  mostrarResultado = () => {
    const {data_sala, 
      dataPlanilla, 
      funGuardaPresencia,
      funGuardaStock,
      funGuardaImagen, 
      funGuardaPrecioUnitario, 
      funGuardaPrecioDescuento,
      funGuardaMecanica,
      funGuardaAlertaQuiebre,
      funGuardaDescripcion,
    } = this.props;
  try {
  
  const planilla = dataPlanilla.map((fila,i) => {
  
  return(  
      <View style={styles.fila} key={i}>  
           <View style={styles.filaImagen} key={"filaImagen" + i}> 
                        <Text style={styles.txt_titulos} >Imagen referencial</Text>   
                        <Image style={styles.imagen} source={{uri: fila.imagen_sku}}/>
                </View> 
      
         <View style={styles.fila1} key={"fila1" + i}>    
               <Text style={styles.txt_titulos} >{i}</Text>
           
                <View style={styles.filaImagen} key={"filaImagen" + i}> 
                        <Text style={styles.txt_titulos}>marca: {fila.desc_marca}</Text>
                        
                </View> 
                <View style={styles.filaImagen} key={"filaImagen" + i}>       
                   <Text style={styles.txt_titulos}>producto: {fila.desc_sku} codigo: {fila.id_sku_sap}</Text>
                </View> 
                
         </View>
          <View style={styles.fila2} key={"fila2" + i}>                  
          
                      <View>     
                        <Presencia valor={fila.presencia} funExecute={()=>funGuardaPresencia(fila.id_sku_sap, !fila.presencia)} />
                        <Stock valor={fila.stock} funExecute={()=>funGuardaStock(fila.id_sku_sap, !fila.stock)} />
                
                        
                    </View>
                    <View>     
               
                        <Descripcion valor={fila.descripcion} funExecute={()=>funGuardaDescripcion(fila.id_sku_sap, !fila.descripcion)} />
                        <Alerta valor={fila.alerta} funExecute={()=>funGuardaAlertaQuiebre(fila.id_sku_sap, !fila.alerta)} />
                        
                    </View>
                    <View> 
                        
                        <PrecioUnitario valor={fila.precio_unitario}  id_sku_sap={fila.id_sku_sap} funExecute={funGuardaPrecioUnitario} />
                        <PrecioDescuento valor={fila.precio_descuento}  id_sku_sap={fila.id_sku_sap} funExecute={funGuardaPrecioDescuento} />
                        
                        
                    </View>
                    <View> 
                        
                        <Mecanica data={this.props.exhibiciones} valor={fila.mecanica}  id_sku_sap={fila.id_sku_sap} funExecute={funGuardaMecanica} />

                        
                    </View>
                    <View style={styles.view_imagen}>
                         <Imagen  valor={fila.imagen} funExecute={null} />
                         <ImageUploader
                         label=""
                         withPreview={true}
                          withIcon={false}
                          buttonText="Seleccione Imagen"
                          onChange={(pictureFiles, pictureDataURLs)=>funGuardaImagen(fila.id_sku_sap, pictureDataURLs)}
                          imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
                          maxFileSize={5242880}
                        />
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
                <Text style={styles.txt_resumen}>ID USUARIO:  {JSON.stringify(this.props.id_profile)}</Text>
                <Text style={styles.txt_resumen}>ID SALA:  {JSON.stringify(data_sala.id_sala)}</Text>
                <Text style={styles.txt_resumen}>ID plataforma  {JSON.stringify(data_plataforma.id_plataforma)}</Text>
                <Text style={styles.txt_resumen}>Cantidad de Productos {Object.keys(dataPlanilla).length}</Text>
                <Text style={styles.txt_resumen}>Estado : {estado}</Text>
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
        
              <Text style={styles.txt_boton}>Planilla Solicitada</Text>
              
        
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
      flex: 0.3,
    },
    imagen: {
      width: 150,
      height: 150
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
    flexDirection: "row"
  },
  txt_resumen: {
    fontSize: constants.SIZE_LETRA_X_LARGE,
    color: constants.COLOR_BLANCO,
    margin: 10
  },

  fila: {backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
  margin: 5,
padding: 5,
borderRadius: 10,
flexDirection: "row"
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
      planilla: {
        alignItem: 'center',
        },
    txt_titulos: {
      padding: 5,
      color: constants.COLOR_BLANCO
    },
    txt_boton: {
      padding: 5,
      fontSize: constants.SIZE_LETRA_XXX_LARGE,
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