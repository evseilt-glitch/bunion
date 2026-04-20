import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">Sepholy</div>
          <p className="footer-tagline">Relieve pain and walk freely again.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h4>Quick Links</h4>
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </div>
          
          <div className="link-column">
            <h4>Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Return Policy</a>
          </div>
          
          <div className="link-column">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Sepholy. All rights reserved.</p>
          <p className="disclaimer">
            Disclaimer: This product is not intended to diagnose, treat, cure, or prevent any disease. 
            Information on this site is provided for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
