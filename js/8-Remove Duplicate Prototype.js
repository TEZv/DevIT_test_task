// Since the removeDuplicate function is added to the prototype of the String object:
// it extends the functionality of all string instances by allowing them to remove duplicate words.

String.prototype.removeDuplicate = function () {
  return [...new Set(this.split(" "))].join(" ");
  // space (' ') delimiter.
};

// Example usage:
let x =
  "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
console.log(x.removeDuplicate()); // Int32 Double
