import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import paypal from "../assets/paypal.svg";
import mastercard from "../assets/mastercard.svg";
import visa from "../assets/visa.svg";
import delivery from "../assets/delivery-bike.svg";
import deliverydone from "../assets/delivery-box.svg";
import sad from "../assets/sad.svg";

function OrdersPage() {
  const [orders, setOrders] = useState();

  function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  useEffect(() => {
    const getOrders = () => {
      axios
        .get(process.env.REACT_APP_API_URL + "api/orders/", {
          headers: {
            "auth-token": getCurrentUser().token,
          },
        })
        .then((response) => {
          setOrders(response.data);
        });
    };
    getOrders();
  }, []);

  return (
    <div className="mt-10">
      {orders != null ? (
        orders.length > 0 ? (
          orders.map((order) => {
            return (
              <div className="mx-16 bg-gradient-to-r from-verydark to-darker rounded-xl mb-8  flex md:flex-row flex-col cursor-default ">
                <div className=" md:w-40   ">
                  <img
                    alt="coffee"
                    src={order.image}
                    className=" md:h-full sm:h-10 object-cover"
                  />
                </div>
                <div className="flex flex-row">
                  <div className="grid grid-rows-2    py-3 ">
                    <div>
                      <h1 className="pl-4 pt-4 text-4xl font-medium text-white">
                        {order.coffee}
                      </h1>
                    </div>
                    <div>
                      <h1 className="pl-4 pt-4 text-white  text-3xl">
                        $ {order.price}.00
                      </h1>
                    </div>
                  </div>
                  <div className="grid grid-rows-1 place-items-center py-2 pl-6">
                    <img
                      alt="payment"
                      src={
                        order.payment === "Visa"
                          ? visa
                          : order.payment === "Mastercard"
                          ? mastercard
                          : paypal
                      }
                      className="h-24"
                    />
                  </div>
                  <div className="grid grid-row-1 place-items-center pl-6 ">
                    <h1 className="text-white text-xl">
                      {order.date.slice(0, 19).replace("T1", "  |  ")}
                    </h1>
                  </div>
                  <div
                    className={`grid grid-cols-2 place-items-center py-2  ${
                      !order.status
                        ? "pl-16 animate-transform"
                        : "pl-24 animate-fastwiggle"
                    }`}
                  >
                    <img
                      alt="delivery"
                      src={order.status ? deliverydone : delivery}
                      className="h-24"
                    />
                  </div>
                  <div className="grid grid-row-1 place-items-center ">
                    <h1 className="text-green-600 text-2xl ">
                      {order.status ? "Done" : "One The Way"}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid grid-col place-items-center pt-32">
            <div>
              <img alt="sad" src={sad} className="h-24" />
            </div>
            <div>
              <h1 className="text-white text-4xl pt-6">No Orders</h1>
            </div>
          </div>
        )
      ) : (
        <div class="flex items-center justify-center h-screen pb-44">
          <div class="w-16 h-16 border-l-2 border-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
