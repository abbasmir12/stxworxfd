export default function InnerPages() {
  const pages = [
    { id: 1, name: '1# Members', img: '1.jpg', link: '/members.html' },
    { id: 2, name: '2# User Profile', img: '2.jpg', link: '/members-page.html' },
    { id: 3, name: '3# Freelancers', img: '3.jpg', link: '/freelancers.html' },
    { id: 4, name: '4# Freelancer Profile', img: '4.jpg', link: '/members-page.html' },
    { id: 5, name: '5# Groups', img: '5.jpg', link: '/groups.html' },
    { id: 6, name: '6# Group Profile', img: 'group-profile.jpg', link: '/members-page.html' },
    { id: 7, name: '7# Courses', img: 'designLab_courses.jpg', link: '/courses.html' },
    { id: 8, name: '8# Course Page', img: 'Courses-page.jpg', link: '/courses-page.html' },
    { id: 9, name: '9# Shop', img: 'DesignLab_Shop.jpg', link: '/shop.html' },
    { id: 10, name: '10# Shop Details', img: '10.jpg', link: '/product.html' },
    { id: 11, name: '11# Blog', img: '11.jpg', link: '/blog.html' },
    { id: 12, name: '12# Blog Details', img: '12.jpg', link: '/blog-page.html' },
    { id: 13, name: '13# Events', img: '13.jpg', link: '/events.html' },
    { id: 14, name: '14# Events Details', img: '14.jpg', link: '/event.html' }
  ];

  return (
    <section className="main__groups-section groups-section" id="innerpages">
      <div className="container">
        <div className="groups-section__top groups-section-top">
          <h2 className="groups-section-top__title">Inner Pages</h2>
        </div>
        <div className="allpages-demos">
          <div className="allpages-wrapper">
            {pages.map(page => (
              <div key={page.id} className="allpages-iteam">
                <span>
                  <a href={page.link} target="_blank">
                    <img src={`/images/index/${page.img}`} alt="demo page" />
                  </a>
                </span>
                <h4 className="demo-name">{page.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
