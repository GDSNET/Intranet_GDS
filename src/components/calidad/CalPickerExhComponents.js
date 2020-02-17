import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {Picker} from 'react-native-web';

 

class PickerExhItem extends Component {
  

funPicker(){
  const { funCalGuardaExh, exh, data_exh} = this.props;
    let valor
    if(!exh){valor='-1'}else{valor=exh}

  try {
    
    return (

    <div>
      <h2>Seleccione Exhibicion {exh}</h2>
        <Picker 
            className="style_picker"
            mode="dropdown"
            selectedValue={valor || ''}
            onValueChange={(value)=>{funCalGuardaExh(value)}}>
            {data_exh.map((item, key) => {
                return (
                <Picker.Item label={item.desc_exhibicion} value={item.id_exhibicion} key={key}/>) 
            })}
              
        </Picker>
    </div>

    )
  

  
  } catch (error) {
    return ( <h1>Seleccione Exhibicion</h1>);
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
    exh: state.calidad.exh,
    data_exh: state.calidad.data_exh
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


export default connect(mapStateToProps, mapDispatchToProps)(PickerExhItem);
