const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms ,
    movies:{

    },
    actors: {

    },
    genders: [

    ],
    privat: false
};

const a =  prompt('Один из последних просмотренных фильмов?',''),
     b = prompt('На сколько оцените его?', ''),
    c = prompt('Как звали актера ?', ''),
    d = prompt('Какое имя у главного героя?', '');

    personalMovieDB.actors[a] = b;
    personalMovieDB.actors[c] = d;

    console.log(personalMovieDB);