import React from 'react';

function BackgroundBlobs() {
  return (
    <div className="hidden fixed h-screen inset-0 -z-10 overflow-hidden top-0 bottom-0">
      <div className="h-40 w-40 blob1 absolute top-10 left-10 md:w-72 md:h-72 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-blob1"></div>
      <div className="h-40 w-40 blob1 absolute top-1/3 left-10 md:w-72 md:h-72 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-blob1"></div>
      <div className="absolute top-1/2 right-10 w-52 h-52 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-blob2"></div>
      
    </div>
  );
}

export default BackgroundBlobs;
