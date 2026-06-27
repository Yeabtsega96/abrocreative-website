import { Helmet } from "react-helmet-async";

import FAQHero from "../components/FAQs/FAQHero";
import FAQCards from "../components/FAQs/FAQCards";
import ContactCard from "../components/FAQs/ContactCard";
import Resources from "../components/FAQs/Resources";

const FAQsPage = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Abol Creative</title>
        <meta
          name="description"
          content="Find answers to common questions about Abol Creative's web design services, pricing, timelines, and support."
        />
      </Helmet>

      <main>
        <FAQHero />
        <FAQCards />
        <ContactCard />
        <Resources />
      </main>
    </>
  );
};

export default FAQsPage;