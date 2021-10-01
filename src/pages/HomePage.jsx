function HomePage(props) {
  return (
    <div className="h-screen flex flex-col flex-wrap content-center justify-center pb-32">
      <p className="text-white text-5xl  ">Order coffee from home easily</p>

      <p className=" text-3xl text-center text-gray-200 font-dancing pt-3">
        Delivery is free everywhere, anytime
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => {
            props.setIndex(1);
          }}
          className="animate-bounce transition duration-400 ease-in-out border border-white py-3 px-3 text-white mt-8 transform hover:scale-105 "
        >
          CHECK COFFEES
        </button>
      </div>
    </div>
  );
}

export default HomePage;
