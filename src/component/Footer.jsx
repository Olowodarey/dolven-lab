import { FaSearch, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative flex justify-center m-10">
      <div className="relative">
        {/* Features Content */}
        <div className="space-y-1 mt-5 text-center">
          <h1 className="text-2xl tracking-widest font-extrabold bg-gradient-to-r from-pink-500 to-green-500 text-transparent bg-clip-text">
            FEATURES
          </h1>
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Stay updated on the latest <br /> Dolven Labs
          </h1>
        </div>
        <div className="flex justify-center bg-amber-900 h-[50px] items-center rounded-md w-full sm:w-[400px] lg:w-[500px] mt-5 mx-auto">
  {/* Facebook Icon */}
  <div className="hover:bg-blue-300 rounded-md p-2 sm:p-1 mx-2 sm:mx-4">
    <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
  </div>

  {/* Instagram Icon */}
  <div className="hover:bg-blue-300 rounded-md p-2 sm:p-1 mx-2 sm:mx-4">
    <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
  </div>

  {/* Twitter Icon */}
  <div className="hover:bg-blue-300 rounded-md p-2 sm:p-1 mx-2 sm:mx-4">
    <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
  </div>
</div>



      </div>


    </div>
  );
};

export default Footer;
