'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const InteractiveMap = () => {
  const [hoveredLga, setHoveredLga] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [tooltipData, setTooltipData] = useState({ name: '', stat: '' });

  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleLgaHover = (lgaName, stat) => {
    setHoveredLga(lgaName);
    setTooltipData({ name: lgaName, stat });
  };

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto aspect-square hud-bg rounded-full border-4 border-brand-teal/20 p-4 shadow-2xl shadow-brand-dark"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredLga(null)}
    >
      <div className="absolute inset-0 bg-brand-dark-blue rounded-full opacity-50"></div>
       {/* To ensure no CLS, we use next/image with specified dimensions */}
      <Image
        src="/osun-map.svg"
        alt="Interactive Map of Osun State LGAs"
        width={600}
        height={550}
        className="relative z-10 w-full h-full object-contain"
        priority
      />
      {/* Example hover trigger areas. In a real app, these would be SVG paths. */}
      <div
        className="absolute z-20"
        style={{ top: '45%', left: '41%', width: '15%', height: '15%' }}
        onMouseEnter={() => handleLgaHover('Osogbo', 'Literacy: 92%')}
      ></div>
      <div
        className="absolute z-20"
        style={{ top: '72%', left: '58%', width: '15%', height: '15%' }}
        onMouseEnter={() => handleLgaHover('Ife East', 'O-MEALS Impact: High')}
      ></div>

      {hoveredLga && (
        <div
          className="fixed z-50 p-3 hud-bg hud-border rounded-md text-sm font-mono transition-opacity pointer-events-none"
          style={{
            top: tooltipPos.y + 15,
            left: tooltipPos.x + 15,
            opacity: 1,
          }}
        >
          <p className="text-brand-light-gray font-bold">{tooltipData.name}</p>
          <p className="text-brand-cyan">{tooltipData.stat}</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
