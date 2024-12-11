import React from "react";
import { IMG_1, IMG_2, IMG_3, IMG_4, IMG_5 } from "../utils/Constant";

const CampaignCard = () => {
  return (
    <div className="bg-black text-white  md:w-[300px] h-[250px] rounded-lg shadow-lg  ">
      <div className="flex justify-between p-4">
        <p>Facebook Campagin</p>
        <button className="bg-green-700 px-4 py-1 rounded-lg">Active</button>
      </div>

      <div className="flex justify-between p-4 md:p-6">
        <div className="">
          <p className="font-semibold text-xl md:text-2xl">193</p>
          <p className="text-sm">Posts</p>
          <p className="text-xs">Today</p>
        </div>

        <div>
          <p className="font-semibold text-xl md:text-2xl">19003</p>
          <p className="text-sm">Followers</p>
          <p className="text-xs">Goals</p>
        </div>

        <div>
          <p className="font-semibold text-xl md:text-2xl">300</p>
          <p className="text-sm">Followings</p>
          <p className="text-xs">Online</p>
        </div>
      </div>

      <div className="flex justify-between p-4">
        <div className="flex space-x-reverse space-x-[-8px]">
          {[IMG_1, IMG_2, IMG_3, IMG_4, IMG_5].map(
            (src, index) => (
              <img
                key={index}
                src={src}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            )
          )}
        </div>

        <p className="flex items-center flex-col font-semibold text-lg md:text-xl">
          +7,294
          <span className="text-xs font-thin">All Time</span>
        </p>
      </div>
    </div>
  );
};

export default CampaignCard;
