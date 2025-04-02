import React from "react";
import CreditCard from "@/app/(protected)/credits/components/credit-card";

const CreditPage = () => {
  return (
    <div>
      <h4 className={"font-semibold text-xl"}>Credits</h4>
      <section>
        <CreditCard />
      </section>
    </div>
  );
};

export default CreditPage;
