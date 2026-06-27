import "./style/faqs.css";

const FAQCard = ({ question, answer }) => {
  return (
    <article className="card">

      <h3 className="question">
        {question}
      </h3>

      <p className="answer">
        {answer}
      </p>

    </article>
  );
};

export default FAQCard;