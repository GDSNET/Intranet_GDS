
import React, { Component } from "react";
import { IoIosRemove } from "react-icons/io";
import {TouchableOpacity,Text} from 'react-native-web'

import {
  withRouter
} from 'react-router-dom'

class Register extends React.Component {
  handleSubmit (){
    this.props.history.push('/Pagina')
  }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <button onPress={this.handleSubmit} />

        <TouchableOpacity onPress={()=>{this.handleSubmit()}} >
             <Text>Ir</Text>
        </TouchableOpacity>
      </div>
    )
  }
}

export default withRouter(Register)