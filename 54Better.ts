import { Option } from "fp-ts/Option";
import { PersonalName } from "./43Linked";
import { EmailContactInfo } from "./49Complete";
import { PostalContactInfo } from "./53Three";

// "A contact must have at least one way of being contacted"

type ContactInfo = EmailContactInfo | PostalContactInfo 

type Contact = {
  name: Required<PersonalName>;
  primaryContactInfo: Required<ContactInfo>;
  secondaryContactInfo: Option<ContactInfo>;
};
