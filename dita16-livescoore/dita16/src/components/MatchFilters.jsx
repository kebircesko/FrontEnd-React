function MatchFilters({
  selectedDate,
  changeDate,
  today,
  onlyLive,
  setOnlyLive,
  liveCount,
  onlyFavorites,
  setOnlyFavorites,
}) {
  function moveDate(days) {
    const date = new Date(`${selectedDate}T12:00:00`);
    date.setDate(date.getDate() + days);
    changeDate(
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
    );
  }
  return (
    <div className="panel match-filters" id="matches">
      <div className="date-navigation">
        <button
          className="circle-button"
          aria-label="Dita e kaluar"
          onClick={() => moveDate(-1)}
        >
          ‹
        </button>
        <div className="date-center">
          <strong>
            {selectedDate === today
              ? 'Sot'
              : new Date(`${selectedDate}T12:00:00`).toLocaleDateString(
                  'sq-AL',
                  { weekday: 'long' },
                )}
          </strong>
          <input
            aria-label="Data e ndeshjeve"
            type="date"
            value={selectedDate}
            onChange={(event) => changeDate(event.target.value)}
          />
        </div>
        <button
          className="circle-button"
          aria-label="Dita e ardhshme"
          onClick={() => moveDate(1)}
        >
          ›
        </button>
      </div>
      <div className="filter-buttons">
        <button
          className={`filter-chip ${!onlyLive && !onlyFavorites ? 'active' : ''}`}
          onClick={() => {
            setOnlyLive(false);
            setOnlyFavorites(false);
          }}
        >
          Të gjitha
        </button>
        <button
          className={`filter-chip ${onlyLive ? 'active' : ''}`}
          aria-pressed={onlyLive}
          onClick={() => setOnlyLive(!onlyLive)}
        >
          <span className="status-dot" />
          Live <span className="chip-count">{liveCount}</span>
        </button>
        <button
          className={`filter-chip ${onlyFavorites ? 'active' : ''}`}
          aria-pressed={onlyFavorites}
          onClick={() => setOnlyFavorites(!onlyFavorites)}
        >
          ☆ Favoritet
        </button>
        {selectedDate !== today && (
          <button className="today-button" onClick={() => changeDate(today)}>
            Sot ↩
          </button>
        )}
      </div>
    </div>
  );
}
export default MatchFilters;
