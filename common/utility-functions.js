/*
input first arg: [{a: 'z', b: 'y', c: 'x'},{a: 'm', b: 'n', d: 'o'}], second arg: ['a', 'b']
output: [{a: 'z', b: 'y'},{a:'m', b:'n'}]
or
 input first arg: {a: 'z', b: 'y', c: 'x'}, second arg: ['a', 'b']
 output: {a: 'z', b: 'y'}
*/

exports.trimObjects = function (arrOfObjectsOrsingleObj, PropsArr){
  try{

    var rVal;
    if(Array.isArray(arrOfObjectsOrsingleObj)){
      rVal = arrOfObjectsOrsingleObj.map(function(el){
        var newObj = {};
        Object.keys(el).forEach(function(key){
          if(PropsArr.indexOf(key) > -1){
            newObj[key] = el[key];
          }
        });
        return newObj;
      });
    }else if(typeof arrOfObjectsOrsingleObj === "object"){
      var newObj = {};
      Object.keys(arrOfObjectsOrsingleObj).forEach(function(key){
        if(PropsArr.indexOf(key) > -1){
          newObj[key] = arrOfObjectsOrsingleObj[key];
        }
      });
      rVal = newObj;
    }else{
      throw new Error("First argument should be an 'array of objects' or an 'object' should be an array");
    }
    return rVal;

  }catch(e){
    return {
      stack: e.stack,
      message: e.message
    }
  }
};