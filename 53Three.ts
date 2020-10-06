import { PersonalName } from "./43Linked";
import { EmailContactInfo } from "./49Complete";
import { String50 } from "./46String50";

export type PostalContactInfo = { tag: "PostalContactInfo"; line1: String50; line2: String50; city: String50; postcode: String50 };

// Lets make a type to represent those 3 choices
type ContactInfo = EmailContactInfo | PostalContactInfo | [EmailContactInfo, PostalContactInfo];

type Contact = {
  name: PersonalName;
  contact: Required<ContactInfo>;
};

// Done, still quite readable

// BUT, is this really what the business wants?
// Better rule could be: "A contact must have at least one way of being contacted"
