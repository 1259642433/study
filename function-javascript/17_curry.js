// Currying
// Exercise 17 of 18

// This is an example implementation of curry3, which curries up to 3 arguments:

//    function curry3(fun){
//      return function(one){
//        return function(two){
//          return function (three){
//            return fun(one, two, three)
//          }
//        }
//      }
//    }

// If we were to use this implementation with this sample function:

//    function abc(one, two, three) {
//      return one/two/three
//    }

// It would work like so:

//    var curryC = curry3(abc)
//    var curryB = curryC(6)
//    var curryA = curryB(3)

//    console.log(curryA(2)) // => 1

// # Task

// In this challenge, we're going to implement a 'curry' function for an arbitrary number of arguments.

// curryN will take two parameters:

//  * fn: The function we want to curry.
//  * n: Optional number of arguments to curry. If not supplied, `curryN` should use the fn's arity as the value for `n`.

// ## Example

//    function add3(one, two, three) {
//      return one + two + three
//    }

//    var curryC = curryN(add3)
//    var curryB = curryC(1)
//    var curryA = curryB(2)
//    console.log(curryA(3)) // => 6
//    console.log(curryA(10)) // => 13

//    console.log(curryN(add3)(1)(2)(3)) // => 6

// ## Conditions

//  * Do not use any for/while loops or `Array.prototype.forEach`.

// ## Hint

//  * You can detect the number of expected arguments to a function (it's arity) by checking a function's .length property.

// ## Boilerplate

//    function curryN(fn, n) {
//      // SOLUTION GOES HERE
//    }

//    module.exports = curryN


function curryN(fn, n) {
    if (!n) n = fn.length
    return function curryR(val) {
        if(n==1) return fn(val)
        return curryN(fn.bind(this,val),n-1)
    }
}

module.exports = curryN

//运行结果
// submission: [
//     'Testing curryN without n:', 'curryA(3) => 6', 'curryA(10) => 13', 'curryN(add3)(1)(2)(3) => 6', '1,2,3,4', 'Testing we can change the inner function to 
//   generate different set of outputs:', '1,6,3,5', 'Testing curryN with n:', "curryN(strConcat, 5)('This')('problem')('has')('been')('solved')) => This problem has been solved"
//   ]
//   solution:   [
//     'Testing curryN without n:', 'curryA(3) => 6', 'curryA(10) => 13', 'curryN(add3)(1)(2)(3) => 6', '1,2,3,4', 'Testing we can change the inner function to 
//   generate different set of outputs:', '1,6,3,5', 'Testing curryN with n:', "curryN(strConcat, 5)('This')('problem')('has')('been')('solved')) => This problem has been solved"
//   ]
  
//   # PASS
  
//   Your solution to Currying passed!
  
//   Here's the official solution in case you want to compare notes:
  
//   ────────────────────────────────────────────────────────────────────────────────
//       function curryN(fn, n) {
//         n = n || fn.length
//         return function curriedN(arg) {
//           if (n <= 1) return fn(arg)
//           return curryN(fn.bind(this, arg), n - 1)
//         }
//       }
  
//       module.exports = curryN
  
  
//   ────────────────────────────────────────────────────────────────────────────────