# Blog 1: How Generics Build Reusable and Strictly Typed Code in TypeScript

## Introduction

Generics allow to write reusable functions, classes, and components while keeping strong type safety. Without generics it results in to write separate functions for different data types. With generics, one flexible function can be written that works with many types while still preserving the exact type.


## Body with problems without generics

Suppose we want to create a function that returns an array from a value.

```ts
function createStringArray(value: string): string[] {
  return [value];
}

function createNumberArray(value: number): number[] {
  return [value];
}
```

This works, but we are repeating almost the same logic. The only difference is the type.

We could use `any`, but that would remove type safety.

```ts
function createArray(value: any): any[] {
  return [value];
}
```

This is reusable, but not safe. TypeScript cannot properly track the type anymore.


## Body with advantage of generics

Generics solve this problem.

```ts
function createArray<T>(value: T): T[] {
  return [value];
}
```

Here, `T` is a type variable. It works like a placeholder for the actual type.

```ts
const stringArray = createArray("Apple");
const numberArray = createArray(100);
const booleanArray = createArray(true);
```

TypeScript understands:

- `stringArray` is `string[]`
- `numberArray` is `number[]`
- `booleanArray` is `boolean[]`

So, one function works for many types without losing type safety.


Generics are especially useful when working with objects.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  id: 06,
  name: "Lili",
  email: "Lili@nextlevel.com",
};

const userName = getProperty(user, "name");
const userEmail = getProperty(user, "email");
```

Here, `K extends keyof T` means the key must be a valid property of the object.

If we try to access a property that does not exist, TypeScript will show an error.

Generics can also be used with interfaces.

```ts
interface NextLevel<T> {
  success: boolean;
  data: T;
  message: string;
}
```

Now we can use the same response structure for different data types.
This avoids creating separate response types for every data model.


Generics can be used in classes too.

```ts
class DataStore<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

const stringStore = new DataStore<string>();
stringStore.addItem("TypeScript");

const numberStore = new DataStore<number>();
numberStore.addItem(50);
```

The same class works for strings, numbers, objects, or any other type.

Generics help us build reusable code without sacrificing strict typing.

Generics are useful because:

- It reduces duplicate codes.
- Moreover, preserves the exact data types.
- In addition, improves autocomplete and developer experience.
- Also, makes code safer and more scalable
- Therefore, these are useful in functions, interfaces, classes, and React components


