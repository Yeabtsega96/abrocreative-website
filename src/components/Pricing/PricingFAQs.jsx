import "./pricing.css";

const faqs = [
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes! You can upgrade your plan at any time. We'll apply your initial payment as credit towards the new plan and only charge the difference.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees! The quoted price covers design, development, and the specified support period. The only additional costs are domain registration and hosting, which we clearly explain upfront.",
  },
  {
    question: "What happens after the support period ends?",
    answer:
      "After your included support period, you can choose to continue with our monthly maintenance plan (2,000 ETB/month) or handle updates yourself. Your website will continue to function normally either way.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a satisfaction guarantee. If you're not happy with our work before launch, we'll revise until you're satisfied or refund your deposit. After launch approval, deposits are non-refundable.",
  },
];

const PricingFAQs = () => {
  return (
    <section className="pricing-faqs" aria-label="Pricing frequently asked questions">

      <h2>Pricing FAQs</h2>

      <div className="faq-cards">

        {faqs.map((faq, index) => (
          <article className="card" key={index}>

            <h3 className="question">{faq.question}</h3>

            <p className="answer">{faq.answer}</p>

          </article>
        ))}

      </div>

    </section>
  );
};

export default PricingFAQs;