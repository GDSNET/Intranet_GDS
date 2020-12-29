//import React, { Component } from "react";
import {StyleSheet} from 'react-native-web';
import * as colores from '../../constants/coloresConstants'

export const styles_export = StyleSheet.create({
   

div_presentacion: {
  flex: 1,
  flexDirection: 'column',
  padding: 10,
  alignItems:  'flex-end',
},

  divsubtexto: {
    width: 350,
    flexDirection: 'column',
    alignItems:  'flex-end',

  },
  divtitulo: {
    flex: 1,
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',
    padding: 5,

  },
  divtexto: {
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',

  },
  txt_titulo: {
    padding: 5,
    fontSize: 35,
    color: colores.COLOR_PRIMARIO_CLARO,
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',

  },
  txt_subtitulo: {
    padding: 3,
    fontSize: 30,
    color: colores.COLOR_PRIMARIO_CLARO,
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',

  },
  txt_subtexto: {
    padding: 5,
    fontSize: 25,
    color: colores.COLOR_CUATERNARIO,
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',

  },
  txt_texto: {
    padding: 5,
    fontSize: 15,
    color: colores.COLOR_TERNARIO_CLARO,
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'center',

  },
  

});