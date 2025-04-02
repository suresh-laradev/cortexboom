import React from "react";

const PendingPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Error");
  return (
    <section
      className={
        "p-1.5 rounded-sm flex bg-auto place-items-center place-content-center size-56 border"
      }
    >
      PendingPage
    </section>
  );
};

export default PendingPage;
