### Array Methods

- pop() : Removes the last element of the array and return the elements

```ts
let arr: number[] = [1, 2, 3];
console.log(arr.pop()); // 3
console.log(arr); // [1, 2]
```

- push() : Adds new elements to the array and returns the new array length

```ts
let arr: number[] = [1, 2];
console.log(arr.push(3)); // 3 (new length)
console.log(arr); // [1, 2, 3]
```

- sort() : Sorts all the elements of an array

```ts
let arr: number[] = [3, 1, 2];
console.log(arr.sort()); // [1, 2, 3]
```

- concat() : joins two arrays and returns the combined results

```ts
let arr1: number[] = [1, 2];
let arr2: number[] = [3, 4];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
```

- indexOf() : Returns the index of the first match of a value in the array (-1 if not found)

```ts
let arr: number[] = [1, 2, 3, 2];
console.log(arr.indexOf(2)); // 1
```

- copyWithin() : Copies a sequence of elements within the array

```ts
let arr: number[] = [1, 2, 3, 4];
arr.copyWithin(1, 2);
console.log(arr); // [1, 3, 4, 4]
```

- fill() : fills the array with a static value from the provided start index to the end index

```ts
let arr: number[] = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr); // [1, 0, 0, 4]
```

- shift() : Removes and returns the first element of the array

```ts
let arr: number[] = [1, 2, 3];
console.log(arr.shift()); // 1
console.log(arr); // [2, 3]
```

- splice() : adds or removes elements from the array

```ts
let arr: number[] = [1, 2, 3, 4];
arr.splice(1, 2, 5, 6);
console.log(arr); // [1, 5, 6, 4]
```

- unshift() : Adds one or more elements to the beginning of the array

```ts
let arr: number[] = [2, 3];
console.log(arr.unshift(0, 1)); // 4 (new length)
console.log(arr); // [0, 1, 2, 3]
```

- includes() : Checks whether the array contains a certain element

```ts
let arr: number[] = [1, 2, 3];
console.log(arr.includes(2)); // true
```

- join() : joins all elements of the array into a string

```ts
let arr: number[] = [1, 2, 3];
console.log(arr.join("-")); // "1-2-3"
```

- lastIndexOf() : Returns the last index of an element in the array

```ts
let arr: number[] = [1, 2, 3, 2];
console.log(arr.lastIndexOf(2)); // 3
```

- slice() : Extracts a section of the array and returns the new array

```ts
let arr: number[] = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
```

- toString() : Returns a string representation of the array

```ts
let arr: number[] = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

- toLocaleString() : Returns a localized string representing the array

```ts
let arr: number[] = [123456.78, 98765.43];
console.log(arr.toLocaleString("de-DE")); // "123.456,78;98.765,43"
```
