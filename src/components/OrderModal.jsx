import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";
import coffee from "../assets/coffee-cup.svg";
import Example from "./radios";
import PaymentRadios from "./PaymentRadios";

function OrderModal(props) {
  const [step, setStep] = useState(1);
  const [coffeeType, setCoffeeType] = useState();
  const [payment, setPayment] = useState();

  function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  const addOrder = () => {
    axios.post(
      process.env.REACT_APP_API_URL + "api/orders/",
      {
        coffee: props.coffee.name,
        price: props.coffee.price,
        image: props.coffee.image,
        status: false,
        payment: payment.name,
        email: getCurrentUser().email,
      },
      {
        headers: {
          "auth-token": getCurrentUser().token,
        },
      }
    );
  };

  return (
    <Transition appear show={props.show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => {
          props.setShow(false);
          setTimeout(() => {
            setStep(1);
          }, 500);
        }}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="rounded-2xl inline-block w-full max-w-xl py-4  overflow-hidden text-left align-middle transition-all transform bg-darker   ">
              {step === 1 ? (
                <div className="flex justify-items-center mx-6 my-2">
                  <div className="flex flex-col align-middle w-full">
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row">
                        <img alt="coffee" className="w-14 mr-3" src={coffee} />
                        <div>
                          <div className="mt-2">
                            <h1 className="text-xl font-medium leading-3 text-white">
                              {props.coffee && props.coffee.name}
                            </h1>
                          </div>
                          <div className="mt-4 mb-2">
                            <h1 className="text-xl font-medium leading-3 text-white">
                              {props.coffee && props.coffee.price}.00 $
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-gray-300 pt-2 pr-2">
                          Step {step} of 2
                        </h1>
                      </div>
                    </div>
                    <div className="mt-5 mb-1 ">
                      <h1 className="text-xl font-medium leading-3 text-gray-300">
                        Cup Size
                      </h1>
                    </div>
                    <Example setCoffeeType={setCoffeeType} />

                    <div className="mt-1">
                      <button
                        type="button"
                        className="inline-flex justify-center mr-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => {
                          props.setShow(false);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          setStep(2);
                        }}
                        className=" inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-verydark shadow-lg border border-transparent rounded-md hover:bg-darkblack focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              ) : step === 2 ? (
                <div className="flex justify-items-center mx-6 my-2">
                  <div className={` flex flex-col align-middle w-full`}>
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row">
                        <div>
                          <div className="mt-2">
                            <h1 className="text-xl font-medium leading-3 text-white">
                              Payment Method
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-gray-300 pt-2 pr-2">
                          Step {step} of 2
                        </h1>
                      </div>
                    </div>

                    <PaymentRadios setPayment={setPayment} />

                    <div className="mt-1">
                      <button
                        type="button"
                        className="inline-flex justify-center mr-4 px-4 py-2 text-sm font-medium text-white  bg-red-600 rounded-md hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => {
                          props.setShow(false);
                          setTimeout(() => {
                            setStep(1);
                          }, 500);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Cancel
                      </button>

                      <button
                        onClick={() => {
                          setStep(1);
                        }}
                        className="mr-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-verydark shadow-lg border border-transparent rounded-md hover:bg-darkblack focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                        Back
                      </button>
                      <button
                        onClick={() => {
                          setStep(3);
                          addOrder();
                          setTimeout(() => {
                            props.setShow(false);
                          }, 2000);
                          setTimeout(() => {
                            setStep(1);
                          }, 2500);
                        }}
                        className="mr-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-teal shadow-lg border border-transparent rounded-md hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Validate
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`flex justify-items-center mx-6 my-2`}>
                  <div className="flex flex-col align-middle w-full">
                    <div className="flex flex-row justify-center">
                      <div className="flex flex-col">
                        <div>
                          <div className="mt-2">
                            <h1 className="text-xl font-medium leading-3 text-white">
                              Your order has been submitted successfully
                            </h1>
                          </div>
                        </div>
                        <div className="flex justify-center mt-5 animate-wiggle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-28  w-28 text-green-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="flex justify-center mt-4  text-white">
                          <h1 className="inline-block align-baseline">
                            1 x {props.coffee && props.coffee.name}
                            {" - "}
                            {coffeeType.name}
                            {"  "}
                            {coffeeType.ram}
                          </h1>
                        </div>
                        <div className="flex justify-center mt-2  text-white">
                          <h1 className="inline-block align-baseline">
                            {payment.name}
                            {" - "}
                            {props.coffee && props.coffee.price}.00 $
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default OrderModal;
