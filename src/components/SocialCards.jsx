import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const SocialCards = () => {
  const socialItems = [
    {
      id: 1,
      name: "Facebook",
      number: "10,328",
      hike: "+21.75%",
      icon: <FaFacebookF />,
      bgColor: "bg-blue-500",
      cardBg: "bg-blue-200",
    },
    {
      id: 2,
      name: "Instagram",
      number: "45,908",
      hike: "+21.75%",
      icon: <AiFillInstagram />,
      bgColor: "bg-red-500",
      cardBg: "bg-red-200",
    },
    {
      id: 3,
      name: "Twitter",
      number: "14,328",
      hike: "+21.75%",
      icon: <FaTwitter />,
      bgColor: "bg-green-600",
      cardBg: "bg-green-200",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socialItems.map(({ id, name, icon, hike, number, bgColor, cardBg }) => (
        <div
          key={id}
          className={`flex md:m-0  flex-col justify-between w-full sm:w-[250px] h-[150px] p-4 rounded-3xl shadow-md
            transform transition-transform duration-300 hover:rotate-6 hover:scale-90 md:hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 ${cardBg}`}
        >
          {/* Top Section */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">{name}</span>
            <span className="text-green-800 font-semibold">{hike}</span>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center">
            <div>
              <span className="text-3xl font-bold block">{number}</span>
              <span className="text-gray-600 text-sm">Followers</span>
            </div>
            <div className={`p-3 rounded-full text-4xl ${bgColor}`}>{icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialCards;
