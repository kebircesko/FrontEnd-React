// Importojmë React dhe useState për të menaxhuar state-in lokal
import React, { useState } from "react";

// Komponenti AddProduct pranon funksionin addProduct si prop
const AddProduct = ({ addProduct }) => {
  // State për të ruajtur të dhënat e formularit , krijohet objekti si me posht:
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  // Funksion që ekzekutohet kur formohet dhe dërgohet (submit)
  const handleSubmit = (e) => {
    e.preventDefault(); // Ndalo rifreskimin e faqes

    // Krijon një objekt të ri produkti nga të dhënat e formularit
    const newProduct = {
      id: Date.now(), // Gjeneron ID unike duke përdorur kohën aktuale
      ...formData, //fut të gjitha vlerat e shkruara nga përdoruesi.(name, price, description, category, image).
      price: Number(formData.price), // Sigurohet që çmimi të jetë numër
    };

    addProduct(newProduct); // E thërret funksionin për të shtuar produktin

    // Pas shtimit, e pastron formularin
    setFormData({
      name: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
  };

  // Ky funksion thirret sa herë përdoruesi shkruan diçka në input.
  const handleChange = (e) => {
    const { name, value } = e.target; // Merr emrin dhe vlerën nga input-i

    // Përditëson state-in me të dhënat e reja
    setFormData((prevData) => ({
      ...prevData, //i kopjon të gjitha vlerat e mëparshme në një objekt të ri.
      [name]: value,
    }));
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      {/* Formulari për shtimin e produktit */}
      <form onSubmit={handleSubmit}>
        {/* Input për emrin e produktit */}
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

        {/* Butoni për shtimin e produktit */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

// useState → menaxhon të dhënat e formularit.

// handleChange → përditëson formData për çdo ndryshim në input.

// handleSubmit → krijon produktin e ri dhe e dërgon te addProduct.

// Pas submit, inputet pastrohen automatikisht.


// Eksportojmë komponentin për ta përdorur në App.js
export default AddProduct;
