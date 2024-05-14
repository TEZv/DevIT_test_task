function nodeChildCount(node, deep = Infinity) {
  let count = 0;

  function countNodes(node, depth) {
    if (depth === 0 || !node.childNodes.length) {
      return;
    }

    count += node.childNodes.length;

    node.childNodes.forEach((childNode) => {
      countNodes(childNode, depth - 1);
    });
  }

  countNodes(node, deep);
  return count;
}

// Example usage:
const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");
p.appendChild(span);
div.appendChild(p);

console.log(nodeChildCount(p)); // 1 in console
// Since the 'span' element is the only child of the p element, the function should return 1.
console.log(nodeChildCount(div)); // 2 in console
// Since the 'div' element has two child nodes (p and span), the function should return 2.
console.log(nodeChildCount(div, 1)); // 1 in console
// Since only the direct children of the div element (p) are counted, the function should return 1.
console.log(nodeChildCount(div, 2)); // 2 in console
// Since both the div and p elements are counted, the function should return 2.