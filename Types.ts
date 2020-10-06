import { Option, some, none } from "fp-ts/Option";

export type EmailAddress = string;
type PhoneNumber = string;
type CustomerId = number;
type OrderId = number;

export type MkEmailAddress = (s: string) => Option<EmailAddress>;
export const mkEmailAddress: MkEmailAddress = (s: string) => {
  if (s.match(/^\S+@\S+\.\S+$/)) {
    return some(s);
  }
  return none;
};

export type String50 = {
  tag: "String50";
  value: string;
};
export type MkString50 = (s: string) => Option<String50>;
export const mkString50: MkString50 = (s: string) => {
  if (s.length <= 50) {
    return some((s as unknown) as String50);
  }
  return none;
};
