
import React from 'react';
import loader from '../assets/loader.png';


const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-80">
      <div className="loader-image animate-spin">
        <img src={loader} alt="Loading..." className="w-16 h-16"  />
      </div>
    </div>
  );
};

export default Loader;
