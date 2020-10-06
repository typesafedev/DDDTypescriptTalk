import { Option, some, none } from "fp-ts/Option";

// Lets tackle optionality

// null is not really a string
// null is the Saruman of static typing

// We'll attempt to avoid having null as a value!

// A better way to represent optional values is to use a dedicated type.
type Nothing = "Nothing";
type SomeDate = [Date];
type OptionalDate = SomeDate | Nothing;

// But then we have to do this for every primitive type. OptionalNumber, OptionalDate, OptionalString, etc

// Better yet, use a library like fp-ts which offers a generic type Option
type OptionDate = Option<Date>;

const impossibleDate = none;
const birthday = some(new Date(2000, 1, 1));
