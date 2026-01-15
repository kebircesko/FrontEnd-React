import React, { useState, useEffect } from "react";

const EditProduct = ({ product, updateProduct, onCancel }) => {
  const [formData, setFormData] = useState(product);
  const [previewImage, setPreviewImage] = useState(product.image || "");
  const [imageSource, setImageSource] = useState("url"); // "url" ose "file"

  useEffect(() => {
    setFormData(product);
    setPreviewImage(product.image || "");
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({ ...formData, image: previewImage });
    onCancel();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? Number(value) : value,
    }));

    // Nëse po ndryshohet URL e imazhit dhe burimi është "url"
    if (name === "image" && imageSource === "url") {
      setPreviewImage(value);
    }
  };

  // Kur përdoruesi zgjedh file nga kompjuteri
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          imageFile: reader.result, // opsionale për backend
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-product-form" style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Emri */}
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

        {/* Çmimi */}
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

        {/* Përshkrimi */}
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

        {/* Kategoria */}
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

        {/* 🔹 Zgjedhja e burimit të imazhit */}
        <div style={{ marginTop: "15px" }}>
          <label>Image Source:</label>
          <div>
            <label>
              <input
                type="radio"
                name="imageSource"
                value="url"
                checked={imageSource === "url"}
                onChange={() => setImageSource("url")}
              />
              Use Web URL
            </label>

            <label style={{ marginLeft: "15px" }}>
              <input
                type="radio"
                name="imageSource"
                value="file"
                checked={imageSource === "file"}
                onChange={() => setImageSource("file")}
              />
              Upload File
            </label>
          </div>
        </div>

        {/* 🔹 Input për URL ose për File sipas zgjedhjes */}
        {imageSource === "url" ? (
          <div>
            <label htmlFor="image">Image URL:</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>
        ) : (
          <div>
            <label htmlFor="imageUpload">Choose File:</label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        )}

        {/* 🔹 Pamja paraprake */}
        {previewImage && (
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <img
              src={previewImage}
              alt="Preview"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}

        {/* Butonat */}
        <div className="edit-buttons" style={{ marginTop: "15px" }}>
          <button type="submit">Save Changes</button>
          <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
