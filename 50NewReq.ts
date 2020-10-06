import { PersonalName } from "./43Linked";
import { EmailContactInfo } from "./49Complete";

// New rule: A contact must have an email or postal address

type PostalContactInfo = "PostalContactInfo"

type Contact = {
  name: PersonalName;
  email: Required<EmailContactInfo>;
  address: Required<PostalContactInfo>; // New!
};

// BUT, this does not meet the new requirment. Type says email *And* postal both required. 
// Fails on the *Or* requirement
