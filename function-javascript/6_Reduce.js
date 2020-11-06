// Basic: Reduce
// Exercise 6 of 18


// # Task

// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

// ## Example

//    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

//    console.log(countWords(inputWords))

//    // =>
//    // {
//    //   Apple: 2,
//    //   Banana: 1,
//    //   Durian: 3
//    // }

// ## Arguments

//  * inputWords: An array of random Strings.

// ## Conditions

//  * Do not use any for/while loops or Array#forEach.
//  * Do not create any unnecessary functions e.g. helpers.

// ## Resources

//  * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
//  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// ## Boilerplate

//    function countWords(inputWords) {
//      // SOLUTION GOES HERE
//    }

//    module.exports = countWords

module.exports = function countWords(inputWords) {
    return inputWords.reduce((acc,cur)=>{
        if(cur){
            acc[cur] ? acc[cur]++ : (acc[cur] = 1)
        }
        return acc
    },{})
}

//执行结果
// λ functional-javascript verify Reduce.js
// input:      [
//   'eiusmod',       'ea',      'ullamco', 'voluptate',     'nisi',    'nisi', 'fugiat',        'ut',      'ex', 'adipisicing',   'aliquip', 'est', 'id',            'lorem',   'nisi', 'aute',          'aliquip', 'commodo', 'adipisicing',   'aliquip', 'sunt', 'nostrud',       'nulla',   'fugiat', 'ea',            'aliquip', 'sint', 'aute',          'culpa',   'irure', 'amet',          'elit',    'incididunt', 'deserunt',      'nulla',   'officia', 'reprehenderit', 'quis',    'aute'
// ]
// submission: {
//   eiusmod: 1, ea: 2, ullamco: 1, voluptate: 1, nisi: 3, fugiat: 2, ut: 1, ex: 1, adipisicing: 2, aliquip: 4, est: 1, id: 1, lorem: 1, aute: 3, commodo: 1, sunt: 1, nostrud: 1, nulla: 2, sint: 1, culpa: 1, irure: 1, amet: 1, elit: 1, incididunt: 1, deserunt: 1, officia: 1, reprehenderit: 1, quis: 1
// }
// solution:   {
//   eiusmod: 1, ea: 2, ullamco: 1, voluptate: 1, nisi: 3, fugiat: 2, ut: 1, ex: 1, adipisicing: 2, aliquip: 4, est: 1, id: 1, lorem: 1, aute: 3, commodo: 1, sunt: 1, nostrud: 1, nulla: 2, sint: 1, culpa: 1, irure: 1, amet: 1, elit: 1, incididunt: 1, deserunt: 1, officia: 1, reprehenderit: 1, quis: 1
// }

// # PASS

// Your solution to Basic: Reduce passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     function countWords(arr) {
//       return arr.reduce(function(countMap, word) {
//         countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//         return countMap
//       }, {}) // second argument to reduce initialises countMap to {}
//     }

//     module.exports = countWords


// ────────────────────────────────────────────────────────────────────────────────

// You have 12 challenges left.
// Type 'functional-javascript' to show the menu.