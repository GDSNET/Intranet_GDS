import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import { MdDeleteSweep } from "react-icons/md";
import { IoIosAddCircle, IoMdCreate, } from "react-icons/io";
import plataformas from './apiPlataformas.json'

 
class eComN2 extends Component {

  componentDidMount(){
    const {} = this.props;


  }

  mostrarResultado = () => {
    const {data_sala} = this.props;
  try {
  
  let algo = plataformas.map((fila,i) => {
  
  return(  
  <tr className="regPauta" key={i}>    
  
  
                <th scope="row" key={i}>{i}</th>
                <td>{fila.id_plataforma}</td>
                <td>{fila.desc_plataforma}</td>
                <td>{data_sala.desc_sala}</td>
  
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
    const {data_sala} = this.props;

    console.log(data_sala)
    return (
      <div className ='tabla'>
      <table id="TablaClick" className="TablaPauta table table-hover">
               <thead className="theadPauta">
                   <tr className="bg-primary">
                       <th  scope="col">#</th>
                       <th scope="col">ID PLATAFORMA</th>
                       <th scope="col">DESC PLATAFORMA</th>
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
    data_sala: state.eCom.data_sala

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

 touchable: {
  alignItem: 'center',
  },


})