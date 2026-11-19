import { useState } from "react";
const EditProduct = ({ product, updateProduct, onCancel, saving }) => {
  const [formData, setFormData] = useState(product);
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ndalo rifreskimin e faqes
    const updatedProduct = {
      ...formData, //fut të gjitha vlerat e shkruara nga përdoruesi.(name, price, description, category, image).
      price: Number(formData.price), // Sigurohet që çmimi të jetë numër
    };
    await updateProduct(updatedProduct); // App e mbyll editimin vetëm pas suksesit.
  };
  const handleChange = (e) => {
    const { name, value } = e.target; // Merr emrin dhe vlerën nga input-i
    setFormData((prevData) => ({
      ...prevData, //i kopjon të gjitha vlerat e mëparshme në një objekt të ri.
      [name]: value,
    }));
  };
  return (
    <div className="edit-product-form">
      <h2>Edit Product</h2>
      {/* Formulari për editimin e produktit */}
      <form onSubmit={handleSubmit}>
        <fieldset disabled={saving}>
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
              min="0"
              step="0.01"
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
          {/* Ruajtja e ndryshimeve */}
          <button type="submit">{saving ? "Duke ruajtur..." : "Save Changes"}</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </fieldset>
      </form>
    </div>
  );
};
export default EditProduct;
