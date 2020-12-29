

import React, { Component } from "react";
//import {ProgressBar} from 'react-native-web';
import './ProgresStile.css'






export default class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = { progress: 0, color: '#FFF' };
  }

  

  componentDidMount() {
    const {color, progress} = this.props;
    this.setState({ progress: progress, color: color });
  }

  render() {
    const {color, progress} = this.state;
    return (
      

      <div className="progressbarmini">
          <div className="progress" style={{ width: `${progress}%`,   background: color }} />
        </div>

      
    );
  }
}


