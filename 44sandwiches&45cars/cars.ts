function carinfo(manufacturer:string,model:string, ...extraoption:{[key:string]: any}[]){
  const carobj={
    manufacturer,
    model,
    ...Object.assign({},...extraoption)
  }  
  return carobj
}
let a = carinfo('Honda','civic',{color:'black'},{navigation:'powerstaring'},{features:'sunroof'})
console.log(a)