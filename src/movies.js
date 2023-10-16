// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((movie) => movie.director);
  let uniqueDirectors = directors.filter((director, index, array) => {
    return array.indexOf(director) === index;
  });
  return uniqueDirectors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const directorSpielberg = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const stevenDramas = directorSpielberg.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return stevenDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const scores = moviesArray.map((movie) => movie.score);
  const suma = scores.reduce((acc, valor) => {
    if (valor >= 0) {
      return acc + valor;
    } else {
      return acc;
    }
  }, 0);
  let resultado = (suma / moviesArray.length).toFixed(2);
  return parseFloat(resultado);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaScore = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  return scoresAverage(dramaScore);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.slice().sort((obj1, obj2) => {
    if (obj1.year < obj2.year) {
      return -1;
    } else if (obj1.year > obj2.year) {
      return 1;
    } else {
      return obj1.title.localeCompare(obj2.title);
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = moviesArray.slice().sort((obj1, obj2) => {
    return obj1.title.localeCompare(obj2.title);
  });
  const movieTitle = sortedMovies.slice(0, 20).map((movie) => movie.title);
  return movieTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
 let hourToMin = [];
 return hourToMin
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

}
