import React from 'react';

const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* 1. Base Dark Background */}
      <div className="absolute inset-0 bg-slate-950"></div>

      {/* 2. Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* 3. Spotlight/Glow Effect (Center & Bottom) */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default BackgroundGrid;