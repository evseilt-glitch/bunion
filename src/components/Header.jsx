import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">Sepholy</div>
        <nav className="nav-menu">
          <a href="#hero">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#reviews">Reviews</a>
          <a href="#pricing">Order Now</a>
        </nav>
        <a href="#pricing" className="btn-primary header-cta">Get 50% OFF Today</a>
      </div>
    </header>
  );
};

export default Header;
