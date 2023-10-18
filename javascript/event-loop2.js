// Javascript Priority
// 1. Call Stack
// 2. Microtask
// 3. Tasks

// It doesn't matter the order, this is the javascript's priorities.

for (let i = 0; i < 2; i++) {
    queueMicrotask(() => {
        // Non-blocking operation
        // Web Api
        // Microtask
        console.log('Microtask', i)
    })
} 

for (let i = 0; i < 2; i++) {
    setTimeout(() => {
        // Non-blocking operation
        // Web Api
        // Task
        console.log('Task', i)
    })
}

for (let i = 0; i < 2; i++) {
    // Blocking operation
    // Call Stack
    console.log('Call Stack', i)
}