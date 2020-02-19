import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import { MdDeleteSweep } from "react-icons/md";
import { IoIosAddCircle, IoMdCreate, } from "react-icons/io";
import GoBack from '../publica/ButtonGoBack';


class CalidadN1Exh extends Component {
 
async funCargaSelect(){
  const { semana, cliente, sala, id_sku, funCalGuardaDataDetalle} = this.props;

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3005/api_calidad_exhibidores_select';

let body_data = JSON.stringify({
  "cliente" : cliente,
  "semana" : semana,
  "sala" : sala,
  "sku" : id_sku
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
          funCalGuardaDataDetalle(json.b_detalle)
        });
        
      } catch (e) {
        console.log(e.message)
  
      }  

}

componentDidMount(){
  const {sala, history} = this.props;
  if (!sala){
    history.push('/Calidad')
  }
  

  this.funCargaSelect()
  
  

}

funTouchableNivel1(item){
  const {funCalGuardaItem, history, funCalGuardaExhOld, funCalGuardaPromoOld,funGuardaNroExhibidorOld,funGuardaPredominanteOld} = this.props;

  {funCalGuardaItem(item)}
  {funCalGuardaExhOld(item.id_exh_tip_exhibicion)}
  {funCalGuardaPromoOld(item.id_prm_tip_promo)}
  {funGuardaPredominanteOld(item.f_predominante)}
  {funGuardaNroExhibidorOld(item.id_numero_exhibidor)}

  history.push('/CalidadN3UpdateExh')
}



async funApiDelete(item){

  const { semana, cliente, sala, id_sku, funCalGuardaRespuesta} = this.props;

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3005/api_calidad_delete_exh';

let body_data = JSON.stringify({
  "cliente" : cliente,
  "semana" : semana,
  "sala" : sala,
  "sku" : id_sku,
  "exh" : item.id_exh_tip_exhibicion,
  "prom" : item.id_prm_tip_promo,
  "nro_exhibidor" :item.id_numero_exhibidor,
  "predominante" :item.f_predominante,  
  })


  

    const config =  {
      method: 'POST',
      body: body_data,
      headers: {
      "Content-Type": "application/json",
      },
    }  

      
try {
  
console.log(body_data)

await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando datos" + JSON.stringify(json))
          funCalGuardaRespuesta(json.data)
        });
        
      } catch (e) {
        console.log(e.message)
  
      }  

}




async funDelete(item){

  if (window.confirm('Esta seguro de Eliminar este Item')) 
  {   
    var person = prompt("Ingrese la Clave", '');
    if (person == 'Gds1111') {

    await  this.funllenadatos();

    await this.funApiDelete(item);

    await  this.funCargaSelect();



    window.alert('Producto eliminado.')
    } 
    else
    {
      window.alert('Contraseña incorrecta.')
      //funCalidadGuardaRespuesta('Password Invalido' )
    }
  }
  else    
   { 

  }


}

funllenadatos(){
  const {data_b_detalle,} = this.props;

  try {


  return data_b_detalle.map((item, i) => {
  
      return (
        <View style={styles.styles_view_principal}> 
            <View style={styles.styles_view_encabezado}> 
              <View style={styles.styles_view_titulo}> 
                  <Text style={styles.style_titulo}>Id_Sala: {item.id_pto_pto_observ}</Text>
                  <Text style={styles.style_titulo}> - </Text>
                  <Text style={styles.style_titulo}>Id_Sku: {item.id_pro_sku}</Text>

              </View> 
              <View style={styles.styles_view_subtitulo}> 

                  <Text style={styles.style_text}>id_exh_tip_exhibicion: {item.id_exh_tip_exhibicion}</Text>
                  <Text style={styles.style_text}>desc_exh: {item.desc_exh}</Text>
                  <Text style={styles.style_text}>id_prm_tip_promo: {item.id_prm_tip_promo}</Text>
                  <Text style={styles.style_text}>desc_promo: {item.desc_promo}</Text>
                  <Text style={styles.style_text}>f_q_frentes_abs: {item.f_frentes}</Text>
                  <Text style={styles.style_text}>id_numero_exhibidor: {item.id_numero_exhibidor}</Text>
                  <Text style={styles.style_text}>f_predominante: {item.f_predominante}</Text>
                  <Text style={styles.style_text}>f_q_presencia: {item.f_q_presencia}</Text>
              </View> 

              
            </View> 
              
            <View style={styles.styles_view_update}>
            <TouchableOpacity onClick={()=> {this.funTouchableNivel1(item)}}>
                  <IoMdCreate className ='style_image_ir'/>
                </TouchableOpacity> 
            </View> 

            <View style={styles.styles_view_delete}> 
            <TouchableOpacity onClick={()=> {this.funDelete(item)}}>
               <MdDeleteSweep className ='style_image_ir'/>
               </TouchableOpacity> 
            </View> 
            
        </View> 
      )
      
   

  }
  )

} catch (error) {
  return(<h1>{error.message}</h1>)
}
  
}

