const Home = () => {
  return (
    <div
      name="home"
      className="bg-cover bg-center flex justify-center items-center bg-malkebotter h-[700px]"
    >
      {/* Container */}
      <div>
        {" "}
        {/*         <h1
          className="text-4xl sm:text-9xl font-black text-[#fd4848]"
          style={{ textShadow: "4px 4px 4px black" }}
        >
          Vi er
          <br />
          Her for dig
        </h1> */}
        <div>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg my-10 border border-black text-2xl relative top-64">
            Om Os
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
