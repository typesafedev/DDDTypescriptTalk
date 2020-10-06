import { Option } from "fp-ts/Option";

export type Contact = {
  firstName: string;      // Which values are required?
  middleInitial: Option<string>; 
  lastName: string;       // What are the constraints?

  emailAddress: string;   // Which are linked fields?
  isEmailVerified: boolean;// What is the domain logic? 
};

// Optionality tackled. Still nice and readable