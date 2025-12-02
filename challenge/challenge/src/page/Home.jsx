// File: Home.jsx
import React from "react";
export default function Home() {
  return (
    <div className="container page">
      <h1>Mirësevini në Digital School Prizren</h1>
      <p>
        Digital School është një institucion modern edukimi që ka për qëllim të
        përgatisë gjeneratën e re për botën digjitale. Me më shumë se 7 vite
        përvojë dhe mbi 300 nxënës aktivë, ne ofrojmë mësim cilësor në
        programim, dizajn grafik dhe teknologji moderne.
      </p>
      <img
        src="https://images.unsplash.com/photo-1600195077075-7c34c2f2a1c8"
        alt="Digital School Students Learning"
      />
      <p>
        Në këtë shkollë, nxënësit mësojnë përmes praktikës, duke ndërtuar
        projekte reale me teknologjitë më të fundit si HTML, CSS, JavaScript,
        React, dhe Python. Çdo kurs është ndërtuar për të zhvilluar aftësi
        logjike, kreative dhe bashkëpunuese.
      </p>
      <p>
        Ne organizojmë gjithashtu evente si <strong>Hour of Code</strong>, gara,
        trajnime verore dhe punëtori që ndihmojnë nxënësit të eksplorojnë
        potencialin e tyre në teknologji.
      </p>
      <div className="footer">
        Digital School • Krijo të ardhmen tënde digjitale
      </div>
    </div>
  );
}
