import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {GiGluttony, GiDread, GiDinosaurRex,GiBearFace} from 'react-icons/gi'


import Home from "./Home";
import Calidad from "./Calidad";
import Control from "./Control";
import ControlPage1 from "./controlPageNivel1";
import ControlPage2 from "./controlPageNivel2";
import ControlPage3 from "./controlPageNivel3";
import CalidadN1 from "./CalidadN1";
import CalidadN3Update from "./CalidadN3Update";
import CalidadN2Insert from "./CalidadN2Insert";
import Gds from "./gds";
import gdsAlarmasHtml from "./gdsAlarmasHtml";
import gdsAlarmasHtml00 from "./gdsAlarmasHtml00";
import gdsEliminaMedicion from "./gdsEliminaMedicion";
import gdsEliminaMedicion1 from "./gdsEliminaMedicion1";
import gdsActualizaSalaLog from "./gdsActualizaSalaLog";
import gdsActualizaSalaLogN2 from "./gdsActualizaSalaLogN2";
import CalidadN1Exh from "./CalidadN1Exh";
import CalidadN3UpdateExh from "./CalidadN3UpdateExh";
import CalidadN2InsertExh from "./CalidadN2InsertExh"; 

//import "../css/index.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
 
          <ul className="header">
          <div className="style_text_titulo">Global Decision Support</div>
              <nav class="menuCSS3">
                <li>
                  <NavLink to="/homes">
                  <div className='style_div_li'>
                    <GiGluttony className="style_image" ></GiGluttony>
                    <div className='style_div_li_text'>Inicio</div>
                  </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/control">
                  <div className='style_div_li'>
                    <GiDinosaurRex className="style_image" ></GiDinosaurRex>
                    <div className='style_div_li_text'>Operacion</div>
                  </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/calidad">
                  <div className='style_div_li'>
                    <GiDread className="style_image" ></GiDread>
                    <div className='style_div_li_text'>Calidad</div>
                  </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gds">
                  <div className='style_div_li'>
                    <GiBearFace className="style_image" ></GiBearFace>
                    <div className='style_div_li_text'>Gds</div>
                  </div>
                  </NavLink>
                </li>
              </nav>
          </ul>

          
          <div className="content">
            
          
            
            <Route path="/homes" component={Home}/>
            <Route path="/control" component={Control}/>
            <Route path="/calidad" component={Calidad}/>
            <Route path="/ControlPageNivel1" component={ControlPage1}/>
            <Route path="/ControlPageNivel2" component={ControlPage2}/>
            <Route path="/ControlPageNivel3" component={ControlPage3}/>
            <Route path="/CalidadN1" component={CalidadN1}/>
            <Route path="/CalidadN3Update" component={CalidadN3Update}/>
            <Route path="/CalidadN2Insert" component={CalidadN2Insert}/>
            <Route path="/Gds" component={Gds}/>
            <Route path="/gdsAlarmasHtml" component={gdsAlarmasHtml}/>
            <Route path="/gdsAlarmasHtml00" component={gdsAlarmasHtml00}/>                        
            <Route path="/gdsEliminaMedicion" component={gdsEliminaMedicion}/>                        
            <Route path="/gdsEliminaMedicion1" component={gdsEliminaMedicion1}/>   
            <Route path="/gdsActualizaSalaLog" component={gdsActualizaSalaLog}/>   
            <Route path="/gdsActualizaSalaLogN2" component={gdsActualizaSalaLogN2}/>
            <Route path="/CalidadN1Exh" component={CalidadN1Exh}/>  
            <Route path="/CalidadN3UpdateExh" component={CalidadN3UpdateExh}/>
            <Route path="/CalidadN2InsertExh" component={CalidadN2InsertExh}/>

            
          </div>
        </div>
      </HashRouter>
    );
  }
}

 
export default Main;