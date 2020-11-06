// Basic: Every Some
// Exercise 5 of 18


// # Task

// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

// You only need to check that the ids match.

// ## Example

//    var goodUsers = [
//      { id: 1 },
//      { id: 2 },
//      { id: 3 }
//    ]

//    // `checkUsersValid` is the function you'll define
//    var testAllValid = checkUsersValid(goodUsers)

//    testAllValid([
//      { id: 2 },
//      { id: 1 }
//    ])
//    // => true

//    testAllValid([
//      { id: 2 },
//      { id: 4 },
//      { id: 1 }
//    ])
//    // => false

// ## Arguments

//  * goodUsers: a list of valid users

// Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

// ## Conditions

//  * Do not use any for/while loops or Array#forEach.
//  * Do not create any unnecessary functions e.g. helpers.

// ## Resources

//  * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//  * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// ## Boilerplate

//    function checkUsersValid(goodUsers) {
//      return function allUsersValid(submittedUsers) {
//        // SOLUTION GOES HERE
//      };
//    }

//    module.exports = checkUsersValid

module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(users){
        return users.every(userItem=>{
            return goodUsers.some(goodUserItem=>{
                return goodUserItem.id === userItem.id
            })
        })
    }
}

//执行结果
// functional-javascript verify EverySome.js
// submission: 'found 6 good lists!'
// solution:   'found 6 good lists!'

// # PASS

// Your solution to Basic: Every Some passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     module.exports = function checkUsersValid(goodUsers) {
//       return function allUsersValid(submittedUsers) {
//         return submittedUsers.every(function(submittedUser) {
//           return goodUsers.some(function(goodUser) {
//             return goodUser.id === submittedUser.id
//           })
//         })
//       }
//     }


// ────────────────────────────────────────────────────────────────────────────────

// You have 13 challenges left.
// Type 'functional-javascript' to show the menu.