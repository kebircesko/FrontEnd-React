// Importojmë bibliotekat e nevojshme nga React dhe Axios
//Axios është një bibliotekë e njohur në JavaScript që na lejon të bëjmë kërkesa HTTP (si GET, POST, PUT, DELETE) në mënyrë të thjeshtë dhe të shpejtë.
import React, { useState, useEffect } from 'react';
//Duhet instaluar me komandën: npm install axios
import axios from 'axios'; // Axios përdoret për të marrë të dhëna nga interneti (API)
import './App.css'; // Importojmë stilizimin e aplikacionit

// Komponenti kryesor i aplikacionit quhet "App"
function App() {
  // Krijojmë një variabël coins për të ruajtur të dhënat e monedhave dhe loading për të treguar nëse të dhënat po ngarkohen
  const [coins, setCoins] = useState([]); // useState na jep mundësinë të ruajmë gjendjen (state)
  const [loading, setLoading] = useState(true); // fillimisht është true derisa të merren të dhënat

  // useEffect përdoret për të bërë veprime sapo komponenti ngarkohet (ose ndryshon)
  useEffect(() => {
    // Funksioni që merr të dhënat nga API
    const fetchCoins = () => {
      // axios.get dërgon një kërkesë HTTP për të marrë të dhëna nga CoinGecko API
      axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd', // Monedha me të cilën krahasohen të gjitha kriptovalutat (USD)
          order: 'market_cap_desc', // Rendit kriptovalutat nga ajo me kapitalin më të madh
          per_page: 40, // Merr 40 kriptovaluta në një faqe
          page: 1, // Tregon faqen që po marrim (faqja e parë)
        }             
      })
      .then((response) => {
        // Nëse të dhënat vijnë me sukses, i ruajmë në coins dhe ndalojmë ngarkimin
        console.log('Data from API:', response.data);  
        setCoins(response.data); // Vendosim të dhënat në variablën coins
        setLoading(false); // Nuk jemi më duke pritur
      })
      .catch((error) => {
        // Nëse ka ndonjë gabim gjatë marrjes së të dhënave, e shfaqim në konzolë
        console.error("Error fetching data", error);
        setLoading(false); // Gjithsesi e ndalim ngarkimin edhe nëse ndodh gabim
      });
    };

    fetchCoins(); // E thërrasim funksionin për të marrë të dhënat për herë të parë

    // Përditësojmë të dhënat çdo 5 sekonda automatikisht
    const intervalId = setInterval(() => {
      fetchCoins(); // Marrim të dhënat përsëri
    }, 1000); // çdo 5000 milisekonda (5 sekonda)

    // Funksioni që ndalon intervalin kur komponenti largohet nga ekrani
    return () => clearInterval(intervalId);
  }, []); // [] do të thotë që efekti ekzekutohet vetëm një herë kur komponenti ngarkohet

  // Kthejmë pamjen që do të shfaqet në ekran
  return (
    <div className="App">
      {/* Header-i i aplikacionit */}
      <header className="App-header">
        <h1>Cryptocurrency Dashboard</h1> {/* Titulli kryesor */}
        <h1>Shkolla Digjitale Prizren</h1> {/* Titull tjetër për branding */}
      </header>

      {/* Pjesa kryesore e përmbajtjes */}
      <main>
        {/* Nëse të dhënat ende po ngarkohen, shfaqim mesazhin "Loading..." */}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          // Nëse të dhënat janë marrë me sukses, i shfaqim në listë
          <div className="coin-list">
            
              {/* Përdorim funksionin map për të kaluar në çdo monedhë që kemi marrë */}
              {coins.map((coin) => (
                <div key={coin.id} className="coin-item"> {/* Çdo monedhë ka një ID unike */}
                  {/* Shfaqim logon e monedhës */}
                  <img 
                    src={coin.image} 
                    alt={coin.name} 
                    className="coin-logo" 
                  />
                  {/* Shfaqim emrin dhe çmimin e monedhës */}
                  <div className="coin-details">
                    <strong className="coin-name">{coin.name}</strong> {/* Emri i kriptomonedhës */}
                    <span className="coin-price">
                      ${coin.current_price.toFixed(2)} {/* Çmimi i rrumbullakuar me 2 shifra pas presjes */}
                    </span>
                  </div>
                </div>
              ))}
            
          </div>
        )}
      </main>
    </div>
  );
}

// E eksportojmë komponentin që të mund të përdoret diku tjetër në aplikacion
export default App;
