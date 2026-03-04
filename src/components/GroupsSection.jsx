export default function GroupsSection() {
  return (
    <section className="main__groups-section groups-section main__groups-section_white" id="pages">
      <div className="container">
        <div className="groups-section__top groups-section-top">
          <h2 className="groups-section-top__title">Dark & Light Theme</h2>
        </div>
        <div className="demo-imgs">
          <div className="demo-img-first">
            <span><a href="/home.html" target="_blank"><img src="/images/home-dark.jpg" alt="demo 1" /></a></span>
            <h4 className="demo-name">Dark Homepage</h4>
          </div>
          <div className="demo-img-second">
            <span><a href="/home.html" target="_blank"><img src="/images/home-white.jpg" alt="demo 2" /></a></span>
            <h4 className="demo-name">White Homepage</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
