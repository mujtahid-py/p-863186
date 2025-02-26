
import React from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";

const Index = () => {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      <div className="relative min-h-[868px] w-full pt-3 pb-[67px] px-3.5 rounded-[20px]">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
          alt="Background"
          className="absolute h-full w-full object-cover inset-0 -z-10"
        />
        <div className="container mx-auto">
          <Navbar />
          <div className="mt-[73px] max-w-[1283px] mx-auto max-md:mt-10">
            <Hero />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;

