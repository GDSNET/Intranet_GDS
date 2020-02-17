import React, { PureComponent } from 'react';
import {Text, View } from 'react-native';
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import Switch from "react-switch";


class SwitchOnValueChangeExample extends PureComponent {

  handleChange(checked) {

    const {estadoAlarma, funGdsGuardaEstado} = this.props;


    this.setState({ checked });
    console.log(checked)
    this.funValidaSwitch();

    if(checked === true){
      funGdsGuardaEstado(0)
    }
    if(checked === false){
      funGdsGuardaEstado(1)
    }

  }

componentDidMount(){
console.log("componentDidMount")

    const {data_html,funGdsGuardaEstado } = this.props;

    data_html.map((fila,i) => {
    funGdsGuardaEstado(fila.estado_retenida)
    });

    this.funValidaSwitch()
  }

funValidaSwitch(){
  console.log("funValidaSwitch")

  const {estadoAlarma} = this.props;

  var validador = null;

  if(estadoAlarma === 0){
    this.setState({checked: false})
      console.log('IF')
  }
  else if (estadoAlarma === 1){
    this.setState({checked: true})
      console.log('ELSE IF')
      }
}


constructor() {
  super();

  this.state = { checked: false  };
  this.handleChange = this.handleChange.bind(this);
}


 
  render() {

    this.funValidaSwitch()

    return (
        <View>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </View>
    );
  }

}

function mapStateToProps(state){
  return{
    estadoAlarma: state.gds.estadoAlarma,
    data_html: state.gds.data_html,
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

export default connect(mapStateToProps, mapDispatchToProps)(SwitchOnValueChangeExample);
//export default SwitchOnValueChangeExample;