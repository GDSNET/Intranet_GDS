import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {Picker} from 'react-native-web';

 

class CalPickerCliAppItem extends Component {
    

funPicker(){
  const { funGuardaClienteApp, cliente_app, data_cliente_app} = this.props;
    let valor
    if(!cliente_app){valor=null}else{valor=cliente_app}

  try {
    
    return (

    <div>
      <h2>Seleccione Cliente {cliente_app}</h2>
        <Picker 
            className="style_picker"
            mode="dropdown"
            selectedValue={valor || ''}
            onValueChange={(value)=>{funGuardaClienteApp(value)}}>
          <Picker.Item label='Seleccione Cliente' value='' key={null}/>
            {data_cliente_app.map((item, key) => {
                return (
                <Picker.Item label={item.desc_cliente} value={item.id_cliente} key={key}/>) 
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
      </div>
    );
   
}

}
 

function mapStateToProps(state){
  return{
    cliente_app: state.calidad.cliente_app,
    data_cliente_app: state.calidad.data_cliente_app
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


export default connect(mapStateToProps, mapDispatchToProps)(CalPickerCliAppItem);
