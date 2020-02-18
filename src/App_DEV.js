import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import ControlActions from "./actions/index";
import {bindActionCreators} from 'redux';
import Main from './screen/Main'
import {TextInput,Image, TouchableOpacity, Text, StyleSheet,View} from 'react-native-web';
import gdsImagen from './images/gds.svg';

class App extends Component {

constructor(props){

  super(props);
  this.state={
      mensaje:'Hola Mundos',
      variable : '',
      userOK: false,
      usuario: '',
      pass: ''
      
  }
}

conprobarUser(){
  if (this.state.usuario == 'calidad' && this.state.pass == 'calidad2019' ){
    console.log('paso por true  comprobar');
    this.setState({
      userOK: true
    })
  }
  else if (this.state.usuario == 'operacion' && this.state.pass == 'operacion2019' ){
    console.log('paso por true  comprobar');
    this.setState({
      userOK: true
    })
  }

  else {
    console.log('paso por false comprobar')
    this.setState({
      userOK: false
    })
  }
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

funiflogin(){
if(this.state.userOK){
  return(
    <Main />
  )
}
else {
  return(
    <div>

<View style={styles.contenedor}>
        <Image
          style={{width: 200, height: 150, }}
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

        <TouchableOpacity  style={styles.textinput}  onPress={()=>{this.conprobarUser()}}>
          <Text style={styles.style_titulo}> Ingresar</Text>
        </TouchableOpacity>
  </View>
      </div>
  )
}


}


  render() {
    return (



      <div className="App">
      
      <Main />
  
          
     
        
      </div>
    );
  }
}





function mapStateToProps(state){
  return{
    ...state

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
