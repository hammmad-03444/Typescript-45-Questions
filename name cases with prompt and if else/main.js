"use strict";
var Pername = prompt("Input your name here") || "";
let lowercasename = Pername.toLowerCase();
let uppercasename = Pername.toUpperCase();
let tittlecasename = Pername.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (Pername !== null && Pername !== "") {
    alert(`Hello ${Pername} here your name in 
    "lowercase=" ${lowercasename}
    "uppercase=" ${uppercasename}
    "tillecase=" ${tittlecasename}`);
}
else {
    alert("Reload the website and input your name ");
}
