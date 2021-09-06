const myLogger = (store) => (next) => (action) => {
  console.log(store);
  console.log(next);
  console.log(action);

  console.log("\tprev:", store.getState());
  const result = next(action);
  console.log("\tnext:", store.getState());
  return result;
};

export default myLogger;
