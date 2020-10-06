import { Option } from "fp-ts/Option";
import { String50 } from "./Types";
// Required vs Optional

type Name = Readonly<{
  FirstName: string; // required
  MiddleName: string; // optional
  LastName: string; // required
}>;

// How do we represent optional values?
// Not null, it is not the same as optional
// Is null really a string?
// null is the Saruman of static typing
// null is not allowed as a value

// Better way of representing null
type None = "None";
type Some<T> = [T];
type OptionalString1 = None | Some<string>;

// Or better yet use fp-ts
type OptionalString = Option<string>;

type Name1 = Readonly<{
  FirstName: string; // required
  MiddleName: Option<string>;
  LastName: string; // required
}>;

// Next we tackle constrained values. 
// FirstName and LastName is required but constrained to 50 Chars or less
export type PersonalName = Readonly<{
  FirstName: String50;
  MiddleName: Option<string>;
  LastName: String50;
}>;
