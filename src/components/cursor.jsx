import React, { useEffect, useState } from 'react';

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Clear any existing timeout
      clearTimeout(timeout);

      // Hide after 1 second of no movement
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {isMoving && (
        <div
          className={`fixed w-6 h-6 rounded-full pointer-events-none transition-all duration-75 z-50 ${
            isHovering
              ? 'bg-yellow-400 shadow-[0_0_10px_#facc15]'
              : 'bg-purple-700 shadow-[0_0_10px_#6627CC]'
          }`}
          style={{
            left: position.x - 12,
            top: position.y - 12,
          }}
        />
      )}

      {/* Hover Target
      <div className="p-20 space-y-6">
        <h1 className="text-3xl">Hover the button to change the circle color</h1>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Hover Me
        </button>
      </div> */}
    </div>
  );
}

export default CursorFollower;
