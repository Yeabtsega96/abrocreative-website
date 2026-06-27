import { LuDollarSign } from "react-icons/lu";
import { CiMobile2 } from "react-icons/ci";
import { LuZap } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";


const whyData = [
  {
    icon: <LuDollarSign className="icon"/>,
    title: "Affordable Pricing",
    text: "Quality websites at prices small businesses can afford",
  },
  {
    icon: <CiMobile2 className="icon"/>,
    title: "Mobile-Friendly Design",
    text: "Your website looks perfect on all devices and screen sizes",
  },
  {
    icon: <LuZap className="icon"/>,
    title: "Fast Performance",
    text: "Lightning-fast loading speeds for better user experience",
  },
  {
    icon: <LuEye className="icon"/>,
    title: "Professional Appearance",
    text: "Build trust with a polished, modern design",
  },
  {
    icon: <LuUsers className="icon"/>,
    title: "Ongoing Support",
    text: "We're here to help you even after launch",
  },
  {
    icon: <LuHeart className="icon"/>,
    title: "Customer-Focused",
    text: "Your success is our priority, always",
  },
];

const WhyChoose = () => {
  return (
    <div className="why-choose">
      <h2 className="headline">Why Choose Abol Creative?</h2>

      <p className="sub-headline">
        We're committed to helping Ethiopian businesses succeed online
      </p>

      <div className="why-cards">
        {whyData.map((item, index) => (
          <div className="card" key={index}>
            <span className="icon-span">
              <span className="icon">{item.icon}</span>
            </span>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;