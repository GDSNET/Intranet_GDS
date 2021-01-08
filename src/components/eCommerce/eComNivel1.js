import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import { MdDeleteSweep } from "react-icons/md";
import { IoIosAddCircle, IoMdCreate, } from "react-icons/io";
import dataSala from './apiPauta.json'

 
class eComN1 extends Component {

  componentDidMount(){
    const {} = this.props;
  
    this.mostrarResultado()
    const {id_profile, dataSala, funGetSala} = this.props;
    this.funCargaSalas(id_profile)
    
  }

  funTouchableNivel1(item){
    const {funGuardaSala, history} = this.props;
    
    funGuardaSala(item)

    console.log(history)

    history.push('/eComNivel2')
 
  

  }


async funCargaSalas(){
  const {id_profile,SalasOK} = this.props;

 // const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3009/post_intranet_salas';

let body_data = JSON.stringify({
  "id_usuario" : id_profile
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
          console.log("guardando SALAS" + JSON.stringify(json))
          SalasOK(json)
        });
        
      } catch (e) {
        console.log(e.message)
  
      }  

}


  funCargaJson(){
    
    const {id_profile, dataSala, funGetSala} = this.props;
    
    return(<View>
      <Text>id_profile: {id_profile}</Text>
      <Text>data: {JSON.stringify(dataSala)}</Text>
    </View>)
    

  }

  mostrarResultado = () => {
    const {dataSala} = this.props;
  try {
  
  let algo = dataSala.map((fila,i) => {
  
    
  return(  
  <tr className="regPauta" key={i}>    
  
  
                <th scope="row" key={i}>{i}</th>
                <td>{fila.estado}</td>
                <td>{fila.id_sala}</td>
                <td>{fila.desc_sala}</td>
  
                <td> 
                  <TouchableOpacity  onClick={()=> {this.funTouchableNivel1(fila)}}>
                  <IoMdCreate style={styles.touchable}/>
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


  render() {
    const {} = this.props;
    return (
      <div className ='tabla'>
      <table id="TablaClick" className="TablaPauta table table-hover">
               <thead className="theadPauta">
                   <tr className="bg-primary">
                       <th  scope="col">#</th>
                       <th scope="col">ESTADO</th>
                       <th scope="col">ID SALA</th>
                       <th scope="col">DESCRIPCIÓN SALA</th>
                       <th scope="col">SELECCIÓN</th>   
                   </tr>
               </thead>
               <tbody>
                       {this.mostrarResultado()}
                       
               </tbody>
           </table>
           </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    id_profile: state.eCom.id_profile,
    dataSala: state.eCom.dataSala,

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



export default connect(mapStateToProps, mapDispatchToProps)(eComN1);


const styles = StyleSheet.create({

 touchable: {
  alignItem: 'center',
  },


})