import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="text-center how-title">How It Works in 3 Simple Steps</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3 className="step-title">Slip it on</h3>
            <p className="step-desc">Slide the comfortable sleeve over your foot and align the hinge with your bunion joint.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3 className="step-title">Adjust the tension</h3>
            <p className="step-desc">Use the medical-grade strap to adjust the pull. Find a comfortable baseline stretch.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3 className="step-title">Wear 30 min/day</h3>
            <p className="step-desc">Wear while resting or moving. Feel the relief and see continuous alignment improvement over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
