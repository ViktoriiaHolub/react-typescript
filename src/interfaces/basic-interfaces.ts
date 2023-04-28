export {};
let personOne: unknown;

interface Person {
  name: string;
  age: number;
}

interface WorkerOne extends Person {
  profession: string;
}

type X = {
  name: string;
  age: number;
};

type Y = X & {
  profession: string;
};

type W = Person & {
  job: string;
};

interface Student extends X {
  class: string;
}
const personTwo: Y = {
  profession: "office manager",
  name: "Tom",
  age: 29,
};

const PersonThree: WorkerOne = {
  profession: "accountant",
  name: "Bob",
  age: 29,
};
