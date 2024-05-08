function Begivenheder() {
  return (
    <div className="relative bg-orange-100 h-[1000px] overflow-hidden">
      {/* SVG-bølge for toppen */}
      <svg
        className="absolute top-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="rgb(239 68 68" // Farve på bølgen
          d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,250.7C1120,245,1280,203,1360,192L1440,181.3V0H0Z" // Bølge med kurve i toppen
        />
      </svg>

      {/* Indhold af sektionen */}
      <h1 className="text-center text-4xl">Hej</h1>
    </div>
  );
}

export default Begivenheder;
