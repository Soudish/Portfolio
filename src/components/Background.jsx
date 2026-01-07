import React from 'react';

const InfiniteGrid = () => {
  const styleSheet = `
    @keyframes move-grid {
      0% { transform: translateY(0); }
      100% { transform: translateY(40px); } /* Should match the grid size */
    }

    .grid-container {
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      background-color: #020617;
      z-index: -1;
      overflow: hidden;
      perspective: 1000px; /* Gives that 3D "floor" look */
    }

    .grid-net {
      position: absolute;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      background-image: 
        linear-gradient(to right, rgba(34, 211, 238, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(34, 211, 238, 0.2) 1px, transparent 1px);
      background-size: 40px 40px;
      transform: rotateX(45deg); /* Angles the grid like a floor */
      animation: move-grid 2s linear infinite;
    }

    .grid-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, #020617 0%, transparent 50%, #020617 100%);
  pointer-events: none;
    }

    .glow-point {
      position: absolute;
      width: 40vw;
      height: 40vw;
      background: #4f46e5;
      filter: blur(120px);
      opacity: 0.3;
      top: 20%;
      left: 30%;
      z-index: -2;
    }
  `;

  return (
    <>
      <style>{styleSheet}</style>
      <div className="grid-container">
        <div className="glow-point"></div>
        <div className="grid-net"></div>
        <div className="grid-overlay"></div>
      </div>
    </>
  );
};

export default InfiniteGrid;