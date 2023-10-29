
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
  title.innerHTML = `<strong>Title:</strong> ${movie.title}`;

  const director = document.createElement('div');
  director.classList.add('movie-director');
  director.innerHTML = `<strong>Director:</strong> ${movie.director}`;

  const actors = document.createElement('div');
  actors.innerHTML = `<strong>Actors:</strong> ${movie.actors.join(', ')}`;

  const year = document.createElement('div');
  year.innerHTML = `<strong>Year released:</strong> ${movie.year}`;

  const genres = document.createElement('div');
  genres.innerHTML = `<strong>Genres:</strong> ${movie.genres.join(', ')}`;

  const description = document.createElement('div');
  description.classList.add('movie-description');
  description.innerHTML = `<strong>   Description:</strong> ${movie.description}`;

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






const getMovies = async () => {
  const url = "https://portiaportia.github.io/json/movies.json"; 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movies data.");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const showMovies = async () => {
  let movies = await getMovies();
  let moviesContainer = document.getElementById("movies-container");

  movies.forEach((movie) => {
    moviesContainer.append(createMovieContainer(movie));
  });
};


window.onload = () => showMovies();



const populateMovies = async () => {
const moviesContainer = document.getElementById("movies-container");
try {
  const moviesData = await getMovies();

  moviesData.forEach((movie) => {
    const movieContainer = createMovieContainer(movie);
    moviesContainer.appendChild(movieContainer);
  });
} catch (error) {
  console.error(error);
}
};


document.addEventListener("DOMContentLoaded", () => {
populateMovies();
});
