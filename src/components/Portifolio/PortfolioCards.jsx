import "./style/portfolio.css";

import resturantCafeImg from "../../assets/project-images/restaurantAndCafe.avif";
import restaurantImg from "../../assets/project-images/resturant.jpg";
import salonImg from "../../assets/project-images/garden-room-salon.jpg";

const projects = [
  {
    id: "bunna-coffee-house",
    category: "Restaurant & Café",
    title: "Bunna Coffee House",
    image: resturantCafeImg,
    description:
      "Modern website with online menu, contact form, and beautiful photo gallery showcasing their traditional Ethiopian coffee ceremony.",
    features: ["Responsive", "Menu Integration", "Gallery"],
  },
  {
    id: "yod-abyssinia",
    category: "Restaurant",
    title: "Yod Abyssinia Restaurant",
    image: restaurantImg,
    description:
      "Elegant website showcasing traditional Ethiopian cuisine with online reservation system and cultural performance schedule.",
    features: ["Booking System", "Event Calendar", "SEO"],
  },
  {
    id: "saba-beauty-salon",
    category: "Beauty & Wellness",
    title: "Saba Beauty Salon",
    image: salonImg,
    description:
      "Clean and modern design with service catalog, pricing information, and online appointment booking functionality.",
    features: ["Appointment Booking", "Service Catalog", "Mobile-First"],
  },
];

const PortfolioCards = () => {
  return (
    <section className="portfolio-cards" aria-label="Web design portfolio projects">

      {projects.map((project) => (
        <article className="card" key={project.id}>

          <img
            src={project.image}
            alt={`${project.title} website preview`}
            loading="lazy"
          />

          <div className="project-info">

            <span className="category">{project.category}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            {/* Features as real list (important for SEO + accessibility) */}
            <ul className="features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            {/* Optional CTA (high conversion upgrade) */}
            <a
              href={`/portfolio/${project.id}`}
              className="view-project-btn"
            >
              View Project
            </a>

          </div>

        </article>
      ))}

    </section>
  );
};

export default PortfolioCards;