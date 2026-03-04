export default function EliteSection() {
  return (
    <section className="main__elite-section main__elite-section_white" id="elite">
      <div className="container">
        <div className="banner-elite">
          <div className="banner-elite-left">
            <h5>Don't Forget To Rate Our Template!</h5>
            <h4>Project Created By Envato Elite Author</h4>
            <div className="elite-rating">
              <div className="reviews-comment-body-top__stars stars">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="stars__star stars-star">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z" fill="#F9D442"/>
                    </svg>
                  </div>
                ))}
                <div className="stars__star stars-star stars-star--disabled">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9687 4.60317C11.8902 4.36018 11.6746 4.1876 11.4197 4.16462L7.95614 3.85013L6.58656 0.644511C6.48558 0.40958 6.25559 0.257507 6.00006 0.257507C5.74453 0.257507 5.51454 0.40958 5.41356 0.64506L4.04399 3.85013L0.579908 4.16462C0.325385 4.18815 0.110414 4.36018 0.0314019 4.60317C-0.0476102 4.84616 0.0253592 5.11267 0.2179 5.28068L2.83592 7.5767L2.06392 10.9773C2.00744 11.2274 2.10448 11.4858 2.31195 11.6358C2.42346 11.7164 2.55393 11.7574 2.68549 11.7574C2.79893 11.7574 2.91145 11.7268 3.01244 11.6664L6.00006 9.88077L8.98659 11.6664C9.20513 11.7978 9.48062 11.7858 9.68762 11.6358C9.89518 11.4854 9.99214 11.2268 9.93565 10.9773L9.16366 7.5767L11.7817 5.28113C11.9742 5.11267 12.0477 4.84661 11.9687 4.60317Z" fill="#F9D442"/>
                  </svg>
                </div>
              </div>
              4.8 <span>(964 ratings). 130+ ThemeForest Items</span>
            </div>
            <div className="elite-btn">
              <a className="elevate-content__link elevate-content__link_green">Purchase Design Lab</a>
              <a className="elevate-content__link">View Portfolio</a>
            </div>
          </div>
          <div className="banner-elite-right">
            <img src="/images/index/envato-elite.gif" alt="Envato Elite" />
          </div>
        </div>
      </div>
    </section>
  );
}
