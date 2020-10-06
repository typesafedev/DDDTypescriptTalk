type Name = { name: string };
type BirthDate = { date: Date };

type Human = { type: "Human" };

type Giraffe = { type: "Giraffe" };

type Say = { say: () => string };

type Person = Human & Name & BirthDate & Say;

const aPerson: Person = {
  type: "Human",
  name: "A",
  date: new Date(2000, 1, 1),
  say: () => `I am called A`,
};

type MakePerson = (name: string, date: Date) => Person;
const makePerson: MakePerson = (name, date): Person => {
  return {
    type: "Human",
    name: name,
    date: date,
    say: () => `I am called ${name}`,
  };
};

const aPerson1: Person = makePerson("A", new Date(2000, 1, 1));

type Animal = (Human | Giraffe) & Say;

type OkStatus = { status: "OK" };
type ErrorStatus = { status: "Error"; reason: string };

type Status = OkStatus | ErrorStatus;
