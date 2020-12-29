import React, { Component } from 'react';
import { connect } from "react-redux";
import ControlActions from "../../../actions";
import {bindActionCreators} from 'redux';
import {View, Text, StyleSheet, Dimensions} from 'react-native-web'
import * as colores from '../../../constants/coloresConstants'
import GridPrincipal from '../Grid/gridCategoria'




import LottieHoverPress from '../../../lottie/components/LottieHoverPress'
import LottieOnPress from '../../../lottie/components/LottieOnPress'


import toggleAnimation from  '../../../lottie/images/413-shopping-basket-icon.json'
import toggleAnimation1 from  '../../../lottie/images/433-checked-done.json'
import toggleAnimation2 from  '../../../lottie/images/564-bar-chart.json'
import toggleAnimation3 from  '../../../lottie/images/746-shopping-cart.json'
import toggleAnimation4 from  '../../../lottie/images/2885-avatar-animations.json'
import toggleAnimation5 from  '../../../lottie/images/4250-pull-to-refresh.json'
import toggleAnimation6 from  '../../../lottie/images/4284-notification.json'
import toggleAnimation7 from  '../../../lottie/images/4317-shopping-cart.json'
import toggleAnimation8 from  '../../../lottie/images/4336-favorite.json'
import toggleAnimation9 from  '../../../lottie/images/4460-complete.json'
import toggleAnimation10 from  '../../../lottie/images/4818-open-close-deal-banner.json'
import toggleAnimation11 from  '../../../lottie/images/5166-users-icons.json'
import toggleAnimation12 from  '../../../lottie/images/5630-add-to-cart.json'
import toggleAnimation13 from  '../../../lottie/images/5631-added-to-cart.json'
import toggleAnimation14 from  '../../../lottie/images/5647-scan-barcode.json'
import toggleAnimation15 from  '../../../lottie/images/6479-add-to-cloud.json'
import toggleAnimation16 from  '../../../lottie/images/8822-graficos-aleatorios-1.json'
import toggleAnimation17 from  '../../../lottie/images/8990-graficos-aleatorios.json'
import toggleAnimation18 from  '../../../lottie/images/9226-rocket-animation.json'
import toggleAnimation19 from  '../../../lottie/images/download-w24-h24.json'
import toggleAnimation20 from  '../../../lottie/images/mail-w32-h32.json'
import toggleAnimation21 from  '../../../lottie/images/star-w24-h24.json'
import toggleAnimation22 from  '../../../lottie/images/toggle-w24-h24.json'



import data from '../../../json/data.json'

class Dash extends Component {


  funStyles(){
    if ( Dimensions.get('window').width > 600){
     return(
       styles1.container
     )
    }
    else
      {
        return(
       styles2.container
        )
        }
  }



  render() {

    const {titulo} = this.props;
    return (
      
        <View style={styles.container}>


           <Text> Pagina en Desarrollo... {titulo}</Text>
         
         
           <GridPrincipal
            data={data} />

           <View style={styles.view_pequeño}>
                    <LottieHoverPress
                    icon={toggleAnimation}
                    funPress={()=>this.funEnviar()}
                    />
              </View>

              <View style={this.funStyles()}>

<View style={styles.view_grande}>
    
    <LottieHoverPress
    
    icon={toggleAnimation16}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_grande}>
    
    <LottieHoverPress
    
    icon={toggleAnimation17}
    funPress={()=>this.funEnviar()}
    />
</View>

       

<View style={styles.view_pequeño}>
        <LottieHoverPress
        
        icon={toggleAnimation}
        funPress={()=>this.funEnviar()}
        />
  </View>
  
  <View style={styles.view_pequeño}>
        <LottieHoverPress
        
        icon={toggleAnimation1}
        funPress={()=>this.funEnviar()}
        />
  </View>
 
  <View style={styles.view_pequeño}>
        <LottieHoverPress
        
        icon={toggleAnimation3}
        funPress={()=>this.funEnviar()}
        />
  </View>
  <View style={styles.view_pequeño}>
    
        <LottieHoverPress
        
        icon={toggleAnimation4}
        funPress={()=>this.funEnviar()}
        />
  </View>
  <View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation5}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation6}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation7}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation8}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation9}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation10}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation11}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation12}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation13}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation14}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation15}
    funPress={()=>this.funEnviar()}
    />
</View>

<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation18}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation19}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation20}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation21}
    funPress={()=>this.funEnviar()}
    />
</View>
<View style={styles.view_pequeño}>
    
    <LottieHoverPress
    
    icon={toggleAnimation22}
    funPress={()=>this.funEnviar()}
    />
</View>





</View>


        </View>

    );
  }
}





function mapStateToProps(state){
  return{
    ...state,        
    titulo: state.to.titulo,


  }
}

function mapDispatchToProps (dispatch) {
 const combiner = Object.assign({},
ControlActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}



export default connect(mapStateToProps, mapDispatchToProps)(Dash);



const styles = StyleSheet.create({
   
  container: {
    
    borderRadius: 30,
    marginTop:20,
    
  },
  view_pequeño: {
    backgroundColor: '#273746',
    width: 200,
    height: 200,
    
  },
  view_grande: {
    backgroundColor: '#273746',
    width: 500,
    height: 500,
    
  },
})

const styles1 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'row'

  }
});

const styles2 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
