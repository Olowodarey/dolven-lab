import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="mx-auto h-[50px] relative border-b-2 bg-slate-900 border-black px-4">
      {/* Decorative circle at the beginning */}
      <div
        className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full absolute top-[-5px] left-5 sm:left-10 z-0"
        style={{
          background: 'linear-gradient(to bottom, #008000 100%, #000)',
          filter: 'blur(15px)',
        }}
      />

      {/* Decorative circle in the middle */}
      <div
        className="w-[60px] h-[30px] sm:w-[100px] sm:h-[40px] rounded-full absolute top-[-5px] left-1/2 transform -translate-x-1/2 z-0"
        style={{
          background: 'linear-gradient(to right, #008080 40%, #fe6c4c 50%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Decorative circle at the end */}
      <div
        className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full absolute top-[-5px] right-5 sm:right-[150px] z-0"
        style={{
          background: 'linear-gradient(to right, #008080 40%, #fe6c4c 50%)',
          filter: 'blur(15px)',
        }}
      />

      {/* Navigation links */}
      <div className="flex items-center justify-center p-2.5 space-x-4 sm:space-x-10 relative z-10">
        <NavLink className="text-white text-sm sm:text-base">Overview</NavLink>
        <NavLink className="text-white text-sm sm:text-base">Doc</NavLink>
        <NavLink className="text-white text-sm sm:text-base">Social</NavLink>
        <button className="px-3 py-1 sm:px-4 sm:py-1 bg-red-500 text-white rounded-md">
          Launch App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
