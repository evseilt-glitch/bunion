import './Features.css';

const Features = () => {
  return (
    <section className="section features" id="features">
      <div className="container">
        <h2 className="text-center features-title">Precision Engineered for Relief</h2>
        <div className="features-grid">
          <div className="features-list">
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <div className="feature-content">
                <h4>Patented Hinge Joint Mechanism</h4>
                <p>Allows natural movement while maintaining therapeutic alignment.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <div className="feature-content">
                <h4>Advanced Alignment Therapy</h4>
                <p>Designed by leading podiatrists to correct toe positioning gradually.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <div className="feature-content">
                <h4>Adjustable Stretch Intensity</h4>
                <p>Control the corrective tension for ultimate comfort at any stage.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <div className="feature-content">
                <h4>Works While Resting OR Moving</h4>
                <p>Flexible enough to walk around the house, sturdy enough for rest.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <div className="feature-content">
                <h4>Medical-Grade Materials</h4>
                <p>Breathable, anti-microbial components that won't irritate your skin.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="check-icon">✓</span>
              <div className="feature-content">
                <h4>90-Day Money Back Guarantee</h4>
                <p>Try it risk-free. If you don't feel relief, get a full refund.</p>
              </div>
            </div>
          </div>
          <div className="features-image-wrapper">
            <img src="/assets/product-2.png" alt="Bunion Corrector Mechanism" className="features-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
