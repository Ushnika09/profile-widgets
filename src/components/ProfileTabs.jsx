import React, { useState } from "react";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <div className="w-full h-full">
      {/* Inner Frame */}
      <div className="relative w-full h-full rounded-[18.89px] bg-[#363C43] opacity-100 shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
        {/* Buttons Bar */}
        <div className="absolute w-[614px] h-[62px] top-[17px] left-[53px] rounded-[23px] bg-[#171717] opacity-100 shadow-[inset_0px_4.96px_12.4px_2.48px_#00000040]">
          {/* Buttons Container */}
          <div className="absolute w-[597px] h-[49px] top-[6px] left-[6px] flex gap-[6px] opacity-100">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-[195px] h-[49px] rounded-[16px] font-poppins font-medium text-[18px] leading-[16.12px] text-center align-middle opacity-100 ${
                  activeTab === tab
                    ? "bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_#0A0A0A,-8.43px_-16.87px_50.6px_-16.87px_#485B71]"
                    : "bg-transparent text-[#A3ADB2]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="absolute w-[611px] h-[175px] top-[114px] left-[53px] font-plus-jakarta-sans font-normal text-[20px] leading-[100%] tracking-[0%] text-[#969696] opacity-100">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been<br />
          working at this awesome company for 3 years now.<br />
          <br />
          I was born and raised in Albany, NY & have been living in Santa<br />
          Carla for the past 10 years my wife Tiffany and my 4 year old twin<br />
          daughters- Emma and Ella. Both of them are just starting school,<br />
          so my calendar is usually blocked between 9–10 AM. This is a...
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;