# Product

## How to represent a pair of person and date

___

### (Alice, Jan 1st)

### (Bob, Feb 2nd)

### (Eve, Mar 3rd)

``` typescript
type Person = { name: string }

// Written as
type birthdayT = [ Person, date ]

// Or
type birthday = { person: Person, date: date }

const alice = { name: "Alice" };
const bob = { name: "Bob" };
const eve = { name: "Eve" };
const aliceBirthday = [alice, new Date(2000, 1, 12)];
const bobBirthday = [bob, new Date(2000, 2, 2)];
const eveBirthday = [eve, new Date(2000, 3, 3)];
```

### Think of this as the set of People multiplied by set of Dates
