import axios from 'axios';

export const espn = axios.create({
  baseURL: 'https://site.api.espn.com/apis',
  timeout: 15000,
});

const competitionNames = {
  'eng.1': ['English Premier League', 'Premier League'],
  'uefa.champions': ['UEFA Champions League'],
  'esp.1': ['Spanish La Liga', 'LaLiga', 'La Liga'],
  'ger.1': ['German Bundesliga', 'Bundesliga'],
  'ita.1': ['Italian Serie A', 'Serie A'],
  'fra.1': ['French Ligue 1', 'Ligue 1'],
  'uefa.europa': ['UEFA Europa League'],
  'eng.league_cup': ['English League Cup', 'EFL Cup'],
  'esp.copa_del_rey': ['Spanish Copa del Rey', 'Copa del Rey'],
  'fifa.world': ['FIFA World Cup'],
};

function normalizeMatch(match) {
  const completed = match.status === 'finished';
  const live = match.status === 'live' || match.status === 'inprogress';
  const scheduled = ['Not started', 'Scheduled'].includes(match.status_text);
  const id = `sportscore:${match.url}`;
  const team = (name, logo, score, homeAway) => ({
    homeAway,
    score: score ?? '—',
    team: { displayName: name, logo },
  });
  return {
    id,
    uid: `s:600~l:sportscore:${match.competition}~e:${id}`,
    leagueName: match.competition,
    name: `${match.home} vs ${match.away}`,
    date: match.time,
    provider: 'SportScore',
    links: [{ rel: ['summary'], href: new URL(match.url, 'https://sportscore.com').href }],
    status: {
      displayClock: match.status_text || 'Live',
      type: {
        state: live ? 'in' : completed ? 'post' : 'pre',
        completed,
        name: scheduled ? 'STATUS_SCHEDULED' : match.status,
        shortDetail: match.status_text,
      },
    },
    competitions: [{ competitors: [
      team(match.home, match.home_logo, match.home_score, 'home'),
      team(match.away, match.away_logo, match.away_score, 'away'),
    ] }],
  };
}

export async function getMatches(date, league, signal) {
  try {
    const { data } = await axios.get('https://sportscore.com/api/widget/matches/', {
      params: { sport: 'football', date, limit: 50 },
      timeout: 15000,
      signal,
    });
    // Widget-i kufizohet në 50; përdorim rezervën për listën e plotë.
    if (!Array.isArray(data.matches) || data.matches.length === 0 || data.matches.length >= 50) {
      throw new Error('SportScore: lista e plotë nuk është në dispozicion.');
    }
    // Endpoint-i mund ta injorojë datën; mos shfaq ndeshje të ditës tjetër.
    if (data.matches.some((match) => {
      const time = new Date(match.time);
      const localDate = `${time.getFullYear()}-${String(time.getMonth() + 1).padStart(2, '0')}-${String(time.getDate()).padStart(2, '0')}`;
      return localDate !== date;
    })) {
      throw new Error('SportScore: data e kërkuar nuk është në dispozicion.');
    }
    const matches = league === 'all'
      ? data.matches
      : data.matches.filter((match) => competitionNames[league]?.includes(match.competition));
    if (league !== 'all' && matches.length === 0) {
      throw new Error('SportScore: liga nuk është në dispozicion.');
    }
    if (matches.some((match) => !match.time || !match.url || !match.home || !match.away)) {
      throw new Error('SportScore: përgjigje e paplotë.');
    }
    return matches.map(normalizeMatch);
  } catch (error) {
    if (signal?.aborted) throw error;
    const { data } = await espn.get(`/site/v2/sports/soccer/${league}/scoreboard`, {
      params: { dates: date.replaceAll('-', ''), limit: 1000 },
      signal,
    });
    if (!Array.isArray(data.events)) throw new Error('Përgjigje e pavlefshme e rezultateve.');
    return data.events;
  }
}
