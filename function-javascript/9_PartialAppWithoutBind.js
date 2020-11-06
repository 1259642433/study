//  Partial Application without Bind
//  Exercise 9 of 18

// Partial application allows you to create new functions from existing functions, while fixing some number of arguments. After setting the arguments to be partially applied, you get a new function ready to take the rest of the arguments and perhaps execute the original function.

// More formally: Partial application refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.

// As an example, say we have a function add, that takes 2 arguments and adds them together:


//     function add(x, y) {
//       return x + y
//     }

//     add(10, 20) // => 30


// Now, pretend we have a function partiallyApply. partiallyApply takes a function, and some arguments to 'partially apply'.

// Here we 'partially apply' the first parameter, x, of our add function:


//     var addTen = partiallyApply(add, 10) // fix `x` to 10


// addTen is a new function that takes the y parameter of add. add has not yet been called!

// Once we pass the argument for y, we can execute the original add function:


//     addTen(20) // => 30
//     addTen(100) // => 110
//     addTen(0) // => 10

//     // etc


// All of the above examples are same as calling add(10, y), where y was supplied in the call to the appropriately named addTen.

// # Task

// Use partial application to create a function that fixes the first argument to console.log.  i.e. Implement a logging function that prepends a namespace string to its output.

// Your implementation should take a namespace String and return a function that prints messages to the console with the namespace prepended.

// You should use Function#apply to implement the partial application.

// Make sure all arguments passed to the returned logging function are printed.

//  Print the output to the console directly

// ## Arguments

//   * namespace: a String to prepend to each message passed to the returned function.

// ## Example


//     var info = logger('INFO:')
//     info('this is an info message')
//     // INFO: this is an info message

//     var warn = logger('WARN:')
//     warn('this is a warning message', 'with more info')
//     // WARN: this is a warning message with more info

// ## Conditions

//   * Do not use Function#bind
//   * Use Function#apply

// ## Boilerplate


//     var slice = Array.prototype.slice

//     function logger(namespace) {
//       // SOLUTION GOES HERE
//     }

//     module.exports = logger


// ## Resources

//   * https://en.wikipedia.org/wiki/Partial_application
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// ## Hints

// Remember console.log takes any number of arguments and prints them, separated by spaces:


//     console.log('hello', 'world') // => 'hello world'
//     console.log(1,2,3) // => 1 2 3


// We simply want to 'partially apply' the first argument to console.log.

// Function.prototype.apply allows us to execute a function, supply a new 'value for this' (we can ignore in this case), and then an array of arguments to apply to the function:


//     add(10, 20) // => 30
//     add.apply(null, [10, 20]) // => 30


// Also contrast apply with Function.prototype.call:


//     add.apply(null, [10, 20]) // => 30
//     add.call(null, 10, 20) // => 30

function logger(namespace) {
    return function (){
        console.log.apply(console,[namespace].concat(Array.from(arguments)))
    }
}

module.exports = logger

// 运行结果
// λ functional-javascript verify 9_PartialApp.js

// Your submission results compared to the expected:

//                  ACTUAL                                 EXPECTED
// ────────────────────────────────────────────────────────────────────────────────

//    "INFO: Deserunt aliqua eu enim ex tempor officia sint." ==    "INFO: Deserunt aliqua eu enim ex tempor officia sint."
//    "WARN: Dolor deserunt ut Lorem nostrud anim ullamco sunt incididunt incididunt aute." ==    "WARN: Dolor deserunt ut Lorem nostrud anim ullamco sunt incididunt incididunt aute."
//    "INFO: Aliqua nulla minim labore commodo eiusmod cillum aliqua magna consequat pariatur." ==    "INFO: Aliqua nulla minim labore commodo eiusmod cillum aliqua magna consequat pariatur."
//    "WARN: Velit consequat anim adipisicing velit nisi elit commodo dolore culpa ad labore sunt." ==    "WARN: Velit consequat anim adipisicing velit nisi elit commodo dolore culpa ad labore sunt."
//    "INFO: Sit cupidatat et aliqua ullamco nisi dolor cupidatat qui sit Lorem in amet elit tempor." ==    "INFO: Sit cupidatat et aliqua ullamco nisi dolor cupidatat qui sit Lorem in amet elit tempor."
//    "WARN: Anim consectetur minim eiusmod ullamco Lorem aute dolor duis quis mollit eu nisi." ==    "WARN: Anim consectetur minim eiusmod ullamco Lorem aute dolor duis quis mollit eu nisi."
//    "INFO: Ad exercitation magna pariatur incididunt esse pariatur reprehenderit magna culpa adipisicing ipsum." ==    "INFO: Ad exercitation magna pariatur incididunt esse pariatur reprehenderit magna culpa adipisicing ipsum."
//    "WARN: Sint ipsum ea ipsum occaecat ad proident ullamco dolore laborum elit incididunt nostrud anim." ==    "WARN: Sint ipsum ea ipsum occaecat ad proident ullamco dolore laborum elit incididunt nostrud anim."
//    "INFO: Sit anim minim deserunt officia sit nisi consectetur aliquip excepteur." ==    "INFO: Sit anim minim deserunt officia sit nisi consectetur aliquip excepteur."
//    "WARN: Quis consequat quis culpa magna cupidatat do do tempor cillum magna magna." ==    "WARN: Quis consequat quis culpa magna cupidatat do do tempor cillum magna magna."
//    ""                                  ==    ""

// ────────────────────────────────────────────────────────────────────────────────

// ✓ Submission results match expected

// # PASS

// Your solution to Partial Application without Bind passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var slice = Array.prototype.slice

//     function logger(namespace) {
//       return function() {
//         console.log.apply(console, [namespace].concat(slice.call(arguments)))
//       }
//     }

//     module.exports = logger


// ────────────────────────────────────────────────────────────────────────────────

// You have 9 challenges left.
// Type 'functional-javascript' to show the menu.