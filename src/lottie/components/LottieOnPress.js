
import React, { Component } from 'react';
import Lottie from 'lottie-react-web'
import {View,  StyleSheet, TouchableOpacity} from 'react-native-web'


export default class LottieOnPress extends Component {

  constructor(props){
    super(props)
    this.state = {  
      isToggled: false  
    }


  }

  funPrecionar(){
    const {funPress} = this.props;
    this.setState({ isToggled: !this.state.isToggled})
    funPress();
  }

  render() {    

    const {icon, width, speed} = this.props;

    return (
    

      <TouchableOpacity style={styles.viewlottie} 
        onPress={()=>this.funPrecionar()}>
            <Lottie  style={styles.viewlottie} 
            width={width}
            speed={speed}
            direction={this.state.isToggled ? 1 : -1}
            options={{
              animationData: icon,
              loop: false,
            }}
          />
        </TouchableOpacity>
        

    


    )
  }

}


const styles = StyleSheet.create({
   
    container: {
      flex: 1,
      
    },
    viewlottie: {
 
    }
  });
  