// Since mapper is a higher-order function, it takes an array of mapping rules and
// returns another function that applies these rules to transform input data.
function mapper(mapRules) {
  return function (data) {
    return mapRules.reduce((result, rule) => {
      const [sourceField, targetField, transformFunction] = rule;
      const value = transformFunction
        ? transformFunction(data[sourceField])
        : data[sourceField];
      result[targetField] = value;
      return result;
    }, {});
  };
}

// Example usage:
const testData3 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: { php: 0, js: -1, madness: 10, rage: 10 },
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: { php: 5, js: 7, madness: 3, rage: 2 },
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: { php: 8, js: -2, madness: 1, rage: 4 },
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: { php: 6, js: 6, madness: 5, rage: 2 },
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: { php: 0, js: 10, madness: 10, rage: 1 },
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: { php: 0, js: 0, madness: 0, rage: 10 },
  },
];
// testData3 is an array of objects, each representing a person with attributes like name, email, age, and skills.

const mapRules = [
  ["name", "n", (value) => value.toLowerCase()],
  ["age", "a"],
];

// mapRules is an array of arrays, where each inner array represents a mapping rule.
// Each rule consists of:
//     The source field in the input data.
//     The target field in the output data.
//     (Optional) A transformation function to apply to the source field value.

const mappedData = testData3.map(mapper(mapRules));
console.log(mappedData);

// Since the first rule maps "name" to "n" and applies a transformation function
// (lowercasing the value),
// the name field in each person object is transformed to lowercase and assigned
// to the "n" field in the output object.

// Since the second rule maps "age" to "a" without any transformation function,
// the age field remains unchanged and is assigned to the "a" field in the output object.

// The Result is:

/* 

{n: 'vasya', a: 20}

{n: 'dima', a: 34}

{n: 'colya', a: 46}

{n: 'misha', a: 16}

{n: 'ashan', a: 99}

{n: 'rafshan', a: 11}

*/
