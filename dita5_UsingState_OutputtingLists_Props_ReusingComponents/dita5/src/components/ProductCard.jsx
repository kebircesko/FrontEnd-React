import React from "react"; // Importimi i React për të përdorur JSX
import "./ProductCard.css"; // Importimi i stilit të kartës së produktit
// Komponenti ProductCard merr të dhënat e produktit përmes props
function ProductCard({ name, category, price, image }) {
  return (
    <div className="product-card">
      {/* Imazhi që vjen nga prop-i image */}
      <div className="product-image-wrapper">
        <img src={image} className="product-image" alt={name} />
      </div>

      {/* Shfaqja e emrit të produktit */}
      <h2 className="product-name">{name}</h2>

      {/* Shfaqja e kategorisë që vjen nga props */}
      <p className="product-category">Kategoria: {category}</p>

      {/* Shfaqja e çmimit të produktit */}
      <p className="product-price">Çmimi: {price} €</p>
    </div>
  );
}
export default ProductCard; // Eksportimi për ta përdorur në App.jsx
