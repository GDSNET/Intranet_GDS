import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../../actions/index";
import {bindActionCreators} from 'redux';
import { slide as Menu } from 'react-burger-menu'
import {IoIosMail,IoMdTrash,IoMdRefresh} from "react-icons/io";


class GdsMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/#/gdsAlarmasHtml00"><IoIosMail/> Liberar Alertas</a>
        <a id="about" className="menu-item" href="/#/gdsEliminaMedicion"><IoMdTrash/> Eliminar Mediciones</a>
        <a id="about" className="menu-item" href="/#/gdsActualizaSalaLog"><IoMdRefresh/> Modifica Estado Log</a>
      </Menu>
    );
  }
}

function mapStateToProps(state){
    return{
      semana: state.gds.semana,
      data_cliente: state.gds.data_cliente,
      cliente:  state.gds.cliente,
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

export default connect(mapStateToProps, mapDispatchToProps)(GdsMenu);
