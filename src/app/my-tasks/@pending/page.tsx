import React from "react";

const PendingPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Error");
  return (
    <div className="size-56 border-2 rounded-lg p-4 bg-green-500">
      PendingPage
    </div>
  );
};

export default PendingPage;
