function Header({ search, setSearch }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="./" className="brand" aria-label="Livescore, kryefaqja">
          <span className="brand-ball">⚽</span>live<span>score</span>
          <span className="brand-period">.</span>
        </a>
        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            aria-label="Kërko ekipin"
            placeholder="Kërko ekipin…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <kbd>⌕</kbd>
        </label>
        <nav className="header-nav" aria-label="Navigimi kryesor">
          <a className="nav-active" href="#matches">
            Ndeshjet
          </a>
          <a href="#news">Lajmet</a>
          <a href="#standings">Renditja</a>
        </nav>
        <span className="school-badge">
          SD<span>PRIZREN</span>
        </span>
      </div>
    </header>
  );
}
export default Header;
