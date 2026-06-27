import { Link } from "react-router-dom"

import PricingCards from "./PricingCards"
import "./pricing.css"



const PricingPlan = () => {
  return (
    <section className="price-plane">
      <h2 className="headline">
        Affordable Pricing Plans
      </h2>
      <p className="sub-headline">
        Choose the perfect plan for your business needs
      </p>

      <PricingCards />

      <Link to="/pricing" className="view-detail-btn">View Detailed Price</Link>
    </section>
  )
}

export default PricingPlan