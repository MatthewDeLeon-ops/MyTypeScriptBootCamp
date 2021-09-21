let userInputs: unknown;
let userNames: string;

userInputs = 5;
userInputs = "Maxine";

if (typeof userInputs === "string") {
  userNames = userInputs;
}

function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
  //   while (true) {}
}

const result = generateError("An error occurred", 504);

console.log(result);
