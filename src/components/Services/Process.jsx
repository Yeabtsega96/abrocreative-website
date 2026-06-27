import "./style/services.css";

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We discuss your business goals, target audience, and website requirements",
  },
  {
    number: "02",
    title: "Design",
    text: "We create a custom design that reflects your brand and appeals to your customers",
  },
  {
    number: "03",
    title: "Development",
    text: "We build your website with clean code, fast performance, and mobile optimization",
  },
  {
    number: "04",
    title: "Launch",
    text: "We test everything thoroughly, then launch your website and provide training",
  },
];

const Process = () => {
  return (
    <div className="process">
      <h2 className="headline">Our Simple Process</h2>
      <p className="sub-headline">
        From consultation to launch, we make building your website easy and stress-free
      </p>

      <div className="process-cards">
        {steps.map((step, index) => (
          <div className="card" key={index}>
            <span className="number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;