// Representing choice using |

// Called a tagged or discriminated union
type Temp = { tag: "F"; value: number } | { tag: "C"; value: number };
type IsFever = (temp: Temp) => boolean;
export const isFever: IsFever = (temp: Temp) => {
  switch (temp.tag) {
    case "F":
      return temp.value > 100;
    case "C":
      return temp.value > 39;
  }
};

// Demo exhautive checking by removing a choice ("F") 
// Demo exhautive checking by adding Kelvin in some future requirement! 311K
// Converts business logic to a compile time type error!
// Typescript for the WIN!!!
// NOTE: need in strictNullChecks flag. 
// If working with legacy js/ts, will need to add default return "never" type for exhaustive type checking
