"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++){
	const a = prompt('Один из последних просмотренных фильмов?', ''),
	      b = prompt('На сколько оцените его?', '');
	
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("Done!");
	} else {
		console.log("Error!");
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Малова-то");
} else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
	console.log("В самый раз");
} else if (personalMovieDB.count > 30) {
	console.log("Супер");
} else {
	console.log("Error!!!");
}


console.log(personalMovieDB);