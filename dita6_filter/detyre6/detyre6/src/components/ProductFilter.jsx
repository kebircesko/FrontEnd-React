import { useState } from "react";
import "./ProductFilter.css";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "Keyboard", price: 50 },
  { id: 4, name: "Monitor", price: 200 },
];

function ProductFilter() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="filter">
      <h2>Product Filter</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </div>
  );
}

export default ProductFilter;
