
import data_sellout from '../../json/data_sellout.json'
import data_all from '../../json/data_all.json'






function funAtributo1SellOut(){
  var atributo
  
  var r = data_sellout.map((datum, i) => {
   
    if ( atributo !== datum.atributo1){
      atributo = datum.atributo1
     return {
      desc_atributo: datum.atributo1,
      valor1: data_sellout.filter((o) => {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return (sum + parseFloat(o.sellout));
      }, 0),
      valor2: data_sellout.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + parseFloat(o.sellout_vs_sa);
      }, 0),
      valor3: data_sellout.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + parseFloat(o.sellout_vs_aa);
      }, 0),
      valor4: data_sellout.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + parseFloat(o.sellout_vs_ytd);
      }, 0),
      cantidad: data_sellout.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + 1;
      }, 0)
    };
  }
  }) 
  return r.filter((i)=>{ return i != null; })  
}

function f_sellout_usuario(){
  var r = data_all.map((data, i ) =>
  {
    return {
     desc_atributo: data.atributo1,

     valor1: data.sellout,
     valor2: data.osa,

     valor3: data.instock,
     valor4: data.fillrate,

     cantidad: 100,
     foto: data.imagen,
     cargo: data.cargo
    }
  }
 
  
  )
  return r.filter((i)=>{ return i != null; })  
 }


export { 
funAtributo1SellOut,
f_sellout_usuario,
};