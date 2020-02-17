import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {Picker} from 'react-native-web';

 

class PickerItemLogCliente extends Component {
  

funPicker(){
  const { funGdsGuardaClienteHtml, cliente, data_cliente} = this.props;
    let valor
    if(!cliente){valor='-1'}else{valor=cliente}

  try {
    
    return (

    <div>
      <h2>Seleccione Cliente {cliente}</h2>
        <Picker 
            className="style_picker"
            mode="dropdown"
            selectedValue={valor || ''}
            onValueChange={(value)=>{funGdsGuardaClienteHtml(value)}}>
          <Picker.Item label='Seleccione' value='' key={"-1"}/>/>
            {data_cliente.map((item, key) => {
                return (
                <Picker.Item label={item.desc_cliente} value={item.id_cliente} key={key}/>) 
            })}
              
        </Picker>
    </div>

    )
  } catch (error) {
    return ( <h1>Seleccione Cliente</h1>);
  }

}


  render() {

    return(
      <div>
          {this.funPicker()}
      </div>
    );
   
}

}
 

function mapStateToProps(state){
  return{
    semana: state.gds.semana,
    data_cliente: state.gds.data_cliente,
    cliente:  state.gds.cliente,
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


export default connect(mapStateToProps, mapDispatchToProps)(PickerItemLogCliente);
