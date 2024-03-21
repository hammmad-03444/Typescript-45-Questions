"use strict";
let list = ['Makkah', 'Madina', 'Turkey', 'Malayshia', 'Austrailia'];
//Print the array in it's orignal form
console.log('original form array ' + list);
//Print the array in alphabetical order without modifying the actual array
console.log('array in aphabetical order (copy) ' + [...list].sort());
//print the array to show it is in orignal form
console.log('orignal array to show it is in original form ' + list);
//print the copy of the array in reverse form without modifying the actual array
console.log('array in reverse alphabetical order (copy) ' + [...list].sort().reverse());
//print the array to show it is in orginal form
console.log('orignal array to show it is in original form ' + list);
//reverse the array and print it to show it's order has changed
console.log("reverse the orignal array to show it's order has changed " + list.reverse());
//reverse the array again and print it to show it's back in the original form
console.log("reverse the orignal array to show it's back in the original form " + list.reverse());
//  sort the original form array in alphabetical order and print it to show it's order has been changed
console.log("sort the orignal form array in alphabetical order to show it's order has been changed  " + list.sort());
//sort the array and reverse the alphabetical order and print the list to show that it's order has changed
console.log('array in reverse alphabetical order  ' + list.sort().reverse());
