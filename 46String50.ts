import { Option, some, none } from "fp-ts/Option";
import { EmailAddress } from "./45Constructor";

// How do we express that firstName and lastName must be 50 chars or less? With types, of course

export type String50 = { tag: "String50"; value: string };
type CreateString50 = (s: string) => Option<String50>;
const createString50: CreateString50 = (s: string) => {
  if (s.length <= 50) {
    return some({ tag: "String50", value: s });
  }
  return none; // Invalid, string is greater than 50
};

export type String1 = { tag: "String1"; value: string };
type CreateString1 = (s: string) => Option<String1>;
const createString1: CreateString1 = (s: string) => {
  if (s.length <= 1) {
    return some({ tag: "String1", value: s });
  }
  return none; // Invalid, string is greater than 1
};

export type PersonalName = {
  firstName: Required<String50>;
  middleInitial: Option<String1>;
  lastName: Required<String50>;
};

type Contact = {
  name: PersonalName;

  emailAddress: EmailAddress;
  isEmailVerified: boolean; // What is the domain logic?
};

// We've tackled creating constrained strings. Still nice and readable
// Let's tackle linked emailAddress properties 
