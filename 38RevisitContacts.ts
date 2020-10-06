export type Contact = {
  firstName: string;      // Which values are required?
  middleInitial: string;  // Which values are optional?
  lastName: string;       // What are the constraints?

  emailAddress: string;   // Which are linked fields?
  isEmailVerified: boolean;// What is the domain logic? 
};

// typescript can help with all these questions!!!