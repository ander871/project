"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function () {
    console.log(personalMovieDB.privat);
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genr = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genr) {
        personalMovieDB.genres[i - 1] = genr;
      } else {
        i--;
      }
    }

    personalMovieDB.genres.forEach((element, index) => {
      console.log(`Любимый жанр # ${index + 1} - это ${element}`);
    });
  },

  toggleVisibleMyDB: () => {
    personalMovieDB.privat = !personalMovieDB.privat;
  },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

// // console.log("hi");
// do {
//   var numberOfFilms = +prompt("skolko filmov posmotrel", "");

//   var personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     toggleVisibleMyDB: function(){this.privat=!this.privat;}
//   };

//   for (var i = 0; i < 2; i++) {
//     do {
//       //alert("zanovo");
//       var oneOfLastFilms = prompt("oneOfLastFilms", "");
//       var ozenka10 = prompt("ozenka ot 0 do 10", "");
//     } while (!oneOfLastFilms || !ozenka10 || oneOfLastFilms.length < 2);
//     personalMovieDB.movies[oneOfLastFilms] = ozenka10;
//   }
// } while (!numberOfFilms);

// // oneOfLastFilms = prompt("oneOfLastFilms", "");
// // ozenka10 = prompt("ozenka ot 0 do 10", "");
// // personalMovieDB.movies[oneOfLastFilms] = ozenka10;

// console.log(personalMovieDB);

// // var personalMovieDB = {
// //   count: 10,
// //   movies: {},
// //   actors: {},
// //   genres: [],
// //   privat: false,
// // };

// //   if(!personalMovieDB.privat){console.log(personalMovieDB)}

// // let par = 5;
// // let v2 = par * par;
// // let v3 = par * par * par;
// // if (v2) {
// //   return `Объем куба: {$v2}, площадь всей поверхности: {$v3}`;
// // } else {
// //   return "При вычислении произошла ошибка";
// // }
////
