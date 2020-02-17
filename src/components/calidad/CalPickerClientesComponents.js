import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {Picker} from 'react-native-web';

 

class CalPickerItem extends Component {
  
  funNombreCliente(){

    const{funGuardaNombreCli,cliente,data_cliente} = this.props;
    
    {data_cliente.map((item) => {
      if(cliente===item.esquema)
    
       { funGuardaNombreCli(item.cli_desc)}
    
      })
    }}
    

funPicker(){
  const { funCalGuardaCliente, cliente, data_cliente} = this.props;
    let valor
    if(!cliente){valor=null}else{valor=cliente}

  try {
    
    return (

    <div>
      <h2>Seleccione Cliente {valor}</h2>
        <Picker 
            className="style_picker"
            mode="dropdown"
            selectedValue={valor || ''}
            onValueChange={(value)=>{funCalGuardaCliente(value)}}>
          <Picker.Item label='Seleccione Cliente' value='' key={null}/>/>
            {data_cliente.map((item, key) => {
                return (
                <Picker.Item label={item.cli_desc} value={item.esquema} key={key}/>) 
            })}
              
        </Picker>
    </div>

    )
  

  
  } catch (error) {
    return ( <h1>Seleccione Semana</h1>);
  }

}


  render() {

    return(
      <div>
          {this.funPicker()}
          {this.funNombreCliente()}
      </div>
    );
   
}

}
 

function mapStateToProps(state){
  return{
    cliente: state.calidad.cliente,
    data_cliente: state.calidad.data_cliente
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


export default connect(mapStateToProps, mapDispatchToProps)(CalPickerItem);
