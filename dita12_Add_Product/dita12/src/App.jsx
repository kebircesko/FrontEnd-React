// Importojmë React dhe useState për state management
import React, { useState } from 'react';
// Importojmë stilin e aplikacionit
import './App.css';
// Importojmë komponentët për shtim dhe editim produktesh
import AddProduct from './AddProduct';
import EditProduct from './EditProduct.jsx';

function App() {
  // Definojmë një listë fillestare të produkteve me disa të dhëna shembull
  const initialProducts = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
      description: 'A high-performance laptop for gaming and work.',
      category: 'Electronics',
      image: 'https://p3-ofp.static.pub//fes/cms/2024/02/07/z1s8vu6qdp44nqo52m4km2bj977oo8921328.png',
    },
    {
      id: 2,
      name: 'Phone',
      price: 800,
      description: 'A smartphone with an amazing camera and long-lasting battery.',
      category: 'Electronics',
      image: 'URL e imazhit',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 150,
      description: 'Noise-cancelling headphones for immersive sound experience.',
      category: 'Accessories',
      image: 'URL e imazhit',
    },
    {
      id: 4,
      name: 'Shirt',
      price: 50,
      description: 'A comfortable cotton shirt.',
      category: 'Clothing',
      image: 'URL e imazhit',
    },
  ];

  // Krijojmë state për produktet
  const [products, setProducts] = useState(initialProducts);
  // State për kategorinë e selektuar për filtrim
  const [selectedCategory, setSelectedCategory] = useState('All');
  // State për produktin që po editohet (nëse ka)
  const [editingProduct, setEditingProduct] = useState(null);

  // Funksion për të vendosur kategorinë e selektuar
  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  // Filtron produktet sipas kategorisë së selektuar
  const filteredProducts =
    selectedCategory === 'All'
      ? products // nëse është 'All' i shfaq të gjitha
      : products.filter((product) => product.category === selectedCategory); // ndryshe i filtrin

  // Funksion për të shtuar një produkt të ri në listë
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]); // shton produktin e ri në fund të listës
  };

  // Funksion për të përditësuar një produkt ekzistues
  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product // e zëvendëson produktin me atë të riun nëse id përputhet
      )
    );
  };

  return (
    <div className="container">
      {/* Nëse ka produkt për editim, shfaq formën e EditProduct */}
      {editingProduct ? (
        <EditProduct
          product={editingProduct}
          updateProduct={updateProduct}
          onCancel={() => setEditingProduct(null)} // e kthen në null kur anulohet editimi
        />
      ) : (
        // Përndryshe shfaq formën për të shtuar produkt të ri
        <AddProduct addProduct={addProduct} />
      )}

      <h1>Product List</h1>

      {/* Butonat për filtrimin e produkteve sipas kategorisë */}
      <div className="filter-buttons">
        <button onClick={() => filterProducts('All')}>All</button>
        <button onClick={() => filterProducts('Electronics')}>Electronics</button>
        <button onClick={() => filterProducts('Accessories')}>Accessories</button>
        <button onClick={() => filterProducts('Clothing')}>Clothing</button>
      </div>

      <div>
        <h2>Product List</h2>
        {/* Liston produktet e filtruar */}
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <li key={product.id} className="product-item">
              {/* Imazhi i produktit */}
              <img src={product.image} alt={product.name} />

              {/* Informacioni i produktit */}
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
              </div>

              {/* Veprimet për secilin produkt: Edit dhe Delete */}
              <div className="product-actions">
                <button
                  className="edit-button"
                  onClick={() => setEditingProduct(product)} // vendos produktin për editim
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() =>
                    setProducts(products.filter((p) => p.id !== product.id)) // fshin produktin nga lista
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Eksportojmë komponentin App për ta përdorur në index.js
export default App;
