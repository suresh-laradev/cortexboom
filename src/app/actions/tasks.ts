"use server";

const myTasks = async (): Promise<string[]> => {
  const tasks: string[] = [
    "master react",
    "master typescript",
    "master tansctack query",
    "master nextjs",
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tasks.length > 0) {
        resolve(tasks);
      } else {
        reject("No enough tasks found");
      }
    }, 2000);
  });
};

export { myTasks };
