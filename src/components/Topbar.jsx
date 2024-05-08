import { FaSearch, FaBars } from "react-icons/fa";
import Logo from "../assets/herForDig.svg";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between p-1 bg-orange-50">
      {/* Venstre side: logo og tekst */}
      <div className="flex items-center space-x-6">
        {" "}
        {/* Reduceret spacing */}
        <img
          src={Logo}
          alt="Logo"
          className="w-12 sm:w-16 md:w-24 lg:w-32"
          style={{ height: "auto" }}
        />
        <div>
          {/* Responsive tekststørrelse */}
          <h1 className="text-xl sm:text-3xl md:text-5xl font-black mb-2">
            Her for dig
          </h1>
          <h2 className="text-sm sm:text-lg md:text-xl">
            Alle fortjener en passende behandling
          </h2>
        </div>
      </div>

      {/* Højre side: knapper og ikoner */}
      <div className="flex items-center space-x-8 mr-4">
        {" "}
        {/* Reduceret spacing */}
        <button className="bg-red-500 text-white py-1 px-3 rounded-3xl my-2 sm:w-24 font-bold">
          STØT
        </button>
        <FaSearch className="text-gray-600 text-xl cursor-pointer" />
        <FaBars className="text-gray-600 text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;
