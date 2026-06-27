
const trustData = [
  {
    number: "15+",
    label: "Websites Completed",
  },
  {
    number: "10+",
    label: "Happy Clients",
    highlight: "green",
  },
  {
    number: "4+",
    label: "Industries Served",
    highlight: "orange",
  },
  {
    number: "1+",
    label: "Years Experience",
  },
];


const TrustIndicator = () => {
  return (
    <div className="trust-indicator">
      {trustData.map((item, index) => (
        <div key={index}>
          <p className={`numbers ${item.highlight || ""}`}>
            {item.number}
          </p>
          <p className="metric">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustIndicator;