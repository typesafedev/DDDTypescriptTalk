import { PersonalName } from "./10PersonalName";

export type Person = Readonly<{ Id: number; Name: PersonalName }>;

export const equals = (person: Person) => (otherPerson: Person) => person.Id === otherPerson.Id;

// We make a constructor function called mkPerson.
export const mkPerson = (name: PersonalName) => undefined;
// Implementation
// if input valid return Person
// if input invalid return error
// but what type do we return to signify validation failure?

// All changes must go through same checkpoint
// Great for enforcing invariants in one place on construction!
