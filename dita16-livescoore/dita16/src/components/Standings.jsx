import { useState, useEffect } from 'react';
import axios from 'axios';

function Standings() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    let active = true;
    axios
      .get('/api/v2/sports/soccer/eng.1/standings', { timeout: 15000 })
      .then((response) => {
        if (!active) return;
        setTeams(response.data.children?.[0]?.standings?.entries || []);
        setLoading(false);
      })
      .catch((error) => {
        if (!active) return;
        console.error('Gabim gjatë marrjes së tabelës:', error);
        setError('Renditja nuk u ngarkua.');
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  // find() gjen statistikën e kërkuar brenda listës stats të ekipit.
  function getStat(team, name) {
    const stat = team.stats.find((item) => item.name === name);
    return stat ? stat.displayValue : '—';
  }
  return (
    <section className="panel standings-panel" id="standings">
      <div className="standings-title">
        <div>
          <h2>Premier League</h2>
          <span>Angli · Renditja aktuale</span>
        </div>
        <span className="standings-icon">♛</span>
      </div>
      {loading && <p className="small-message">Duke marrë renditjen…</p>}
      {error && (
        <p className="small-message" role="alert">
          {error}
        </p>
      )}
      {!loading && !error && teams.length === 0 && (
        <p className="small-message">Renditja nuk është në dispozicion.</p>
      )}
      {teams.length > 0 && (
        <table>
          <caption className="sr-only">
            Tetë ekipet e para në Premier League. N: ndeshjet, DG: diferenca e
            golave, P: pikët.
          </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Ekipi</th>
              <th title="Ndeshjet">N</th>
              <th title="Diferenca e golave">DG</th>
              <th title="Pikët">P</th>
            </tr>
          </thead>
          <tbody>
            {teams.slice(0, 8).map((entry, index) => (
              <tr key={entry.team.id}>
                <td>
                  {getStat(entry, 'rank') === '—'
                    ? index + 1
                    : getStat(entry, 'rank')}
                </td>
                <td>
                  <span className="table-team">
                    {entry.team.logos?.[0] && (
                      <img src={entry.team.logos[0].href} alt="" />
                    )}
                    <span>{entry.team.shortDisplayName}</span>
                  </span>
                </td>
                <td>{getStat(entry, 'gamesPlayed')}</td>
                <td>{getStat(entry, 'pointDifferential')}</td>
                <td>
                  <strong>{getStat(entry, 'points')}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <a
        className="panel-footer-link"
        href="https://www.espn.com/soccer/table/_/league/eng.1"
        target="_blank"
        rel="noreferrer"
      >
        Tabela e plotë ↗
      </a>
    </section>
  );
}
export default Standings;
