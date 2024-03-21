"use strict";
function make_album(artist, tittle, track) {
    let album = {
        Artist: artist,
        Tittle: tittle
    };
    if (track !== undefined) {
        album.Track = track;
    }
    return album;
}
let a1 = make_album('Artist 1', 'Tittle1');
let a2 = make_album('Artist 2', 'Tittle2', 12);
let a3 = make_album('Artist 3', 'Tittle3');
console.log(a1);
console.log(a2);
console.log(a3);
