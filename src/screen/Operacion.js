import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import Picker from '../components/control/PickerComponents';
import {TextInput, StyleSheet, ActivityIndicator} from 'react-native-web';
import Button from '../components/publica/buttonComponents';


 
class Operacion extends Component {

  componentDidMount(){
    this.funApiSeamana();
  }

async funApiSeamana(){
const {funGuardaSemana} = this.props;

//const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://api.gdsnet.com:3005/post_api_semana';

    const config =  {
      method: 'POST',
      headers: {
      "Content-Type": "application/json",
      },
    }

await  fetch(url, config)
        .then((response) => {
         return response.json()})
        .then((json) => {
          console.log("guardando datos" + JSON.stringify(json))
          funGuardaSemana(json.semana)
        });

}

funIr(){
  const {numero, profile, history, funCambiaEstado,funBorraNivel1,funBorrafetch } = this.props;
if(!numero ){
  funCambiaEstado('Semana Vacia, favor revisar :D')
}else if (!profile){
  funCambiaEstado('Profile Vacio, favor revisar :D')
}else{

  funBorraNivel1();
  funBorrafetch();
  history.push('/ControlPageNivel1')
}
  
}
  render() {
    const {data_semana, estado, funCambiaProfile, profile} = this.props;
    if (data_semana.length > 0){
      return (
        <div>

        <Picker />
        <h1>Ingrese Profile: {profile} </h1>
        <TextInput style={styles.textinput} 
        keyboardType='numeric'
        placeholder='Ingrese Profile' 
        onChangeText={(text)=> funCambiaProfile(text)}
        value={profile}
        />
        <div >
        <Button title='Ir' className = 'style_boton_2' funExecute={()=>this.funIr()} varible={''} />
        </div>
        
        <div className={'style_status'}>
            <h5 className='style_status_text'>{estado}</h5>
        </div>

      </div>
        
      );
    }
    else{
      return(
        <ActivityIndicator  color='#FFF' size='200' />
       
      )
    }
    
  }
}
 

function mapStateToProps(state){
  return{
    data_semana: state.control.data_semana,
    estado: state.control.estado,
    profile: state.control.profile,
    numero: state.control.numero,
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




export default connect(mapStateToProps, mapDispatchToProps)(Operacion);


const styles = StyleSheet.create({

  textinput: {
    
    padding: 20,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
    marginHorizontal: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    placeholderTextColor: '#FFCAB8',
    fontSize: 20,
  },
});
