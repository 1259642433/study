
// # Task

// Use Array#reduce to implement a simple version of Array#map.

// ## Expected Output

// A function map that applies a function to each item in an array and collects the results in a new Array.


//     var nums = [1,2,3,4,5]

//     // `map` is your exported function
//     var output = map(nums, function double(item) {
//       return item * 2
//     })

//     console.log(output) // => [2,4,6,8,10]


// ## Arguments

//   * input: an arbitrary Array of any type.
//   * operation: an arbitrary Function which can be applied to items in `input`.

// ## Hints

//   * No need to implement the optional `thisArg` argument of `Array.prototype.map`, bonus points if you do!

// ## Resources

//   * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// ## Boilerplate


//     module.exports = function arrayMap(arr, fn) {
//       // SOLUTION GOES HERE
//     }

function arrayMap(arr, fn) {
    // SOLUTION GOES HERE
    return arr.reduce((pre,cur)=>{
        pre.push(fn(cur)||cur)
        return pre
    },[])
}

// var nums =  [15, 24, 12, 15, 18, 21, 21,  9, 18, 15,  6,  9, 0, 21]

// let arr = arrayMap(nums,function(item,index,arr,thisArg){
//     return item
// })

// console.log(arr)

module.exports = arrayMap


//执行结果
// λ functional-javascript verify 11_MapWithReduce.js
// [
//   [ 15 ], [ 24 ], [ 12 ],
//   [ 15 ], [ 18 ], [ 21 ],
//   [ 21 ], [ 9 ],  [ 18 ],
//   [ 15 ], [ 6 ],  [ 9 ],
//   [ 0 ],  [ 21 ]
// ] 14
// input:      [
//   4, 7, 5, 6, 8, 3, 2, 2, 6, 0, 2, 0, 4, 8, 6, 7, 1, 2, 1
// ]
// submission: [
//   'non-array entries', [
//     12, 21, 15, 18, 24,  9,  6, 6, 18,  0,  6,  0, 12, 24, 18, 21,  3,  6,  3
//   ], 'array entries', [
//     [ 12 ], [ 21 ], [ 15 ], [ 18 ], [ 24 ], [ 9 ], [ 6 ],  [ 6 ],  [ 18 ], [ 0 ],  [ 6 ],  [ 0 ], [ 12 ], [ 24 ], [ 18 ], [ 21 ], [ 3 ],  [ 6 ], [ 3 ]
//   ]
// ]
// solution:   [
//   'non-array entries', [
//     12, 21, 15, 18, 24,  9,  6, 6, 18,  0,  6,  0, 12, 24, 18, 21,  3,  6,  3
//   ], 'array entries', [
//     [ 12 ], [ 21 ], [ 15 ], [ 18 ], [ 24 ], [ 9 ], [ 6 ],  [ 6 ],  [ 18 ], [ 0 ],  [ 6 ],  [ 0 ], [ 12 ], [ 24 ], [ 18 ], [ 21 ], [ 3 ],  [ 6 ], [ 3 ]
//   ]
// ]

// # PASS

// Your solution to Implement Map with Reduce passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     module.exports = function arrayMap(arr, fn, thisArg) {
//       return arr.reduce(function(acc, item, index, arr) {
//         acc.push(fn.call(thisArg, item, index, arr))
//         return acc
//       }, [])
//     }


// ────────────────────────────────────────────────────────────────────────────────