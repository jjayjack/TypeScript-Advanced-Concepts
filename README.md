# TypeScript-Advanced-Concepts

## Type Guards

Validates whether or not a method can be used on a type. Allows for a method validation. Working with object use `if in` or `instanceof`. Working with other DataTypes use `typeof` check.

## Type Casting

Feature that allows you to override set limitations on data items.

1. `<HTML Input Element>` Add <> to indicate variable type
2. `as HTMLInputElement`

## Index Properties

Index Types
Within an interface, strings, numbers, or symbols can be used as property name for key value pair value `[prop: number]: string;`. Once key value pair is set within interface, no other datatypes can be used

## Function Overloads

Define function structure BEFORE function
`function add(a: number, b: number):number`
`function add(a:Combinable, b: Combinable){return a + b}`

##Optional Chaining
Helps target nested items in object data and if item before question mark is not available will not cause runtime error based on TS 3+
