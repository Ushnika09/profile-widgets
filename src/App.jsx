import React from "react";
import ProfileTabs from "./components/ProfileTabs";
import GalleryWidget from "./components/GalleryWidget";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-start bg-[#191B1F]">
      {/* Outer Container */}
      <div
        className="relative flex rounded-[28px] pl-[37px]"
        style={{
          width: "1728px",
          height: "895px",
          padding: "96px 86px 108px 29px",
          gap: "37px",
          background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
        }}
      >
        {/* Left Column - Empty */}
        <div
          className=" hidden md:flex  flex-none rounded-[27px] border bg-transparent"
          style={{ width: "836px", height: "689px" }}
        ></div>

        {/* Right Column */}
        <div className="flex flex-col flex-none ml-[57px]" style={{ gap: "37px" }}>
          {/* Top Widget */}
          <div
            className="relative w-[720px] h-[316px] rounded-[27px]  bg-[#363C43] flex items-center justify-center"
          >
            <ProfileTabs />

            {/* Divider Below Top Widget */}
            <div
              className="absolute bottom-[-19px] left-1/2 transform -translate-x-1/2 w-[612px] h-1 rounded-[2.46px] shadow-[0_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[9.837px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              }}
            ></div>
          </div>

          {/* Bottom Widget */}
          <div
            className="relative w-[720px] h-[330px] rounded-[27px]  bg-white flex items-center justify-center"
          >
            <GalleryWidget />

            {/* Divider Below Bottom Widget */}
            <div
              className="absolute bottom-[-19px] left-1/2 transform -translate-x-1/2 w-[612px] h-1 rounded-[2.46px] shadow-[0_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[9.837px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
