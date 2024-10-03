import gift from "../assets/gift.png";
import net from "../assets/net.png";
import mining from "../assets/mining.png"
import stake from "../assets/stake.png"

const Featuresection = () => {
  return (
    <div className="relative flex justify-center  ">
      <div className="mt-20">
        <h1 className="font-bold flex justify-center ">
          Key Points of Dolven Labs
        </h1>
        <div className="flex flex-col sm:flex-row sm:space-x-10 h-auto sm:h-[350px] rounded-md bg-gray-800 p-6 sm:p-10 mt-10">
          <div className="flex-1 mb-6 sm:mb-0 ">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Claiming process & <br /> Reward Distribution
            </h1>
            <p className="mt-4 text-white text-sm sm:text-base">
              After the decision to invest and the amount to be invested is
              taken, the Dolven team will commit the funds to that project. And
              in return, profit from the tokens received will be delivered to
              users from the Dolven Airdrops interface.
            </p>

            <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white rounded-md">
              Join DAO
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center bg-red-400 p-6 sm:p-0 rounded-md border-[15px]">
            <img
              src={gift}
              alt="Gift Image"
              className="w-full h-full object-contain sm:max-w-[full]"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-10 h-auto sm:h-[350px] rounded-md bg-gray-800 p-6 sm:p-10 mt-10">
          <div className="flex-1 flex items-center justify-center  p-6 sm:p-0 rounded-md ">
            <img
              src={net}
              alt="Gift Image"
              className="w-full h-full object-contain sm:max-w-[full]"
            />
          </div>

          <div className="flex-1 mb-6 sm:mb-0 ">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Governance & DAO
            </h1>
            <p className="mt-4 text-white text-sm sm:text-base">
              Dolven DAO is what makes all decision, to join our DAO you must
              become a delegate
            </p>

            <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white rounded-md">
              More
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-10 h-auto sm:h-[350px] rounded-md bg-gray-800 p-6 sm:p-10 mt-10">
          <div className="flex-1 mb-6 sm:mb-0 ">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Delegation Based  & <br /> Staking 
            </h1>
            <p className="mt-4 text-white text-sm sm:text-base">
            were creating a decentralized autonomous organization where direct democracy plays and 
            important role. Dolven DEO is what makes all decisions, to join our DAO you must become 
            a delegae 
            </p>

            <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white rounded-md">
              Join DAO
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center bg-red-400 p-6 sm:p-0 rounded-md border-[15px]">
            <img
              src={mining}
              alt="Gift Image"
              className="w-full h-full object-contain sm:max-w-[full]"
            />
          </div>
        </div>


        <div className="flex flex-col sm:flex-row sm:space-x-10 h-auto sm:h-[350px] rounded-md bg-gray-800 p-6 sm:p-10 mt-10">

            
          <div className="flex-1 flex items-center justify-center p-6  sm:p-0 ">
            <img
              src={stake}
              alt="Gift Image"
              className="w-full h-full object-contain sm:max-w-[full]"
            />
          </div>


          <div className="flex-1 mb-6 sm:mb-0 ">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
            Liquidity Incentives <br /> Program
            </h1>
            <p className="mt-4 text-white text-sm sm:text-base">
            Adding liquidity can be a risk factor for investors in some cases, Dolven Labs is aware of 
            this therefore investors who support liquidity in the $DLV / $ETH parity are rewarded with airdrops and high yields.


            </p>

            <button className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white rounded-md">
              More
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Featuresection;
