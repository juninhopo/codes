console.log(1);
// Blocking operation
// Executed in Call Stack

queueMicrotask(() => {
  // Non-blocking operation 
  // Web Api
  // Microtask
  console.log(2);
});

setTimeout(() => {
  // Non-blocking operation 
  // Web Api
  // Task
  console.log(3);
});

console.log(4);
  // Blocking operation 
  // Call Stack

Promise.resolve(true).then(() => {
  // Non-blocking operation 
  // Web Api
  // Microtask
  console.log(5);
});

// Script Output
// 1 -> 4 -> 2 -> 5 -> 3

// Javascript Priority
// 1. Call Stack
// 2. Microtask
// 3. Tasks