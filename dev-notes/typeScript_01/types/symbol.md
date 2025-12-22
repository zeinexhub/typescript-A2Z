### Symbol

- Creates unique identifiers. Useful for creating unique property keys and constants.

```ts
const uniqueKey: symbol = Symbol("description");
const obj = {
  [uniqueKey]: "This is a unique property",
};
console.log(obj[uniqueKey]); // "This is a unique property"
```
