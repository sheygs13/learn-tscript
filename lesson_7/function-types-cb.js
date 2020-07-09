function addAndHandle(n1, n2, cb) {
    var sum = n1 + n2;
    cb(sum);
}
addAndHandle(4, 5, function (output) {
    console.log(output);
});
