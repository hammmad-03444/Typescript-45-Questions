"use strict";
function carinfo(manufacturer, model, ...extraoption) {
    const carobj = Object.assign({ manufacturer,
        model }, Object.assign({}, ...extraoption));
    return carobj;
}
let a = carinfo('Honda', 'civic', { color: 'black' }, { navigation: 'powerstaring' }, { features: 'sunroof' });
console.log(a);
