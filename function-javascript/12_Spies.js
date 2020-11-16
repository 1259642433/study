//  Function Spies
//  Exercise 12 of 18


// # Task

// Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

// Create a spy that keeps track of how many times a function is called.

// ## Example

//     var spy = Spy(console, 'error')

//     console.error('calling console.error')
//     console.error('calling console.error')
//     console.error('calling console.error')

//     console.log(spy.count) // 3

// ## Arguments

//   * target: an object containing the method `method`
//   * method: a string with the name of the method on `target` to spy on.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any unnecessary functions e.g. helpers.

// ## Hint

//   * Functions have context, input and output. Make sure you consider the context, input to * and output from* the function you are spying on.

// ## Boilerplate

//     function Spy(target, method) {
//       // SOLUTION GOES HERE
//     }

//     module.exports = Spy
    function Spy(target, method) {
      this.count = 0
      this.methodCopy = target[method]
      target[method] = function(){
        this.count++
        methodCopy.apply(target,[...arguments])
      }.bind(this)
      
      return this
    }

    module.exports = Spy

    // 运行结果
//     λ functional-javascript verify 12_Spies.js
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!
// ✗ Check your function's return value!

// # PASS

// Your solution to Function Spies passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     function Spy(target, method) {
//       var originalFunction = target[method]

//       // use an object so we can pass by reference, not value
//       // i.e. we can return result, but update count from this scope
//       var result = {
//         count: 0
//       }

//       // replace method with spy method
//       target[method] = function() {
//         result.count++ // track function was called
//         return originalFunction.apply(this, arguments) // invoke original function
//       }

//       return result
//     }

//     module.exports = Spy


// ────────────────────────────────────────────────────────────────────────────────

// You have 15 challenges left.
// Type 'functional-javascript' to show the menu.