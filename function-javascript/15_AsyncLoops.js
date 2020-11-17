// Async Loops
// Exercise 15 of 18

// This code is broken!

// A Java developer has committed this terrible code to our codebase and didn't test it!

//    function loadUsers(userIds, load, done) {
//      var users = []
//      for (var i = 0; i < userIds.length; i++) {
//        users.push(load(userIds[i]))
//      }
//      return users
//    }

//    module.exports = loadUsers

// # Task

// Fix this code! The callback should be called with all the users loaded.
// The order of the users should match the order of supplied user ids. Because this function is asynchronous, we do not care about its return value.

// ## Arguments

//  * userIds: an Array of numeric user ids.
//  * load: a Function used to load user objects. Expects a numeric id and a callback. The callback will be called with the result of loading the user with the specified id (either a user object or null).
//  * done: a Function that expects an Array of user objects (as retrieved from `load`).

// ## Conditions

//  * Do not use for/while loops (Array#forEach ok).
//  * The order of the results in `done` must be the same as they were specified in `userIds`.
//  * Users should be loaded in parallel i.e. the entire job should not take more than 1 second.
//  * Do not create any unnecessary functions e.g. helpers.

// ## Hint

//  * You don't need to use a sort to maintain ordering.
//  * Using `console.log` will affect verification. Only use `console.log` when using `functional-javascript run`.

// ## Boilerplate

//    function loadUsers(userIds, load, done) {
//      var users = []
//      for (var i = 0; i < userIds.length; i++) {
//        users.push(load(userIds[i]))
//      }
//      return users
//    }

//    module.exports = loadUsers

function loadUsers(userIds, load, done) {
    var completed = 0
    var users = []
    userIds.map((item,index) => {
    load(item,function(user){
        users[index] = user
        if (++completed === userIds.length) return done(users)
    })
});
}

module.exports = loadUsers


// 运行结果
// λ functional-javascript verify 15_AsyncLoops.js
// [
//   { id: 430, name: 'Mollit Duis' },
//   { id: 770, name: 'Ipsum Lorem' },
//   { id: 385, name: 'Voluptate Sunt' },
//   { id: 22, name: 'Eu Non' },
//   { id: 941, name: 'Nostrud Eiusmod' },
//   { id: 340, name: 'Cillum Et' },
//   { id: 338, name: 'Sint Eu' },
//   { id: 534, name: 'Sit Ullamco' },
//   { id: 127, name: 'Magna In' },
//   { id: 746, name: 'Veniam Mollit' }
// ]
// All 10 users loaded!

// # PASS

// Your solution to Async Loops passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     function loadUsers(userIds, load, done) {
//       var completed = 0
//       var users = []
//       userIds.forEach(function(id, index) {
//         load(id, function(user) {
//           users[index] = user
//           if (++completed === userIds.length) return done(users)
//         })
//       })
//     }

//     module.exports = loadUsers


// ────────────────────────────────────────────────────────────────────────────────

// You have 12 challenges left.
// Type 'functional-javascript' to show the menu.