function addAndHandle(n1: number, n2: number, cb: (n3: number) => void) {
  const sum = n1 + n2;
  cb(sum);
}

addAndHandle(4, 5, (output) => {
  console.log(output);
});
