import HeroImg from "../../assets/images/hero-img1.webp";
import "./style/about.css";

const Story = () => {
  return (
    <section className="story">

      <div className="story-content">
        <h2>Our Story</h2>

        <p>
          Abol Creative was founded with a simple mission: make professional web design accessible to Ethiopian small businesses. We saw too many talented business owners struggling to compete online because they couldn't afford expensive web development.
        </p>

        <p>
          Named after Ethiopia's rich coffee tradition—where "abol" represents the first round of coffee in the ceremony—we represent fresh beginnings for businesses ready to grow their online presence.
        </p>

        <p>
          Today, we've helped dozens of restaurants, hotels, clinics, salons, and local businesses build beautiful, functional websites that attract customers and drive growth. We're proud to be part of Ethiopia's digital transformation.
        </p>

        <a href="/contact" className="cta-link">
          Work With Us
        </a>
      </div>

      <img
        src={HeroImg}
        alt="Abol Creative team working on website design project"
        loading="lazy"
      />

    </section>
  );
};

export default Story;