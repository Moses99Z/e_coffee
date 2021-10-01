import { useEffect, useRef, useState } from "react";
import OrderModal from "../components/OrderModal";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function ProductsPage(props) {
  let [showOrder, setShowOrder] = useState(false);
  const [coffee, setCoffee] = useState();
  const [coffees, setCoffees] = useState();

  const refo = useRef();

  const getCoffees = () => {
    axios.get(process.env.REACT_APP_API_URL + "api/products").then((result) => {
      setCoffees(result.data);
    });
  };

  useEffect(() => {
    getCoffees();
  }, []);

  return (
    <div
      className={` ${
        coffees != null
          ? "grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 justify-items-center  py-10  md:px-14"
          : ""
      }  `}
    >
      <OrderModal
        reff={refo}
        show={showOrder}
        setShow={setShowOrder}
        coffee={coffee}
      />
      {coffees != null ? (
        coffees.map((c) => {
          return (
            <ProductCard
              key={c._id}
              setConnectedError={props.setConnectedError}
              coffee={c}
              setOrder={setShowOrder}
              setCoffee={setCoffee}
            />
          );
        })
      ) : (
        <div class="flex items-center justify-center h-screen  pb-44">
          <div class="w-16 h-16 border-l-2 border-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
