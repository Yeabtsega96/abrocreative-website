import SEO from "../components/SEO";

import PortfolioHero from "../components/Portifolio/PortfolioHero";
import PortfolioCards from "../components/Portifolio/PortfolioCards";
import PortifolioCTA from "../components/Portifolio/PortifolioCTA";

const PortfolioPage = () => {
  return (
    <>
      <SEO
        title="Portfolio | Abol Creative - Web Design Projects"
        description="Explore Abol Creative's portfolio of modern, responsive, and high-performance websites built for businesses in Ethiopia."
        url="https://yourdomain.com/portfolio"
      />

      <main className="portfolio-page">
        <PortfolioHero />
        <PortfolioCards />
        <PortifolioCTA />
      </main>
    </>
  );
};

export default PortfolioPage;