import './Pricing.css';

const Pricing = () => {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="pricing-box">
          <div className="urgency-text">Only a few units left — order now before we sell out</div>
          <h2 className="pricing-headline">Limited Time Offer — Don't Miss This</h2>
          
          <div className="price-display">
            <span className="original-price">$79.98</span>
            <span className="sale-price">$39.99</span>
          </div>
          
          <div className="savings-badge">YOU SAVE 50%</div>
          
          <button className="btn-primary pricing-cta pulse-animation">
            CLAIM MY 50% DISCOUNT
          </button>
          
          <div className="trust-badges">
            <div className="badge">🛡️ 90-Day Guarantee</div>
            <div className="badge">📦 Free Shipping</div>
            <div className="badge">🔒 Secure Checkout</div>
            <div className="badge">🔄 Easy Returns</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
