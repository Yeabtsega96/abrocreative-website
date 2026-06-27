import { Helmet } from "react-helmet-async";

import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import Process from "../components/Contact/Process";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Abol Creative | Get a Free Website Consultation</title>
        <meta
          name="description"
          content="Contact Abol Creative to discuss your website project, ask questions, or request a free consultation. We're here to help your business grow online."
        />
      </Helmet>

      <main className="contact-page">
        <ContactHero />

        <section
          className="contact-cards"
          aria-label="Contact form and company information"
        >
          <ContactForm />
          <ContactInfo />
        </section>

        <Process />
      </main>
    </>
  );
};

export default ContactPage;