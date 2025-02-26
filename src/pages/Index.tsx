
import React from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";

const Index = () => {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      <div className="relative min-h-[868px] w-full pt-3 pb-[67px] px-3.5 rounded-[20px] bg-black">
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

