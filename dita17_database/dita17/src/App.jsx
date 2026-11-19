import { useState, useEffect, useRef } from 'react';
import './App.css';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct.jsx';
//npm install firebase
//https://console.firebase.google.com/
function App() {
  // Tani lista fillon bosh; produktet i lexojmë nga databaza.
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    const loadProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'products'));
        const databaseProducts = snapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id, // Firestore gjeneron ID; nuk përdorim Date.now().
        }));
        if (active) setProducts(databaseProducts);
      } catch {
        if (active) setError('Produktet nuk u lexuan. Kontrollo internetin, konfigurimin dhe Firestore Rules. Rifresko faqen për të provuar përsëri.');
      } finally {
        if (active) setLoading(false);
      }
    };

    loadProducts();
    return () => { active = false; };
  }, []);

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

  const addProduct = async (newProduct) => {
    setSaving(true);
    setError('');
    try {
      const document = await addDoc(collection(db, 'products'), newProduct);
      // State ndryshon vetëm pasi databaza e konfirmon ruajtjen.
      setProducts((prevProducts) => [...prevProducts, { ...newProduct, id: document.id }]);
      return true;
    } catch {
      setError('Produkti nuk u shtua. Kontrollo internetin dhe Firestore Rules.');
      return false;
    } finally {
      setSaving(false);
    }
  };

  const updateProduct = async (updatedProduct) => {
    setSaving(true);
    setError('');
    try {
      // ID shërben për adresën e dokumentit; në dokument ruajmë vetëm fushat.
      const { id, ...productData } = updatedProduct;
      await updateDoc(doc(db, 'products', id), productData);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? updatedProduct : product
        )
      );
      setEditingProduct(null);
    } catch {
      setError('Ndryshimet nuk u ruajtën. Provo përsëri; formulari mbetet i plotësuar.');
    } finally {
      setSaving(false);
    }
  };

  const deleteProduct = async (productId) => {
    if (!window.confirm('A dëshiron ta fshish këtë produkt nga databaza?')) return;
    setSaving(true);
    setError('');
    try {
      await deleteDoc(doc(db, 'products', productId));
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
      if (editingProduct?.id === productId) setEditingProduct(null);
    } catch {
      setError('Produkti nuk u fshi. Kontrollo internetin dhe Firestore Rules.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container">
      <h1>Dita 17: Produktet në Firestore</h1>
      {error && <p className="error-message" role="alert">{error}</p>}
      {/* Shfaqet vetëm një formular: Add ose Edit. */}
      <div ref={formRef} style={{ scrollMarginTop: '20px' }}>
        {editingProduct ? (
          <EditProduct
            key={editingProduct.id}
            product={editingProduct}
            saving={saving || loading}
            updateProduct={updateProduct}
            onCancel={() => setEditingProduct(null)}
          />
        ) : (
          <AddProduct addProduct={addProduct} saving={saving || loading} />
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

      {loading && <p className="status-message" role="status">Duke lexuar produktet...</p>}
      {!loading && !error && filteredProducts.length === 0 && (
        <p className="status-message">Nuk ka produkte në këtë kategori. Shto një produkt.</p>
      )}
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
                disabled={saving}
                className="edit-button"
                onClick={() => setEditingProduct(product)}
              >
                Edit
              </button>

              <button
                disabled={saving}
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
