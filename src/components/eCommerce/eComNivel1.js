import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import { MdDeleteSweep } from "react-icons/md";
import { IoIosAddCircle, IoMdCreate, } from "react-icons/io";
import plataformas from './apiPlataformas.json'
import pautaPdv from './apiPauta.json'

 
class eComN1 extends Component {

  componentDidMount(){
    const {} = this.props;
  
    this.mostrarResultado()
    
  }

  funTouchableNivel1(item){
    const {funGuardaIdSala, history} = this.props;
    
    funGuardaIdSala(item.id_sala)

    console.log(history)
    /*history.push('/eComNivel2')*/
 
  

  }


  mostrarResultado = () => {
    const {} = this.props;
  try {
  
  let algo = pautaPdv.map((fila,i) => {
  
    
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
    nombre: state.control.nombre

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