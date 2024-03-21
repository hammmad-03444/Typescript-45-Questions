"use strict";
function sandwich(items) {
    console.log('sandwhich summary\n');
    if (items.length === 0) {
        console.log("You havn't selected items for your sandwich ");
    }
    else {
        console.log('\nYou have selected this items for your sandwich');
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
        console.log('Enjoy your sandwich!!\n');
    }
}
sandwich(['cheese', 'egg', 'tomato']);
sandwich(['butter cheese', 'ham']);
sandwich([]);
// function sandwhich(items:string[]) {
//     console.log('your sandwich iterms are as follows')
// items.forEach (item=>
//     console.log('--' + item))
//     console.log('Enjoy your sandwhich')
// }
// sandwhich(['cheese','egg','tomato'])
//  sandwhich(['butter cheese','ham'])
//  sandwhich([])
