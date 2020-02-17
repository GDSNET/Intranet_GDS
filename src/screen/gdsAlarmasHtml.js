import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import Button from '../components/publica/buttonComponents2';
import GdsMenu from "../components/gds/GdsMenu";
import GoBack from '../components/control/ButtonGoBack';


class gdsAlarmasHtml extends Component {

  componentDidMount(){

    this.funApiAlarmaHtml();
      
  }


  async funApiAlarmaHtml(){
    const {funGdsGuardaDataHtml, sala, cliente} = this.props;

    const url = 'http://api.gdsnet.com:3005/api_gds_select_alarmas_html';
    
    let body_data = JSON.stringify({
      "cliente" : cliente,
      "sala" : sala,

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
              funGdsGuardaDataHtml(json.alarma)
              
            });
    
    }

    funTittleReturn(estadoAlarma){

      // const {estadoAlarma} = this.props;
 
       if(estadoAlarma === 0){
         return ('Retener')
       }
       else if (estadoAlarma === 1){
        return ('Liberar')
       }
     }

    funIconReturn(estadoAlarma){

     // const {estadoAlarma} = this.props;

      if(estadoAlarma === 0){
        return (<p  className='p_alarma_liberada'>Alarma Liberada</p>)
      }
      else if (estadoAlarma === 1){
        return (<p className='p_alarma_retenida'>Alarma Retenida</p> )
      }
    }


 async funIr(variableEstado){

      var estado = null;   
      const {sala, cliente, history,funGdsBorraDataHtml} = this.props;

      const url = 'http://api.gdsnet.com:3005/api_gds_retiene_salas';

      if(variableEstado === 0){
         estado = 1
      }
      else if (variableEstado === 1){
         estado = 0
      }
      
      let body_data = JSON.stringify({
        "id_cliente" : cliente,
        "sala" : sala,
        "estado": estado,
  
        })

        console.log(body_data)
  
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
                window.alert(JSON.stringify(json))
                
              });
    funGdsBorraDataHtml();
    history.push('/gds')

    }

    mostrarResultado = () => {
      const {data_html} = this.props;
    try {
    let algo = data_html.map((fila,i) => {
      
    return(
    <tr className="regPauta" key={i}>
    
    
                  <th scope="row" key={i}>{i}</th>
                  <td>{fila.id_cliente}</td>
                  <td>{fila.id_pto}</td>
                  <td>{fila.correo}</td>
                  <td>{fila.copia}</td>
                  <td>{fila.fecha_envio}</td>
                  <td> 
                  {this.funIconReturn(fila.estado_retenida)}
                  </td>
                  <td>
                  <Button title={this.funTittleReturn(fila.estado_retenida)} className = 'style_boton_alertas' funExecute={()=>this.funIr(fila.estado_retenida)} varible={''} />
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

  render() {
    const {estado} = this.props;
   
    return (
      
      <div>

          <GoBack history={this.props.history} varIr={'gdsAlarmasHtml00'}/>
          <div className ='tabla'>
               <table id="TablaClick" className="TablaPauta table table-hover">
                        <thead className="theadPauta">
                            <tr className="bg-primary">
                                <th  scope="col">#</th>
                                <th scope="col">ID CLIENTE</th>
                                <th scope="col">ID PUNTO</th>
                                <th scope="col">CORREO</th>
                                <th scope="col">COPIA</th>
                                <th scope="col">FECHA DE ENVIO</th>
                                <th scope="col">ESTADO</th>     
                                <th scope="col">ACCION</th>
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
    estado: state.gds.estado,
    sala: state.gds.sala, 
    cliente: state.gds.cliente, 
    data_html: state.gds.data_html,
    estadoAlarma: state.gds.estadoAlarma,
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



export default connect(mapStateToProps, mapDispatchToProps)(gdsAlarmasHtml);
