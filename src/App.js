import React, { Component } from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Main from './screen/Main'
import ToAction from './toaction/ToRoot'

import ControlActions from "./actions";


import ScreenCalidad from './screen/ScreenCalidad'
import ScreenOperacion from './screen/ScreenOperacion';
import ScreenComercial from './screen/ScreenComercial';
import ScreenEcommerce from './screen/ScreenEcommerce';


import {TextInput,Image, TouchableOpacity, Text, StyleSheet,View} from 'react-native-web';
import gdsImagen from './images/logogds2020.svg';

import ReactNotifications from 'react-notifications-component';

class App extends Component {

constructor(props){
super(props);
  this.state={
      mensaje:'Hola Mundos',
      variable : '',
      userOK: false,
      usuario: '',
      pass: '',
      usuarioAcceso: 'operacion',
      

  }
}

async componentDidMount(){
 // var datosUsuario =  localStorage.getItem('acceso')
  const {dataUser}= this.props
  console.log("acceso: ",  JSON.stringify(dataUser))



  try {

    if(dataUser.desc_perfil){
      console.log("guardando acceso: ",  JSON.stringify(dataUser.desc_perfil))
      
   
 }
    
  } catch (error) {
    
  }
  
  
  
}


comprobarUser(){
  
  this.funPostLogin(this.state.usuario, this.state.pass)

}

guardaUsuario(datos){
  localStorage.setItem('acceso', datos)
  this.state.usuario = datos.username

}

funUser(valor){
  this.setState({
    usuario: valor
  })

}


funPass(valor){
  this.setState({
    pass: valor
  })

}

funBorrar(){
  localStorage.clear()

}

async funPostLogin(usuario, pass){
  const {funLoginOn, funGuardaProfile}= this.props

  const url = 'http://api.gdsnet.com:3009/post_web_login';

let body_data = JSON.stringify({
  "username" : usuario,
  "password" : pass
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
.then(res => res.json())
.then(res => {

  console.log("Usuario : " + res.username)
  

    if(res.error) {
      
        throw(res.error);
   
    }else if(res.usuario !== "NOUSER") {
    console.log(res.id_usuario)
    funGuardaProfile(res.id_usuario)
    funLoginOn(res)

  }else {
    
    console.log("token : NOUSER")
  }
  
          
        });
        
      } catch (e) {
        console.log(e.message)
  
      }  


}


funLogin(){
  const {dataUser}= this.props

  return(
    <div>

    <View style={styles.contenedor}>

    
            <Image
              style={{width: '100%', height: 250, }}
              source={gdsImagen}
            />
               
            <TextInput style={styles.textinput} 
            
            placeholder='Ingrese Usuario' 
            onChangeText={(text)=> this.funUser(text)}
            value={this.state.usuario}
            />
    
          <TextInput style={styles.textinput} 
            secureTextEntry={true}
            placeholder='Ingrese Password' 
            onChangeText={(text)=> this.funPass(text)}
            value={this.state.pass}
            />
    
            <TouchableOpacity  style={styles.textinput}  onPress={()=>{this.comprobarUser()}}>
              <Text style={styles.style_titulo}> Ingresar </Text>
            </TouchableOpacity>

      </View>
          </div>
  )
}

funSwitchlogin(){

    //console.log(this.props.desPerfil)
      switch (this.props.desPerfil) {
        case 'CALIDAD':
          return ( <ToAction Pantalla={ScreenCalidad}>   </ToAction> )
          
        case 'OPERACION':
          return (  <ToAction Pantalla={ScreenOperacion} /> )
          
          
        case 'COMERCIAL':
          return (<ToAction Pantalla={ScreenComercial} />)

        case 'SISTEMAS':
            return (  <ToAction Pantalla={ScreenComercial} /> )
        case 'E-COMMERCE':
              return (  <ToAction Pantalla={ScreenEcommerce} /> )
            
          
        case 'error':
          default:      return <h1>Ups!, Perfil no creado </h1>
      }
  
}

funInicio(){
  if(this.props.desPerfil){
    return(
      this.funSwitchlogin()
    )
  } else 
      return this.funLogin()
      
      

  }




  render() {
    return (



      <div className="App">
            <ReactNotifications />
            {this.funInicio()}
      </div>
    );
  }
}





function mapStateToProps(state){
  return{
    ...state,
    dataUser: state.to.dataUser,
    desPerfil: state.to.desPerfil
  }
}

function mapDispatchToProps (dispatch) {
 const combiner = Object.assign({},
ControlActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}



export default connect(mapStateToProps, mapDispatchToProps)(App);


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
  style_titulo:{
    fontSize: 20,
    color: '#fff'
  },
  contenedor:{
    alignItems:'center',
    padding: 50
  }

});

