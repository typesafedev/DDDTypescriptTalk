import { Option } from "fp-ts/Option";

export type Contact = {
  firstName: Required<string>;
  middleInitial: Option<string>; 
  lastName: Required<string>;       // What are the constraints?

  emailAddress: string;   // Which are linked fields?
  isEmailVerified: boolean;// What is the domain logic? 
};

// Requiredness tackled. Still nice and readable