import { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    let active = true;
    // I njëjti parim si axios.get() në shembullin e crypto-s.
    axios
      .get('/api/site/v2/sports/soccer/eng.1/news', {
        params: { limit: 5 },
        timeout: 15000,
      })
      .then((response) => {
        if (!active) return;
        setArticles(response.data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        if (!active) return;
        console.error('Gabim gjatë marrjes së lajmeve:', error);
        setError('Lajmet nuk u ngarkuan.');
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);
  return (
    <section className="panel news-panel" id="news">
      <h2>
        Lajmet e fundit <span className="section-tag">FUTBOLL</span>
      </h2>
      {loading && <p className="small-message">Duke marrë lajmet…</p>}
      {error && (
        <p className="small-message" role="alert">
          {error}
        </p>
      )}
      {!loading && !error && articles.length === 0 && (
        <p className="small-message">Nuk ka lajme për momentin.</p>
      )}
      {articles.map((article, index) => (
        <a
          className={`news-item ${index === 0 ? 'featured-news' : ''}`}
          key={article.id}
          href={article.links?.web?.href || 'https://www.espn.com/soccer/'}
          target="_blank"
          rel="noreferrer"
        >
          {article.images?.[0] && (
            <img
              src={article.images[0].url}
              alt=""
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          )}
          <div>
            <h3>{article.headline}</h3>
            <span className="news-meta">
              ESPN ·{' '}
              {new Date(article.published).toLocaleDateString('sq-AL', {
                day: 'numeric',
                month: 'short',
              })}{' '}
              ↗
            </span>
          </div>
        </a>
      ))}
      <a
        className="panel-footer-link"
        href="https://www.espn.com/soccer/"
        target="_blank"
        rel="noreferrer"
      >
        Më shumë lajme ↗
      </a>
    </section>
  );
}
export default News;