mostrarResultado = () => {
  const {data_b_detalle} = this.props;
try {

let algo = data_b_detalle.map((fila,i) => {

  
return(  
<tr className="regPauta" key={i}>    


              <th scope="row" key={i}>{i}</th>
              <td>{fila.id_pto_pto_observ}</td>
              <td>{fila.id_pro_sku}</td>
              <td>{fila.id_exh_tip_exhibicion}</td>
              <td>{fila.desc_exh}</td>
              <td>{fila.id_prm_tip_promo}</td>
              <td>{fila.desc_promo}</td>
              <td>{fila.f_frentes}</td>
              <td>{fila.id_numero_exhibidor}</td>
              <td>{fila.f_predominante}</td>
              <td>{fila.f_q_presencia}</td>

              <td> 
                <TouchableOpacity onClick={()=> {this.funTouchableNivel1(fila)}}>
                <IoMdCreate className ='style_image_ir'/>
                </TouchableOpacity>
              </td>

              <td> 
                <TouchableOpacity onClick={()=> {this.funDelete(fila)}}>
                <MdDeleteSweep className ='style_image_ir'/>
                </TouchableOpacity>
              </td>
             
  </tr>
)
	

});

return algo

} catch (error) {


return(
  //Tabla sin contenido, porque Aun no se selecciona pauta a revisar
  <tr>
  </tr>
)
}
}

funInsert(){
  const {history} = this.props;
  history.push('/CalidadN2InsertExh')
}
     
  render() {
    const {estado, semana, cliente, sala, id_sku,nombre_cliente} = this.props;
    


    return (
      <div>
           <p>EXHIBICION Seleccion Semana: {semana} Cliente: {cliente} Sala: {sala} SkuId: {id_sku}</p>
           <h2>{nombre_cliente}</h2>
           <GoBack history={this.props.history} varIr={'Calidad'}/>
           <div className = 'CircleAdd'>
           <TouchableOpacity onClick={()=> {this.funInsert()}}>
              <IoIosAddCircle className ='style_image_insert'/>             
            </TouchableOpacity>  
           </div> 
           
            <div className ='tabla'>
               <table id="TablaClick" className="TablaPauta table table-hover">
                        <thead className="theadPauta">
                            <tr className="bg-primary">
                                <th  scope="col">#</th>
                                
                                <th scope="col">ID SALA</th>
                                <th scope="col">ID SKU</th>
                                <th scope="col">ID EXHIBICION</th>
                                <th scope="col">DESC EXHIBICION</th>
                                <th scope="col">ID PROMOCION</th>     
                                <th scope="col">DESC PROMOCION</th>                        
                                <th scope="col">F FRENTES</th>     
                                <th scope="col">ID NUMERO EXHBIDOR</th>     
                                <th scope="col">F PREDOMINANTE</th>     
                                <th scope="col">F PRESENCIA</th>     
                                <th scope="col">UPDATE</th>     
                                <th scope="col">DELETE</th>     
                            </tr>
                        </thead>
                        <tbody>
                                {this.mostrarResultado()}
                        </tbody>
                    </table>
                    </div>
        <div className={'style_status'}>
            <h5 className='style_status_text'>{estado}</h5>
        </div>

      </div>
        

    );
  }
}
 

function mapStateToProps(state){
  return{
    
    estado: state.calidad.estado,
    sala: state.calidad.sala,
    id_sku: state.calidad.id_sku,
    semana: state.calidad.semana,
    cliente: state.calidad.cliente,
    data_b_detalle: state.calidad.data_b_detalle,
    item:state.calidad.item,
    nombre_cliente: state.calidad.nombre_cliente,
    predominante_old:state.calidad.predominante_old,
    nro_exhibidor_old:state.calidad.nro_exhibidor_old
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

export default connect(mapStateToProps, mapDispatchToProps)(CalidadN1Exh);


const styles = StyleSheet.create({

  textinput: {
    
    padding: 20,
  },
  styles_view_principal: {
    flexDirection: 'row',
    flex: 1,
    alignItem: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    margin: 30

  },
  styles_view_encabezado: {


    padding: 20,
    flexDirection: 'column',
    flex: 5,
  },
  styles_view_titulo: {

    padding: 20,
    size: 30,
    flexDirection: 'row',
  },
  styles_view_subtitulo: {

    padding: 20,
    size: 20,
    flexDirection: 'row',
  },
  styles_view_update: {

    padding: 20,
    flex: 1,
    alignItem: 'center'
  },
  styles_view_delete: {

    padding: 20,
    flex: 1,
    alignItem: 'center'
  },
  style_text:{
    color: '#fff',
    fontSize: 15
  },
  style_text2:{
    color: '#fff',
    fontSize: 10
  },
  style_titulo:{
    fontSize: 20,
    color: '#fff'
  }
});
