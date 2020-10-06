# Like c#, ts does not supports value equality by default but that is easily sorted in the js world with a library

## Structural equality based on comparing all properties

``` typescript
import deepEqual from "deep-equal";

const alice1 = {name: "Alice May"}
const alice2 = {name: "Alice May"}

assertEquals(deepEqual(alice1, alice2))
```
