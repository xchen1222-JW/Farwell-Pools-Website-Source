const services = [
  {
    number: "01",
    title: "Custom pool construction",
    copy: "Thoughtful pools built around the way your family wants to spend summer.",
  },
  {
    number: "02",
    title: "Renovation & equipment",
    copy: "Refresh an existing pool with updated finishes, systems, and performance.",
  },
  {
    number: "03",
    title: "Seasonal pool care",
    copy: "Openings, closings, cleaning, inspection, and repair from one local team.",
  },
];

const projects = [
  {
    image: "https://www.farwellpools.com/uploads/1/3/6/7/136711651/1-gau09_orig.jpg",
    title: "An evening retreat",
    detail: "Custom pool · Landscape lighting",
  },
  {
    image: "https://www.farwellpools.com/uploads/1/3/6/7/136711651/1-bar2_orig.jpg",
    title: "Made for gathering",
    detail: "Poolside entertaining · Integrated spa",
  },
  {
    image: "https://www.farwellpools.com/uploads/1/3/6/7/136711651/picture-021.jpeg",
    title: "Room for every summer day",
    detail: "Residential pool · Southern Wisconsin",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#home" aria-label="Farwell Pools and Spas home">
            <span>Farwell</span>
            <small>Pools &amp; Spas</small>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#story">About</a>
            <a href="#work">Gallery</a>
            <a href="https://www.farwellpools.com/testimonials.html">Testimonials</a>
            <a href="#services">Services</a>
            <a href="https://www.farwellpools.com/faqs.html">FAQs</a>
            <a href="https://www.farwellpools.com/service-requests.html">Service Request</a>
            <a href="https://www.farwellpools.com/openings--closings.html">Openings &amp; Closings</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-call" href="tel:6082221730">
            <span>Call Farwell</span>
            608.222.1730
          </a>
          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#home">Home</a>
              <a href="#story">About</a>
              <a href="#work">Gallery</a>
              <a href="https://www.farwellpools.com/testimonials.html">Testimonials</a>
              <a href="#services">Services</a>
              <a href="https://www.farwellpools.com/faqs.html">FAQs</a>
              <a href="https://www.farwellpools.com/service-requests.html">Service Request</a>
              <a href="https://www.farwellpools.com/openings--closings.html">Openings &amp; Closings</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </header>

        <div className="hero-content">
          <p className="eyebrow">Southern Wisconsin · Family-owned since 1968</p>
          <h1>Make summer<br />feel endless.</h1>
          <p className="hero-copy">
            Custom pools, thoughtful renovations, and dependable care—built by
            the local team Wisconsin families have trusted for generations.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:info@farwellpools.com?subject=Pool%20consultation%20request">
              Start your pool <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#work">
              Explore our work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-corner">
          <span>Built for</span>
          <strong>Wisconsin<br />summers</strong>
        </div>
      </section>

      <section className="trust-strip" aria-label="Farwell credentials">
        <div><strong>Since 1968</strong><span>local experience that lasts</span></div>
        <div><strong>One team</strong><span>construction through service</span></div>
        <div><strong>Madison, WI</strong><span>serving Southern Wisconsin</span></div>
      </section>

      <section className="services-section" id="services">
        <div className="section-intro">
          <p className="eyebrow dark">What we do</p>
          <h2>Your pool, cared for at every stage.</h2>
          <p>
            From the first sketch to every opening day after, Farwell brings
            construction experience and long-term service under one roof.
          </p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-heading">
          <div>
            <p className="eyebrow light">Selected work</p>
            <h2>Backyards worth<br />staying home for.</h2>
          </div>
          <p>
            Every site is different. Every family uses summer differently.
            Farwell builds around both.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <figure className={`project-card project-${index + 1}`} key={project.title}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <figcaption>
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-number" aria-hidden="true">1968</div>
        <div className="story-copy">
          <p className="eyebrow light">Rooted here</p>
          <h2>Long after the build, we&apos;re still your pool company.</h2>
          <p>
            Farwell is a family-owned, Dane County pool construction and
            service company. That means the relationship does not end when the
            water goes in. From equipment questions to every spring opening,
            the same local team is here to help you enjoy what we built.
          </p>
          <a className="outline-link" href="https://www.farwellpools.com/about-us.html">
            Our Farwell story <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="story-fact">
          <span>One relationship</span>
          <strong>Design<br />Build<br />Service</strong>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-main">
          <p className="eyebrow dark">Your backyard starts here</p>
          <h2>Tell us how you want to spend summer.</h2>
          <a className="button button-dark" href="mailto:info@farwellpools.com?subject=Pool%20consultation%20request">
            Request a consultation <span aria-hidden="true">↗</span>
          </a>
        </div>
        <address className="contact-details">
          <div><span>Visit</span><a href="https://maps.google.com/?q=3818+County+Road+AB+Madison+WI">3818 County Road AB<br />Madison, Wisconsin</a></div>
          <div><span>Talk</span><a href="tel:6082221730">608.222.1730</a><a href="mailto:info@farwellpools.com">info@farwellpools.com</a></div>
          <div><span>Showroom</span><p>Monday–Friday<br />9:00 AM–5:00 PM</p></div>
        </address>
      </section>

      <section className="business-info" aria-label="Farwell Pools and Spas business information">
        <img
          className="business-logo"
          src="https://www.farwellpools.com/uploads/1/3/6/7/136711651/farwell-logo-png_orig.png"
          alt="Farwell Pools and Spas — Just add water"
        />
        <div className="business-info-grid">
          <div>
            <span>Call or email</span>
            <a className="business-phone" href="tel:6082221730">(608) 222-1730</a>
            <a href="mailto:info@farwellpools.com">info@farwellpools.com</a>
          </div>
          <div>
            <span>Visit the showroom</span>
            <a href="https://maps.google.com/?q=3818+County+Road+AB+Madison+WI">
              3818 County Road AB<br />Madison, WI
            </a>
          </div>
          <div>
            <span>Store hours</span>
            <strong>Store Open</strong>
            <p>Monday through Friday<br />9 AM–5 PM</p>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#home">
          <span>Farwell</span><small>Pools &amp; Spas</small>
        </a>
        <p>Serving pools and spas across Southern Wisconsin since 1968.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
