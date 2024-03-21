"use strict";
let list = ['cow', 'sheep', 'goat'];
for (let animals of list) {
    console.log(`${animals}`);
}
console.log("\n Statement about animals\n");
for (let animals of list) {
    switch (animals) {
        case "cow":
            console.log('cow is very beautiful and beneficial pet');
            break;
        case "sheep":
            console.log("sheep is  be a gental pet");
            break;
        case "goat":
            console.log("A goat is very playful and great pet");
            break;
        default:
            console.log("This animal is not recognized");
            break;
    }
}
console.log("\n All animals are Halal");
