const testFunction = x => {
  return x * 10;
};

const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const dataFetcher = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  return data;
};
export {testFunction, add, multiply, dataFetcher};
