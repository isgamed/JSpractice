"use strict";


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log("Малова-то");
		} else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
			console.log("В самый раз");
		} else if (personalMovieDB.count > 30) {
			console.log("Супер");
		} else {
			console.log("Error!!!");
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYouGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt (`Ваш любимый жанр кино № ${i}?`);

			if (genre == '' || genre == null) {
				console.log("Некорректные данные!");
				i--;
			} else {
				personalMovieDB.genres[i-1] = genre;
			}

		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i+1} - это ${item}!`);
		});
	}
};

personalMovieDB.start ();

// personalMovieDB.showMyDB (personalMovieDB.privat);

