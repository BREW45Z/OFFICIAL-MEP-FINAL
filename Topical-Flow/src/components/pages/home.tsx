// Home.tsx
import React from 'react';
import Navbar from '../shared/navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 shadow-md rounded-md">
          {/* Your home page content goes here */}
          <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
          {/* Add your home page content */}
        </div>
      </div>
    </div>
  );
};

export default Home;
