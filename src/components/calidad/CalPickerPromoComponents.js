import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {Picker} from 'react-native-web';

 

class PickerPromoItem extends Component {
  

funPicker(){
  const { funCalGuardaPromo, promo, data_promo} = this.props;
    let valor
    if(!promo){valor='-1'}else{valor=promo}

  try {
    
    return (

    <div>
      <h2>Seleccione Promocion {promo}</h2>
        <Picker 
            className="style_picker"
            mode="dropdown"
            selectedValue={valor}
            onValueChange={(value)=>{funCalGuardaPromo(value)}}>
          
            {data_promo.map((item, key) => {
                return (
                <Picker.Item label={item.promo_desc} value={item.promo_id} key={key}/>) 
            })}
              
        </Picker>
    </div>

    )
  

  
  } catch (error) {
    return ( <h1>Seleccione Promocion</h1>);
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
    promo: state.calidad.promo,
    data_promo: state.calidad.data_promo
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


export default connect(mapStateToProps, mapDispatchToProps)(PickerPromoItem);
