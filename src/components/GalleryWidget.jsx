import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function GalleryWidget() {
  const [images, setImages] = useState([
    { id: 1, url: "https://picsum.photos/190/179?random=1" },
    { id: 2, url: "https://picsum.photos/190/179?random=2" },
    { id: 3, url: "https://picsum.photos/190/179?random=3" },
    { id: 4, url: "https://picsum.photos/190/179?random=4" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const visibleCount = 3; // Always 3 visible
  const gap = 211; // Gap between cards
  const baseOffset = -19; // First card left

  const addImage = () => {
    const newImage = {
      id: Date.now(),
      url: `https://picsum.photos/190/179?random=${images.length + 1}`,
    };
    const updatedImages = [...images, newImage];
    setImages(updatedImages);

    if (updatedImages.length > visibleCount && currentIndex < updatedImages.length - visibleCount) {
      setCurrentIndex(updatedImages.length - visibleCount);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextImage = () => {
    if (currentIndex < images.length - visibleCount) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative w-[720px] h-[330px] rounded-[18.89px] bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] overflow-hidden">

<div className="flex flex-row w-[85%] absolute top-5 left-10 justify-between items-center">
        {/* Gallery Label */}
      <div className=" w-[149px] h-[62px] top-[37px] left-[20px] rounded-[20px] bg-[#171717] shadow-[inset_0px_4px_10px_2px_#00000040] flex items-center justify-center z-10">
        <span className="font-poppins font-medium text-[20px] text-white">Gallery</span>
      </div>

      <div className="flex flex-row justify-between items-center gap-10">
        {/* Add Image Button - Center */}
      <div className=" z-10">
        <button
          onClick={addImage}
          className="w-[131px] h-[46px] rounded-[104px] bg-[#FFFFFF08] backdrop-blur-[104.56px] shadow-[0px_3.26px_3.26px_0px_#FFFFFF26_inset,0px_0px_48.91px_0px_#FFFFFF0D_inset,9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40] flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform"
        >
          <div className="w-[12.1px] h-[12.1px] bg-white rounded-sm flex items-center justify-center">
            <span className="text-white text-[8px] font-bold leading-none">+</span>
          </div>
          <span className="font-plus-jakarta-sans font-extrabold text-[12px] leading-[6.29px] tracking-[0px] text-white uppercase">
            ADD IMAGE
          </span>
        </button>
      </div>

      {/* Navigation Arrows */}
      <div className=" flex gap-2 z-10">
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] flex items-center justify-center border-2 border-[#6F787C] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaArrowLeft className="text-[#6F787C]" size={14} />
        </button>

        <button
          onClick={nextImage}
          disabled={currentIndex >= images.length - visibleCount}
          className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] flex items-center justify-center border-2 border-[#6F787C] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaArrowRight className="text-[#6F787C]" size={14} />
        </button>
      </div>
      </div>

</div>
      {/* Sliding Cards */}
      <div className="absolute top-[75px] left-7.5 h-[319px] w-full overflow-hidden">
        <div className="relative transition-all duration-500">
          {images.slice(currentIndex, currentIndex + visibleCount).map((image, i) => {
            const leftPos = baseOffset + gap * i;
            return (
              <div
                key={image.id}
                className="absolute w-[300px] h-[319px] left-0 top-0"
                style={{ left: `${leftPos}px` }}
              >
                {/* Outer frame with tilt on hover */}
                <div
                  className={`absolute w-[300px] h-[319px] transition-transform duration-300 cursor-pointer border ${
                    hoveredCard === image.id ? "scale-110 -rotate-3" : "scale-100 rotate-0"
                  }`}
                  onMouseEnter={() => setHoveredCard(image.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Inner photo card */}
                  <div className="absolute w-[190px] h-[179px] top-[55px] left-[39px] rounded-[24px] bg-[#00000033] overflow-hidden transition-transform duration-300">
                    <img
                      src={image.url}
                      alt={`Gallery ${i + 1}`}
                      className={`w-full h-full object-cover rounded-[24px] ${
                        hoveredCard === image.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    {/* Overlay */}
                    {hoveredCard !== image.id && (
                      <div className="absolute inset-0 bg-black/40 rounded-[24px] pointer-events-none" />
                    )}
                    {/* Active border */}
                    {i === 0 && hoveredCard !== image.id && (
                      <div className="absolute inset-0 border-2 border-white/20 rounded-[24px] pointer-events-none" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GalleryWidget;
