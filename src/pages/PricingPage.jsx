import SEO from "../components/SEO";

import PriceHero from "../components/Pricing/PriceHero";
import PricingCards from "../components/Pricing/PricingCards";
import PriceOption from "../components/Pricing/PriceOption";
import PaymentTermProcess from "../components/Pricing/PaymentTermProcess";
import PricingFAQs from "../components/Pricing/PricingFAQs";

const PricingPage = () => {
  return (
    <>
      <SEO
        title="Pricing | Abol Creative - Affordable Web Design Packages"
        description="Explore transparent and affordable website pricing plans from Abol Creative. Choose the best package for your business needs."
        url="https://yourdomain.com/pricing"
      />

      <main>
        <PriceHero />
        <PricingCards />
        <PriceOption />
        <PaymentTermProcess />
        <PricingFAQs />
      </main>
    </>
  );
};

export default PricingPage;