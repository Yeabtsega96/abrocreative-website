import { Link } from "react-router-dom";

import { MdOutlineNavigateNext } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoMdPhonePortrait } from "react-icons/io";
import { GrPowerCycle } from "react-icons/gr";
import { LuBriefcase, LuHeadphones } from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";

const servicesData = [
  {
    icon: <TbWorld className="card-icon" />,
    title: "Business Websites",
    text: "Complete websites for restaurants, hotels, clinics, and local businesses",
  },
  {
    icon: <IoMdPhonePortrait className="card-icon" />,
    title: "Landing Pages",
    text: "Single-page sites focused on converting visitors into customers",
  },
  {
    icon: <GrPowerCycle className="card-icon" />,
    title: "Website Redesign",
    text: "Modernize your outdated website with fresh design and functionality",
  },
  {
    icon: <LuBriefcase className="card-icon" />,
    title: "Portfolio Websites",
    text: "Showcase your work beautifully for photographers, artists, and creatives",
  },
  {
    icon: <LuHeadphones className="card-icon" />,
    title: "Maintenance & Support",
    text: "Keep your website running smoothly with ongoing updates and support",
  },
  {
    icon: <RiFocus2Line className="card-icon" />,
    title: "Basic SEO Setup",
    text: "Help customers find you on Google with essential optimization",
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2 className="headline">Our Services</h2>
      <p className="sub-headline">
        Professional web solutions tailored for Ethiopian small businesses
      </p>

      <div className="services-cards">
        {servicesData.map((service, index) => (
          <div className="card" key={index}>
            <span className="icon-span">
              <span className="card-icon">{service.icon}</span>
            </span>

            <h3>{service.title}</h3>
            <p>{service.text}</p>

            <Link to="/services" className="link learn-more">
              Learn More <MdOutlineNavigateNext />
            </Link>
          </div>
        ))}
      </div>

      <Link className="view-all-btn" to="/services">
        View All Services
      </Link>
    </div>
  );
};

export default Services;