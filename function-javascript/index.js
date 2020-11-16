function timeCountDown (time, delay) {
    const now = new Date().getTime()
    
    console.log((now - (time * 1000)) / 1000)
    var countDown = 900 + delay - (now - (time * 1000)) / 1000
    return countDown || 0
  }
  
console.log(timeCountDown(1605255900000))