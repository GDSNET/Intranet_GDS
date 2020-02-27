import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';
import {DiAptana} from 'react-icons/di';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
 
class Home extends Component {

  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message a aksudhg kajsghd kajsd kajhd ajshd ajsdlkasdlkajs ldkjasd lasdjasldk jasdlksj d', 'Title here  alskdja lskdj laksjd laksjd lakjsd lkajsl dkjalksdj alkdj laksjlaksjdl ajsdlk jalksdj ');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    }
  }

 
  render() {
    const {controlestado,calidadestado, stopAction, startAction, visible } = this.props;

    return (
      <div>
        
        <DiAptana className="style_image_home"></DiAptana>
        <DiAptana className="style_image_home_izq"></DiAptana>
        <DiAptana className="style_image_home"></DiAptana>

        <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>

        <NotificationContainer/>
    
      </div>
    );
  }
}
 

function mapStateToProps(state){
  return{
    
    ...state,
    visible: state.control.visible,
   controlestado: state.control.estado,
  calidadestado: state.calidad.estado

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



export default connect(mapStateToProps, mapDispatchToProps)(Home);
