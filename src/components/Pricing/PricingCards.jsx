import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import "./pricing.css";

const plans = [
  {
    type: "Starter",
    price: "8,990",
    description: "Perfect for small businesses just getting started online",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 month support",
    ],
  },
  {
    type: "Growth",
    price: "17,890",
    description: "Ideal for growing businesses that need more features",
    features: [
      "Up to 10 pages",
      "Custom design",
      "Photo gallery",
      "Google Maps integration",
      "Social media links",
      "3 months support",
    ],
  },
  {
    type: "Premium",
    price: "28,990",
    description: "Complete solution for established businesses",
    features: [
      "Unlimited pages",
      "Advanced features",
      "E-commerce ready",
      "Blog functionality",
      "Advanced SEO",
      "6 months support",
    ],
  },
];

const PricingCards = () => {
  return (
    <section className="pricing-cards" aria-label="Website pricing plans">

      {plans.map((plan) => (
        <article className="card" key={plan.type}>

          <span className="business-type">{plan.type}</span>

          <p className="price">{plan.price}</p>

          <p className="business-for">{plan.description}</p>

          <ul className="lists">
            {plan.features.map((feature) => (
              <li key={feature}>
                <FiCheckCircle className="list-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="cta-btn">
            Get Started
          </Link>

        </article>
      ))}

    </section>
  );
};

export default PricingCards;