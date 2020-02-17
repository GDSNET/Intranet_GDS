import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {Picker} from 'react-native-web';

 

class PickerItem extends Component {
  

funPicker(){
  const { funCalGuardaSemana, semana, data_semana} = this.props;
    let valor
    if(!semana){valor='-1'}else{valor=semana}

  try {
    
    return (

    <div>
      <h2>Seleccione Semana {semana}</h2>
        <Picker 
            className="style_picker"
            mode="dropdown"
            selectedValue={valor || ''}
            onValueChange={(value)=>{funCalGuardaSemana(value)}}>
          <Picker.Item label='Seleccione' value='' key={"-1"}/>/>
            {data_semana.map((item, key) => {
                return (
                <Picker.Item label={item.desc_tie_dias_semana} value={item.id_tie_semana} key={key}/>) 
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
    semana: state.calidad.semana,
    data_semana: state.calidad.data_semana
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


export default connect(mapStateToProps, mapDispatchToProps)(PickerItem);
