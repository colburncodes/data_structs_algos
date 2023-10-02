// create a function that reverses a string:
// 'Hi My name is Colburn' should be:
// 'nrubloC si eman yM iH'

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "what are we reversing";
  }
  const result = [];
  const length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    result.push(str[i]);
  }
  console.log(result);
  return result.join("");
}

function reverse2(str) {
  const result = str.split("").reverse().join("");
  console.log(result);
  return result;
}

const reverse3 = (str) => str.split("").reverse().join("");

reverse("Hi My name is Colburn");
reverse2("Hi My name is Colburn");
reverse3("Hi My name is Colburn");
