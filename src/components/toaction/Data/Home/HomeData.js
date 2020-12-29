
import data_sellout from '../../../../json/data_sellout.json'
import data_arbol_de_perdida from '../../../../json/data_arbol_de_perdida.json'
import data_promocion from '../../../../json/data_promocion.json'
import data_tareas from '../../../../json/data_tareas.json'
import data_all from '../../../../json/data_all.json'



function f_sellout(){
 var r = data_all.map((data, i ) =>
 {
   return {
    desc_atributo: data.atributo1,
    valor1: data.sellout,
    valor2: data.sellout_ant,
    cantidad: 100,
    foto: data.imagen,
    cargo: data.cargo
   }
 }

 
 )
 return r.filter((i)=>{ return i != null; })  
}

function f_osa(){
  var r = data_all.map((data, i ) =>
  {
    return {
     desc_atributo: data.atributo1,
     valor1: data.osa,
     valor2: data.osa_ant,
     cantidad: 100,
     foto: data.imagen,
     cargo: data.cargo
    }
  })
  return r.filter((i)=>{ return i != null; })  
 }

 function f_promocion(){
  var r = data_all.map((data, i) =>
  {
    return {
     desc_atributo: data.atributo1,
     valor1: data.promocion,
     valor2: data.promocion_ant,
     cantidad: 100,
     foto: data.imagen,
     cargo: data.cargo
    }
  })
  return r.filter((i)=>{ return i != null; })  
 }

 function f_tarea(){
  var r = data_all.map((data, i) =>
  {
    return {
     desc_atributo: data.atributo1,
     valor1: data.tarea,
     cantidad: 100,
     foto: data.imagen,
     cargo: data.cargo
    }
  })
  return r.filter((i)=>{ return i != null; })  
 }




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


function funAtributo1Promocion(){
  var atributo
  
  var r = data_promocion.map((datum, i) => {
   
    if ( atributo !== datum.atributo1){
      atributo = datum.atributo1
     return {
      desc_atributo: datum.atributo1,
      valor1: data_promocion.filter((o) => {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return (sum + parseFloat(o.performance));
      }, 0),
      valor2: data_promocion.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + parseFloat(o.performance_ant);
      }, 0),
      cantidad: data_promocion.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + 1;
      }, 0)
    };
  }
  }) 
  return r.filter((i)=>{ return i != null; })  
}



function funAtributo1OOS(){
  var atributo
  
  var r = data_arbol_de_perdida.map((datum, i) => {
   
    if ( atributo !== datum.atributo1){
      atributo = datum.atributo1
     return {
      desc_atributo: datum.atributo1,
      valor1: data_arbol_de_perdida.filter((o) => {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return (sum + parseFloat(o.oos));
      }, 0),
      valor2: data_arbol_de_perdida.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + parseFloat(o.oos_ant);
      }, 0),
      cantidad: data_arbol_de_perdida.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + 1;
      }, 0)
    };
  }
  }) 
  return r.filter((i)=>{ return i != null; })  
}



function funAtributo1Tarea(){
  var atributo
  
  var r = data_tareas.map((datum, i) => {
   
    if ( atributo !== datum.atributo1){
      atributo = datum.atributo1
     return {
      desc_atributo: datum.atributo1,
      valor1: data_tareas.filter((o) => {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return (sum + parseFloat(o.tareas_inteligentes));
      }, 0),
      valor2: data_tareas.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + parseFloat(o.tareas_inteligentes_sa);
      }, 0),
      cantidad: data_tareas.filter((o)=> {
        return o.atributo1 === datum.atributo1;
      }).reduce(function(sum, o) {
        return sum + 1;
      }, 0)
    };
  }
  }) 
  return r.filter((i)=>{ return i != null; })  
}





export { funAtributo1Promocion,
   funAtributo1OOS,
    funAtributo1SellOut,
    funAtributo1Tarea,
    f_sellout,
    f_promocion,
    f_osa,
    f_tarea,

  };