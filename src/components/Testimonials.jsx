import { GoStarFill } from "react-icons/go";


const testimonials = [
  {
    name: "Meron Tadesse",
    role: "Owner, Bunna Coffee House",
    text:
      "Abol Creative built us a beautiful website that perfectly represents our coffee shop. Customer inquiries have increased significantly!",
    rating: 5,
  },
  {
    name: "Dawit Alemayehu",
    role: "Manager, Yod Abyssinia",
    text:
      "Very professional service and affordable prices. They understood our vision and delivered exactly what we needed for our restaurant.",
    rating: 5,
  },
  {
    name: "Sara Bekele",
    role: "Owner, Saba Beauty Salon",
    text:
      "The team was patient and helpful throughout the process. Our salon now has an online presence we're proud of!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="headline">What Our Clients Say</h2>

      <p className="sub-headline">
        Don't just take our word for it—hear from businesses we've helped
      </p>

      <div className="testimonial-cards">
        {testimonials.map((item, index) => (
          <div className="card" key={index}>

            {/* stars */}
            <div className="icon-span">
              {Array(item.rating).fill(0).map((_, i) => (
                <GoStarFill className="icon" key={i} />
              ))}
            </div>

            {/* review text */}
            <p className="text">"{item.text}"</p>

            {/* person info */}
            <div className="person">
              <p className="name">{item.name}</p>
              <span className="work">{item.role}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;