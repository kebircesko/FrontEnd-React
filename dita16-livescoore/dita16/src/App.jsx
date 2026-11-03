import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import LeagueSidebar from './components/LeagueSidebar';
import MatchFilters from './components/MatchFilters';
import MatchList from './components/MatchList';
import News from './components/News';
import Standings from './components/Standings';
import './App.css';

// Data lokale. Nuk përdorim UTC, që të mos zhvendoset dita.
function getToday() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function App() {
  // Njësoj si coins te crypto, këtu ruajmë ndeshjet.
  const [matches, setMatches] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState(getToday);
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [search, setSearch] = useState('');
  const [onlyLive, setOnlyLive] = useState(false);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [updatedAt, setUpdatedAt] = useState('');

  // Lista e ligave merret vetëm kur hapet faqja.
  useEffect(() => {
    let active = true;
    axios
      .get('/api/site/v2/leagues/dropdown', {
        params: { sport: 'soccer', lang: 'en', region: 'us' },
        timeout: 15000,
      })
      .then((response) => {
        // API kthen edhe ndarës menuje; mbajmë vetëm ligat me ID dhe kod.
        if (active)
          setLeagues(
            (response.data.leagues || []).filter(
              (league) => league.id && league.slug,
            ),
          );
      })
      .catch((error) => console.error('Gabim gjatë marrjes së ligave:', error));
    return () => {
      active = false;
    };
  }, []);

  // useEffect përsëritet kur ndryshon data ose liga.
  useEffect(() => {
    let active = true;
    const fetchMatches = () => {
      axios
        .get(`/api/site/v2/sports/soccer/${selectedLeague}/scoreboard`, {
          params: { dates: selectedDate.replaceAll('-', ''), limit: 1000 },
          timeout: 15000,
        })
        .then((response) => {
          // Përgjigjja e datës së vjetër nuk e ndryshon datën e re.
          if (!active) return;
          setMatches(response.data.events || []);
          setError('');
          setLoading(false);
          setUpdatedAt(
            new Date().toLocaleTimeString('sq-AL', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }),
          );
        })
        .catch((error) => {
          if (!active) return;
          console.error('Gabim gjatë marrjes së ndeshjeve:', error);
          setError(
            'Nuk u morën rezultatet. Kontrollo internetin ose provo përsëri pas pak.',
          );
          setLoading(false);
        });
    };
    fetchMatches();
    const intervalId = setInterval(fetchMatches, 60000);
    // Ndalojmë intervalin dhe injorojmë përgjigjet e kërkesës së vjetër.
    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, [selectedDate, selectedLeague]);

  function changeDate(date) {
    if (!date || date === selectedDate) return;
    setLoading(true);
    setMatches([]);
    setError('');
    setUpdatedAt('');
    setSelectedDate(date);
  }

  function changeLeague(league) {
    if (league === selectedLeague) return;
    setLoading(true);
    setMatches([]);
    setError('');
    setUpdatedAt('');
    setSelectedLeague(league);
  }

  // includes() kontrollon nëse ndeshja është tashmë te favoritet.
  function toggleFavorite(id) {
    if (favorites.includes(id))
      setFavorites(favorites.filter((favorite) => favorite !== id));
    else setFavorites([...favorites, id]);
  }

  // filter() zgjedh ndeshjet, pastaj komponentat i shfaqin me map().
  const filteredMatches = matches.filter((match) => {
    const matchesSearch = match.name
      .toLowerCase()
      .includes(search.toLowerCase().trim());
    const matchesLive = !onlyLive || match.status.type.state === 'in';
    const matchesFavorites = !onlyFavorites || favorites.includes(match.id);
    return matchesSearch && matchesLive && matchesFavorites;
  });
  const liveCount = matches.filter(
    (match) => match.status.type.state === 'in',
  ).length;

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <div className="page-intro">
        <div>
          <span className="eyebrow">FUTBOLLI, NË NJË VEND</span>
          <h1>Çdo ndeshje. Çdo moment.</h1>
        </div>
        <span className="refresh-note">
          <span className="status-dot" />
          Përditësim çdo 60 sekonda
        </span>
      </div>
      <main className="dashboard">
        <LeagueSidebar
          leagues={leagues}
          selectedLeague={selectedLeague}
          changeLeague={changeLeague}
        />
        <section className="scores-column" aria-label="Rezultatet e ndeshjeve">
          <MatchFilters
            selectedDate={selectedDate}
            changeDate={changeDate}
            today={getToday()}
            onlyLive={onlyLive}
            setOnlyLive={setOnlyLive}
            liveCount={liveCount}
            onlyFavorites={onlyFavorites}
            setOnlyFavorites={setOnlyFavorites}
          />
          <div className="results-heading">
            <h2>Ndeshjet</h2>
            <span>
              {loading
                ? 'Duke u ngarkuar…'
                : `${filteredMatches.length} ndeshje`}
            </span>
          </div>
          {error && (
            <div className="message error-message" role="alert">
              {error}
              <small>
                Provo një datë tjetër ose prit rifreskimin automatik.
              </small>
            </div>
          )}
          {loading && (
            <div className="message loading-message" role="status">
              <span className="spinner" />
              Duke marrë ndeshjet…
            </div>
          )}
          {!loading && (!error || matches.length > 0) && (
            <MatchList
              matches={filteredMatches}
              leagues={leagues}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          )}
          {updatedAt && (
            <p className="update-time">
              Përditësimi i fundit: {updatedAt} · Orari sipas pajisjes tënde
            </p>
          )}
        </section>
        <aside className="right-column" aria-label="Lajmet dhe renditja">
          <News />
          <Standings />
        </aside>
      </main>
      <footer className="site-footer">
        <strong>
          live<span>score</span>
        </strong>
        <p>Shkolla Digjitale Prizren · Dita 16</p>
        <a href="https://www.espn.com/soccer/" target="_blank" rel="noreferrer">
          Të dhënat: ESPN ↗
        </a>
      </footer>
    </>
  );
}
export default App;
