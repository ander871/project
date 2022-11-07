// console.log("hi");
const numberOfFilms = +prompt("skolko filmov posmotrel", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let oneOfLastFilms = prompt("oneOfLastFilms", "");
let ozenka10 = prompt("ozenka ot 0 do 10", "");
personalMovieDB.movies[oneOfLastFilms] = ozenka10;

oneOfLastFilms = prompt("oneOfLastFilms", "");
ozenka10 = prompt("ozenka ot 0 do 10", "");
personalMovieDB.movies[oneOfLastFilms] = ozenka10;

console.log(personalMovieDB);
