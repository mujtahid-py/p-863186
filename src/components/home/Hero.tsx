import React from "react";
import EmailSubscribe from "./EmailSubscribe";

const Hero = () => {
  return (
    <section className="flex gap-5 max-md:flex-col">
      <div className="w-6/12 max-md:w-full">
        <div className="flex flex-col mt-[54px] max-md:mt-10">
          <h1 className="text-white text-[55px] max-md:text-[40px] leading-tight">
            Grow{" "}
            <span className="font-['Pacifico'] text-[#DDFCAD]">faster</span>{" "}
            with our all-in-one marketing platform
          </h1>
          <p className="text-[#BDBDBD] text-[15px] mt-10">
            Agency that builds and helps you grow your business to next level
          </p>
          <div className="mt-[58px] max-md:mt-10">
            <EmailSubscribe />
          </div>
        </div>
      </div>
      <div className="w-6/12 max-md:w-full">
        <div className="bg-[#F1F1EF] relative flex grow flex-col w-full pt-[34px] pb-[554px] px-[30px] rounded-[20px] max-md:pb-[100px]">
          <div className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[141px] h-[45px] rounded-[100px] relative">
            <div className="bg-[#DDFCAD] absolute top-[-5px] w-[50px] h-[50px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
