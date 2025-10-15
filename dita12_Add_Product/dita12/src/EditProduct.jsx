// Importojmë React dhe hook-et useState dhe useEffect
// React për të krijuar komponentin.
// useState për të menaxhuar gjendjen (state) lokale.
// useEffect për të sinkronizuar state-in kur ndryshon product.
import React, { useState, useEffect } from "react";

// Komponenti EditProduct pranon product (për të edituar),
// updateProduct (për ta ruajtur ndryshimin) dhe onCancel (për me anulu)
const EditProduct = ({ product, updateProduct, onCancel }) => {
  // State lokal për të ruajtur të dhënat e formularit gjatë editimit
  //formData → mban të dhënat aktuale që shfaqen në formular gjatë editimit.
  const [formData, setFormData] = useState(product);

  // useEffect për të përditësuar formData sa herë që product ndryshon
  //Ky efekt ekzekutohet sa herë që product ndryshon.
  //Siguron që nëse përdoruesi zgjedh një produkt tjetër për ta edituar, formulari përditësohet me të dhënat e tij.
  useEffect(() => {
    setFormData(product);
  }, [product]);

  // Funksion që ekzekutohet kur forma dërgohet (submit)
  const handleSubmit = (e) => {
    e.preventDefault(); // Parandalon rifreskimin e faqes
    updateProduct(formData); // Thërret funksionin për të përditësuar produktin
    onCancel(); // Mbyll formularin e editimit
  };

  // Funksion që përditëson state-in sa herë që përdoruesi shkruan në input
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Përditëson state-in përkatës në formData
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? Number(value) : value, // E konverton çmimin në numër nëse input-i është për çmim
    }));
  };

  return (
    <div className="edit-product-form">
      <h2>Edit Product</h2>
      {/* Formulari për editimin e produktit */}
      <form onSubmit={handleSubmit}>
        {/* Input për emrin */}
        <div>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input për çmimin */}
        <div>
          <label htmlFor="price">Price ($):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Textarea për përshkrimin */}
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Select për kategorinë */}
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>

        {/* Input për URL e imazhit */}
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        {/* Butonat për ruajtje ose anulim */}
        <div className="edit-buttons">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

// Eksportojmë komponentin që të përdoret në App.js
export default EditProduct;
