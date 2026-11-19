import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct.jsx';

function App() {
  const initialProducts = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
      description: 'A high-performance laptop for gaming and work.',
      category: 'Electronics',
      image:
        'https://p3-ofp.static.pub//fes/cms/2024/02/07/z1s8vu6qdp44nqo52m4km2bj977oo8921328.png',
    },
    {
      id: 2,
      name: 'Phone',
      price: 800,
      description:
        'A smartphone with an amazing camera and long-lasting battery.',
      category: 'Electronics',
      image:
        'https://media.gq-magazine.co.uk/photos/5d1399752881cc7da90a84c6/master/w_1600,c_limit/nokia3310.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 150,
      description:
        'Noise-cancelling headphones for immersive sound experience.',
      category: 'Accessories',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1BhBzceBrGBNYP0F9CxRFjZK6MTa-0ALcJzErG0acbAZdn4fN_X8tMs&s=10',
    },
    {
      id: 4,
      name: '2006-08 Liverpool Home Shirt Torres',
      price: 200,
      description: 'A comfortable cotton shirt.',
      category: 'Clothing',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxoo_Tbvde6HxkBWp9KB-EeNVxY7-ovN63UImCVHYhjgUgaQryxuJbho&s=10',
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editingProduct, setEditingProduct] = useState(null);

  const formRef = useRef(null);

  // Kur zgjedhet një produkt për editim, shkon te formulari.
  useEffect(() => {
    if (editingProduct) {
      formRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [editingProduct]);

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );

    if (editingProduct?.id === productId) {
      setEditingProduct(null);
    }
  };

  return (
    <div className="container">
      {/* Shfaqet vetëm një formular: Add ose Edit. */}
      <div ref={formRef} style={{ scrollMarginTop: '20px' }}>
        {editingProduct ? (
          <EditProduct
            product={editingProduct}
            updateProduct={updateProduct}
            onCancel={() => setEditingProduct(null)}
          />
        ) : (
          <AddProduct addProduct={addProduct} />
        )}
      </div>

      <h1>Product List</h1>

      <div className="filter-buttons">
        <button onClick={() => setSelectedCategory('All')}>
          All
        </button>
        <button onClick={() => setSelectedCategory('Electronics')}>
          Electronics
        </button>
        <button onClick={() => setSelectedCategory('Accessories')}>
          Accessories
        </button>
        <button onClick={() => setSelectedCategory('Clothing')}>
          Clothing
        </button>
      </div>

      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />

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

            <div className="product-actions">
              <button
                className="edit-button"
                onClick={() => setEditingProduct(product)}
              >
                Edit
              </button>

              <button
                className="delete-button"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;