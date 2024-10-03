import React from 'react'

const About = () => {
  return (
    <div  className="relative flex justify-center border-b border-gray-400 h-[80vh]">
          <div
        className="w-[50px] h-[50px] sm:w-[350px] sm:h-[350px] rounded-full absolute bottom-[150px] right-[100px] sm:right-[-10px] z-0"
        style={{
          background: "linear-gradient(to bottom, #008000 100%, #000)",
          filter: "blur(40px)",
        }}
      />
      
      <div className="flex flex-col items-center pt-[100px] sm:pt-[150px] px-4 text-center">
        
      <p className="text-fuchsia-800 text-lg sm:text-xl md:text-2xl pt-5 w-[90%] sm:w-4/5 md:w-2/5">
            How to get started 
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold pt-3">
          What is Dolven Labs?
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl pt-5 w-[90%] sm:w-4/5 md:w-2/5">
          Dolven Labs is a DAO-Based Ecosystem Catalyst for projects built on
          the StarkNet Network. Dolven Labs aims to be the future of innovation
          and collaboration.
        </p>

        <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white rounded-md">
          Join DAO
        </button>

     




        </div>





</div>
  )
}

export default About