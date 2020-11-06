//  Partial Application with Bind
//  Exercise 10 of 18

// # Task

// Use Function#bind to implement a logging function that allows you to namespace messages.

// Your implementation should take a namespace string, and return a function that prints messages to the console with the namespace prepended.

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

//   * Use Function#bind

// ## Boilerplate

// module.exports = function(namespace) {
//     // SOLUTION GOES HERE
// }
module.exports = function(namespace) {
    return function (){
        console.log(Array.from(arguments).reduce((pre,cur)=>{
            return `${pre} ${cur}`
        },namespace))
    }
}

// 运行结果
// λ functional-javascript verify 10_AppWithBind.js

// Your submission results compared to the expected:

//                  ACTUAL                                 EXPECTED
// ────────────────────────────────────────────────────────────────────────────────

//    "INFO: Amet sunt do culpa reprehenderit anim in ex sint est exercitation magna Lorem dolore." ==    "INFO: Amet sunt do culpa reprehenderit anim in ex sint est exercitation magna Lorem dolore."
//    "WARN: Cupidatat voluptate adipisicing aute ullamco ullamco veniam non adipisicing sunt esse ut cupidatat est reprehenderit." ==    "WARN: Cupidatat voluptate adipisicing aute ullamco ullamco veniam non adipisicing sunt esse ut cupidatat est reprehenderit."
//    "INFO: Laboris voluptate magna pariatur sunt exercitation voluptate Lorem elit tempor." ==    "INFO: Laboris voluptate magna pariatur sunt exercitation voluptate Lorem elit tempor."
//    "WARN: Sint sunt ea enim dolore."   ==    "WARN: Sint sunt ea enim dolore."
//    "INFO: Labore excepteur esse qui sit consectetur." ==    "INFO: Labore excepteur esse qui sit consectetur."
//    "WARN: Duis proident consectetur velit duis commodo Lorem." ==    "WARN: Duis proident consectetur velit duis commodo Lorem."
//    "INFO: Quis quis quis deserunt eu tempor consectetur qui." ==    "INFO: Quis quis quis deserunt eu tempor consectetur qui."
//    "WARN: Qui ipsum nulla sunt ut dolore irure." ==    "WARN: Qui ipsum nulla sunt ut dolore irure."
//    "INFO: Cillum nisi mollit anim reprehenderit est dolore esse exercitation mollit mollit fugiat officia tempor." ==
//  "INFO: Cillum nisi mollit anim reprehenderit est dolore esse exercitation mollit mollit fugiat officia tempor."
//    "WARN: Culpa consectetur mollit officia tempor labore pariatur sint eiusmod duis esse minim commodo mollit eu." ==
//  "WARN: Culpa consectetur mollit officia tempor labore pariatur sint eiusmod duis esse minim commodo mollit eu."
//    "INFO: Esse in proident aliqua cupidatat ullamco ipsum incididunt laborum sunt eiusmod in amet voluptate." ==    "INFO: Esse in proident aliqua cupidatat ullamco ipsum incididunt laborum sunt eiusmod in amet voluptate."
//    "WARN: Lorem magna magna quis ad nulla anim non." ==    "WARN: Lorem magna magna quis ad nulla anim non."
//    "INFO: Dolore anim dolor laboris culpa mollit consectetur Lorem laboris amet non ullamco." ==    "INFO: Dolore anim dolor laboris culpa mollit consectetur Lorem laboris amet non ullamco."
//    ""                                  ==    ""

// ────────────────────────────────────────────────────────────────────────────────

// ✓ Submission results match expected

// # PASS

// Your solution to Partial Application with Bind passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     module.exports = function(namespace) {
//       return console.log.bind(console, namespace)
//     }


// ────────────────────────────────────────────────────────────────────────────────

// You have 8 challenges left.
// Type 'functional-javascript' to show the menu.