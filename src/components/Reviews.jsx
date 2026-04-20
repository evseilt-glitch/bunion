import './Reviews.css';

const Reviews = () => {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <h2 className="text-center reviews-title">Over 50,000 People Have Found Relief</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-header">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="verified">✓ Verified Buyer</span>
            </div>
            <h4 className="review-headline">Pain gone in 2 weeks</h4>
            <p className="review-text">"I couldn't walk for more than 10 minutes without shooting pain. After using this every evening, the pain is completely gone. I can finally wear normal shoes again!"</p>
            <p className="review-author">— Sarah M.</p>
          </div>
          
          <div className="review-card">
            <div className="review-header">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="verified">✓ Verified Buyer</span>
            </div>
            <h4 className="review-headline">Avoided surgery</h4>
            <p className="review-text">"My doctor was pushing for surgery, but I was terrified of the recovery. Tried this as a last resort. Even my podiatrist was amazed at my checkup."</p>
            <p className="review-author">— James K.</p>
          </div>
          
          <div className="review-card">
            <div className="review-header">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="verified">✓ Verified Buyer</span>
            </div>
            <h4 className="review-headline">Life-changing for my mother</h4>
            <p className="review-text">"Bought this for my elderly mother who has suffered for decades. She says it's the most comfortable her feet have felt in years. Easy for her to put on herself."</p>
            <p className="review-author">— Emily T.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
