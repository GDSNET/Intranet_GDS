import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {Text, View, StyleSheet} from 'react-native-web'
import * as gds_function from './GdsFunction'

 
class Comercial extends Component {

  componentDidMount(){
    
    const {funApiCargaCli} = this.props;

    new Promise((resolve, reject) => {
      resolve(gds_function.funApiCargaCli())
  }).then(res=>{
    alert(JSON.stringify(res))
    funApiCargaCli(res)
  })

  }

  render() {


    return (
  
    <View>
              <Text>hola soy la carga de parametros</Text>

      </View>
    );
  }
}
 

function mapStateToProps(state){
  return{

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



export default connect(mapStateToProps, mapDispatchToProps)(Comercial);

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row'
    
  },
  
});