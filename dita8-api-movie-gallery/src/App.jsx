// useState ruan të dhënat që ndryshojnë në faqe.
import "./App.css";
import { useState } from "react";

// OMDb API na kthen informacione për filmat.
const api = {
  key: "744ed6ae", // Çelësi identifikon kërkesën te OMDb.
  base: "https://www.omdbapi.com/", // Adresa bazë e API-së.
};

// Titujt që kërkohen për secilin zhanër.
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
    "Heads of State",
    "Game of Thrones: The House of the Dragon",
    "Abigail",
    "The Marvels",
    "Red Notice",
    "Fast X",
    "Scarface",
    "Avengers: Endgame",
    
  ],
  horror: [
    "The Conjuring", 
    "It", "The Shining", 
    "Hereditary", 
    "The Exorcist",
    "Alien: Earth",
    'Scream VI', 
    'The Nun II', 
    'The Nun',
    'The Exorcist: Believer', 
    'The Exorcist: The Beginning',
    'The Exorcist III',
    'The Exorcist II: The Heretic', 
    'The Exorcist: Dominion', 
    'The Exorcist: Resurrection',
    'The Exorcist: The Final Chapter',
    'Backrooms',
    'Dabbe 2',
    ],

  comedy: ["Superbad", "Step Brothers", "The Mask", "Borat", "The Hangover","A Dog's Life ","Recep ivedik 7","Rush Hour 3"],
  kids: ["Frozen", "Toy Story", "Moana", "Finding Nemo","A Minecraft Movie"],
  romance: ["Twilight", "Heart Eyes", "50 First Dates", "Anyone But You","The Nutty Professor","The Life List",],
};
function App() {
  // Lista e filmave që shfaqet në faqe.
  const [movies, setMovies] = useState([]);
  // Filmi që hapet në popup; null e mbyll popup-in.
  const [selectedMovie, setSelectedMovie] = useState(null);
  // Kërkon nga API filmat e zhanrit të zgjedhur.
  const fetchMovies = (genre) => {
    const titles = genres[genre];
    const fetchedMovies = [];

    // Çdo titull kërkohet veçmas nga API.
    titles.forEach((title) => {
      fetch(`${api.base}?t=${title}&apikey=${api.key}`)
        .then((response) => response.json()) // Përgjigjja kthehet në JSON.
        .then((result) => {
          if (result.Response === "True") {
            console.log("Fetched movie:", result);

            fetchedMovies.push(result);
            setMovies([...fetchedMovies]); // Rifreskon listën në faqe.
          }
        })
        .catch((error) => {
          console.log("Gabim gjatë kërkimit të filmit:", error);
        });
    });
  };
  return (
    <div className="App">
      <h1>Movie Gallery</h1>
      {/* Butonat krijohen nga zhanret dhe nisin kërkimin kur klikohen. */}
      <div className="buttons">
        {Object.keys(genres).map((genre) => (
          <button key={genre} onClick={() => fetchMovies(genre)}>
            Load {genre} Movies
          </button>
        ))}
      </div>
      {/* Shfaq kartelë për secilin film në state. */}
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            role="button"
            tabIndex={0}
            onClick={() => setSelectedMovie(movie)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedMovie(movie);
              }
            }}
          >
            {/* Poster i filmit */}
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            {/* Informacione për filmin */}
            <p>{movie.Title}</p>
            <p>({movie.Year})</p>
            <p>({movie.Runtime})</p>
            <p>IMDb Rating: {movie.imdbRating}</p>
         
          </div>
        ))}
      </div>
      {/* Klikimi jashtë popup-it, Escape ose Mbyll e mbyll atë. */}
      {selectedMovie && (
        <div
          className="popup-overlay"
          onClick={() => setSelectedMovie(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelectedMovie(null);
          }}
        >
          <div
            className="movie-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button autoFocus onClick={() => setSelectedMovie(null)}>Mbyll ✕</button>
            <h2 id="popup-title">{selectedMovie.Title} ({selectedMovie.Year})</h2>
            {selectedMovie.Poster && selectedMovie.Poster !== "N/A" && (
              <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="popup-poster" />
            )}
            <p>{selectedMovie.Plot}</p>
            <p>Zhanri: {selectedMovie.Genre}</p>
            <p>Aktorët: {selectedMovie.Actors}</p>
            <p>Regjisori: {selectedMovie.Director}</p>
            <p>Kohëzgjatja: {selectedMovie.Runtime} | IMDb: {selectedMovie.imdbRating}</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default App;
{/*Pikat Kryesore të Kodit:
      API – mënyrë që aplikacioni komunikon me një shërbim tjetër për të marrë të dhëna. Këtu përdoret OMDb për informacione rreth filmave.
      API Key – çelësi që identifikon kërkesën tonë te OMDb.
      genres – objekt që ruan titujt e filmave, të ndarë sipas zhanrit.
      useState – ruan listën e filmave që shfaqet në faqe. Kur përditësohet state-i, React e rifreskon pamjen.
      fetchMovies(genre) – funksioni kryesor që merr zhanrin, kërkon filmat përkatës nga API-ja dhe i shton në listë.
      fetch() – dërgon kërkesë në adresën e API-së.
      response.json() – e kthen përgjigjen e API-së në formatin JSON, që mund ta përdorim në JavaScript.
      .then() dhe .catch() – .then() vazhdon me përgjigjen e kërkesës; .catch() kap gabimet.
      onClick – kur klikohet butoni i zhanrit, thërret fetchMovies(genre).
      .map() – krijon butonat dhe kartelat e filmave nga listat.
      JSX – pjesa që përshkruan çka shfaqet në faqe, si titulli, posteri dhe informatat e filmit.
  */}