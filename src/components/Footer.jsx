
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div>
          <a href="#home" className="brand footer-brand">
            <span className="brand-icon">S</span>
            <span>StudySpark<span className="brand-dot">.</span></span>
          </a>
          <p>Learn Smart. Grow Faster.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="mailto:hello@studyspark.example">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} StudySpark. All rights reserved.</span>
        <span>Made for curious minds ✦</span>
      </div>
    </footer>
  );
}

export default Footer;
