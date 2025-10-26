import React from "react";
import ProfileTabs from "./components/ProfileTabs";
import GalleryWidget from "./components/GalleryWidget";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-start bg-[#191B1F]">
      {/* Outer Frame */}
      <div
        className="
          relative flex flex-col md:flex-row 
          rounded-[28px] shadow-[10px_10px_40px_10px_rgba(0,0,0,0.5)]
        "
        style={{
          width: "100%",
          maxWidth: "1728px",
          height: "895px",
          background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
        }}
      >
        {/* Padding Wrapper */}
        <div
          className="flex flex-col md:flex-row w-full h-full"
          style={{
            padding: "96px 29px 108px 29px", // base padding (mobile)
          }}
        >
          {/* Left Box */}
          <div
            className="hidden md:block flex-none "
            style={{
              width: "836px",
              height: "689px",
            }}
          ></div>

          {/* Right Column */}
          <div
            className="flex flex-col justify-between"
            style={{
              width: "100%",
              maxWidth: "720px",
              height: "689px",
              gap: "37px",
            }}
          >
            {/* Right Top */}
            <div
              className="relative flex items-center justify-center rounded-[27px] bg-[#363C43]"
              style={{
                width: "100%",
                height: "316px",
              }}
            >
              <ProfileTabs />

              {/* Divider between top & bottom */}
              <div
                className="absolute"
                style={{
                  width: "612px",
                  height: "4px",
                  top: "337px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "2.46px",
                  background:
                    "linear-gradient(180deg, rgba(40,40,40,0.1) 0%, rgba(248,248,248,0.1) 100%), linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.33)",
                  backdropFilter: "blur(9.837px)",
                }}
              ></div>
            </div>

            {/* Right Bottom */}
            <div
              className="relative flex items-center justify-center rounded-[18.89px] bg-[#FFFFFF]"
              style={{
                width: "100%",
                height: "330px",
              }}
            >
              <GalleryWidget />

              {/* Divider below bottom */}
              <div
                className="absolute"
                style={{
                  width: "612px",
                  height: "4px",
                  top: "342px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderRadius: "2.46px",
                  background:
                    "linear-gradient(180deg, rgba(40,40,40,0.1) 0%, rgba(248,248,248,0.1) 100%), linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05))",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.33)",
                  backdropFilter: "blur(9.837px)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
