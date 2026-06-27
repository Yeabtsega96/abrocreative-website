import { LuSearch } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { LuTrendingDown } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { LuShieldQuestion } from "react-icons/lu";


const challengesData = [
  {
    icon: <LuSearch className="card-icon" />,
    title: "Hard to Find Online",
    text: "Customers can't discover your business when they search online",
  },
  {
    icon: <IoShareSocialOutline className="card-icon" />,
    title: "Relying Only on Social Media",
    text: "Limited control and visibility with just Facebook or Instagram",
  },
  {
    icon: <LuDollarSign className="card-icon" />,
    title: "Limited Marketing Budget",
    text: "Traditional advertising is too expensive for small businesses",
  },
  {
    icon: <LuShieldQuestion className="card-icon" />,
    title: "Low Customer Trust",
    text: "No professional online presence makes customers hesitant",
  },
  {
    icon: <IoTimeOutline className="card-icon" />,
    title: "Outdated Website",
    text: "Your current website looks unprofessional or doesn't work on mobile",
  },
  {
    icon: <LuTrendingDown className="card-icon" />,
    title: "Missed Opportunities",
    text: "Losing customers to competitors with better online presence",
  },
];


const Challenges = () => {
  return (
    <div className="challenges">
      <h2 className="headline">
        Are These Challenges Holding Your Business Back?
      </h2>

      <p className="sub-headline">
        We understand the struggles Ethiopian small businesses face in the digital world
      </p>

      <div className="challenge-cards">
        {challengesData.map((item, index) => (
          <div className="card" key={index}>
            <span className="icon-span">
              <span>{item.icon}</span>
            </span>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;

