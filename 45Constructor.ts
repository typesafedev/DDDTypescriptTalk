import { Option, some, none } from "fp-ts/Option";

// How do we safely create an email? 
// With types, of course. Introducing a constructor type.

export type EmailAddress = { tag: "EmailAddress"; value: string };

type CreateEmailAddress = (s: string) => Option<EmailAddress>;
export const createEmailAddress: CreateEmailAddress = (s: string) => {
  if (s.match(/^\S+@\S+\.\S+$/)) {
    return some({ tag: "EmailAddress", value: s }); // Valid email
  }
  return none; // Email not valid
};

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

// We've tackled creating emailAddress. Still nice and readable
// Let's tackle names must be 50 chars or less

// NOTE: Because typescript is structurally typed 
// I'm not sure how we can enforce that EmailAddress can only be created using createEmailAddress constructor in ts