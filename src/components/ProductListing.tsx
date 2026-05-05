import { useState, useEffect } from 'react';
import type { Product, ApiResponse } from '../types';
import { ProductCard } from './ProductCard';
import '../styles/ProductListing.css';

export function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts');
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data: ApiResponse = await response.json();

      if (data.success) {
        setProducts(data.data.data);
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.data.data.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } else {
        throw new Error(data.message || 'Failed to fetch products');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === 'all' ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="product-listing-container">
      <header className="listing-header">
        <div className="header-content">
          <h1>Our Products</h1>
          <p>Discover our amazing collection of products</p>
        </div>
        <button onClick={fetchProducts} disabled={loading} className="refresh-btn">
          {loading ? 'Loading...' : '🔄 Refresh'}
        </button>
      </header>

      {error && <div className="error-message">{error}</div>}

      {!loading && (
        <>
          <div className="filters-container">
            <div className="category-filters">
              <button
                className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="results-info">
              Showing {filteredProducts.length} products
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products">No products found in this category.</div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      )}
    </div>
  );
}
