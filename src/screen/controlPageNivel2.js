import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {TouchableOpacity,View,Text,ActivityIndicator} from 'react-native-web';
import { IoIosEye } from "react-icons/io";
import GoBack from '../components/control/ButtonGoBack';

class controlPageNivel2 extends Component {

async funLLenaDatosN2(profile,punto,fecha_inicio,fecha_fin){
  const {funGuardaDatosNivel2} = this.props

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3005/post_api_control_op_pto_tarea';

let body_data = JSON.stringify({
  "Usuario_Id" : profile,
  "fecha_inicio" : fecha_inicio,
  "fecha_fin" : fecha_fin,
  "PtoObs_Id" : punto
  })      


    const config =  {
      method: 'POST',
      body: body_data,
      headers: {
      "Content-Type": "application/json",
      },
    }  


await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando datos" + JSON.stringify(json))
          funGuardaDatosNivel2(json.pto_tarea)
        });

}

async componentDidMount(){
  const{profile,punto,fecha_inicio,fecha_fin} = this.props;
 


  await this.funLLenaDatosN2(profile,punto,fecha_inicio,fecha_fin)
           
  }
 

funTouchable2(tarea,tarea_det){
  const {funGuardaTarea, history,funBorraNivel3} = this.props

  funBorraNivel3();
  {funGuardaTarea(tarea,tarea_det)}
  history.push('/controlPageNivel3')
}

mostrarResultado = () => {
  const {data_nivel2} = this.props;
try {            
let algo = data_nivel2.map((fila,i) => {    

  
return(  
<tr className="regPauta" key={i}>    


              <th scope="row" key={i}>{i}</th>
              <td>{fila.PtoObs_Id}</td>
              <td>{fila.po_desc}</td>
              <td>{fila.Dia_Id}</td>
              <td>{fila.Tarea_Detalle}</td>
              <td>{fila.Tarea_Id}</td>
              <td>{fila.Total_Tarea}</td>
              <td> 
                <TouchableOpacity onClick={()=> {this.funTouchable2(fila.Tarea_Id,fila.Tarea_Detalle)}}>
                  <IoIosEye className ='style_image_ir'/>
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


funDatosNivel2(){
  const {data_nivel2} = this.props;
try {
  return data_nivel2.map((item, i) => {
  
    return(<TouchableOpacity onClick={()=> {this.funTouchable2(item.Tarea_Id,item.Tarea_Detalle)}}>
    <View className = 'style_view'>
    <Text className= 'style_texto'> {item.PtoObs_Id} {item.po_desc} {item.Tarea_Detalle} {item.Tarea_Id}</Text>
    </View>
    
  </TouchableOpacity>)
  
  })  
} catch (error) {
 this.funCatch(); 
}

}

funCatch(){

  return(<h1>Cargando ...</h1> )

}

  render() {
    const {estado,profile, punto,data_nivel2,history } = this.props;

    if(!profile){
      history.push('/Control')
    }

    if (data_nivel2.length > 0){

      return (
        <div>
          <GoBack history={this.props.history} varIr={'controlPageNivel1'}/>
             <h1>Detalle Sala Tarea </h1> 
              <p>Punto: {punto} - Profile:{profile} </p>

             <div className='tabla'>
             <table  className="TablaPauta table table-hover">
                      <thead className="theadPauta">
                          <tr className="bg-primary">
                              <th  scope="col">#</th>
                              
                              <th scope="col">ID PTO</th>
                              <th scope="col">DESC SALA</th>
                              <th scope="col">ID DIA</th>
                              <th scope="col">TAREA DETALLE</th>
                              <th scope="col">TAREA ID</th>     
                              <th scope="col">TOTAL TAREAS</th>
                              <th scope="col">VER</th>                        
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
      )
    }
else
{
  return (
    <div>
    <GoBack history={this.props.history} varIr={'controlPageNivel1'}/>
      <ActivityIndicator  color='#FFF' size='200' />
    
        
    </div> 
      );    
}
     
  
  }
}
 

function mapStateToProps(state){
  return{
    numero: state.control.numero,
    data_semana: state.control.data_semana,
    estado: state.control.estado,
    profile: state.control.profile,
    data_nivel2 : state.control.data_nivel2,
    punto: state.control.punto,
    fecha_inicio : state.control.fecha_inicio,
    fecha_fin: state.control.fecha_fin,
    tarea: state.control.tarea,
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



export default connect(mapStateToProps, mapDispatchToProps)(controlPageNivel2);
