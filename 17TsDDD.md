# Can you tell the Values from the Entities

## Is this a reasonable amount of ts code to write

## More importantly, can a non programmer understand it

### The last question is at the heart of DDD

``` typescript
import deepEqual from "deep-equal";
export type PersonalName = Readonly<{ FirstName: string; MiddleName: string; LastName: string }>;
export const equals = (name: PersonalName) => (otherName: PersonalName) => deepEqual(name, otherName);

export type Person = { readonly Id: number; Name: PersonalName };
export const equals = (person: Person) => (otherPerson: Person) => person.Id === otherPerson.Id;

```
