// Since bulkRun is an asynchronous function,
// it can execute multiple functions concurrently and return their results as an array.
async function bulkRun(tasks) {
  const results = [];
  for (const [func, args] of tasks) {
    const result = await new Promise((resolve) => func(...args, resolve));
    results.push(result);
  }
  return results;
}

// Example usage:
const f1 = (cb) => {
  cb(1);
};
// Since f1 takes a callback cb, it executes immediately when called with cb(1).
const f2 = (a, cb) => {
  cb(a);
};
// Since f2 also takes a callback cb, it executes immediately when called with cb(a), where a is 2.
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};
// Since f3 has a setTimeout, it is asynchronous and takes some time to complete.

bulkRun([
  [f1, []],
  // Since no arguments provided, it resolves with 1, which is pushed into the results array.
  [f2, [2]],
  // Since no arguments provided, it resolves with 1, which is pushed into the results array.
  [f3, [3, 4]],
  // Since [3, 4] provided as an argument, it resolves with [3, 4],
  // but after a delay of 1000 milliseconds due to setTimeout.
  // which is pushed into the results array.
]).then(console.log);
// Output: [1, 2, [3, 4]]
