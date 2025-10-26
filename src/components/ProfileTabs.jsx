import React, { useState } from "react";


const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabContent = {
    "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,
    
    "Experiences": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,
    
    "Recommended": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,
  };

  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <div
      className="h-full w-full rounded-[18.89px] bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] flex flex-col p-[17px_0_0_53px]"
    >
      {/* Buttons Row */}
      <div
        className="w-[614px] h-[62px] rounded-[23px] bg-[#171717] shadow-[inset_0px_4.96px_12.4px_2.48px_#00000040] flex items-center justify-start gap-1.5 px-[7px]"
      >
        {tabs.map((tab) => (
          <button
  key={tab}
  onClick={() => setActiveTab(tab)}
  className={`
    w-[195px] h-[49px] rounded-2xl px-6 py-2.5
    font-[Poppins] font-medium text-[18px] leading-[16.12px] text-center align-middle
    ${activeTab === tab
      ? "bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_#0A0A0A,-8.43px_-16.87px_50.6px_-16.87px_#485B71]"
      : "bg-transparent text-[#A3ADB2]"}
  `}
>
  {tab.charAt(0).toUpperCase() + tab.slice(1)}
</button>


        ))}
      </div>

      {/* Gap between buttons row and content */}
      <div className="h-[37px]"></div>

      {/* Text Content */}
      <div
  className="w-[611px] h-[175px] font-sans font-normal text-[20px] leading-[100%] tracking-[0%] text-[#969696] overflow-hidden"
  style={{ top: "210px", left: "975px", opacity: 1 }}
>
  {tabContent[activeTab].split("\n").map((paragraph, index) => (
    <p key={index} className="mb-3 last:mb-0">
      {paragraph}
    </p>
  ))}
</div>

    </div>
  );
};

export default ProfileWidget;
