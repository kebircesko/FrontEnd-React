// Importojmë React dhe hooks që na duhen: useState për të menaxhuar gjendjen dhe useEffect për të ekzekutuar funksione pas ngarkimit të komponentit
import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios përdoret për të marrë të dhëna nga API. Duhet instaluar me komandën: npm install axios
import "./App.css"; // Importimi i stilit (CSS)

/* 
useState()->  Hook për të ruajtur gjendjen (p.sh. lajmet, ngarkimi, gabimet)
useEffect()->	Hook që ekzekutohet automatikisht kur hapet komponenti
axios.get()->	Bën kërkesë HTTP për të marrë të dhëna nga një API
map()->	      Funksion që përsërit për secilin artikull dhe krijon element HTML
async/await->	Na ndihmon të presim përgjigjen nga API pa bllokuar faqen
*/
function App() {
  // Krijojmë një gjendje për të ruajtur lajmet që vijnë nga API
  const [articles, setArticles] = useState([]);

  // Krijojmë një gjendje për të treguar nëse aplikacioni është duke ngarkuar të dhënat
  const [loading, setLoading] = useState(true);

  // Krijojmë një gjendje për të ruajtur gabimet që mund të ndodhin gjatë marrjes së të dhënave
  const [error, setError] = useState("");

  // API key merret pasi të regjistrohesh në faqen https://newsapi.org
  const apiKey = "ffcae0dce5bd4257b88c001e3d07b071";

  // URL për të marrë lajmet rreth fjalës kyçe "apple" për një datë të caktuar
  const url = `https://newsapi.org/v2/everything?q=apple&from=2025-06-09&to=2025-06-09&sortBy=popularity&apiKey=${apiKey}`;

  // Funksioni për të marrë lajmet nga API
  const fetchNews = async () => {
    try {
      const response = await axios.get(url); // Pret përgjigjen nga API para se të vazhdojë më tej
      // Ruajmë listën e lajmeve në state
      setArticles(response.data.articles);
      // Printojmë në console për kontroll
      console.log(response.data.articles);
      // Pasi mbaron ngarkimi, e vendosim në false
      setLoading(false);
    } catch (err) {
      // Nëse ndodh një gabim, e ruajmë mesazhin e gabimit
      setError("Ndodhi një gabim gjatë kërkimit të lajmeve.");

      // Edhe në rast gabimi, ngarkimi përfundon
      setLoading(false);
    }
  };
  // useEffect përdoret për të thirrur fetchNews vetëm një herë, kur komponenti ngarkohet për herë të parë
  useEffect(() => {
    fetchNews(); // Thirrja e funksionit që merr lajmet
  }, []);

  // JSX që përshkruan strukturën e faqes në pamje
  return (
    <div className="App">
      <h1>Lajmet e Fundit</h1>

      {/* Nëse është duke u ngarkuar, shfaqet ky mesazh */}
      {loading && <p>Po ngarkohen lajmet...</p>}

      {/* Nëse ka ndodhur ndonjë gabim, shfaqet këtu */}
      {error && <p>{error}</p>}

      {/* Pasi lajmet janë ngarkuar, krijojmë një rrjet (grid) me secilën prej tyre */}
      <div className="news-grid">
        {articles.map((article, index) => (
          <div key={index} className="news-item">
            {/* Nëse artikulli ka foto, e shfaqim */}
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                className="news-image"
                alt={article.title}
              />
            )}
            {/* Titulli i lajmit */}
            <h3>{article.title}</h3>

            {/* Përshkrimi i lajmit */}
            <p>{article.description}</p>

            {/* Linku që çon në artikullin origjinal */}{/*noreferrer	Nuk lejon dërgimin e informacionit se nga erdhi klikimi */}
            <a href={article.url} target="_blank" rel="noopener noreferrer"> {/*noopener	Mbron faqen e tanishme nga manipulimi nga faqja e re */}
              Lexo më shumë
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;