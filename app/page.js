import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Link from "next/link";

const PROJECTS = [
  { label: "ASSEMBLY", img: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=700&q=80" },
  { label: "COMMERCIAL", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80" },
  { label: "EDUCATION", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=80" },
  { label: "INDUSTRIAL", img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=700&q=80" },
  { label: "MULTI-FAMILY", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80" },
  { label: "CUSTOM RESIDENTIAL", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80" },
];

export default function HomePage() {
  return (
    <>
      <Header active="home" />
      <HeroSlider />

      <section className="section">
        <div className="container story-grid">
          <div>
            <h2 className="eyebrow-heading">
              OUR <span>STORY</span>
            </h2>
            <p>
              Since 1998, GAV &amp; Associates Inc. has provided architecture, design and
              planning services for a variety of projects that vary in scale, use and
              complexity. We provide award-winning design services for commercial,
              residential, industrial, assembly, educational, hospitality,
              ecclesiastical/religious and historic revitalization architecture. With our
              diverse portfolio, we commit ourselves to excellence as we elevate your
              project.
            </p>
            <p>
              As leaders in design and construction document production throughout
              southeast Michigan, we take pride in working with contractors, developers,
              business owners, and homeowners. As a team, we always deliver excellence in
              design, on time and on budget. Our team focuses on bringing your project to
              life, while upholding our clientele relationships. We understand that good
              relationships and collaboration are imperative for great design, and take
              pride in our industry interrelations.{" "}
              <Link href="/about">Read More..</Link>
            </p>
          </div>
          <div className="story-media">
            <div className="story-img">
              <img
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=900&q=80"
                alt="Featured building entrance"
              />
            </div>
            <Link href="/about" className="btn">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="section gray" id="projects">
        <div className="container">
          <h2 className="eyebrow-heading">
            OUR <span>PROJECTS</span>
          </h2>
          <div className="project-grid">
            {PROJECTS.map((p) => (
              <div
                className="project-card"
                key={p.label}
                style={{ backgroundImage: `url('${p.img}')` }}
              >
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <h2 className="eyebrow-heading">
            ON THE <span>BOARDS</span>
          </h2>
          <div className="boards-grid">
            <div className="board-card">
              <img
                src="https://images.unsplash.com/photo-1581091012184-7c8b0640b9d6?auto=format&fit=crop&w=800&q=80"
                alt="New manufacturing facility"
              />
              <div className="board-text">
                <div className="meta">Architecture &middot; July 18, 2024</div>
                <h3>
                  <a href="#">FANUC: New Space for Innovation</a>
                </h3>
              </div>
            </div>
            <div className="board-card">
              <img
                src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80"
                alt="Under construction religious center"
              />
              <div className="board-text">
                <div className="meta">Planning &middot; September 26, 2021</div>
                <h3>
                  <a href="#">Building Up the New IAGD Center</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="container">
          <h2 className="eyebrow-heading" style={{ textAlign: "center" }}>
            WHAT OUR CLIENTS <span>SAY</span>
          </h2>
          <div className="testimonial">
            <p>
              &quot;GAV has been a longtime member of the MIM, and during that time we
              have had the opportunity to work with them on several projects. GAV is
              committed to quality and a culture of continuous learning which continues to
              foster successful projects for their clients.&quot;
            </p>
            <div className="who">
              <b>Philippe Ledent</b>
              <span>Masonry Institute of Michigan</span>
            </div>
          </div>
          <div className="slider-nav">
            <button>&#10094;</button>
            <button>&#10095;</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="insta-head">
            <div className="ic">&#128247;</div>
            <b>gav.associates</b>
          </div>
          <div className="insta-grid">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=400&q=80"
              alt="Instagram post"
            />
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80"
              alt="Instagram post"
            />
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=400&q=80"
              alt="Instagram post"
            />
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
              alt="Instagram post"
            />
          </div>
          <div className="insta-follow">
            <a href="#" className="btn">
              &#128247; Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
