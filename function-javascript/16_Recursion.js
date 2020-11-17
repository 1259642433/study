// Recursion
// Exercise 16 of 18


// # Task

// Implement a recursive function that returns all of the unique dependencies, and sub-dependencies of a module, sorted alphabetically. Dependencies should be printed as dependency@version e.g. []()'.

// Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.

// ## Arguments:

//  * tree: A dependency tree. See below for an example of the structure.

// ## Example

//    var loremIpsum = {
//      "name": "lorem-ipsum",
//      "version": "0.1.1",
//      "dependencies": {
//        "optimist": {
//          "version": "0.3.7",
//          "dependencies": {
//            "wordwrap": {
//              "version": "0.0.2"
//            }
//          }
//        },
//        "inflection": {
//          "version": "1.2.6"
//        }
//      }
//    }

//    getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]


// ## Conditions:

//  * Do not use any for/while loops.

// ## Boilerplate


//    function getDependencies(tree) {
//      // SOLUTION GOES HERE
//      // Note: Feel free to add additional arguments
//      // to this function for use with recursive calls.
//      // Or not! There are many ways to recurse.
//    }

//    module.exports = getDependencies


// ## Resources

//  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

function getDependencies(tree,result=[]) {
    if (tree && tree.dependencies) {
        Object.keys(tree.dependencies).map(key => {
            let data = `${key}@${tree.dependencies[key].version}`
            if(result.indexOf(data)==-1) result.push(data)
            if (tree.dependencies[key].dependencies) {
                getDependencies(tree.dependencies[key],result)
            }
        })
    }
    return result.sort()
}

module.exports = getDependencies

//运行结果
// [
//     'bl@0.4.1',
//     'charm@0.1.2',
//     'colors-tmpl@0.1.0',
//     'colors@0.6.2',
//     'inflection@1.2.6',
//     'inherits@2.0.1',
//     'lorem-ipsum@0.1.1',
//     'map-async@0.1.1',
//     'minimist@0.0.4',
//     'mkdirp@0.3.5',
//     'object-keys@0.4.0',
//     'optimist@0.3.7',
//     'optimist@0.6.0',
//     'pygmentize-bundled@2.1.0',
//     'readable-stream@1.0.17',
//     'resumer@0.0.0',
//     'split@0.2.10',
//     'terminal-menu@0.1.0',
//     'through2@0.2.1',
//     'through@2.3.4',
//     'tuple-stream@0.0.2',
//     'wordwrap@0.0.2',
//     'workshopper@0.3.3',
//     'xtend@2.1.1'
//   ]
//   submission: [
//     'getDependencies(dependencyTree1)', [ 'object-keys@0.4.0' ], 'getDependencies(dependencyTree2)', [ 'colors@0.6.2' ], 'getDependencies(dependencyTree3)', [ 'charm@0.1.2', 'inherits@2.0.1', 'resumer@0.0.0' ], 'getDependencies(dependencyTree4)', [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ], 'getDependencies(fullTree)', [
//       'bl@0.4.1', 'charm@0.1.2', 'colors-tmpl@0.1.0', 'colors@0.6.2', 'inflection@1.2.6', 'inherits@2.0.1', 'lorem-ipsum@0.1.1', 'map-async@0.1.1', 'minimist@0.0.4', 'mkdirp@0.3.5', 'object-keys@0.4.0', 'optimist@0.3.7', 'optimist@0.6.0', 'pygmentize-bundled@2.1.0', 'readable-stream@1.0.17', 'resumer@0.0.0', 'split@0.2.10', 'terminal-menu@0.1.0', 'through2@0.2.1', 'through@2.3.4', 'tuple-stream@0.0.2', 'wordwrap@0.0.2', 'workshopper@0.3.3', 'xtend@2.1.1'
//     ]
//   ]
//   solution:   [
//     'getDependencies(dependencyTree1)', [ 'object-keys@0.4.0' ], 'getDependencies(dependencyTree2)', [ 'colors@0.6.2' ], 'getDependencies(dependencyTree3)', [ 'charm@0.1.2', 'inherits@2.0.1', 'resumer@0.0.0' ], 'getDependencies(dependencyTree4)', [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ], 'getDependencies(fullTree)', [
//       'bl@0.4.1', 'charm@0.1.2', 'colors-tmpl@0.1.0', 'colors@0.6.2', 'inflection@1.2.6', 'inherits@2.0.1', 'lorem-ipsum@0.1.1', 'map-async@0.1.1', 'minimist@0.0.4', 'mkdirp@0.3.5', 'object-keys@0.4.0', 'optimist@0.3.7', 'optimist@0.6.0', 'pygmentize-bundled@2.1.0', 'readable-stream@1.0.17', 'resumer@0.0.0', 'split@0.2.10', 'terminal-menu@0.1.0', 'through2@0.2.1', 'through@2.3.4', 'tuple-stream@0.0.2', 'wordwrap@0.0.2', 'workshopper@0.3.3', 'xtend@2.1.1'
//     ]
//   ]
  
//   # PASS
  
//   Your solution to Recursion passed!
  
//   Here's the official solution in case you want to compare notes:
  
//   ────────────────────────────────────────────────────────────────────────────────
//       function getDependencies(mod, result) {
//         result = result || []
//         var dependencies = mod && mod.dependencies || []
//         Object.keys(dependencies).forEach(function(dep) {
//           var key = dep + '@' + mod.dependencies[dep].version
//           if (result.indexOf(key) === -1) result.push(key)
//           getDependencies(mod.dependencies[dep], result)
//         })
//         return result.sort()
//       }
  
//       module.exports = getDependencies
  
  
//   ────────────────────────────────────────────────────────────────────────────────