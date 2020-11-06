function doubleAll(numbers) {
    var result = []
    numbers.map(item=>{
        result.push(item * 2)
    })
    return result
  }

  module.exports = doubleAll


// 官方解答
//   module.exports = function doubleAll(numbers) {
//     return numbers.map(function double(num) {
//       return num * 2
//     })
//   }