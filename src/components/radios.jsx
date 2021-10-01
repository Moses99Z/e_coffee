import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Small",
    ram: "30 ml  sugar quantity None",
    cpus: "",
    disk: "",
  },
  {
    name: "Medium",
    ram: "120 ml  sugar quantity 5 g",
    cpus: "",
    disk: "",
  },
  {
    name: "Large",
    ram: "150 ml  sugar quantity 10 g",
    cpus: "",
    disk: "",
  },
];

export default function Example(props) {
  const [selected, setSelected] = useState(plans[0]);

  useEffect(() => {
    props.setCoffeeType(selected);
  });

  return (
    <div className="w-full  py-4">
      <div className="w-full max-w-xl justify-center">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-4">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `
                  ${checked ? "bg-whito text-white" : "bg-verydark"}
                    relative rounded-lg  px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium text-xl   ${
                              checked ? "text-darkblack" : "text-white"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline text-lg ${
                              checked ? "text-darkblack" : "text-gray-400"
                            }`}
                          >
                            <h1>
                              {plan.ram}
                              {plan.cpus}
                            </h1>{" "}
                            <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#014646" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
