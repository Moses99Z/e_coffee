import { useState } from "react";
import logo from "../assets/coffee.svg";

function NavBar(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [check, setCheck] = useState(false);

  function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  function logout() {
    props.setIndex(0);
    localStorage.removeItem("user");
    check ? setCheck(false) : setCheck(true);
  }

  return (
    <div>
      <div className=" lg:flex flex-wrap content-center px-5 py-1 font-mono hidden">
        <div className="mr-auto py-3 inline-block align-middle">
          <a
            href="/#"
            className="cursor-default px-4 py-2 mr-8 inline-block align-middle font-dancing text-white text-3xl border border-white rounded-3xl"
          >
            <div className="flex flex-row">
              <img
                alt="logo"
                src={logo}
                className="w-12 h-12 mr-3 animate-wiggle"
              />{" "}
              <p className="pt-2">e-coffee</p>
            </div>
          </a>
          <a
            href="/#"
            onClick={() => props.setIndex(0)}
            className={`cursor-pointer transition duration-200 ease-in-out px-3 py-2 font-medium  ${
              props.index === 0 ? "border-b border-white text-white " : ""
            }     text-white transform  mx-2 `}
          >
            HOME
          </a>
          <a
            href="/#"
            onClick={() => props.setIndex(1)}
            className={`cursor-pointer transition duration-200 ease-in-out px-3 py-2 font-medium  ${
              props.index === 1 ? "border-b border-white text-white" : ""
            }  text-white transform  mx-2 `}
          >
            PRODUCTS
          </a>
          <a
            href="/#"
            onClick={() => props.setIndex(2)}
            className={`cursor-pointer transition duration-200 ease-in-out px-3 py-2 font-medium  ${
              props.index === 2 ? "border-b border-white text-white" : ""
            }  text-white transform  mx-2 `}
          >
            CONTACT US
          </a>
          {getCurrentUser() != null && (
            <a
              href="/#"
              onClick={() => props.setIndex(3)}
              className={`cursor-pointer transition duration-200 ease-in-out px-3 py-2 font-medium  ${
                props.index === 3 ? "border-b border-white text-white" : ""
              }  text-white transform  mx-2 `}
            >
              MY ORDERS
            </a>
          )}
        </div>
        {
          <h1
            className={`text-white ${
              props.connectedError ? "opacity-100" : "opacity-0"
            } rounded-3xl bg-red-700 transform transition duration-500 ease-in-out px-5 py-2 text-sm  font-medium mt-6 mr-5 h-9`}
          >
            Not Connected
          </h1>
        }
        <div className="py-5 flex flex-row">
          {getCurrentUser() == null ? (
            <div>
              <button
                onClick={() => {
                  props.showLogin(true);
                }}
                className=" transition duration-200 ease-in-out px-6 py-2 text-sm  font-medium border border-white  text-white rounded-3xl  transform hover:scale-105 mx-3  inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-8 pr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>LOGIN</span>
              </button>
              <button
                onClick={() => {
                  props.showRegister(true);
                }}
                className="transition duration-200 ease-in-out px-6 py-2 text-sm font-medium  border border-white rounded-3xl  text-white transform hover:scale-105 mx-3 inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-8 pr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>SIGN UP</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 ">
              <a href="/#" className="text-white px-6 py-2 text-center mt-1">
                {getCurrentUser().name}
              </a>
              <button
                onClick={logout}
                className="transition duration-200 ease-in-out px-6  text-sm font-medium  bg-red-700 rounded-3xl  text-white transform hover:scale-105 mr-3 ml-1 inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-8 pr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between lg:hidden bg-red-600 pb-2">
        <a
          href="/#"
          className="mt-0 ml-5 text-white text-4xl font-dancing font-semibold"
        >
          e-commerce
        </a>
        <a href="/#" className="mt-3 mr-5 rounded-full p-0 ">
          {!showDropdown ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setShowDropdown(true)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setShowDropdown(false)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </a>
      </div>
      <div className={`${showDropdown ? " bg-red-600 shadow-lg" : "hidden"} `}>
        <div className="flex flex-col divide-y divide-white pt-0">
          <div></div>
          <div className="p-3 text-center">
            <a
              href="/#"
              onClick={() => {
                props.setIndex(0);
                setShowDropdown(false);
              }}
              className="text-white text-2xl "
            >
              Home
            </a>
          </div>
          <div className="p-3 text-center">
            <a
              href="/#"
              onClick={() => {
                props.setIndex(1);
                setShowDropdown(false);
              }}
              className="text-white text-2xl"
            >
              Products
            </a>
          </div>
          <div className="p-3 text-center">
            <a
              href="/#"
              onClick={() => {
                props.setIndex(2);
                setShowDropdown(false);
              }}
              className="text-white text-2xl"
            >
              Support
            </a>
          </div>
          <div className="p-3 text-center">
            <a
              href="/#"
              onClick={() => {
                props.showLogin(true);
                setShowDropdown(false);
              }}
              className="text-white text-2xl"
            >
              Login
            </a>
          </div>
          <div className="p-3 text-center">
            <a
              href="/#"
              onClick={() => {
                props.showRegister(true);
                setShowDropdown(false);
              }}
              className="text-white text-2xl"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
