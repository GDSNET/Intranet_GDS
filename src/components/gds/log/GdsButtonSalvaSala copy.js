import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native-web'

 
class ButtonSalvaSala extends Component {


  render() {
    const {title,funExecute,variable} = this.props;
    return (
      <View style={styles.container}  >
        <TouchableOpacity style={styles.touch}  onClick={()=>{funExecute()}}>
          <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>

        {variable}
        </View>
    );
  }
}
 

function mapStateToProps(state){
  return{
    nombre: state.control.nombre

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



export default connect(mapStateToProps, mapDispatchToProps)(ButtonSalvaSala);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  touch: {
    
    padding: 20,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
    marginHorizontal: 100,
    shadowColor: '#333',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', 
  },
});
