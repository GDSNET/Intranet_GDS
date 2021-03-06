import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import { StyleSheet, Text} from 'react-native-web';
import Form from '../components/eCommerce/eComNivel1'


class Calidad extends Component {


 async componentDidMount(){
    
    
    console.log("Solicitando planilla")
   const url = 'http://api.gdsnet.com:3009/post_intranet_mecanica';
  
      const config =  {
        method: 'POST',

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
            this.props.funApiExhibiciones(json)
            
          });
          
        } catch (e) {
          console.log(e.message)
    
        }  
  
  }
  
  


  

  render() {
    const {history} = this.props;

       
    return (

      <div>     
        
        <Form history = {history}/>
        
     
        </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    estado: state.eCom.estado,
    
    
    
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

export default connect(mapStateToProps, mapDispatchToProps)(Calidad);


const styles = StyleSheet.create({

  textinput: {    
    padding: 20,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    placeholderTextColor: '#FFCAB8',
    fontSize: 16,
  },
  textinput_ok: {    
    padding: 20,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#33FF93',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#000',
    placeholderTextColor: '#FFCAB8',
    fontSize: 16,
  },
});
