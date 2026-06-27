import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import TrustIndicator from "../components/TrustIndicator";
import Challenges from "../components/Challenges";
import Services from "../components/Services/Services";
import { RecentProjects } from "../components/Portifolio/RecentProjects";
import PricingPlan from "../components/Pricing/PricingPlan";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQs/FAQ";
import ContactCTA from "../components/ContactCTA";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Abol Creative | Affordable Web Design for Ethiopian Businesses</title>

        <meta
          name="description"
          content="Abol Creative creates fast, modern, and affordable websites that help Ethiopian businesses build trust and grow online."
        />
      </Helmet>

      <main className="home-page">
        <Hero />
        <TrustIndicator />
        <Challenges />
        <Services />
        <RecentProjects />
        <PricingPlan />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
    </>
  );
};

export default HomePage;