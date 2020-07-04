// implicit return type
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(n: number) {
  console.log("Number: ", n);
}

printResult(add(12, 13));
