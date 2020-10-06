import { Option } from "fp-ts/Option";

export type PersonalName = {
  firstName: Required<string>;
  middleInitial: Option<string>; 
  lastName: Required<string>;
}

export type Contact = {
  name: PersonalName;

  emailAddress: string;   // Which are linked fields?
  isEmailVerified: boolean;// What is the domain logic? 
};

// Nice, one linked set of props tackled. Still nice and readable
// Next question, is emailAddress just a string?