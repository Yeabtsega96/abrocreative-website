import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";

import resturantCafeImg from "../../assets/project-images/restaurantAndCafe.avif";
import restaurantImg from "../../assets/project-images/resturant.jpg";
import salonImg from "../../assets/project-images/garden-room-salon.jpg";

export const RecentProjects = () => {
  return (
    <section className="recent-projects" aria-label="Recent web design projects">

      <h2 className="headline">Recent Projects</h2>

      <p className="sub-headline">
        See how we've helped Ethiopian businesses build their online presence
      </p>

      <div className="recent-cards">

        <article className="card">
          <img src={resturantCafeImg} alt="Bunna Coffee House website preview" />

          <span>Restaurant & Café</span>
          <h3>Bunna Coffee House</h3>

          <p>Modern website with online menu and contact form</p>

          <Link className="link" to="/portfolio">
            View Project <MdOutlineNavigateNext />
          </Link>
        </article>

        <article className="card">
          <img src={restaurantImg} alt="Yod Abyssinia Restaurant website preview" />

          <span>Restaurant</span>
          <h3>Yod Abyssinia Restaurant</h3>

          <p>Elegant site showcasing traditional Ethiopian cuisine</p>

          <Link className="link" to="/portfolio">
            View Project <MdOutlineNavigateNext />
          </Link>
        </article>

        <article className="card">
          <img src={salonImg} alt="Saba Beauty Salon website preview" />

          <span>Beauty & Wellness</span>
          <h3>Saba Beauty Salon</h3>

          <p>Clean design with service booking and gallery</p>

          <Link className="link" to="/portfolio">
            View Project <MdOutlineNavigateNext />
          </Link>
        </article>

      </div>

      <Link
        to="/portfolio"
        className="link view-protifolio-btn"
      >
        View Full Portfolio
      </Link>

    </section>
  );
};