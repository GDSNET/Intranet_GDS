import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import {View, Text, StyleSheet} from 'react-native-web';


 
class dashCard0 extends Component {



  render() {
    const {estado} = this.props;
    return (
<View style={styles.container}>
 <Text style={{color: '#ffffff'}}>
  Sample text here
 </Text>
</View>
    );
  }
}
 

function mapStateToProps(state){
  return{
    ...state

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



export default connect(mapStateToProps, mapDispatchToProps)(dashCard0);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
