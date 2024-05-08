function Viden() {
  return (
    <div>
      <div className="bg-red-700 text-gray-100 py-16 text-center">
        <h1 className="text-8xl font-semibold">Viden</h1>
      </div>

      <div className="relative bg-orange-100 h-[1000px] overflow-hidden">
        <div className="text-5xl m-12">
          <h1>
            x Antal Danskere har været ramt af stress relateret til psykisk
            sygdom.
          </h1>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg my-10 border border-black text-2xl">
            Læs mere
          </button>
        </div>
        {/* SVG-bølge for at skabe kurven mellem de to sektioner */}
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(239, 68, 68)"
            d="M0,32L80,53.3C160,75,320,117,480,122.7C640,128,800,96,960,101.3C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" // SVG path
          />
        </svg>
      </div>

      <div className="bg-red-500 h-96"></div>
    </div>
  );
}

export default Viden;
