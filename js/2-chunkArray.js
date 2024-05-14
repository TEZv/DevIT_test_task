// The * near the function name indicates that chunkArray is a generator function. 
// Generator functions are a special type of function in JavaScript that can pause 
// and resume their execution, allowing them to generate a sequence of values lazily, one at a time.
function* chunkArray(arr, size) {
    // Yields an array of size `size` at a time from `arr`
    for (let i = 0; i < arr.length; i += size) {
        yield arr.slice(i, i + size);
    }
}

// Example usage:
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// Since chunkArray is a generator function, calling it returns an iterator object.
console.log(iterator.next());  // { value: [1, 2, 3], done: false }
// Since there are more chunks to process -> (done: false).
console.log(iterator.next());  // { value: [4, 5, 6], done: false }
// Since there are more chunks to process -> (done: false).
console.log(iterator.next());  // { value: [7, 8], done: false }
// Since there are more chunks to process -> (done: false).
console.log(iterator.next());  // { value: undefined, done: true }
// Since there are no more chunks to process -> (done: true).
