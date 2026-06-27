import "./pricing.css";

const PriceOption = () => {
  return (
    <section className="price-option" aria-label="Optional website add-ons">

      <h2 className="headline">Optional Add-Ons</h2>

      <p className="sub-headline">
        Enhance your website with additional features and services
      </p>

      <div className="price-option-cards">

        <article className="card">
          <h3>E-commerce Integration</h3>
          <p className="price">10,000 ETB</p>
          <p>Add online shopping functionality to sell products</p>
        </article>

        <article className="card">
          <h3>Blog Setup</h3>
          <p className="price">3,000 ETB</p>
          <p>Add a blog to share news and updates</p>
        </article>

        <article className="card">
          <h3>Advanced SEO Package</h3>
          <p className="price">4,000 ETB</p>
          <p>Comprehensive SEO optimization and Google ranking</p>
        </article>

        <article className="card">
          <h3>Booking System</h3>
          <p className="price">6,000 ETB</p>
          <p>Online appointment and reservation system</p>
        </article>

        <article className="card">
          <h3>Extended Support (per month)</h3>
          <p className="price">1,500 ETB/mo</p>
          <p>Ongoing maintenance, updates, and support</p>
        </article>

        <article className="card">
          <h3>Content Writing</h3>
          <p className="price">1,500 ETB</p>
          <p>Professional copywriting for your website pages</p>
        </article>

      </div>

    </section>
  );
};

export default PriceOption;