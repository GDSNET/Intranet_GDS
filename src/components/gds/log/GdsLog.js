import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
import GdsLogFila from './GdsLogFila'

import ButtonSalvaSala from './GdsButtonSalvaSala'
import {Text, View, StyleSheet} from 'react-native-web'
import GdsPicker from './GdsPicker'

 
class Cliente extends Component {

  funButton(){
    return(
      console.log("FUNCION BUTTON SALVAR SALA")
    )
  }



  render() {
    const {id_sala, funCambiaNombre,  } = this.props;
    return (
  
    
      <View style={styles.container}>


        <Text>
          Desarrollando Log
        </Text>
        
        <ButtonSalvaSala
          title = 'Button'
          funExecute={()=>this.funButton()}
        />



<View>
        <GdsLogFila 
        id_sala='68888'
        desc_sala="jumbo juacito"
        desc_pre_log="nada"
        desc_log="retenida nsg"
        estado_valido="0"
        estado_ok="0"
        />
</View>

        <Text>
          Desarrollando Log
        </Text>
        <ButtonSalvaSala
          title = 'Button'
          funExecute={()=>this.funButton()}
        />
<GdsPicker />
<GdsPicker />
<GdsPicker />


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



export default connect(mapStateToProps, mapDispatchToProps)(Cliente);

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row'
    
  },
  
});