# Dita 16 — Livescore

Projekt mësimor React me pamje të frymëzuar nga FotMob. Përdor metodat e shembullit me crypto: `useState`, `useEffect`, `axios.get()`, `.then()`, `.catch()`, `.map()`, `.filter()` dhe props. Pa router, TypeScript ose biblioteka të komponentave.

## Nisja

```bash
cd dita16-livescoore/dita16
npm install
npm run dev
```

Axios është tashmë në `package.json`. Në një projekt tjetër shtohet me `npm install axios`.

## Komponentat

- `App.jsx`: state-i, kërkesa për ndeshjet dhe rifreskimi çdo 60 sekonda. Data ose liga e re nis kërkesë të re. Pastrimi i efektit ndalon intervalin dhe injoron përgjigjet e vjetra.
- `Header.jsx`: logoja, kërkimi i ekipeve dhe navigimi brenda faqes.
- `LeagueSidebar.jsx`: ligat kryesore dhe lista e plotë nga API.
- `MatchFilters.jsx`: kalendari, dita e kaluar/ardhshme, Live dhe Favoritet.
- `MatchList.jsx`: ndarja sipas ligës dhe shfaqja me `.map()`.
- `MatchCard.jsx`: ekipet, logot, ora/rezultati dhe favoriti. Klikimi hap detajet në ESPN.
- `News.jsx`: pesë lajme reale me lidhje.
- `Standings.jsx`: tetë ekipet e para në renditjen aktuale të Premier League.

Favoritet ruhen vetëm derisa faqja të rifreskohet. Live shfaq ndeshjet që API i shënon në zhvillim; mund të mos ketë të tilla për datën/orën e zgjedhur. Orari ndjek zonën kohore të pajisjes. Renditja dhe lajmet janë aktuale dhe nuk ndryshojnë sipas datës së ndeshjeve. Titujt e lajmeve janë në gjuhën që kthen ESPN.

## API

Burimi është ESPN, jo API-ja private e FotMob. Endpoint-et e përdorura nuk kërkojnë API key:

```text
https://site.api.espn.com/apis/site/v2/leagues/dropdown?sport=soccer&lang=en&region=us
https://site.api.espn.com/apis/site/v2/sports/soccer/all/scoreboard?dates=20261027&limit=1000
https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news?limit=5
https://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings
```

Te scoreboard, `all` zëvendësohet me kodin e ligës, p.sh. `eng.1` ose `ita.1`. Data ndërtohet nga kalendari. Maksimumi është 1000 ndeshje për kërkesë dhe mbulimi varet nga ESPN. Këto janë endpoint-e publike pa kontratë të garantuar për përdorim të jashtëm; formati ose disponueshmëria mund të ndryshojnë. Në gabim shfaqet mesazh, pa rezultate të sajuara.

### Pse kërkesat në React fillojnë me /api?

ESPN bllokon kërkesat direkte nga shfletuesi përmes CORS. Te `vite.config.js` kemi shtuar një proxy: `axios.get('/api/...')` shkon te Vite dhe Vite e përcjell te `https://site.api.espn.com/apis/...`. Kjo nuk ndryshon metodën `.then()` / `.catch()` dhe nuk kërkon server shtesë për mësimin. Përdor `npm run dev` ose `npm run preview` pas build-it. Për publikim të folderit `dist` në hosting statik nevojitet i njëjti proxy në hosting/server; vetëm ngarkimi i skedarëve statikë nuk mjafton.

## Lidhja me shembullin e crypto-s

`coins` bëhet `matches`; `response.data` bëhet `response.data.events`; në vend të emrit/çmimit të monedhës shfaqim ekipet dhe rezultatin. `loading`, `error`, intervali dhe `clearInterval()` punojnë sipas të njëjtit parim. Props dërgojnë të dhënat nga `App` te komponentat.

```bash
npm run build
npm run lint
```
