import { Helmet } from "react-helmet-async";

import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";
import Objective from "../components/about/Objective";
import Importance from "../components/about/Importance";
import TrustIndicator from "../components/TrustIndicator";
import GetStarted from "../components/GetStarted";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Abol Creative | Web Design Agency in Ethiopia</title>
        <meta
          name="description"
          content="Learn about Abol Creative, our mission, our story, and how we help Ethiopian businesses build a strong online presence with modern websites."
        />
      </Helmet>

      <main className="about-page">
        <AboutHero />
        <Story />
        <Objective />
        <Importance />
        <TrustIndicator />
        <GetStarted />
      </main>
    </>
  );
};

export default AboutPage;