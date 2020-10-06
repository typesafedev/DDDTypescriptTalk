import { Option } from "fp-ts/Option";
import { PersonalName } from "./43Linked";
import { EmailContactInfo } from "./49Complete";

// New rule: A contact must have an email or postal address

type PostalContactInfo = "PostalContactInfo"

type Contact = {
  name: PersonalName;
  email: Option<EmailContactInfo>;
  address: Option<PostalContactInfo>;
};

// BUT, this does not meet the new requirment either. Fails on both email and address can be none.

// Make illegal states unrepresentable! Yaron Minksy
// Basically means enforcing invariants in the code we write using types.
