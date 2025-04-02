import { Coins } from "lucide-react";
import React from "react";

const CreditCard = () => {
  return (
    <div className={"p-4 bg-lime-500 rounded-md text-gray-950"}>
      <Coins className={"h-8 w-8"} /> <span>1000</span>
    </div>
  );
};

export default CreditCard;
