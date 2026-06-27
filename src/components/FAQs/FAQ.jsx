import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <section className="faq" aria-label="Frequently asked questions">

      <h2 className="headline">Frequently Asked Questions</h2>

      <p className="sub-headline">
        Get answers to common questions about our services
      </p>

      <div className="faq-cards">

        <article className="card">
          <h3 className="question">
            How long does it take to build a website?
          </h3>
          <p className="answer">
            Most websites are completed within 2–4 weeks, depending on the complexity and your requirements. Simple websites can be done faster, while more complex projects may take longer.
          </p>
        </article>

        <article className="card">
          <h3 className="question">
            Do I need to provide content and images?
          </h3>
          <p className="answer">
            Yes, we'll need your business information, photos, and text content. However, we can help you organize and improve your content to make it more effective for your website.
          </p>
        </article>

        <article className="card">
          <h3 className="question">
            Will my website work on mobile phones?
          </h3>
          <p className="answer">
            Absolutely! All our websites are mobile-responsive, meaning they automatically adjust to look great on smartphones, tablets, and desktop computers.
          </p>
        </article>

        <article className="card">
          <h3 className="question">
            What happens after my website is launched?
          </h3>
          <p className="answer">
            We provide ongoing support based on your plan. This includes fixing bugs, making small updates, and helping you with any questions. We also offer maintenance packages for long-term support.
          </p>
        </article>

        <article className="card">
          <h3 className="question">
            Can I update the website myself?
          </h3>
          <p className="answer">
            Yes! We can set up an easy-to-use content management system that allows you to update text, images, and other content without technical knowledge. We'll also train you on how to use it.
          </p>
        </article>

      </div>

      <Link to="/faqs" className="view-all-faq-btn">
        View All FAQs
      </Link>

    </section>
  );
};

export default FAQ;