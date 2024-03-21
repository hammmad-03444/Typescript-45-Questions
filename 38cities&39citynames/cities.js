"use strict";
function describe_city(city, country = "Pakistan") {
    console.log(` ${city}  is city of ${country}`);
}
describe_city("Karachi");
describe_city("Peshawar");
describe_city("barcelona", "spain");
