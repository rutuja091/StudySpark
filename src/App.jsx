
import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import products from "./data/products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Programming",
    "Database",
    "Web Development",
    "Interview Preparation",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="app">
      <Navbar />
      <Hero />

      <section className="benefits">
        <div>
          <span>✦</span>
          <strong>Easy to Understand</strong>
          <small>Simple learning resources</small>
        </div>
        <div>
          <span>⌘</span>
          <strong>Practical Learning</strong>
          <small>Examples and useful guides</small>
        </div>
        <div>
          <span>↗</span>
          <strong>Learn at Your Pace</strong>
          <small>Resources for beginners</small>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <span className="section-label">THE STUDYSPARK COLLECTION</span>
            <h2>Explore our resources<span>.</span></h2>
            <p>Find the right learning material for your next step.</p>
          </div>
          <span className="product-count">
            {filteredProducts.length} PRODUCTS
          </span>
        </div>

        <div className="store-controls">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search notes, guides and resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
            />
          </div>

          <div className="category-list">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "category active" : "category"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>⌕</span>
            <h3>No products found</h3>
            <p>Try another search or choose a different category.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        <p className="store-disclaimer">
          Sample product listings and prices. Purchase and digital delivery
          features are not active yet.
        </p>
      </section>

      <section className="about-section" id="about">
        <div className="about-icon">✦</div>
        <span className="section-label">OUR PURPOSE</span>
        <h2>Learning should be simple, practical and accessible.</h2>
        <p>
          StudySpark is a digital learning store created to help students
          and beginners explore programming, technology and useful
          educational resources with confidence.
        </p>
      </section>

      <section className="newsletter-section">
        <span className="section-label">YOUR NEXT STEP STARTS HERE</span>
        <h2>Keep learning. Keep growing.</h2>
        <p>Explore resources and make every learning day count.</p>
        <a href="#products" className="btn-primary">
          Explore the Store →
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default App;
