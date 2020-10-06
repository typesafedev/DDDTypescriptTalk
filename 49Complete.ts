import { Option, some, none } from "fp-ts/Option";
import { String50, String1 } from "./46String50";
import { createEmailAddress } from "./45Constructor";

// The complete code on 1 page
// Is it readable?
// Is it understandable by a non-programmer?

// The ubiquitous language has evolved along with the design.
// Every type is composed from smaller types

type EmailAddress = { tag: "EmailAddress"; value: string };

type UnverifiedEmail = EmailAddress;
type VerifiedEmail = { tag: "VerifiedEmail"; value: EmailAddress };

type VerificationService = (input: { email: UnverifiedEmail; hash: number }) => Option<VerifiedEmail>;

export type EmailContactInfo = UnverifiedEmail | VerifiedEmail;

type PersonalName = {
  firstName: Required<String50>;
  middleInitial: Option<String1>;
  lastName: Required<String50>;
};

type Contact = {
  name: PersonalName;
  email: EmailContactInfo;
};

type CreateUnverifiedEmail = (email: string) => Option<EmailAddress>;
const createUnverifiedEmail: CreateUnverifiedEmail = createEmailAddress;

const createVerifiedEmail: VerificationService = ({email, hash}: { email: EmailAddress; hash: number }) => {
  if (hash === 1234567890) {
    return some({ tag: "VerifiedEmail", value: email });
  }
  return none;
};
