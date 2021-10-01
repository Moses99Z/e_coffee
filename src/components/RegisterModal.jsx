import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";

function RegisterModal(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [typing, setTyping] = useState(true);
  const [loading, setLoading] = useState(false);

  function register() {
    setLoading(true);
    axios
      .post(process.env.REACT_APP_API_URL + "api/user/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setTyping(true);
        setName("");
        setEmail("");
        setPassword("");
        props.setShow(false);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setTyping(false);
        setErrorMessage(
          err.response.data
            .replace('"name"', "Name")
            .replace('"email"', "Email")
            .replace('"password"', "Password")
        );
      });
  }

  return (
    <Transition appear show={props.show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => props.setShow(false)}
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
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
            <div className="rounded-2xl inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-darker  shadow-xl ">
              {!loading ? (
                <div>
                  <Dialog.Title
                    as="a"
                    className="text-xl font-medium leading-3 text-white"
                  >
                    Sign up
                  </Dialog.Title>
                  <div className="mt-4">
                    <input
                      class="w-full py-2 px-3 bg-verydark border border-verydark focus:outline-none rounded-md text-white focus:border-darkblack focus:ring-2 focus:ring-darkblack"
                      placeholder="Full Name"
                      onChange={(e) => {
                        setName(e.target.value);
                        setTyping(true);
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      class="w-full py-2 px-3 bg-verydark border border-verydark focus:outline-none rounded-md text-white focus:border-darkblack focus:ring-2 focus:ring-darkblack"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setTyping(true);
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      class="w-full py-2 px-3 bg-verydark border border-verydark focus:outline-none rounded-md text-white focus:border-darkblack focus:ring-2 focus:ring-darkblack"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setTyping(true);
                      }}
                    />
                  </div>
                  {!typing ? (
                    <div className="animation duration-200 ease-in-out bg-red-800 mt-4 py-2 px-3 rounded ">
                      <p className="text-white">{errorMessage}</p>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <div className="mt-5">
                    <button
                      type="button"
                      className="mr-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-verydark shadow-lg border border-transparent rounded-md hover:bg-darkblack focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={register}
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white  border border-white rounded-md hover:bg-darkblack focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => props.setShow(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div class="flex items-center justify-center py-14">
                  <div class="w-16 h-16 border-l-2 border-white rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default RegisterModal;
