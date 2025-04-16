import React from 'react';
import Profile from '/assets/background_bw.jpg';

function Home() {
  return (
    <div
      id="home"
      className="relative md:h-[90vh] h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${Profile})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute bottom-0 left-0 p-8 text-left">
        <p className="text-gray-200 md:text-5xl text-4xl font-medium uppercase mb-4 md:ml-12">Embedded Systems Engineer  &amp;</p>
        <p className="text-gray-200 md:text-5xl text-4xl font-medium uppercase md:mb-12 md:ml-48 ml-12">Edge Computing Researcher</p>
        
      </div>
    </div>
  );
}

export default Home;
