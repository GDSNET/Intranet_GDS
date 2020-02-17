import React, { Component } from "react";
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import {TouchableOpacity} from 'react-native-web'




class GoBack extends Component {

  funIr(varIr){
    console.log(varIr)
    this.props.history.push('/' + varIr);
  }

  
  render() {
    
    return (
      <div className='style_buton_back'>
      <TouchableOpacity onClick={()=>{this.funIr(this.props.varIr)}} >
        <IoIosArrowDropleftCircle className="style_image" />
      </TouchableOpacity>
      </div>
    );
  }
}
 




export default GoBack;
