import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../actions/index";
import {bindActionCreators} from 'redux';

import {View,  Text, Dimensions, StyleSheet} from 'react-native-web';
import { styles1 } from "../components/promocion/StyleComponents";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import fondo from '../images/carousel/fondo.png';
import escena1 from '../images/carousel/escena 1.png';
import escena2 from '../images/carousel/escena 2.png';
import escena3 from '../images/carousel/escena 3.png';
import escena4 from '../images/carousel/escena 4.png';
import escena5 from '../images/carousel/escena 5.png';
import escena6 from '../images/carousel/escena 6.png';
import escena7 from '../images/carousel/escena 7.png';
import escena8 from '../images/carousel/escena 8.png';
import moletar from '../images/carousel/molestar.png';
import moletar2 from '../images/carousel/molestar2.png';
import moletar3 from '../images/carousel/molestar3.png';








export default class App extends React.Component {


  



  funStyles(){
    if ( Dimensions.get('window').width > 600){
     return(
      promstyles1.container
     )
    }
    else
      {
        return(
          promstyles2.container
        )
        }
  }

  render() {
    return (

      
      

<div className="principal">
        
        <View style={this.funStyles()}>
       
        <Tabs forceRenderTabPanel defaultIndex={1}>
    <TabList>
      <Tab>The Simpsons</Tab>
      <Tab>Futurama</Tab>
    </TabList>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Homer Simpson</Tab>
          <Tab>Marge Simpson</Tab>
          <Tab>Bart Simpson</Tab>
          <Tab>Lisa Simpson</Tab>
          <Tab>Maggie Simpson</Tab>
        </TabList>
        <TabPanel>
          <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
      
          <View style={styles1.container}>
            <div  class="div_carrousel_principal" >
              
              <img src={fondo} height={Dimensions.get('window').height} class="div_carrousel_principal" />
              <img src={escena1} height={Dimensions.get('window').height} class="div_carrousel_principal" /> 

              <img src={moletar2} class="div_molestar2"   />
              <img src={moletar} class="div_molestar"   />
              
            
                      <div  class="div_carrousel_principal" >
                      
                      </div>
            
              </div>
            </View>
        </TabPanel>
        <TabPanel>
          <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
        </TabPanel>
        <TabPanel>
          <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
        </TabPanel>
        <TabPanel>
          <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png" alt="Lisa Simpson" />
        </TabPanel>
        <TabPanel>
          <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Philip J. Fry</Tab>
          <Tab>Turanga Leela</Tab>
          <Tab>Bender Bending Rodriguez</Tab>
          <Tab>Amy Wong</Tab>
          <Tab>Professor Hubert J. Farnsworth</Tab>
          <Tab>Doctor John Zoidberg</Tab>
        </TabList>
        <TabPanel>
          <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
        </TabPanel>
        <TabPanel>
          <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
        </TabPanel>
        <TabPanel>
          <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Fry's best friend. Built in Tijuana, Mexico, he is the Planet Express Ship's cook.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png" alt="Bender Bending Rodriguez" />
        </TabPanel>
        <TabPanel>
          <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/FuturamaAmyWong.png/140px-FuturamaAmyWong.png" alt="Amy Wong" />
        </TabPanel>
        <TabPanel>
          <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png" alt="Professor Hubert J. Farnsworth" />
        </TabPanel>
        <TabPanel>
          <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
     

        </View>
          
      </div>


    );
  }
}

const promstyles1 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'row'

  },
  carrousel: {
  
  marginLeft: 200,

  }
});

const promstyles2 = StyleSheet.create({
   
  container: {
    flex: 1,
    flexDirection: 'column',
    
    
  }
});
