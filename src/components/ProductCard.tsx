import type { Product } from '../types';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
  const stockStatus = product.stock > 20 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock';
  const stockColor = product.stock > 20 ? '#10b981' : product.stock > 0 ? '#f59e0b' : '#ef4444';

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} className="product-image" />
        <div className="discount-badge">{product.discountPercentage.toFixed(1)}% OFF</div>
        <div className="stock-badge" style={{ backgroundColor: stockColor }}>
          {stockStatus}
        </div>
      </div>

      <div className="product-content">
        <div className="product-meta">
          <span className="category">{product.category}</span>
          <span className="brand">{product.brand}</span>
        </div>

        <h3 className="product-title">{product.title}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          <div className="stars">
            {'★'.repeat(Math.round(product.rating))}
            {'☆'.repeat(5 - Math.round(product.rating))}
          </div>
          <span className="rating-value">{product.rating.toFixed(2)}</span>
        </div>

        <div className="product-footer">
          <div className="price-container">
            <span className="original-price">${product.price.toFixed(2)}</span>
            <span className="discounted-price">${discountedPrice}</span>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
