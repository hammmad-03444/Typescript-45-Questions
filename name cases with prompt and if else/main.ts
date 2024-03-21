var Pername:string = prompt("Input your name here") || ""
let lowercasename:string=Pername.toLowerCase()
let uppercasename:string=Pername.toUpperCase()
let tittlecasename:string=Pername.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ') 
if(Pername !==null && Pername !==""){
    alert(`Hello ${Pername} here your name in 
    "lowercase=" ${lowercasename}
    "uppercase=" ${uppercasename}
    "tillecase=" ${tittlecasename}`)
}


 
 else{
    alert("Reload the website and input your name ")
 }