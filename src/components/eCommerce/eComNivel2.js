import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native-web';
import { MdDeleteSweep } from "react-icons/md";
import { IoIosAddCircle, IoMdCreate, } from "react-icons/io";
import plataformas from './apiPlataformas.json'
import pautaPdv from './apiPauta.json'

 
class eComN2 extends Component {

  componentDidMount(){
    const {} = this.props;


  }


  render() {
    const {id_sala} = this.props;
    return (
      <div >
       {id_sala}
      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    id_sala: state.eCom.id_sala

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



export default connect(mapStateToProps, mapDispatchToProps)(eComN2);


const styles = StyleSheet.create({

 touchable: {
  alignItem: 'center',
  },


})