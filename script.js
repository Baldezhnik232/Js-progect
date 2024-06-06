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

    for (let i = 0; i<1; i++) {
       const a =  prompt('Один из последних просмотренных фильмов?','');
        if ( a != null && a != '' && a < 50 ){
        personalMovieDB.actors[a];
        console.log('done');
        }
        else{
            console.log('error');
        }
    }

    for (let j = 0; j<1; j++) {
        const b = prompt('На сколько оцените его?', '')
        if (b != null && b != '' && b < 50){
            personalMovieDB.actors[b];
            console.log('done');
        }
        else{
            console.log('error');
        }
    }
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель')
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман')
        } else {
            console.log('Произошла ошибка')
        }

    
    console.log(personalMovieDB);
    