import React from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";

const Index = () => {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      <div className="relative min-h-[868px] w-full pt-3 pb-[67px] px-3.5 rounded-[20px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/910a0bc36b2a49489965ddbb117107e8/d919c77fe08bba07e17eabeb5dc2bd2a0b001d6d339b7b156885297b9100d263?placeholderIfAbsent=true"
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
