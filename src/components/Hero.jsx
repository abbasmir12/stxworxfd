export default function Hero() {
  return (
    <section className="main__elevate elevate">
      <div className="container">
        <div className="elevate__inner">
          <div className="elevate__content elevate-content">
            <h1 className="heading__title">STXWORX</h1>
            <h2 className="elevate-content__title">
              Decentralized Freelance Platform with <span>Milestone-Based Escrow</span> on Stacks Blockchain
            </h2>
            <button className="elevate-content__link" onClick={() => alert('Wallet integration coming soon!')} style={{border: 'none', cursor: 'pointer'}}>Connect Wallet</button>
          </div>
          <div className="elevate__view elevate-view">
            <div className="elevate-view__box">
              <p className="elevate-view__box-subtext">
                Secure escrow,<br />transparent<br />milestones, and<br />trustless payments<br />powered by<br />Stacks blockchain<br />technology.
              </p>
              <div className="elevate-view__box-subtext_img">
                <img src="/images/index/communication.png" alt="communication" />
              </div>
            </div>
            <img className="elevate-view__index1" src="/images/index/v1.png" alt="img" />
            <img className="elevate-view__index2" src="/images/index/v2.png" alt="img" />
            <img className="elevate-view__index3" src="/images/index/v3.png" alt="img" />
            <img className="elevate-view__index4" src="/images/index/v4.png" alt="img" />
            <img className="elevate-view__index5" src="/images/index/m1.png" alt="img" />
            <img className="elevate-view__index6" src="/images/index/m2.png" alt="img" />
            <img className="elevate-view__index7" src="/images/index/m3.png" alt="img" />
            <img className="elevate-view__index8" src="/images/index/m4.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
