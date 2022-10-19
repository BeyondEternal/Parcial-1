//
// ES5
// to complete
// 
//Example of connection with replit

function Queue() {
  this.dataStore = []
  this.dataSort = []
  this.top = 5

  this.enqueue = function(element) {
    while (element < this.back()) {
      this.dataStore.pop()
      this.dataSort.push()
    }
    let i = 0;
    while (element > this.back() || this.dataStore.length == 0) {
      if (this.dataStore.length == 0 || i == 0) {
        this.dataStore.push(element)

      }
      else {
        this.dataStore.push(this.dataSort[i])
      }
      this.dataSort = []
      i++
    }
    /*if (this.full()) {
      console.log("The queue is full")
    }
    else {
      this.dataStore.push(element)

    }*/
  }

  this.dequeue = function() {
    if (this.empty()) {
      console.log("The queue is empty")
    }
    else {
      return this.dataStore.shift()

    }
  }

  this.front = function() {
    return this.dataStore[0]
  }

  this.back = function() {
    return this.dataStore[this.dataStore.length - 1]
  }

  this.toString = function() {
    let retStr = ""
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n"
    }
    return retStr
  }

  this.empty = function() {
    if (this.dataStore.length == 0)
      return true
    else
      return false

  }

  this.full = function() {
    if (this.dataStore.length == this.top)
      return true
    else
      return false
  }
}


//
// test program
//
let q = new Queue()
q.enqueue(1)
q.enqueue(7)
q.enqueue(5)
q.enqueue(2)
console.log(q.toString())