import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {ActivityIndicator} from 'react-native-web';
import GoBack from '../publica/ButtonGoBack';
 
class controlPageNivel3 extends Component {

async funLLenaDatosN3(profile,punto,fecha_inicio,fecha_fin,tarea){
  const {funGuardaDatosNivel3,tarea_det} = this.props

  //const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3005/api_contro_op_detalle';

let body_data = JSON.stringify({
  "Usuario_Id" : profile,
  "fecha_inicio" : fecha_inicio,
  "fecha_fin" : fecha_fin,
  "PtoObs_Id" : punto,
  "Tarea_Id" : tarea,
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
          funGuardaDatosNivel3(json.pto_det,tarea_det)
        });

}

async componentDidMount(){

  const {funBorraNivel3} = this.props;

  await funBorraNivel3();

  await this.funDatosNivel3()

}

async funDatosNivel3(){
  const {profile,punto,fecha_inicio,fecha_fin,tarea} = this.props;

try {
  console.log(profile,punto,fecha_inicio,fecha_fin,tarea)
  await this.funLLenaDatosN3(profile,punto,fecha_inicio,fecha_fin,tarea)

} catch(error)  {
  this.funCatch();
}
  }


mostrarResultado = () => {
      const {data_nivel3} = this.props;
try {            
  let algo = data_nivel3.map((fila,i) => {    

      
  return(
              <tr className="regPauta" key={i}>                        
                  <th scope="row" key={i}>{i}</th>
                  <td>{fila.PtoObs_Id}</td>
                  <td>{fila.Dia_Id}</td>
                  <td>{fila.sku_id}</td>
                  <td>{fila.Sku_Id}</td>
                  <td>{fila.sku_desc}</td>
                  <td>{fila.Exhibicion_Id}</td>
                  <td>{fila.Frentes}</td>
                  <td>{fila.Precio}</td>
                  <td>{fila.Promocion_Id}</td>
                
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

  render() {
    const {estado,profile, punto,tarea,history,tarea_det,data_nivel3} = this.props;
    if(!profile){
      history.push('/Operacion')
    }

    if (data_nivel3.length > 0){
      return (
        <div>
                <GoBack history={this.props.history} varIr={'controlPageNivel2'}/>
            <h1>Detalle de SKU</h1>
           <p>Sala: {punto} - Profile:{profile}  - Tarea_id: {tarea} - Tarea_descripcion: {tarea_det} </p>
           <div className='tabla'>
          <table id="TablaClick" className="TablaPauta table table-hover">
                    <thead className="theadPauta">
                        <tr className="bg-primary">
                            <th  scope="col">#</th>
                            <th scope="col">PUNTO</th>
                            <th scope="col">ID DIA</th>
                            <th scope="col">ID_SKU_GDS</th>
                            <th scope="col">CODBAR_SKU</th>
                            <th scope="col">DESC_SKU</th>
                            <th scope="col">EXHIBICION</th>
                            <th scope="col">FRENTES</th>
                            <th scope="col">PRECIO</th>
                            <th scope="col">PROMOCION</th>
                            
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
  else
  {
    return (
      <div>
      <GoBack history={this.props.history} varIr={'controlPageNivel2'}/>
        <ActivityIndicator  color='#FFF' size='200' />          
      </div> 
        );    
  }
  }
  
}
 

function mapStateToProps(state){
  return{
    numero: state.control.numero,
    estado: state.control.estado,
    profile: state.control.profile,
    data_nivel3 : state.control.data_nivel3,
    punto: state.control.punto,
    fecha_inicio : state.control.fecha_inicio,
    fecha_fin: state.control.fecha_fin,
    tarea: state.control.tarea,
    tarea_det: state.control.tarea_det,
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



export default connect(mapStateToProps, mapDispatchToProps)(controlPageNivel3);
