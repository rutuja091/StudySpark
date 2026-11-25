
function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className={`product-art product-art-${product.id}`}>
        <span className="product-tag">{product.tag}</span>
        <span className="product-emoji">{product.icon}</span>
        <span className="product-level">{product.level}</span>
      </div>

      <div className="product-content">
        <span className="product-category">{product.category}</span>

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <div className="product-price-row">
          <div className="price-group">
            <strong>₹{product.price}</strong>
            <del>₹{product.oldPrice}</del>
          </div>

          <button
            className="product-button"
            onClick={() => alert("Product details and payment will be added soon!")}
          >
            View Details ↗
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
