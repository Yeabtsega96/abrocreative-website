import FAQCard from "./FAQCard";
import "./style/faqs.css";

const FAQCards = () => {
  const faqCategories = [
    {
      label: "General Questions",
      items: [
        {
          id: "gen-1",
          question: "What is Abol Creative?",
          answer:
            "Abol Creative is a web design agency based in Ethiopia that specializes in creating affordable, professional websites for small businesses. We help restaurants, hotels, clinics, salons, and other local businesses establish and strengthen their online presence.",
        },
        {
          id: "gen-2",
          question: "Why do I need a website for my business?",
          answer:
            "A website gives your business credibility, makes it easier for customers to find you online, and provides a platform to showcase your products or services 24/7. In today's digital age, most customers search online before making purchasing decisions, so having a professional website is essential for growth.",
        },
        {
          id: "gen-3",
          question: "How is Abol Creative different from other web design companies?",
          answer:
            "We focus specifically on Ethiopian small businesses and understand the local market. We offer affordable pricing without compromising quality, provide personalized service, and are committed to helping you succeed online. We also offer ongoing support and speak your language—both literally and figuratively.",
        },
      ],
    },

    {
      label: "Pricing & Payments",
      items: [
        {
          id: "price-1",
          question: "How much does a website cost?",
          answer:
            "Our packages start at 8,000 ETB for a basic business website. The final cost depends on your specific needs, number of pages, and features required. We offer three main packages: Starter (8,000 ETB), Growth (17,000 ETB), and Premium (28,000 ETB). We also offer custom quotes for unique requirements.",
        },
        {
          id: "price-2",
          question: "What payment methods do you accept?",
          answer:
            "We accept bank transfers, mobile money (TeleBirr), and cash payments. We require a 50% deposit to start your project and the remaining 50% upon completion and your approval.",
        },
        {
          id: "price-3",
          question: "Are there any hidden costs?",
          answer:
            "No, we believe in complete transparency. The quoted price covers all design and development work. The only additional costs are domain registration (500-1,000 ETB/year) and web hosting (2,000-5,000 ETB/year), which you pay directly to the providers. We help you set these up.",
        },
        {
          id: "price-4",
          question: "Can I pay in installments?",
          answer:
            "For Premium packages, we can arrange a payment plan. Contact us to discuss your specific situation and we'll work out a schedule that fits your budget.",
        },
      ],
    },

    {
      label: "Website Development",
      items: [
        {
          id: "dev-1",
          question: "How long does it take to build a website?",
          answer:
            "Most websites are completed within 1-4 weeks from the start date. Simple websites can be done faster (1-2 weeks), while more complex projects with custom features may take 4-6 weeks. The timeline also depends on how quickly you provide content and feedback.",
        },
        {
          id: "dev-2",
          question: "What information do you need from me?",
          answer:
            "We'll need your business information (name, logo, contact details), photos of your business/products/services, text content for each page, and any specific features or requirements you have. Don't worry—we'll guide you through the process and help organize everything.",
        },
        {
          id: "dev-3",
          question: "Do you provide the content and photos?",
          answer:
            "You provide the photos and basic information about your business. However, we can help you organize and improve your content to make it more effective. We also offer professional copywriting as an add-on service if you need help writing compelling content.",
        },
        {
          id: "dev-4",
          question: "Can I see the website before it's finished?",
          answer:
            "Yes! We'll share preview links throughout the development process so you can see the progress and provide feedback. We make revisions based on your input to ensure you're completely satisfied.",
        },
        {
          id: "dev-5",
          question: "Will my website work on mobile phones?",
          answer:
            "Absolutely! All our websites are fully responsive, meaning they automatically adjust to look great on smartphones, tablets, and desktop computers. With most Ethiopian internet users browsing on mobile devices, this is essential.",
        },
      ],
    },

    {
      label: "After Launch",
      items: [
        {
          id: "after-1",
          question: "What happens after my website is launched?",
          answer:
            "After launch, we provide support for the period included in your package (1-6 months depending on the plan). During this time, we fix any bugs, make small updates, and answer your questions. We also offer ongoing maintenance packages if you want continued support.",
        },
        {
          id: "after-2",
          question: "Can I update the website myself?",
          answer:
            "Yes! We can set up an easy-to-use content management system (CMS) that allows you to update text, images, and other content without technical knowledge. We'll also provide training on how to use it.",
        },
        {
          id: "after-3",
          question: "What if something breaks on my website?",
          answer:
            "If something breaks during your support period, we'll fix it at no extra cost. After the support period, you can either sign up for our monthly maintenance plan or pay for fixes as needed.",
        },
        {
          id: "after-4",
          question: "Can I add new features later?",
          answer:
            "Yes! Your website can grow with your business. You can add new pages, features, or functionality at any time. Contact us with your requirements and we'll provide a quote for the additions.",
        },
      ],
    },
  ];

  return (
    <section className="faq-cards">
      {faqCategories.map((category) => (
        <div key={category.label} className="faq-category">
          <h3>{category.label}</h3>

          {category.items.map((item) => (
            <FAQCard
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default FAQCards;