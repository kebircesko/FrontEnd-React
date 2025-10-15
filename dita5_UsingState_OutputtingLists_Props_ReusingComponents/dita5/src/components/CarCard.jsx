import React from "react";  // Importimi i bibliotekës React
import "./Card.css";  // Importimi i skedarit CSS për stilizimin
// Definimi i komponentit CarCard që merr si props(parameter,variabel) detajet e makinës
function CarCard({ brand, model, year, description, image }) {
  return (
    <div className="car-card">  {/* Kontejneri kryesor për kartën e makinës */}
      {/* Shfaqja e imazhit të makinës */}
      <img src={image} className="car-image" alt={`${brand} ${model}`} />  
      
      {/* Shfaqja e markës së makinës në një element h2 */}
      <h2 className="car-brand">{brand}</h2> 

      {/* Shfaqja e modelit të makinës me stilizim shtesë për theksim */}
      <p className="car-model">
        Modeli: <strong>{model}</strong>
      </p>

      {/* Shfaqja e vitit të prodhimit të makinës */}
      <p className="car-year">Viti i prodhimit: {year}</p>

      {/* Shfaqja e përshkrimit të shkurtër të makinës */}
      <p className="car-description">{description}</p>
    </div>
  );
}
export default CarCard;  // Eksportimi i komponentit CarCard për t'u përdorur në skedarë të tjerë