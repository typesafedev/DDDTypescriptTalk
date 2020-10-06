import { Option } from "fp-ts/Option";
import { EmailAddress } from "./45Constructor";
import { PersonalName } from "./46String50";

// Anyone can set isEmailVerified to true.

// Business rules!!
// Rule 1: If email is changed, the flag must be reset to false.
// Rule 2: The flag can only be set by a special verification service.
// In the blue book, the verification service is called an "Anti corruption layer"

// Most modelling problems can be solved by wrapping in a type.
// So let's encode that domain logic in a type.

type UnverifiedEmail = EmailAddress;
type VerifiedEmail = { tag: "VerifiedEmail"; value: EmailAddress };

type VerificationService = (input: { email: UnverifiedEmail; hash: number }) => Option<VerifiedEmail>;

// Note the isEmailVerified props has been replaced and encoded in the sum type below
type EmailContactInfo = UnverifiedEmail | VerifiedEmail;

type Contact = {
  name: PersonalName;
  email: EmailContactInfo;
};

// We've tackled business. Still nice and readable
// Let's see how the complete code looks on 1 page
