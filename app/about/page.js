import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "About | GAV & Associates, Inc.",
};

function LogoMark() {
  return (
    <svg viewBox="0 0 60 54" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,2 58,50 40,50 30,32 20,50 2,50" fill="#2f7fd1" />
      <polygon points="30,20 44,50 34,50 30,42 26,50 16,50" fill="#111827" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header active="about" forceSolid />

      <div
        className="page-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091012184-7c8b0640b9d6?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      <div className="container about-body">
        <h1>
          <LogoMark />
          ABOUT GAV
        </h1>
        <p>
          Since 1998, GAV &amp; Associates Inc. has provided architecture, design and
          planning services for a variety of projects that vary in scale, use and
          complexity. We provide award-winning design services for commercial,
          residential, industrial, assembly, educational, and historic revitalization
          architecture. With our diverse portfolio, we commit ourselves to excellence as
          we elevate our client&apos;s project.
        </p>
        <p>
          As leaders in design and construction document production throughout southeast
          Michigan, as well as other states, we take pride in working with contractors,
          developers, business owners, and homeowners. As a team, we always deliver
          excellence in design, on time and on budget. Our team focuses on bringing
          projects to life, while upholding our clientele relationships. We understand
          that good relationships and collaboration are imperative for great design, and
          we take pride in our industry interrelations.
        </p>

        <h2 className="mission-title">
          OUR MISSION: <span>FUNCTION AND BEAUTY</span>
        </h2>
        <p>
          We bring more than just years of experience to the design table, but total
          dedication to excellence. Our focus on function and beauty drives every project
          in our extensive portfolio. Our experience and large archive of finished
          projects will allow us to assist you in determining the architectural design
          right for you.
        </p>

        <h2 className="mission-title" style={{ marginTop: 70 }}>
          WHAT OUR CLIENT&apos;S <span>SAY</span>
        </h2>
        <div
          className="testimonial"
          style={{ maxWidth: "100%", textAlign: "left", marginBottom: 40 }}
        >
          <p>
            &quot;GAV has been a longtime member of the MIM, and during that time we have
            had the opportunity to work with them on several projects. GAV is committed to
            quality and a culture of continuous learning which continues to foster
            successful projects for their clients.&quot;
          </p>
          <div className="who">
            <b>Philippe Ledent</b>
            <span>Masonry Institute of Michigan</span>
          </div>
        </div>
        <div className="slider-nav" style={{ maxWidth: "100%", marginBottom: 20 }}>
          <button>&#10094;</button>
          <button>&#10095;</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
