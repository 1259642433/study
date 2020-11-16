// Blocking Event Loop
// Exercise 13 of 18


// # Task

// Modify the recursive repeat function provided in the boilerplate, such that it does not block the event loop (i.e. Timers and IO handlers can fire).  This necessarily requires repeat to be asynchronous.

// A timeout is queued to fire after 100 milliseconds, which will print the results of the test and exit the process. repeat should release control of the event loop to allow the timeout to interrupt before all of the operations complete.

// Try to perform as many operations as you can before the timeout fires!

// ## Conditions

//  * Do not use any for/while loops or Array#forEach.
//  * Do not create any unnecessary functions e.g. helpers.

// ## Hints

//  * If your program takes a long time to run, something is probably wrong.Use Control - C to kill the node process.

// ## Resources

//  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers

// ## Boilerplate

//    function repeat(operation, num) {
//      // modify this so it can be interrupted
//      if (num <= 0) return
//      operation()
//      return repeat(operation, --num)
//    }

//    module.exports = repeat


function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return
    operation()
    return setTimeout(()=>{
        repeat(operation, --num)
    })
    // 仅在ie与node实现
    // return setImmediate(repeat,operation, --num)
}

module.exports = repeat

//运行结果

// λ functional-javascript verify 13_EventLoop.js

// function operation() {
//   for (var i = 0; i < 1000000; i++) {
//     // burn some CPU cycles
//   }
//   // count how many times this function was called
//   count++
// }

// Trying to execute the above operation 10000 times, this may crash…

// Press Ctrl+C to kill.

// Performed 10 operations.
// Interrupted after 113 milliseconds.

// Your submission results compared to the expected:

//                  ACTUAL                                 EXPECTED
// ────────────────────────────────────────────────────────────────────────────────

//    "Operations successfully interrupted!" ==    "Operations successfully interrupted!"
//    ""                                  ==    ""

// ────────────────────────────────────────────────────────────────────────────────

// ✓ Submission results match expected

// # PASS

// Your solution to Blocking Event Loop passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     function repeat(operation, num) {
//       if (num <= 0) return

//       operation()

//       // release control every 10 or so
//       // iterations.
//       // 10 is arbitrary.
//       if (num % 10 === 0) {
//         setTimeout(function() {
//           repeat(operation, --num)
//         })
//       } else {
//         repeat(operation, --num)
//       }
//     }

//     module.exports = repeat


// ────────────────────────────────────────────────────────────────────────────────