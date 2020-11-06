
function repeat(operation, num) {
    if (num <= 0) return
    for(let i = 0;i<num;i++){
        operation()
    }
  }

// 官方答案,采用递归
// function repeat(operation, num) {
//     if (num <= 0) return
//     operation()
//     return repeat(operation, --num)
// }

module.exports = repeat