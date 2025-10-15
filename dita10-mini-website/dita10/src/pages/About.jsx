import React from 'react';
import '../App.css';
// Komponenti About - jep informacione rreth kompanisë ose faqes
const About = () => {
  return (
    <div className="about" style={{ padding: '2rem' }}>
      
      {/* Titulli i faqes */}
      <h1>Rreth Nesh</h1>

      {/* Paragrafi me përshkrim të shkurtër */}
      <p>
        Ne jemi një ekip i apasionuar pas teknologjisë që ofrojmë zgjidhje kreative dhe të besueshme për klientët tanë.
        Qëllimi ynë është të krijojmë përvoja të jashtëzakonshme digjitale për të gjithë.
      </p>

      {/* Nën-titulli për veçoritë/shërbimet */}
      <h2>Çfarë bëjmë ne?</h2>

      {/* Listë me pika për të përshkruar shërbimet apo veçoritë */}
      <ul>
        <li>🖥️ Zhvillim ueb faqesh të personalizuara</li>
        <li>📱 Aplikacione mobile për Android & iOS</li>
        <li>🎨 Dizajn grafik dhe UI/UX</li>
        <li>📈 Konsulencë teknologjike dhe digjitale</li>
        <li>🎓 Trajnime dhe mentorim për të rinj</li>
      </ul>

      {/* Paragraf shtesë për misionin ose vizionin */}
      <p>
        Me mbi 5 vite eksperiencë, ne punojmë me përkushtim që çdo projekt të jetë unik dhe profesional.
        Nëse dëshironi të mësoni më shumë ose të bashkëpunoni me ne, jeni të mirëpritur të na kontaktoni.
      </p>
    </div>
  );
};

export default About;
