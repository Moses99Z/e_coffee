import { useState } from "react";

function ProductCard(props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="transition duration-300 ease-in-out bg-gradient-to-r from-verydark to-darker rounded-3xl mb-16  bg-opacity-5 hover:bg-opacity-10 flex md:flex-row flex-col cursor-pointer transform hover:scale-105">
      <div className=" md:w-40   ">
        <img
          alt="coffee"
          style={{ display: "none" }}
          src={props.coffee.image}
          className="h-60 w-40 pr-3"
          onLoad={() => setLoaded(true)}
        />

        {loaded && (
          <img
            alt="coffee"
            src={props.coffee.image}
            className=" md:h-full sm:h-10 object-cover"
          />
        )}
      </div>
      <div className="flex flex-col justify-between py-2 mr-8">
        <div>
          <h1 className="px-4 pt-2 text-4xl font-medium text-white">
            {props.coffee.name}
          </h1>
        </div>
        <div>
          <h1 className="px-4 pt-3 text-white  text-3xl">
            $ {props.coffee.price}.00
          </h1>
        </div>
        <div></div>
        <div className="inline-grid grid-cols-1 pt-3">
          <button
            onClick={() => {
              if (localStorage.getItem("user") != null) {
                props.setCoffee(props.coffee);
                props.setOrder(true);
              } else {
                props.setConnectedError(true);
                setTimeout(() => {
                  props.setConnectedError(false);
                }, 2500);
              }
            }}
            className=" transition duration-400 ease-in-out  shadow-md bg-white mb-4 text-black px-6 py-2 rounded-3xl mx-3"
          >
            Order now
          </button>
          <button className="transition duration-400 ease-in-out border  border-white rounded-3xl mb-3 px-6 py-2 mx-3 text-white">
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
