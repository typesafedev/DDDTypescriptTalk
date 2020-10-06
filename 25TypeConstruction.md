# New types in typescript can be constructed in many ways. I'll focus on 3

# I prefer the 'type' keyword as it expresses type-level construction of types 

# No accident its a bit like normal value-level assignment of values

## The first 2 ways are equivalent and common across all languages

## Few languages currently implement sum types

``` typescript

type TypeC = { typeA: TypeA, typeB: TypeA } // Object with properties. Product type
type TypeD = [ TypeA, TypeB ]               // 2 tuple. Also a Product type. Yes, arraylike syntax but it's not an array.

type TypeE = TypeA | TypeB                  // Sum type also called union type
```
