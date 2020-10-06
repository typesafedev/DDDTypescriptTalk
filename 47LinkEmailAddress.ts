import { EmailAddress } from "./45Constructor";
import { PersonalName } from "./46String50";

// How do we link the 2 email related props? With types, of course

type EmailContactInfo = {
  emailAddress: EmailAddress;
  isEmailVerified: boolean;
}

type Contact = {
  name: PersonalName;

  email: EmailContactInfo;
};

// Nice, we've tackled 2 related email props. Still nice and readable
// Let's tackle the business logic that is isEmailVerified
