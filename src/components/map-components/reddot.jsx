import React, { useState } from 'react';

const MapWithRedDot = () => {
  const [redDotPosition, setRedDotPosition] = useState({ x: null, y: null });

  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setRedDotPosition({ x, y });
  };

  return (
    <div style={{ position: 'relative' }} onClick={handleClick}>
      {/* Render red dot at the position of the click */}
      {redDotPosition.x !== null && redDotPosition.y !== null && (
        <div
          style={{
            position: 'absolute',
            top: redDotPosition.y,
            left: redDotPosition.x,
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'red',
            transform: 'translate(-50%, -50%)', // Center the dot
          }}
        />
      )}
    </div>
  );
};

export default MapWithRedDot;
