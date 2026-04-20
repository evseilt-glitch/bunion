import './Problem.css';

const Problem = () => {
  return (
    <section className="section problem-section">
      <div className="container">
        <h2 className="text-center problem-headline">Does This Sound Like You?</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">💥</div>
            <p className="problem-text">Sharp, shooting pain when walking or standing for long periods.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">👟</div>
            <p className="problem-text">Struggling to find shoes that fit comfortably over your bunion.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🌙</div>
            <p className="problem-text">Waking up from throbbing toe joint pain disrupting your sleep.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🛑</div>
            <p className="problem-text">Fearing invasive, expensive surgery and the long recovery time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
