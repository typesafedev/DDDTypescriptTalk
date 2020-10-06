import deepEqual from "deep-equal";

export type Name = { FirstName: string; MiddleName: string; LastName: string };

export type PersonalName = Readonly<Name>;

// Use deepEqual for structural equality
const andy: PersonalName = { FirstName: "A", MiddleName: "C", LastName: "L" };
const abe: PersonalName = { FirstName: "A", MiddleName: "C", LastName: "L" };

console.assert(deepEqual(andy, abe));
// ts compiler enforces immutability and stops us from ourselves. ts for the win!
// andy.FirstName = "B";