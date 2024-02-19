import React from "react";
import Buttonlink from "./Buttonlink";

interface Feature {
  Id: number;
  description: string;
}
interface MyComponentProps {
  plan: string;
  amount: string;
  features: Feature[];
  href: string;
}
function PricingCard({ plan, amount, features, href }: MyComponentProps) {
  return (
    <div className="w-1/2 mx-2 bg-gray-100 py-3 px-3 rounded-md flex flex-col ">
      <div className="rounded-md text-black px-2 py-2 border border-orange-100 bg-orange-50 text-center">
        <p>{plan}</p>
      </div>
      <div className="rounded-md py-2 text-center ">
        <span>
          <p className="inline text-2xl text-black font-bold ">{amount}</p>
          <p className="inline text-gray-500">/month</p>
        </span>
      </div>
      <div className="rounded-md bg-white flex flex-col">
        <div className="text-black text-xl text-center font-bold">
          <h2>Available features</h2>
        </div>
        <div className="flex flex-col">
          {features.map((feature) => (
            <div
              key={feature.Id}
              className="border border-gray-200 p-1 my-2 mx-2 rounded-md"
            >
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6" style={{ display: "contents" }}>
          <Buttonlink
            href={href}
            className="rounded-0 mt-5"
            title={"Get Started"}
          />
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
