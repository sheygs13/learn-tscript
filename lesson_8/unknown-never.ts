// unknown
let userInput: unknown;
let username: string;

userInput = "Max";
if (typeof userInput === "string") {
  username = userInput;
}

// never
function generateError(message: string, statusCode: number): never {
  throw { message, statusCode };
}

generateError("Uncaught TypeError", 500);
