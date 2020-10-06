// Bigger types like PaymentMethod and PrintPayment is composed of smaller types
// All executable typescript
// Most importantly, fairly easy for non programmer to understand. DDD and typescript for the win!!!

type Discover = "Discover";
type Visa = "Visa";
type Mastercard = "Mastercard";
type CardNumber = number;
type CardType = Discover | Visa | Mastercard;
type Cash = { tag: "Cash" };
type Cheque = { tag: "Cheque"; checkNumber: number };
type Card = { tag: "Card"; info: [CardType, CardNumber] };
type PaymentMethod = Cash | Cheque | Card;
type PrintPayment = (method: PaymentMethod) => string;

// Again, ts compiler forces you to handle all cases. Exhaustive type checking.
// No need to handle default case like in C# unless strictNullChecks turned off 
// Not handling default case in C# considered a bug waiting to happen
export const printPayment: PrintPayment = (method: PaymentMethod) => {
  switch (method.tag) {
    case "Cash":
      return "Paid in cash";
    case "Cheque":
      return `Paid by cheque: ${method.checkNumber}`;
    case "Card":
      const [cardType, cardNumber] = method.info;
      return `Paid with ${cardType} ${cardNumber}`;
  }
};