import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../../actions/index";
import {bindActionCreators} from 'redux';
<<<<<<< HEAD
import GdsLogFila from './GdsLogFila'
=======
<<<<<<< HEAD
import ButtonSalvaSala from './GdsButtonSalvaSala'
=======
>>>>>>> 32963c6d14394c21d536199010cdd102baa6ac0f
import {Text, View, StyleSheet} from 'react-native-web'
import GdsPicker from './GdsPicker'
>>>>>>> 0fce2209c5dbba7ea882ae865a3da11fe0010e92

 
class Cliente extends Component {

<<<<<<< HEAD
  funButton(){
    return(
      console.log("FUNCION BUTTON SALVAR SALA")
    )
  }

=======
>>>>>>> 0fce2209c5dbba7ea882ae865a3da11fe0010e92

  render() {
    const {id_sala, funCambiaNombre,  } = this.props;
    return (
  
     

      <View style={styles.container}>
        <Text>
          Desarrollando Log
        </Text>
<<<<<<< HEAD
        
        <ButtonSalvaSala
          title = 'Button'
          funExecute={()=>this.funButton()}
        />
=======



<View>
        <GdsLogFila 
        id_sala='68888'
        desc_sala="jumbo pepito"
        desc_pre_log="nada"
        desc_log="retenida nsg"
        estado_valido="0"
        estado_ok="0"
        />
</View>
      </View>
>>>>>>> 0fce2209c5dbba7ea882ae865a3da11fe0010e92
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