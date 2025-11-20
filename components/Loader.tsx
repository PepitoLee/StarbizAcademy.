import React from 'react';
import { Loader4 } from './LoaderVariants';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#020617] z-50 flex items-center justify-center">
      {/* Active Loader: Cinematic Typography */}
      <div className="w-full h-full flex items-center justify-center scale-110">
        <Loader4 />
      </div>
    </div>
  );
};

export default Loader;