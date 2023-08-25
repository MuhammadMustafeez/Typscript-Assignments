"use strict";
function makeAlbum(artist_name, Album_title, tracks) {
    let album = {
        artist_name,
        Album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album objects
let album1 = makeAlbum("Ali Zafar", "Suno");
let album2 = makeAlbum("Ahmad Khan", "Humdard", 9);
let album3 = makeAlbum("Sufyan Malik", "Hurt", 8);
//Printing the album.
console.log(album1);
console.log(album2);
console.log(album3);
