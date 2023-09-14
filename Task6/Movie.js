class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movieArray) {
    return movieArray.filter(movie => movie.rating === "PG");
  }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


const movies = [
  new Movie("Movie1", "Studio1", "PG"),
  new Movie("Movie2", "Studio2", "PG-13"),
  new Movie("Movie3", "Studio3", "R"),
  new Movie("Movie4", "Studio4"), // Defaults to "PG" rating
];


const pgMovies = Movie.getPG(movies);
console.log(pgMovies); // Should print an array with Casino Royale and Movie1
