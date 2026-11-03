function MatchCard({ match, isFavorite, toggleFavorite }) {
  const competition = match.competitions[0];
  const home = competition.competitors.find((team) => team.homeAway === 'home');
  const away = competition.competitors.find((team) => team.homeAway === 'away');
  const status = match.status.type;
  const isLive = status.state === 'in';
  const hasScore = isLive || status.completed;
  const time = new Date(match.date).toLocaleTimeString('sq-AL', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const matchLink = match.links?.find((link) =>
    link.rel.includes('summary'),
  )?.href;
  if (!home || !away) return null;

  return (
    <div className={`match-row ${isLive ? 'match-live' : ''}`}>
      <span className={`match-status ${isLive ? 'live-text' : ''}`}>
        {isLive
          ? match.status.displayClock
          : status.completed
            ? 'FT'
            : status.name === 'STATUS_SCHEDULED'
              ? '—'
              : status.shortDetail}
      </span>
      <a
        className="match-teams"
        href={
          matchLink || `https://www.espn.com/soccer/match/_/gameId/${match.id}`
        }
        target="_blank"
        rel="noreferrer"
        aria-label={`${home.team.displayName} kundër ${away.team.displayName}, detajet në ESPN`}
      >
        <span className="team team-home">
          <span>{home.team.shortDisplayName || home.team.displayName}</span>
          {home.team.logo && (
            <img
              src={home.team.logo}
              alt=""
              onError={(event) => {
                event.currentTarget.style.visibility = 'hidden';
              }}
            />
          )}
        </span>
        <strong className={`score ${isLive ? 'live-score' : ''}`}>
          {hasScore
            ? `${home.score} − ${away.score}`
            : status.name === 'STATUS_SCHEDULED'
              ? time
              : '—'}
        </strong>
        <span className="team team-away">
          {away.team.logo && (
            <img
              src={away.team.logo}
              alt=""
              onError={(event) => {
                event.currentTarget.style.visibility = 'hidden';
              }}
            />
          )}
          <span>{away.team.shortDisplayName || away.team.displayName}</span>
        </span>
      </a>
      <button
        className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
        aria-label={`${isFavorite ? 'Hiq nga' : 'Shto te'} favoritet: ${match.name}`}
        aria-pressed={isFavorite}
        onClick={() => toggleFavorite(match.id)}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
}
export default MatchCard;
