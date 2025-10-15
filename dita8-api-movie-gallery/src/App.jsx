// Importimi i stilit CSS dhe funksionit useState nga React
import "./App.css";
import { useState } from "react";

// Të dhënat për API-në që po përdorim (OMDB API)
//API (Application Programming Interface) është një ndërfaqe që lejon aplikacionin të bisedojë me një shërbim tjetër për të marrë ose dërguar informacione.
const api = {
  key: "744ed6ae", // Ky është API Key – përdoret për të identifikuar aplikacionin tonë te OMDB , per me kriju nje API max 1 dit zgjat derisa e pranojne
  base: "https://www.omdbapi.com/", // Ky është URL-ja bazë për të dërguar kërkesat
};

// Disa genre(zhaner) të filmave dhe tituj të njohur për secilin genre
const genres = {
  action: [
    "Mad Max",
    "Die Hard",
    "Superman",
    "John Wick",
    "Jumanji",
    "Avatar",
    "The Dark Knight",
    "The Matrix",
    "Mission: Impossible – The Final Reckoning",
    "Heads of State (2025)",
  ],
  horror: ["The Conjuring", "It", "The Shining", "Hereditary", "The Exorcist","Alien: Earth",],
  comedy: ["Superbad", "Step Brothers", "The Mask", "Borat", "The Hangover"],
  kids: ["Frozen", "Toy Story", "Moana", "Finding Nemo","A Minecraft Movie"],
  romance: ["Twilight", "Heart Eyes", "50 First Dates", "Anyone But You","The Nutty Professor","The Life List",],
};

// Komponenta kryesore e aplikacionit
function App() {
  // Krijo një state për të ruajtur filmat që i kemi marrë nga API
  const [movies, setMovies] = useState([]);

  // Funksion që merr filmat nga një zhanër i caktuar
  const fetchMovies = (genre) => {
    // Merr listën e titujve për atë zhanër
    const titles = genres[genre];
    const fetchedMovies = [];

    // Për secilin titull bëjmë kërkesë te API për të marrë të dhënat e filmit
    titles.forEach((title) => {
      fetch(`${api.base}?t=${title}&apikey=${api.key}`) // Kërkesa me titullin dhe API key
        .then((response) => response.json()) // E kthen përgjigjen në format JSON
        .then((result) => {
          if (result.Response === "True") {
            console.log("Fetched movie:", result); // Printo të dhënat në console për ta parë si duken

            // Shto të dhënat e filmit në listën e përkohshme
            fetchedMovies.push(result);

            // Përditëso state-in me filmat e rinj
            setMovies([...fetchedMovies]);
          }
        })
        .catch((error) => {
          // Nëse ndodh ndonjë gabim gjatë fetch
          console.error("Gabim gjatë kërkimit të filmit:", error);
        });
    });
  };

  return (
    <div className="App">
      <h1>Movie Gallery</h1>

      {/* Krijon butona për secilin zhanër, dhe kur klikohet, thërret fetchMovies */}
      <div className="buttons">
        {Object.keys(genres).map((genre) => (
          <button key={genre} onClick={() => fetchMovies(genre)}>
            Load {genre} Movies
          </button>
        ))}
      </div>

      {/* Tregon filmat që janë marrë nga API */}
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            {/* Poster i filmit */}
            <img src={movie.Poster} className="movie-poster" />
            {/* Informacione për filmin */}
            <p>{movie.Title}</p>
            <p>({movie.Year})</p>
            <p>IMDb Rating: {movie.imdbRating}</p>
            <p>{movie.Awards}</p>
            <p>{movie.Language}</p>
            <p>{movie.Director}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
