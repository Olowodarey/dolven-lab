import React from "react";
import chainstack from "../assets/chainstack.png";
import argent from "../assets/argent.png";
import hardhat from "../assets/hardhat.png";
import starknet from "../assets/starknet.png";

const Herosection = () => {
  return (
    <div className="relative flex justify-center h-[100vh]">
    
      <div
        className="w-[40px] h-[40px] sm:w-[350px] sm:h-[350px] rounded-full absolute bottom-[150px] left-[100px] sm:left-[-10px] z-0"
        style={{
          background: "linear-gradient(to bottom, #4B0082 80%, #8A2BE2 20%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="w-[50px] h-[50px] sm:w-[350px] sm:h-[350px] rounded-full absolute bottom-[150px] right-[100px] sm:right-[-10px] z-0"
        style={{
          background: "linear-gradient(to bottom, #008000 100%, #000)",
          filter: "blur(70px)",
        }}
      />

  
      <div className="flex flex-col items-center pt-[100px] sm:pt-[150px] px-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          DAO-Based Ecosystem
        </h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold pt-3">
          Catalyst for Starknet
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl pt-5 w-[90%] sm:w-4/5 md:w-2/5">
          Dolven Labs is a DAO-Based Ecosystem Catalyst for projects built on
          the StarkNet Network. Dolven Labs aims to be the future of innovation
          and collaboration.
        </p>

        <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white rounded-md">
          Launch App
        </button>

       
        <div className="pt-[50px] sm:pt-[120px] mt-[100px]">
          <h2 className="text-orange-700 bg-black h-10 flex items-center justify-center px-10 rounded-md">
            PARTNERS
          </h2>
        </div>

     
        <div className="flex justify-center bg-black rounded-3xl border border-gray-700 px-2  sm:px-[50px] py-8 sm:py-10 mt-[-5px] space-x-2 sm:space-x-[150px]">
          <div className="flex items-center justify-center w-[70px] sm:w-[150px] h-[30px] sm:h-[50px]">
            <img src={chainstack} alt="Chainstack" className="h-full" />
          </div>
          <div className="flex items-center justify-center w-[70px] sm:w-[150px] h-[30px] sm:h-[50px]">
            <img src={argent} alt="Argent" className="h-full" />
          </div>
          <div className="flex items-center justify-center w-[70px] sm:w-[150px] h-[30px] sm:h-[50px]">
            <img src={starknet} alt="Starknet" className="h-full" />
          </div>
          <div className="flex items-center justify-center w-[70px] sm:w-[150px] h-[30px] sm:h-[50px]">
            <img src={hardhat} alt="Hardhat" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
