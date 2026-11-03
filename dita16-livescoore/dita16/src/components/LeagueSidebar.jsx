// Këta janë filtrat. Rezultatet dhe lista e plotë e ligave vijnë nga API.
const topLeagues = [
  { code: 'eng.1', name: 'Premier League', icon: '🏴' },
  { code: 'uefa.champions', name: 'Champions League', icon: '⚽' },
  { code: 'esp.1', name: 'LaLiga', icon: '🇪🇸' },
  { code: 'ger.1', name: 'Bundesliga', icon: '🇩🇪' },
  { code: 'ita.1', name: 'Serie A', icon: '🇮🇹' },
  { code: 'fra.1', name: 'Ligue 1', icon: '🇫🇷' },
  { code: 'uefa.europa', name: 'Europa League', icon: '🏆' },
  { code: 'eng.league_cup', name: 'EFL Cup', icon: '🏴' },
  { code: 'esp.copa_del_rey', name: 'Copa del Rey', icon: '🇪🇸' },
  { code: 'fifa.world', name: 'FIFA World Cup', icon: '🌍' },
];

function LeagueSidebar({ leagues, selectedLeague, changeLeague }) {
  return (
    <aside className="left-column" aria-label="Zgjedh ligën">
      <section className="panel league-sidebar">
        <h2>
          Ligat kryesore <span>★</span>
        </h2>
        <button
          aria-label="Të gjitha ndeshjet"
          className={`league-button ${selectedLeague === 'all' ? 'selected' : ''}`}
          onClick={() => changeLeague('all')}
        >
          <span className="league-icon" aria-hidden="true">
            ◎
          </span>
          Të gjitha ndeshjet
        </button>
        {topLeagues.map((league) => (
          <button
            key={league.code}
            aria-label={league.name}
            className={`league-button ${selectedLeague === league.code ? 'selected' : ''}`}
            onClick={() => changeLeague(league.code)}
          >
            <span className="league-icon" aria-hidden="true">
              {league.icon}
            </span>
            {league.name}
          </button>
        ))}
      </section>
      <label className="panel league-select">
        <span>Shfleto ligat</span>
        <select
          aria-label="Të gjitha ligat"
          value={selectedLeague}
          onChange={(event) => changeLeague(event.target.value)}
        >
          <option value="all">Të gjitha ligat</option>
          {leagues.map((league) => (
            <option key={league.id} value={league.slug}>
              {league.name}
            </option>
          ))}
          {leagues.length === 0 &&
            topLeagues.map((league) => (
              <option key={league.code} value={league.code}>
                {league.name}
              </option>
            ))}
        </select>
      </label>
      <div className="sidebar-note">
        <span>⚡</span>
        <p>
          Afër lojës.
          <br />
          <strong>Kudo që je.</strong>
        </p>
        <small>Rezultatet dhe oraret e futbollit në një faqe.</small>
      </div>
    </aside>
  );
}
export default LeagueSidebar;
