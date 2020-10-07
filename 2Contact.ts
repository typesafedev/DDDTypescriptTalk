// What's right - it uses ubiquitous language which is shared language between technical and non-technical stakeholders
// We try to leave technical implementation terms like factory, builder, etc out of the domain
// Instead we use the language of the domain 
export type Contact = {
  firstName: string;       // Which values are required? firstName must be 50 chars or less.
  middleInitial: string;   // Which values are optional? middleInitial must be 1 char or less. 
  lastName: string;        // What are the constraints?

  emailAddress: string;    // Which are linked fields?
  isEmailVerified: boolean;// What is the domain logic? 
};

// typescript can help with all these questions
// This is real typescript. Demonstrate ts compiler service helping with syntax.