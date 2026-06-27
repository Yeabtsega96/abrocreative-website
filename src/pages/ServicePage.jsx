import SEO from "../components/SEO";

import ServicesHero from "../components/Services/ServicesHero";
import ServicesCards from "../components/Services/ServicesCards";
import Process from "../components/Services/Process";
import GetStarted from "../components/GetStarted";

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Web Design Services | Abol Creative"
        description="Discover Abol Creative's web design and development services including modern websites, landing pages, and business solutions for Ethiopian companies."
        url="https://yourdomain.com/services"
      />

      <main className="services-page">
        <ServicesHero />
        <ServicesCards />
        <Process />
        <GetStarted />
      </main>
    </>
  );
};

export default ServicesPage;