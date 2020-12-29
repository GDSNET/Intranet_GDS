
import {StyleSheet} from 'react-native-web';
import {COLOR_PRIMARIO, COLOR_WHITE, COLOR_PRIMARIO_OSCURO} from './ColorsComponents'
 




export const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    backgroundColor: COLOR_WHITE
  
  },
  containerDivisorArriba:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOR_PRIMARIO,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    
  },
  containerDivisor: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    },
  containerDivisorColumn:{
    flex: 1,
    flexDirection: 'column',

  },

  containerDivisorIzq: {
    flex: 1,
    flexDirection: 'column',
    
  },
  containerDivisorDerecha: {
    flex: 2,
    flexDirection: 'column',
    
  },
  containerTitles:{
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    flex: 1,
    textAlign: 'right',
    padding: 5,
},
  footer: {
    flex: 1,
    textAlign: 'right'
    
  },
  txtFooter: {
    fontSize: 10,
    padding: 5,
    
  },
  txtTitle: {
    fontSize: 10,
    aligItem: 'right',
    color: COLOR_WHITE,
    alignSelf: 'stretch'

  },
  txtIndicador: {
    fontSize: 12,
    textAlign:  'center',
    alignItems:  'center',
    
    color: COLOR_PRIMARIO,
    
  },
  divIndicador: {

    height: 50,
    width: 50,
    marginTop: -20,
    marginLeft: 10,
    
    textAlign:  'center',
    alignItems:  'center',
    justifyContent: 'center',
    borderRadius: 5,
    boxShadow: "3px 3px 3px #555",
  },
  view_anterior: {
    textAlign:  'center',
    alignItems:  'center',
    flex: 1,
    fontSize: 12,
    padding: 3,
    color: COLOR_PRIMARIO_OSCURO,
    
  },
  view_diferencia: {
    textAlign:  'center',
    alignItems:  'center',
    flex: 1,
    fontSize: 12,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
    
  },
  txtAnterior:{
    fontSize: 10,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
  },
  txtDiferencia:{
    fontSize: 10,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
  },
  txtAnteriorIndicador:{
    fontSize: 10,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
  },
  txtDiferenciaIndicador:{
    fontSize: 10,
    padding: 5,
    color: COLOR_PRIMARIO_OSCURO,
  }


});


