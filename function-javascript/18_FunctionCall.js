//  Function Call
//  Exercise 18 of 18


// # Task

// Write a function that allows you to use Array.prototype.slice without using slice.call or slice.apply to invoke it.

// Normally you have to use slice with call or apply:

//     var slice = Array.prototype.slice
    
//     function() {
//       var args = slice.call(arguments) // this works
//     }

// We want this to work:

//     var slice = yourFunction

//     function() {
//       var args = slice(arguments) // this works
//     }

// ## Example

// A function, slice that exhibits the following behaviour:

//     var nums = [1,2,3,4,5]

//     // your slice function should match the regular
//     // behaviour of slice, except it takes the array
//     // as the first argument

//     slice(nums, 0, 2) // [1, 2]
//     slice(nums, 1, 2) // [2]

//     // regular slice usage for comparison
//     nums.slice(0, 2) // [1, 2]
//     nums.slice(1, 2) // [2]

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not use the `function` keyword :D

// ## Hints

//   * This is absolutely a one liner.
//   * Every JavaScript Function inherits methods such as call, apply and bind from the object `Function.prototype`.
//   * Function#call executes the value of `this` when it is invoked.  Inside `someFunction.call()`, the value of `this` will be `someFunction`.
//   * Function.call itself is a function thus it inherits from `Function.prototype`

//     function myFunction() {
//       console.log('called my function')
//     }

//     Function.prototype.call.call(myFunction) // => "called my function"

// ## Boilerplate

//     module.exports = // your solution here!

// 题目理解错误
function sliceArr(arr,start,length){
  if((typeof arr) != 'object') return
  let curLength = 0
  return arr.reduce((acc,cur,index)=>{
    console.log(cur)
    if(index>=start&&curLength!=length){
      curLength++
      acc.push(cur)
      return acc
    }
    return acc
  },[])
}

function slice(arr,start,length){
  arr = Array.from(arr)
  var slice = Array.prototype.slice
  var result = arr.slice(start,length)
  return result
}

// 实现失败，使用了Array.from,本质上还是跟题目要求不一致

module.exports = slice

//运行结果
// input:      [ 'esse', 'id', 'anim', 'fugiat', 'in' ]
// submission: [
//   'word:', 'esse', 'slice(word):', [ 'e', 's', 's', 'e' ], 'slice(word, 0, 1):', [ 'e' ], 'slice(word, 2):', [ 's', 'e' ], 'slice(word, -1):', [ 'e' ], 'word:', 'id', 'slice(word):', [ 'i', 'd' ], 'slice(word, 0, 1):', [ 'i' ], 'slice(word, 2):', [], 'slice(word, -1):', [ 'd' ], 'word:', 'anim', 'slice(word):', [ 'a', 'n', 'i', 'm' ], 'slice(word, 0, 1):', [ 'a' ], 'slice(word, 2):', [ 'i', 'm' ], 'slice(word, -1):', [ 'm' ], 'word:', 'fugiat', 'slice(word):', 
// [ 'f', 'u', 'g', 'i', 'a', 't' ], 'slice(word, 0, 1):', [ 'f' ], 'slice(word, 2):', [ 'g', 'i', 'a', 't' ], 'slice(word, -1):', [ 't' ], 'word:', 'in', 'slice(word):', [ 'i', 'n' ], 'slice(word, 0, 1):', [ 'i' ], 'slice(word, 2):', [], 'slice(word, -1):', [ 'n' ]
// ]
// solution:   [
//   'word:', 'esse', 'slice(word):', [ 'e', 's', 's', 'e' ], 'slice(word, 0, 1):', [ 'e' ], 'slice(word, 2):', [ 's', 'e' ], 'slice(word, -1):', [ 'e' ], 'word:', 'id', 'slice(word):', [ 'i', 'd' ], 'slice(word, 0, 1):', [ 'i' ], 'slice(word, 2):', [], 'slice(word, -1):', [ 'd' ], 'word:', 'anim', 'slice(word):', [ 'a', 'n', 'i', 'm' ], 'slice(word, 0, 1):', [ 'a' ], 'slice(word, 2):', [ 'i', 'm' ], 'slice(word, -1):', [ 'm' ], 'word:', 'fugiat', 'slice(word):', 
// [ 'f', 'u', 'g', 'i', 'a', 't' ], 'slice(word, 0, 1):', [ 'f' ], 'slice(word, 2):', [ 'g', 'i', 'a', 't' ], 'slice(word, -1):', [ 't' ], 'word:', 'in', 'slice(word):', [ 'i', 'n' ], 'slice(word, 0, 1):', [ 'i' ], 'slice(word, 2):', [], 'slice(word, -1):', [ 'n' ]
// ]

// # PASS

// Your solution to Function Call passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     // Explained:
//     // The value of `this` in Function.call is the function
//     // that will be executed.
//     //
//     // Bind returns a new function with the value of `this` fixed
//     // to whatever was passed as its first argument.
//     //
//     // Every function 'inherits' from Function.prototype,
//     // thus every function, including call, apply and bind 
//     // have the methods call apply and bind.
//     //
//     // Function.prototype.call === Function.call
//     module.exports = Function.call.bind(Array.prototype.slice)


// ────────────────────────────────────────────────────────────────────────────────