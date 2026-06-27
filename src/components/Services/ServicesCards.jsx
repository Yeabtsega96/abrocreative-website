import { FiCheckCircle } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { GrPowerCycle } from "react-icons/gr";
import { LuBriefcase } from "react-icons/lu";
import { LuHeadphones } from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";

import { Link } from "react-router-dom";

import "./style/services.css"



  const services = [
  {
    icon: <TbWorld className="card-icon" />,
    title: "Business Websites",
    description: "Complete, professional websites tailored to your industry",
    included: [
      "Custom design matching your brand",
      "Multiple pages (Home, About, Services, Contact, etc.)",
      "Photo galleries and portfolios",
      "Contact forms and Google Maps",
      "Social media integration",
      "Mobile-responsive design",
    ],
    idealFor: ["Restaurants", "Hotels", "Clinics", "Schools", "Retail Stores"],
  },

  {
    icon: <IoMdPhonePortrait className="card-icon" />,
    title: "Landing Pages",
    description: "Single-page websites designed to convert visitors into customers",
    included: [
      "Focused, conversion-optimized design",
      "Clear call-to-action buttons",
      "Product or service showcase",
      "Customer testimonials",
      "Lead capture forms",
      "Fast loading speed",
    ],
    idealFor: [
      "Product Launches",
      "Event Promotions",
      "Service Offers",
      "Marketing Campaigns",
    ],
  },

  {
    icon: <GrPowerCycle className="card-icon" />,
    title: "Website Redesign",
    description:
      "Modernize your existing website with fresh design and improved functionality",
    included: [
      "Modern, updated design",
      "Improved user experience",
      "Mobile optimization",
      "Better site structure",
      "Content migration",
      "SEO improvements",
    ],
    idealFor: [
      "Outdated Websites",
      "Non-Mobile Sites",
      "Slow Websites",
      "Unprofessional Design",
    ],
  },

  {
    icon: <LuBriefcase className="card-icon" />,
    title: "Portfolio Websites",
    description: "Beautiful websites to showcase your creative work",
    included: [
      "Stunning visual galleries",
      "Project case studies",
      "About and bio section",
      "Client testimonials",
      "Contact and booking forms",
      "Easy content updates",
    ],
    idealFor: ["Photographers", "Artists", "Designers", "Freelancers", "Creatives"],
  },

  {
    icon: <LuHeadphones className="card-icon" />,
    title: "Maintenance & Support",
    description: "Keep your website running smoothly with ongoing care",
    included: [
      "Regular software updates",
      "Security monitoring",
      "Backup and recovery",
      "Bug fixes and troubleshooting",
      "Content updates",
      "Performance optimization",
    ],
    idealFor: [
      "Existing Websites",
      "Long-term Growth",
      "Peace of Mind",
      "Business Continuity",
    ],
  },

  {
    icon: <RiFocus2Line className="card-icon" />,
    title: "Basic SEO Setup",
    description:
      "Help customers find you on Google with essential optimization",
    included: [
      "Keyword research and optimization",
      "Meta tags and descriptions",
      "Google My Business setup",
      "Sitemap creation and submission",
      "Mobile-friendly optimization",
      "Page speed optimization",
    ],
    idealFor: [
      "New Websites",
      "Local Businesses",
      "Better Visibility",
      "More Customers",
    ],
  },
];

  const ServicesCards = () => {
  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <div className="service" key={index}>
          <div className="card">
            <span className="icon-span">
              <span >{service.icon}</span>
            </span>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <Link to="/contact" className="get-started-btn">
              Get Started <MdOutlineNavigateNext />
            </Link>
          </div>

          <div className="service-info">
            <h3>What's Included:</h3>
            <ul className="included-lists">
              {service.included.map((item, i) => (
                <li key={i}>
                  <FiCheckCircle className="list-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3>Ideal For:</h3>
            <ul className="ideal-for-lists">
              {service.idealFor.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCards