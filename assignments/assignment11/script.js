

const moviesData = [
    {
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "actors": ["Al Pacino", "Marlon Brando", "Robert Duvall"],
      "year": "1972",
      "genres": ["Crime", "Fiction", "Drama"],
      "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "img": "images/the-godfather.jpg"
    },
    {
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "actors": ["Morgan Freeman", "Bob Guntoa", "Tim Robbins"],
      "year": "1994",
      "genres": ["Drama", "Mystery", "Crime", "Fiction"],
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "img": "images/the-shawshank-redemption.jpg"
    },
    {
        "title":"Pulp Fiction",
        "director": "Quentin Tarantino",
        "actors": ["John Travolta", "Bruce Willis", "Uma Thurman"],
        "year":"1994",
        "genres":["Crime", "Drama"],
        "description":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. -- IMDB",
        "img":"images/pulp-fiction.jpg"
      },
      {
        "title":"The Dark Knight",
        "director": "Christopher Nolan",
        "actors": ["Christian Bale", "Michael Caine", "Heath Ledger"],
        "year":"2008",
        "genres":["Action", "Crime", "Fiction", "Drama", "Thriller","Noir"],
        "description":"When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice. --IMDB",
        "img":"images/the-dark-knight.jpg"
      },
      {
        "title":"GoodFellas",
        "director": "Martin Scorsese",
        "actors": ["Robert De Niro", "Samuel L. Jackson", "Joe Pesci"],
        "year":"1990",
        "genres":["Thriller","Drama","Crime","Detective","Fiction"],
        "description":"The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        "img":"images/goodfellas.jpg"
      }
    
    ]

    
function createMovieContainer(movie) {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImage = document.createElement('img');
    movieImage.classList.add('movie-image');
    movieImage.src = movie.img;
    movieImage.alt = movie.title;

    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-details');

    const title = document.createElement('div');
    title.classList.add('movie-title');
    title.textContent = movie.title;

    const director = document.createElement('div');
    director.classList.add('movie-director');
    director.textContent = `Director: ${movie.director}`;

    const actors = document.createElement('div');
    actors.textContent = `Actors: ${movie.actors.join(', ')}`;

    const year = document.createElement('div');
    year.textContent = `Year released: ${movie.year}`;

    const genres = document.createElement('div');
    genres.textContent = `Genres: ${movie.genres.join(', ')}`;

    const description = document.createElement('div');
    description.textContent = `Description: ${movie.description}`;

    movieDetails.appendChild(title);
    movieDetails.appendChild(director);
    movieDetails.appendChild(actors);
    movieDetails.appendChild(year);
    movieDetails.appendChild(genres);
    movieDetails.appendChild(description);

    movieContainer.appendChild(movieImage);
    movieContainer.appendChild(movieDetails);

    return movieContainer;
}


  function populateMovies() {
      const moviesContainer = document.getElementById('movies-container');
      moviesData.forEach((movie) => {
          const movieContainer = createMovieContainer(movie);
          moviesContainer.appendChild(movieContainer);
      });
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
      populateMovies() ;
  });