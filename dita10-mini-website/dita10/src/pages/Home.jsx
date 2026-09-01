import React from 'react';
import '../App.css';
// Komponenti Home - faqja kryesore që përdoruesit e shohin kur hyjnë në sajt
const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      
      {/* Titulli kryesor i faqes */}
      <h1>Mirë se vini në WebPlatformën tonë!</h1>

      {/* Paragraf mirëseardhjeje ose prezantimi */}
      <p>
        Kjo është faqja jonë kryesore ku mund të gjeni informacione rreth nesh, produktet që ofrojmë dhe mënyrat për të na kontaktuar.
        Jemi të lumtur që jeni këtu!
      </p>

      {/* Seksion i shpejtë informues për veçoritë kryesore */}
      <div style={{ marginTop: '2rem' }}>
        <h2>Çfarë mund të gjeni këtu?</h2>
        <ul>
          <li>ℹ️ Informata rreth kompanisë në <strong>Rreth Nesh</strong></li>
          <li>🛍️ Produkte dhe shërbime në <strong>Produkte</strong></li>
          <li>✉️ Formular për kontakt në <strong>Kontakt</strong></li>
        </ul>
      </div>

      {/* Mesazh motivues */}
      <p style={{ marginTop: '2rem' }}>
        Fillo eksplorimin dhe zbulo mundësi të reja!
      </p>
    </div>
  );
};

export default Home;
