// File: About.jsx
import React from "react";
export default function About() {
  return (
    <div className="container page">
      <h1>Na Kontaktoni</h1>
      <p>
        Për çdo pyetje, bashkëpunim apo regjistrim të ri, ju lutemi na
        kontaktoni përmes email-it ose rrjeteve tona sociale. Ekipi ynë do t’ju
        përgjigjet sa më shpejt të jetë e mundur.
      </p>
      <img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
        alt="Contact Us"
      />
      <p>
        <strong>Email:</strong> info@digitalschoolprizren.com
        <br />
        <strong>Telefoni:</strong> +383 44 000 000
        <br />
        <strong>Adresa:</strong> Rr. Adem Jashari, Prizren, Kosovë
      </p>
      <p>
        Vizitoni faqet tona në <a href="#">Facebook</a>,{" "}
        <a href="#">Instagram</a> dhe <a href="#">LinkedIn</a> për të parë
        projektet dhe aktivitetet më të fundit të nxënësve tanë.
      </p>
      <img
        src="https://images.unsplash.com/photo-1587574293340-e0011c4e4a4b"
        alt="Students Working Together"
      />
      <div className="footer">
        © 2025 Digital School Prizren • Të gjitha të drejtat të rezervuara
      </div>
    </div>
  );
}
