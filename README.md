# JavaScript Block Scope Confusion with `let`

This example demonstrates a common confusion in JavaScript related to block scope when using the `let` keyword.

## The Bug

The code uses nested scopes with `let`. The inner block redeclares `x`, creating a new variable that is only accessible within that block. This leads to the outer `x` value remaining unchanged after the `if` block execution.

## The Solution

The solution emphasizes the difference between `let` and `var` in terms of scope.  Using `var` instead of `let` would lead to a different outcome because `var` doesn't have block scope; it has function scope or global scope.