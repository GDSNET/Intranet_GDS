import React, { Component } from 'react';
import XLSX from 'xlsx';
import { make_cols } from './MakeColumns';
import { SheetJSFT } from './types';
import {View, StyleSheet,Button} from 'react-native-web'
import { connect } from "react-redux";
import combinaActions from "../../../../actions/index";
import {bindActionCreators} from 'redux';

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };


  async funInsertData(){
  
    const {data_json_body,funGuardaFetch} = this.props;

  const url = 'http://api.gdsnet.com:3009/insert_parametros';
    
  let body_data = data_json_body


      const config =  {
        method: 'POST',
        body: body_data,
        headers: {
        "Content-Type": "application/json",
        },
      }  
  
  try {
    
  
  await  fetch(url, config)
          .then((response) => {
           return response.json()})
          .then((json) => {
           // console.log("guardando datos" + JSON.stringify(json))
            funGuardaFetch(json)
          });
          
        } catch (e) {
          console.log(e.message)
    
        }  
  }

 /* guardaDataStorage(){
    let stado = JSON.stringify(this.state.data)
    alert(JSON.stringify(stado))
    localStorage.setItem('DataSave',stado);
  }
 
  getDataStorage(){
    const save = localStorage.getItem('DataSave');
    const guardar = JSON.parse(save)
    const {funGuardaDataExcel} = this.props;
    new Promise((resolve, reject) => {
      resolve(funGuardaDataExcel(guardar))
    }).then(res=>{
      this.funForArray()
    }).then(res=>{
      this.funArmarJsonBody()
      }).then(res=>{
        this.funInsertData()
        })
  }*/

  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    const {funGuardaDataExcel} = this.props;
    
 
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
       // console.log(JSON.stringify(this.state.data, null, 2));
       let stado = (JSON.stringify(this.state.data, null, 2))
       const guardar = JSON.parse(stado)


       new Promise((resolve, reject) => {
        resolve(funGuardaDataExcel(guardar))
      }).then(res=>{
        this.funForArray()
      }).then(res=>{
        this.funArmarJsonBody()
        }).then(res=>{
          this.funInsertData()
          })
      });
 
    };
 
    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };
  }

 funForArray(){
  const {data_excel,funGuardaDataArrayExcel} = this.props;

  var key_array = []
  var data_array_row = []
  var data_array = []
  var results = data_excel;
// get the first result set, or you can loop trhrough all, assuming that each reuslt set is the same. 
if (results.length > 0){
  var columnsIn = results[0];
  for(var key in columnsIn){
    console.log(key); // here is your column name you are looking for
    key_array.push(key) 
  }
}else{
    console.log("No columns");
}

try {
    data_excel.map((valor,i) => {
    key_array.map((v, indice) => {
    const column_name = v
    data_array_row.push((valor[column_name]))
   })

   data_array.push(data_array_row)
   data_array_row = []
 //  console.log(data_array)
})
  
} catch (error) {
  
}
    //console.log(data_array)
 funGuardaDataArrayExcel(JSON.stringify(data_array))

}


funArmarJsonBody(){
  const {data_array, funGuardaJsonBody, esquema, sel_indicador,base_datos,servidor} = this.props;

  const jsonBody = [];
  const req = {"sv":servidor,"bd":base_datos,"servicio":esquema,"tabla":sel_indicador, data: JSON.parse(data_array)}
  
  jsonBody.push(req)

  funGuardaJsonBody(JSON.stringify(jsonBody))
}



  render() {
    const {data_json_body} = this.props;

    return (
      <View style={styles.container}>
 
        <br />
        <input type="file" id="file" accept={SheetJSFT} onChange={this.handleChange} />
        <br />

              <input type='submit' 
                value="Cargar Archivo"
                onClick={this.handleFile}
                className={styles.touch}
                 />

      </View>
      
    )
  }
}
 
function mapStateToProps(state){
  return{
    data_excel: state.comercial.data_excel,
    data_array: state.comercial.data_array,
    query_array: state.comercial.query_array,
    data_json_body: state.comercial.data_json_body,
    esquema: state.comercial.esquema,
    sel_indicador: state.comercial.sel_indicador,
    base_datos: state.comercial.base_datos,
    servidor: state.comercial.servidor,
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

export default connect(mapStateToProps, mapDispatchToProps)(ExcelReader);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  touch: {
    
    padding: 20,
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#FF7E51',
    borderRadius: 100,
    marginHorizontal: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    color: '#FFF',
    placeholderTextColor: '#FFCAB8',
    fontSize: 20,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', 
  },
});