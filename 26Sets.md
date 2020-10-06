# Think of types as sets. Even functions can have a type

``` typescript

type AddOne = (input: number) => number;            // Think of this type as the contract or interface
const addOne: AddOne = (input: number) => input + 1;// Think of this as the implementation of the contract

```

## 1 -> addOne -> 2   // addOne maps 1 to 2

## 2 -> addOne -> 3

## 3 -> addOne -> 4

___

## { 1, 2, 3 } is the domain

## { 2, 3, 4 } is the range or codomain

___

## But of course programming is not Math ;)

___

## Think of the type AddOne, as a mapping from a set of numbers to a set of numbers

## Some languages can express this even more concisely - F#
