import React from "react";
import ProfileTabs from "./components/ProfileTabs";
import GalleryWidget from "./components/GalleryWidget";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen min-w-[1728px] bg-[#191B1F] overflow-auto">
      {/* Main Container - responsive width */}
      <div className="relative w-full max-w-[1728px] min-w-[768px] h-[895px]  mx-auto"
      style={{
    opacity: 1,
    background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
    boxShadow: "10px 10px 40px 10px #00000080"
  }}
>
        {/* Profile Widget - responsive positioning */}
        <div className="absolute w-full max-w-[720px] h-[316px] top-[96px] left-1/2 -translate-x-1/2 md:left-[922px] md:translate-x-0">
          <ProfileTabs/>
        </div>
        
        {/* Gallery Widget - responsive positioning */}
        <div className="absolute w-full max-w-[720px] h-[330px] top-[452px] left-1/2 -translate-x-1/2 md:left-[922px] md:translate-x-0">
          <GalleryWidget />
        </div>
        
        {/* Left empty space - only on md screens and above */}
        <div className="hidden md:block absolute rounded-[27px] border border-[#5A5A5A] w-[836px] h-[689px] top-[96px] left-[29px]"></div>

        {/* Divider Below Profile Widget */}
        <div
          className="absolute w-full max-w-[612px] h-1 rounded-[2.46px] shadow-[0_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[9.837px] left-1/2 -translate-x-1/2 md:left-[975px] md:translate-x-0"
          style={{
            top: "437px",
            background: "linear-gradient(180deg, rgba(40,40,40,0.1) 0%, rgba(248,248,248,0.1) 100%)",
          }}
        >
          <div className="w-full h-full bg-[rgba(255,255,255,0.05)] mix-blend-overlay"></div>
        </div>

        {/* Divider Below Gallery Widget */}
        <div
          className="absolute w-full max-w-[612px] h-1 rounded-[2.46px] shadow-[0_4px_4px_rgba(0,0,0,0.33)] backdrop-blur-[9.837px] left-1/2 -translate-x-1/2 md:left-[975px] md:translate-x-0"
          style={{
            top: "807px",
            background: "linear-gradient(180deg, rgba(40,40,40,0.1) 0%, rgba(248,248,248,0.1) 100%)",
          }}
        >
          <div className="w-full h-full bg-[rgba(255,255,255,0.05)] mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default App;