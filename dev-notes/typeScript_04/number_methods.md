### Number Methods

- toExponential() : Returns the exponential notation in string format.

```ts
let num: number = 1234.567;
console.log(num.toExponential(2)); // "1.23e+3"
```

- toFixed() : Returns the fixed-point notation in string format.

```ts
let num: number = 12.3456;
console.log(num.toFixed(2)); // "12.35"
```

- toLocaleString() : Converts the number into a local specific representation of the number.

```ts
let num: number = 1234567.89;
console.log(num.toLocaleString("de-DE")); // "1.234.567,89"
```

- toPrecision() : Returns the string representation in exponential or fixed-point to the specified precision.

```ts
let num: number = 12.34567;
console.log(num.toPrecision(4)); // "12.35"
```

- toString() : Returns the string representation of the number in hte specified base

```ts
let num: number = 255;
console.log(num.toString(16)); // "ff"
```

- valueOf() : Returns the primitive value of the number.

```ts
let num: number = 123;
console.log(num.valueOf()); // 123
```
