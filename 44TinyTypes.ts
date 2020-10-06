import { Option } from "fp-ts/Option";

// emailAddress is not just a string so we make a type just for it.

type EmailAddress = { tag: "EmailAddress"; value: string };

// Refactor out PersonalName as type representing a linked set of props
type PersonalName = {
  firstName: Required<string>;
  middleInitial: Option<string>;
  lastName: Required<string>;
};

type Contact = {
  name: PersonalName;

  emailAddress: EmailAddress;
  isEmailVerified: boolean; // What is the domain logic?
};

// We've tackled emailAddress being a type distinct from string. Still nice and readable
// But how do we create an emailAddress safely
