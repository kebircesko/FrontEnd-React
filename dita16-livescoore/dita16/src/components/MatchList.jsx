import MatchCard from './MatchCard';

function MatchList({ matches, leagues, favorites, toggleFavorite }) {
  // UID-ja përmban ID-në e ligës: s:600~l:700~e:123.
  function getLeagueId(match) {
    return match.uid.split('~')[1];
  }

  // Mbajmë një përfaqësues për çdo ligë që titulli të mos përsëritet.
  const leagueMatches = matches.filter(
    (match, index) =>
      matches.findIndex((item) => getLeagueId(item) === getLeagueId(match)) ===
      index,
  );
  if (matches.length === 0) {
    return (
      <div className="panel empty-state">
        <span>⚽</span>
        <h3>Nuk ka ndeshje për këtë zgjedhje</h3>
        <p>
          Provo një datë ose ligë tjetër, hiqe kërkimin ose çaktivizo filtrat
          Live dhe Favoritet.
        </p>
      </div>
    );
  }
  return (
    <div className="match-list">
      {leagueMatches.map((firstMatch) => {
        const leagueId = getLeagueId(firstMatch);
        const league = leagues.find((item) => `l:${item.id}` === leagueId);
        const leagueGames = matches.filter(
          (match) => getLeagueId(match) === leagueId,
        );
        return (
          <section className="panel league-group" key={leagueId}>
            <div className="league-group-heading">
              <div>
                <span className="competition-icon">⚽</span>
                <h3>
                  {league
                    ? league.name
                    : firstMatch.competitions[0].altGameNote || 'Futboll'}
                </h3>
              </div>
              <span>{leagueGames.length}</span>
            </div>
            {leagueGames.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                isFavorite={favorites.includes(match.id)}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </section>
        );
      })}
    </div>
  );
}
export default MatchList;
