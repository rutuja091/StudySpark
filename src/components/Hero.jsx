
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          YOUR DIGITAL LEARNING STORE
        </div>

        <h1>
          Make learning
          <br />
          <span>your superpower.</span>
        </h1>

        <p className="hero-text">
          Discover simple study notes, programming guides and
          digital resources designed to help students learn,
          practice and grow with confidence.
        </p>

        <div className="hero-buttons">
          <a href="#products" className="btn-primary">
            Explore Products <span>→</span>
          </a>

          <a href="#about" className="btn-secondary">
            Discover StudySpark
          </a>
        </div>

        <div className="hero-points">
          <span>✓ Simple Learning</span>
          <span>✓ Practical Examples</span>
          <span>✓ Student Friendly</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="hero-main-card">
          <div className="hero-card-top">
            <span>STUDYSPARK</span>
            <span>✦ 01</span>
          </div>

          <div className="hero-code-icon">{"</>"}</div>

          <h2>Knowledge is the beginning of everything.</h2>

          <div className="hero-card-line"></div>

          <div className="hero-card-bottom">
            <span>LEARN</span>
            <span>BUILD</span>
            <span>GROW</span>
          </div>
        </div>

        <div className="floating-note note-one">
          <span>🐍</span>
          Python Notes
        </div>

        <div className="floating-note note-two">
          <span>✦</span>
          Learn Something New
        </div>
      </div>
    </section>
  );
}

export default Hero;
