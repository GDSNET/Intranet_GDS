import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {GiGluttony, GiDread, GiDinosaurRex,GiBearFace} from 'react-icons/gi'


import Home from "./Home";


import Control from "./Control";
import ControlPage1 from "../components/control/controlPageNivel1";
import ControlPage2 from "../components/control/controlPageNivel2";
import ControlPage3 from "../components/control/controlPageNivel3";

import Gds from "./gds";
import gdsAlarmasHtml from "../components/gds/gdsAlarmasHtml";
import gdsAlarmasHtml00 from "../components/gds/gdsAlarmasHtml00";
import gdsEliminaMedicion from "../components/gds/gdsEliminaMedicion";
import gdsEliminaMedicion1 from "../components/gds/gdsEliminaMedicion1";
import gdsActualizaSalaLog from "../components/gds/gdsActualizaSalaLog";
import gdsActualizaSalaLogN2 from "../components/gds/gdsActualizaSalaLogN2";
import GdsLog from '../components/gds/log/GdsLog'

import Calidad from "./Calidad";
import CalidadN1Exh from "../components/calidad/CalidadN1Exh";
import CalidadN3UpdateExh from "../components/calidad/CalidadN3UpdateExh";
import CalidadN2InsertExh from "../components/calidad/CalidadN2InsertExh"; 
import CalidadN1 from "../components/calidad/CalidadN1";
import CalidadN3Update from "../components/calidad/CalidadN3Update";
import CalidadN2Insert from "../components/calidad/CalidadN2Insert";

import Comercial from './Comercial'
import CargaParametros from '../components/comercial/GdsCargaParametros'


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
                <li>
                  <NavLink to="/Comercial">
                  <div className='style_div_li'>
                    <GiBearFace className="style_image" ></GiBearFace>
                    <div className='style_div_li_text'>Comercial</div>
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

         

            <Route path="/Gds" component={Gds}/>
            <Route path="/gdsAlarmasHtml" component={gdsAlarmasHtml}/>
            <Route path="/gdsAlarmasHtml00" component={gdsAlarmasHtml00}/>                        
            <Route path="/gdsEliminaMedicion" component={gdsEliminaMedicion}/>                        
            <Route path="/gdsEliminaMedicion1" component={gdsEliminaMedicion1}/>   
            <Route path="/gdsActualizaSalaLog" component={gdsActualizaSalaLog}/>   
            <Route path="/gdsActualizaSalaLogN2" component={gdsActualizaSalaLogN2}/>
            <Route path="/GdsLog" component={GdsLog}/>

            <Route path="/CalidadN1" component={CalidadN1}/>
            <Route path="/CalidadN1Exh" component={CalidadN1Exh}/>  
            <Route path="/CalidadN3UpdateExh" component={CalidadN3UpdateExh}/>
            <Route path="/CalidadN2InsertExh" component={CalidadN2InsertExh}/>
            <Route path="/CalidadN3Update" component={CalidadN3Update}/>
            <Route path="/CalidadN2Insert" component={CalidadN2Insert}/>

            <Route path="/Comercial" component={Comercial}/>
            <Route path="/CargaParametros" component={CargaParametros}/>

            

            
          </div>
        </div>
      </HashRouter>
    );
  }
}

 
export default Main;