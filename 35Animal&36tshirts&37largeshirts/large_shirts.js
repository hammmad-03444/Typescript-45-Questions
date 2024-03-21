"use strict";
function make_shirt_default(size = "large", message = "I love Typescript") {
    console.log(`The shirt size is ${size} and the message printed on the shirt is ${message}`);
}
make_shirt_default();
make_shirt_default("Medium");
make_shirt_default("small", "Programming is joyful");
