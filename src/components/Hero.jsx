import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="urgency-banner">
        ⚡ SELLING OUT FAST — 50% OFF + FREE SHIPPING TODAY ONLY
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="star-rating">
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <span className="reviews-text">3,500+ Verified Reviews</span>
          </div>
          <h1 className="hero-headline">
            The #1 Doctor-Recommended Bunion Corrector That Actually Works — Without Surgery
          </h1>
          <p className="hero-subheadline">
            Realign your toe, eliminate pain, and walk freely again — in just 30 minutes a day
          </p>
          <a href="#pricing" className="btn-primary hero-cta pulse-animation">
            GET 50% OFF — ORDER NOW
          </a>
        </div>
        <div className="hero-image-wrapper">
          <img src="/assets/product-1.png" alt="Sepholy Bunion Fix Corrector" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
