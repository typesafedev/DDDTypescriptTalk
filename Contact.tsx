import { EmailAddress } from "./Types";
import { Option } from "fp-ts/Option";
import { PersonalName } from "./10PersonalName";

// What are the constraints?
// What values are optional?
// Which fields are linked?
// Any domain logic?
// Typescript can help with all these questions

// What is DDD?
// "Focus on the domain and domain logic rather than the technology" -- Eric Evans

// Designing with Typescipt's type system

// Structural equality based on comparing all properties. Therefore must be immutable.
// Value object?
// Entity object?
// Value object by default? no

type Contact2 = {
  // F, M and L names are linked
  FirstName: string; // Not more than 50 chars
  MiddleInitial: string; // Middle name is optional
  LastName: string; // Not more than 50 chars

  // These 2 props linked
  EmailAddress: string;
  IsEmailVerified: boolean; // true if address is verified
};

// Introduction to composable types. Like legos
type typeX = "typeX";
type typeY = "typeY";

// 2 ways to compose or combine types
type typeW = [typeX, typeY]; // Called a tuple or product type
type typeZ = typeX | typeY; // Called a union or sum type

type AddOne = (i: number) => number;
export const addOne: AddOne = (i) => i + 1;

// Representing a pair
type AddPair = (pair: [number, number]) => number;
export const addPair: AddPair = (pair: [number, number]) => pair[0] + pair[1];
export const addPairDeconstruct: AddPair = ([first, second]: [number, number]) => first + second;

type BoolPairOp = (pair: [Boolean, Boolean]) => Boolean;
export const and: BoolPairOp = (pair: [Boolean, Boolean]) => pair[0] && pair[1];
export const or: BoolPairOp = (pair: [Boolean, Boolean]) => pair[0] || pair[1];
