import React, { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function GalleryWidget() {
  // Generate placeholder images using Canvas - completely local, no external dependencies
  const generatePlaceholderImage = (id) => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    // Generate unique colors based on id
    const hue = (id * 47) % 360;
    const saturation = 60 + (id % 30);
    const lightness = 50 + (id % 20);
    const bgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    // Fill background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 400, 400);

    // Add gradient overlay
    const gradient = ctx.createLinearGradient(0, 0, 400, 400);
    gradient.addColorStop(0, "rgba(255,255,255,0.1)");
    gradient.addColorStop(1, "rgba(0,0,0,0.2)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    // Add decorative circle
    ctx.fillStyle = `hsl(${(hue + 120) % 360}, 80%, 60%)`;
    ctx.beginPath();
    ctx.arc(200, 200, 80, 0, Math.PI * 2);
    ctx.fill();

    // Add text
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`IMG ${id}`, 200, 200);

    return canvas.toDataURL("image/png");
  };

  const [images, setImages] = useState(() => [
    { id: 1, url: generatePlaceholderImage(1) },
    { id: 2, url: generatePlaceholderImage(2) },
    { id: 3, url: generatePlaceholderImage(3) },
    { id: 4, url: generatePlaceholderImage(4) },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCards, setHoveredCards] = useState(new Set());
  const containerRef = useRef(null);

  const visibleCount = 3;
  const gap = 211;
  const baseOffset = -19;
  const outerFrameWidth = 300;

  const addImage = () => {
    const newId = Math.max(...images.map(img => img.id), 0) + 1;
    const newImage = {
      id: newId,
      url: generatePlaceholderImage(newId),
    };
    setImages([...images, newImage]);
  };

  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextImage = () => {
    if (currentIndex < images.length - visibleCount) setCurrentIndex(currentIndex + 1);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;

    const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);
    const newHoveredCards = new Set();

    visibleImages.forEach((image, i) => {
      const cardLeft = baseOffset + gap * i;
      const cardRight = cardLeft + outerFrameWidth;

      if (mouseX >= cardLeft && mouseX <= cardRight) {
        newHoveredCards.add(image.id);
      }
    });

    setHoveredCards(newHoveredCards);
  };

  const handleMouseLeave = () => {
    setHoveredCards(new Set());
  };

  return (
    <div className="relative w-[720px] h-[330px] rounded-[18.89px] bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] overflow-hidden">

      <div className="flex flex-row w-[85%] absolute top-5 left-10 justify-between items-center">
        {/* Gallery Label */}
        <div className="w-[149px] h-[62px] top-[37px] left-[20px] rounded-[20px] bg-[#171717] shadow-[inset_0px_4px_10px_2px_#00000040] flex items-center justify-center z-10">
          <span className="font-poppins font-medium text-[20px] text-white">Gallery</span>
        </div>

        <div className="flex flex-row justify-between items-center gap-10">
          {/* Add Image Button - Center */}
          <div className="z-10">
            <button
              onClick={addImage}
              className="w-[131px] h-[46px] rounded-[104px] bg-[#FFFFFF08] backdrop-blur-[104.56px] shadow-[0px_3.26px_3.26px_0px_#FFFFFF26_inset,0px_0px_48.91px_0px_#FFFFFF0D_inset,9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40] flex items-center justify-center gap-1 cursor-pointer active:scale-95 transition-transform"
            >
              <div className="w-[12.1px] h-[12.1px] rounded-sm flex items-center justify-center">
                <span className="text-white text-[12px] font-bold leading-none">+</span>
              </div>
              <div className="font-plus-jakarta-sans font-bold text-[10px] leading-[6.29px] tracking-[0px] text-white uppercase">
                ADD IMAGE
              </div>
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 z-10">
            <button
              onClick={prevImage}
              disabled={currentIndex === 0}
              className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] flex items-center justify-center border-2 border-[#6F787C] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="text-[#6F787C]" size={14} />
            </button>

            <button
              onClick={nextImage}
              disabled={currentIndex >= images.length - visibleCount}
              className="w-[45px] h-[45px] rounded-full bg-gradient-to-br from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7] flex items-center justify-center border-2 border-[#6F787C] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="text-[#6F787C]" size={14} />
            </button>
          </div>
        </div>

      </div>
      
      {/* Sliding Cards */}
      <div 
        ref={containerRef}
        className="absolute top-[75px] left-7.5 h-[319px] w-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative transition-all duration-500">
          {images.slice(currentIndex, currentIndex + visibleCount).map((image, i) => {
            const leftPos = baseOffset + gap * i;
            const isHovered = hoveredCards.has(image.id);
            
            return (
              <div
                key={image.id}
                className="absolute w-[300px] h-[319px] left-0 top-0"
                style={{ left: `${leftPos}px` }}
              >
                {/* Outer frame with tilt on hover */}
                <div
                  className={`absolute w-[300px] h-[319px] transition-all duration-700 ease-out cursor-pointer  ${
                    isHovered ? "scale-[1.15] -rotate-3 -translate-y-3" : "scale-100 rotate-0 translate-y-0"
                  }`}
                  style={{ zIndex: isHovered ? 50 : 10 - i }}
                >
                  {/* Inner photo card */}
                  <div className="absolute w-[181px] h-[175px] top-[65px] left-[50px] rounded-3xl overflow-hidden bg-black">
                    <img
                      src={image.url}
                      alt={`Gallery ${image.id}`}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    {/* Overlay */}
                    {!isHovered && (
                      <div className="absolute inset-0 bg-black/40 rounded-3xl pointer-events-none" />
                    )}
                    {/* Active border */}
                    {i === 0 && !isHovered && (
                      <div className="absolute inset-0 border-2 border-white/20 rounded-3xl pointer-events-none" />
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