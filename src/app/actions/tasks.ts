"use server";

const tasks: string[] = [
  "master react",
  "master typescript",
  "master tansctack query",
  "master nextjs",
];

const myTasks = async (): Promise<string[]> => {
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
