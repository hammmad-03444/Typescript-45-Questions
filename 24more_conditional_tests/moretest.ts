let w1="String1"
let w2="sTring2"
let lowcasew1=w1.toLowerCase
let lowcasew2=w2.toLowerCase
let num1=5
let num2=2

console.log("is w1 === w2? i predict false")
console.log(w1===w2)
console.log("is w1 !== W2? i predict true")
console.log(w1!==w2)
console.log("is w1 !== lowercasew1 i predict true")
console.log(w1 !== lowcasew1)
console.log("is w1 !== lowercaseW2? i predict true")
console.log(w1 !== lowcasew2) 
console.log("is w1 != lowercasew1 i predict true")
console.log(w1 != lowcasew1)
console.log("is w1 != lowercaseW2? i predict true")
console.log(w1 != lowcasew2) 
console.log("is w1 != lowercaseW1? i predict false")
console.log(w1 === lowcasew1) 
console.log("is w2 != lowercaseW2? i predict false")
console.log(w2 === lowcasew2) 
//numeric comparision
console.log("is n != lowercaseW2? i predict true")
console.log(num1 != num2) 
console.log("is num1 === num2? i predict false")
console.log(num1 === num2) 
console.log("is num1 > num2? i predict true")
console.log(num1 > num2) 
console.log("is num1 < num2? i predict false")
console.log(num1 < num2) 
console.log("is num1>=num2? i predict true")
console.log(num1>=num2) 
console.log("is num1<=num2? i predict false")
console.log(num1<=num2) 
console.log("is num1 ===num2 && num1>num ? i predict false because when we use 'and' operator so if any one condition is false so it shows false")
console.log(num1===num2 && num1>num2) 
console.log("is num1 ===num2 || num1>num ? i predict true because when we use 'or' operator so if any one condition is true so it shows true")
console.log(num1===num2 || num1>num2) 
let vehical=['Cycle','Bike','car','Train','Aeroplan']
console.log('is Rickshaw is in array ? i predict false', vehical.includes('rickshaw'))
