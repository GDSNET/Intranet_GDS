import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {TouchableOpacity,ActivityIndicator} from 'react-native-web';
import { IoIosEye } from "react-icons/io";
import GoBack from '../publica/ButtonGoBack';



 
class controlPageNivel1 extends Component {

async funLLenaDatosN1(fecha_inicio, fecha_fin){
  const {funGuardaDatosNivel1,profile,funGuardaDias} = this.props

  //const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3005/post_api_control_op_pto_obs';

let body_data = JSON.stringify({
  "Usuario_Id" : profile,
  "fecha_inicio" : fecha_inicio,
  "fecha_fin" : fecha_fin,
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
          funGuardaDatosNivel1(json.pto_servicio)
        });
        
        funGuardaDias(fecha_inicio,fecha_fin)

}

funBuscaSemana(){
const {data_semana, numero,history} = this.props;
if(!numero){
  history.push('/Operacion')
}

  return data_semana.map((item) => {
    if(item.id_tie_semana == numero){

      this.funLLenaDatosN1(item.fecha_inicio, item.fecha_fin)
    
    }

})

}

async componentDidMount(){

  await this.funBuscaSemana()

}



funTouchableNivel1(pdv){
  const {funGuardaPunto, history,funBorraNivel2} = this.props;

  {funGuardaPunto(pdv)}
  funBorraNivel2();
  history.push('/controlPageNivel2')
}


 mostrarResultado = () => {
  const {data_nivel1} = this.props;
try {

let algo = data_nivel1.map((fila,i) => {

  
return(  
<tr className="regPauta" key={i}>    


              <th scope="row" key={i}>{i}</th>
              <td>{fila.PtoObs_Id}</td>
              <td>{fila.po_desc}</td>
              <td>{fila.Dia_Id}</td>
              <td>{fila.ser_desc}</td>
              <td>{fila.Usuario_Id}</td>

              <td> 
                <TouchableOpacity onClick={()=> {this.funTouchableNivel1(fila.PtoObs_Id)}}>
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

funCatch(){

  return(<h1>Cargando ...</h1> )

}

componentWillMount(){

  return(<h3>componentWillMount</h3>)
}

 render() {
    const {numero, estado,profile, estado_fetch,data_nivel1} = this.props;
   
try {
  

    if (estado_fetch > 0){

        if(data_nivel1.length > 0){
          return (
            <div>
            
            <GoBack history={this.props.history} varIr={'Operacion'}/>
            
               <h1>Detalle Punto Servicio</h1>
               <p>Semana Id Seleccion: {numero} - Profile: {profile}</p>
               <div className ='tabla'>
               <table id="TablaClick" className="TablaPauta table table-hover">
                        <thead className="theadPauta">
                            <tr className="bg-primary">
                                <th  scope="col">#</th>
                                
                                <th scope="col">ID SALA</th>
                                <th scope="col">DESC SALA</th>
                                <th scope="col">DIA</th>
                                <th scope="col">DESC SERVICIO</th>
                                <th scope="col">USUARIO</th>     
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
        else{
          return(<div className='div_prof'>
            <GoBack history={this.props.history} varIr={'Operacion'}/>
            EL PROFILE {profile} NO TIENE MEDICION PARA LA SEMANA SELECCIONADA  
          </div>)
        }

}
else
{
  return (
<div>
  <GoBack history={this.props.history} varIr={'Operacion'}/>
  <ActivityIndicator  color='#FFF' size='100' />

    
</div>
    

    
  );

}

} catch (error) {
  return(
    <ActivityIndicator  color='#FFF' size='100' />
  )

}

  
  }
}
 

function mapStateToProps(state){
  return{
    numero: state.control.numero,
    data_semana: state.control.data_semana,
    estado: state.control.estado,
    profile: state.control.profile,
    data_nivel1 : state.control.data_nivel1,
    punto: state.control.punto,
    fecha_inicio : state.control.fecha_inicio,
    fecha_fin: state.control.fecha_fin,
    estado_fetch: state.control.estado_fetch,
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



export default connect(mapStateToProps, mapDispatchToProps)(controlPageNivel1);



