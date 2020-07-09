function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n: number) {
  console.log("Number: ", n);
}

printResult(add(12, 13));

// variable structure

let combine: (a: number, b: number) => number;
combine = add;

console.log(combine(6, 3));
